(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('mobile-nav');
  const setMenu = (open, restoreFocus = false) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.lastElementChild.textContent = open ? '−' : '＋';
    nav.hidden = !open;
    if (restoreFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !nav.hidden) setMenu(false, true);
  });
  const mobile = window.matchMedia('(max-width: 650px)');
  mobile.addEventListener('change', event => { if (!event.matches) setMenu(false); });
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const activate = (tab, focus = false) => {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); activate(tabs[next], true); }
    });
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();

/* Native-scroll chapter storytelling adapted from the portfolio's progress architecture.
   All essential copy/links are HTML; animation is a dependency-free enhancement. */
(() => {
  'use strict';
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const desktopStory = matchMedia('(min-width: 851px) and (min-height: 620px)');
  const motionButton = document.querySelector('.motion-toggle');
  const hero = document.querySelector('.hero');
  const reel = document.querySelector('.story-reel');
  const chapterButtons = [...document.querySelectorAll('[data-chapter]')];
  const chapterCopies = [...document.querySelectorAll('.story-copy')];
  const positions = [0, .36, .67, 1];
  const clamp = value => Math.max(0, Math.min(1, value));
  let preference = null;
  try { preference = localStorage.getItem('finest-founder-motion'); } catch (_) { /* Storage is optional. */ }
  let enabled = !reduced.matches && preference !== 'off';
  let frame = 0;
  let documentRange = 1;
  let activeChapter = -1;
  let lastStoryProgress = 0;
  let headerHeight = 96;
  const isPinned = () => enabled && desktopStory.matches;

  function renderChapter(progress, forcedChapter) {
    const p = clamp(progress);
    lastStoryProgress = p;
    reel.style.setProperty('--story-p', p.toFixed(4));
    reel.style.setProperty('--phase-one', clamp((p - .12) / .21).toFixed(4));
    reel.style.setProperty('--phase-two', clamp((p - .42) / .21).toFixed(4));
    reel.style.setProperty('--phase-three', clamp((p - .72) / .24).toFixed(4));
    const chapter = forcedChapter ?? (p < .24 ? 0 : p < .53 ? 1 : p < .84 ? 2 : 3);
    if (chapter !== activeChapter) {
      activeChapter = chapter;
      chapterCopies.forEach((copy, index) => {
        copy.classList.toggle('is-active', index === chapter);
        copy.setAttribute('aria-hidden', String(index !== chapter));
      });
      chapterButtons.forEach((button, index) => button.setAttribute('aria-pressed', String(index === chapter)));
      reel.querySelector('.story-count > span').textContent = String(chapter + 1).padStart(2, '0');
      reel.dataset.chapter = String(chapter + 1);
    }
  }

  function paint() {
    frame = 0;
    if (document.hidden) return;
    root.style.setProperty('--read-progress', clamp(scrollY / documentRange).toFixed(4));
    if (enabled) {
      const bounds = hero.getBoundingClientRect();
      if (bounds.bottom > 0) hero.style.setProperty('--hero-drift', clamp(-bounds.top / bounds.height).toFixed(4));
    }
    if (isPinned()) {
      const rect = reel.getBoundingClientRect();
      if (rect.top < innerHeight && rect.bottom > 0) {
        renderChapter((headerHeight - rect.top) / Math.max(1, rect.height - (innerHeight - headerHeight)));
      }
    }
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(paint); }
  function measure() {
    headerHeight = document.querySelector('.header-inner').offsetHeight;
    documentRange = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    schedule();
  }
  function setMotion(next, persist = false) {
    const anchor = document.getElementById('approach');
    const before = anchor.getBoundingClientRect().top;
    const reelBefore = reel.getBoundingClientRect();
    const retainedChapter = Math.max(0, activeChapter);
    enabled = next && !reduced.matches;
    root.dataset.motion = enabled ? 'on' : 'off';
    motionButton.setAttribute('aria-pressed', String(!enabled));
    motionButton.setAttribute('aria-label', reduced.matches ? 'Decorative motion disabled by your system preference' : enabled ? 'Pause decorative motion' : 'Enable decorative motion');
    motionButton.querySelector('.motion-label').textContent = enabled ? 'Motion on' : 'Motion off';
    motionButton.querySelector('.motion-symbol').textContent = '';
    motionButton.querySelector('.motion-symbol').classList.toggle('is-paused', !enabled);
    motionButton.disabled = reduced.matches;
    if (!enabled) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
      document.querySelectorAll('[data-tilt]').forEach(el => { el.style.removeProperty('--tilt-x'); el.style.removeProperty('--tilt-y'); });
      renderChapter(positions[retainedChapter], retainedChapter);
    }
    if (persist) {
      preference = enabled ? 'on' : 'off';
      try { localStorage.setItem('finest-founder-motion', preference); } catch (_) { /* Optional. */ }
      // Keep the reader's place when the long desktop chapter track expands/collapses.
      if (before < 0) scrollBy({ top: anchor.getBoundingClientRect().top - before, behavior: 'instant' });
      else if (reelBefore.top < headerHeight + 80 && reelBefore.bottom > headerHeight) {
        const rect = reel.getBoundingClientRect();
        const offset = isPinned() ? positions[retainedChapter] * Math.max(1, rect.height - (innerHeight - headerHeight)) : 0;
        scrollTo({ top: scrollY + rect.top - headerHeight + offset, behavior: 'instant' });
      }
    }
    measure();
  }
  reel.classList.add('story-ready');
  motionButton.hidden = false;
  renderChapter(0, 0);
  setMotion(enabled);
  motionButton.addEventListener('click', () => setMotion(!enabled, true));
  reduced.addEventListener('change', () => setMotion(!reduced.matches && preference !== 'off', true));

  chapterButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (isPinned()) {
        const rect = reel.getBoundingClientRect();
        const distance = Math.max(1, rect.height - (innerHeight - headerHeight));
        scrollTo({ top: scrollY + rect.top - headerHeight + positions[index] * distance, behavior: 'smooth' });
      } else renderChapter(positions[index], index);
    });
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % chapterButtons.length;
      if (event.key === 'ArrowLeft') next = (index + chapterButtons.length - 1) % chapterButtons.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = chapterButtons.length - 1;
      if (next !== undefined) { event.preventDefault(); chapterButtons[next].focus(); chapterButtons[next].click(); }
    });
  });

  const revealTargets = [...document.querySelectorAll('.intro-grid > *, .section-heading, .buyer-lab, .workflow-grid article, .responsibilities, .case-card, .testimonial, .fit-grid > *, .start-steps li, .faq-grid > *, .contact-grid > *')];
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); revealObserver.unobserve(entry.target); }
    }), { threshold: .08, rootMargin: '0px 0px -30px 0px' });
    revealTargets.forEach((target, index) => {
      target.classList.add('reveal');
      target.style.setProperty('--reveal-delay', `${target.closest('.workflow-grid, .start-steps') ? index % 3 * 70 : 0}ms`);
      if (!enabled || target.getBoundingClientRect().top < innerHeight - 30) target.classList.add('revealed');
      else revealObserver.observe(target);
    });
    const workflowObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.style.setProperty('--workflow-progress', '1'); workflowObserver.unobserve(entry.target); }
    }), { threshold: .15 });
    workflowObserver.observe(document.querySelector('.workflow-grid'));
    const heroObserver = new IntersectionObserver(entries => hero.classList.toggle('is-outside', !entries[0].isIntersecting));
    heroObserver.observe(hero);
  }

  document.querySelectorAll('[data-tilt]').forEach(surface => {
    let pointerFrame = 0;
    let x = 0, y = 0;
    surface.addEventListener('pointermove', event => {
      if (!enabled || !finePointer.matches || event.pointerType !== 'mouse') return;
      const box = surface.getBoundingClientRect();
      x = (event.clientX - box.left) / box.width - .5;
      y = (event.clientY - box.top) / box.height - .5;
      if (!pointerFrame) pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0;
        surface.style.setProperty('--tilt-x', `${(x * 5).toFixed(2)}deg`);
        surface.style.setProperty('--tilt-y', `${(-y * 4).toFixed(2)}deg`);
      });
    }, { passive: true });
    surface.addEventListener('pointerleave', () => {
      cancelAnimationFrame(pointerFrame); pointerFrame = 0;
      surface.style.removeProperty('--tilt-x'); surface.style.removeProperty('--tilt-y');
    });
  });
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', measure, { passive: true });
  desktopStory.addEventListener('change', () => { renderChapter(positions[Math.max(0, activeChapter)], Math.max(0, activeChapter)); measure(); });
  addEventListener('pageshow', measure);
  document.addEventListener('visibilitychange', () => {
    root.classList.toggle('motion-idle', document.hidden);
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; } else measure();
  });
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(document.body);
  document.fonts?.ready.then(measure);
})();
