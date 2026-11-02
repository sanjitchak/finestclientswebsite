/* Shared navigation and motion preference. The approved original-film engine is unchanged. */
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
  function setMotion(next, persist = false) {
    enabled = next && !reduced.matches;
    root.dataset.motion = enabled ? 'on' : 'off';
    motionButton.setAttribute('aria-pressed', String(!enabled));
    motionButton.setAttribute('aria-label', reduced.matches ? 'Decorative motion disabled by your system preference' : enabled ? 'Pause decorative motion' : 'Enable decorative motion');
    motionButton.querySelector('use').setAttribute('href', enabled ? '#i-pause' : '#i-play');
    motionButton.disabled = reduced.matches;
    if (persist) { preference = enabled ? 'on' : 'off'; try { localStorage.setItem('finest-founder-motion', preference); } catch (_) {} }
    schedule();
  }
  let frame = 0;
  const timeline = document.querySelector('.f-timeline');
  const clamp = v => Math.max(0, Math.min(1,v));
  function paint() {
    frame = 0;
    if (document.hidden) return;
    root.style.setProperty('--reading',clamp(scrollY / Math.max(1,root.scrollHeight-innerHeight)).toFixed(4));
    const rect = timeline.getBoundingClientRect();
    timeline.style.setProperty('--phase-progress', enabled ? clamp((innerHeight*.7-rect.top)/rect.height).toFixed(4) : '1');
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(paint); }
  motionButton.hidden = false; setMotion(enabled);
  motionButton.addEventListener('click', () => setMotion(!enabled, true));
  reduced.addEventListener('change', () => setMotion(!reduced.matches && preference !== 'off', true));
  addEventListener('scroll',schedule,{passive:true}); addEventListener('resize',schedule,{passive:true}); addEventListener('pageshow',schedule);
  document.addEventListener('visibilitychange', () => { root.classList.toggle('motion-idle',document.hidden); if (document.hidden) {cancelAnimationFrame(frame);frame=0;} else schedule(); });
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(document.body);
  document.fonts?.ready.then(schedule);
  document.getElementById('year').textContent=new Date().getFullYear();
})();
