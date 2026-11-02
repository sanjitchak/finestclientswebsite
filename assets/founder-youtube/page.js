/* Shared navigation + below-film motion. Original film engine/geometry are intentionally untouched. */
(() => {
  'use strict';
  const root = document.documentElement;
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('mobile-nav');
  const motionButton = document.querySelector('.motion-toggle');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let preference = null;
  try { preference = localStorage.getItem('finest-founder-motion'); } catch (_) {}
  let enabled = !reduced.matches && preference !== 'off';
  const setMenu = (open, restoreFocus = false) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.classList.toggle('is-open', open); nav.hidden = !open;
    if (restoreFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !nav.hidden) setMenu(false, true); });
  matchMedia('(max-width:650px)').addEventListener('change', e => { if (!e.matches) setMenu(false); });
  const content = document.querySelector('.funnel-content');
  const runningReveals = new Set();
  const disclosures = new Map();
  function finishDisclosure(details, open) {
    const current = disclosures.get(details);
    disclosures.delete(details); current?.animation.cancel();
    details.open = open; details.style.removeProperty('height');
  }
  function settleContentMotion() {
    runningReveals.forEach(animation => animation.cancel()); runningReveals.clear();
    disclosures.forEach((state, details) => finishDisclosure(details, state.open));
  }
  let motionChange = 0;
  function setMotion(next, persist = false) {
    const work=document.getElementById('work'),before=work.getBoundingClientRect().top;
    const preserveReading=scrollY>0 && before<innerHeight,change=++motionChange;
    const focusBefore=document.activeElement;
    enabled = next && !reduced.matches;
    root.dataset.motion = enabled ? 'on' : 'off';
    motionButton.setAttribute('aria-pressed', String(!enabled));
    motionButton.setAttribute('aria-label', reduced.matches ? 'Decorative motion disabled by your system preference' : enabled ? 'Pause decorative motion' : 'Enable decorative motion');
    motionButton.querySelector('use').setAttribute('href', enabled ? '#i-pause' : '#i-play');
    motionButton.disabled = reduced.matches;
    if (persist) { preference = enabled ? 'on' : 'off'; try { localStorage.setItem('finest-founder-motion', preference); } catch (_) {} }
    if (!enabled) settleContentMotion();
    // The film changes between a static poster and its reserved scroll track.
    // Preserve the reader's content position after that synchronous mode update.
    if (preserveReading) queueMicrotask(()=>{
      if(change!==motionChange)return;
      const delta=work.getBoundingClientRect().top-before;
      if(Math.abs(delta)>.5)scrollBy({top:delta,behavior:'instant'});
      requestAnimationFrame(()=>{
        if(change===motionChange && focusBefore===motionButton && document.activeElement?.classList.contains('cinema-sound')) motionButton.focus({preventScroll:true});
      });
    });
    schedule();
  }
  let frame = 0;
  const timeline = document.querySelector('.f-timeline');
  const phases = [...timeline.querySelectorAll('.f-phase')];
  const stackCards = [...content.querySelectorAll('.f-stack-card')];
  const stackWrappers = [...content.querySelectorAll('.f-stack-wrap')];
  const stackDesktop = matchMedia('(min-width:768px) and (min-height:721px)');
  const clamp = v => Math.max(0, Math.min(1,v));
  function paint() {
    frame = 0;
    if (document.hidden) return;
    root.style.setProperty('--reading',clamp(scrollY / Math.max(1,root.scrollHeight-innerHeight)).toFixed(4));
    const rect = timeline.getBoundingClientRect();
    timeline.style.setProperty('--phase-progress', enabled ? clamp((innerHeight*.7-rect.top)/rect.height).toFixed(4) : '1');
    phases.forEach(phase => phase.classList.toggle('is-current', !enabled || phase.getBoundingClientRect().top < innerHeight*.68));
    // The original portfolio's stacked-card depth, confined to the work showcase.
    stackCards.forEach((card,index) => {
      const next=stackWrappers[index+1];
      const depth=enabled && stackDesktop.matches && next ? clamp((innerHeight*.8-next.getBoundingClientRect().top)/Math.max(1,innerHeight*.8-122)) : 0;
      card.style.setProperty('--stack-scale',(1-depth*.035).toFixed(4));
    });
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(paint); }
  motionButton.hidden = false; setMotion(enabled);
  motionButton.addEventListener('click', () => setMotion(!enabled, true));
  reduced.addEventListener('change', () => setMotion(!reduced.matches && preference !== 'off', true));
  addEventListener('scroll',schedule,{passive:true}); addEventListener('resize',schedule,{passive:true}); addEventListener('pageshow',schedule);
  document.addEventListener('visibilitychange', () => { root.classList.toggle('motion-idle',document.hidden); if (document.hidden) {cancelAnimationFrame(frame);frame=0;settleContentMotion();} else schedule(); });
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(document.body);
  document.fonts?.ready.then(schedule);

  // Reveal from the already-visible default state; a failed script never hides content.
  if ('IntersectionObserver' in window && Element.prototype.animate) {
    const groups = [
      ['.f-offer > .f-container > *', 55],
      ['.f-heading', 0], ['.f-results > *', 75], ['.f-feedback > *', 75],
      ['.f-fit-grid > *', 75], ['.f-phase-card', 0], ['.f-service-grid > *', 65],
      ['.f-founder-layout > *', 80], ['.f-faq-list > details', 40],
      ['.f-close > .f-container > *', 55], ['.f-footer-grid > *', 55]
    ];
    const delays = new WeakMap();
    const observer = new IntersectionObserver(entries => {
      entries.filter(entry => entry.isIntersecting).forEach(({target}) => {
        observer.unobserve(target);
        if (!enabled || document.hidden || target.contains(document.activeElement)) return;
        const delay = Math.min(delays.get(target)||0, innerWidth<768?90:180);
        const animation=target.animate([
          {opacity:.18,transform:'translate3d(0,18px,0)'},
          {opacity:1,transform:'translate3d(0,0,0)'}
        ],{duration:650,delay,easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'});
        runningReveals.add(animation);
        const clear=()=>runningReveals.delete(animation);
        animation.addEventListener('finish',clear,{once:true});
        animation.addEventListener('cancel',clear,{once:true});
      });
    },{threshold:.08,rootMargin:'0px 0px -24px 0px'});
    groups.forEach(([selector,step]) => content.querySelectorAll(selector).forEach((element,index) => {delays.set(element,(index%3)*step);observer.observe(element);}));
    // Focus/anchor interaction should never wait for decorative entry animation.
    content.addEventListener('focusin', settleContentMotion);
    addEventListener('hashchange', settleContentMotion);
  }
  // Native <details> semantics, enhanced only for supported, motion-enabled clicks.
  content.querySelectorAll('.f-faq-list details').forEach(details => {
    const summary=details.querySelector('summary');
    summary.addEventListener('click',event => {
      if (!enabled || !Element.prototype.animate) return;
      event.preventDefault();
      const current=disclosures.get(details),open=current?!current.open:!details.open;
      const start=details.getBoundingClientRect().height;
      current?.animation.cancel(); disclosures.delete(details);
      details.style.removeProperty('height'); details.open=true;
      const end=open?details.getBoundingClientRect().height:summary.getBoundingClientRect().height+2;
      details.style.height=start+'px';
      const animation=details.animate([{height:start+'px'},{height:end+'px'}],{duration:300,easing:'cubic-bezier(.22,1,.36,1)'});
      disclosures.set(details,{animation,open});
      animation.onfinish=()=>{if(disclosures.get(details)?.animation===animation) finishDisclosure(details,open);};
    });
  });
  addEventListener('resize',()=>disclosures.forEach((state,details)=>finishDisclosure(details,state.open)),{passive:true});

  document.getElementById('year').textContent=new Date().getFullYear();
})();
