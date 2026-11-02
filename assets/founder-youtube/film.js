/* Actual media and frame order reused from aiportfolio.html. No generated footage.
   A 6.3 MB preview atlas supports scrubbing; only a settled frame's small HD range
   is requested. The 98 MB full movie is never loaded until the visitor presses play. */
(() => {
  'use strict';
  const FILM = {"pack":"https://d2ol7oe51mr4n9.cloudfront.net/user_3IHQT3zhsPrMrC3eclpIQLUCZ8K/cfb56e1a-1d2f-401b-ba2d-240dede7c1f0.tar","blockLengths":[1601024,1640960,1673728,1718784,1757696,1745408,1701888,1628672,1675776,1630720,1567232,1395200,1280000,1172480,1159168,1124352,969728,800256,716288,624128,555008,490496,471040,578048,690176,689664,542720,437760,564736,516096,513536,568320,609280,602624,731136,846336,968192,1030144,1095680,1156096,1134080,1076224,984576,867328,693760,316416,555008,849408,869888,892416,898560,880128,854016,833536,820736,802304,689664,700416,764928,822272,826368,834048,802816,785408,749056,723456,695808,666112,633344,619520,571904,495616,483328,449024,429056,434176,448000,484864,477696,495104,529920,586752,649728,771584,827392,796672,667648,472576,542208,868864,871936,794624,777216,884224,992256,988160,965632,929792,859136,771072,719872,686080,622080,564736,540672,411648,264704,364544,401408,429568,474112,521728,628736,699392,709632,708608,712704,677888,604160,502272,654848,897024,1075200,1229824,1259520,1286144,1267712,1155072,1037312,960000,907776,816640,729600,710144,719872,766976,807424,823296,845312,840192,797696,768000,772608,763392,701440,596480,432640,311296,400896,367104,594944,884224,1003520,1033728,1072128,1059840,1008640,937984,667648,465920,542208,608768,607232,627712,632832,625152,603648,557056,483328,356352,347136,384512,356352,380416,273920,292864,526848,642048,705536,757760,774144,833536,866304,827904,694784,599040,757248,1070592,1298432,1366016,1399808,1439232,1427968,1380864,1332224,1377792,1511936,1525760,1375744,1191936,1247232,1221632,1217024,1226240,615424],"preview":{"indices":[0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,116,120,124,128,132,136,140,144,148,152,156,160,164,168,172,176,180,184,188,192,196,200,204,208,212,216,220,224,228,232,236,240,244,248,252,256,260,264,268,272,276,280,284,288,292,296,300,304,308,312,316,320,324,328,332,336,340,344,348,352,356,360,364,368,372,376,380,384,388,392,396,400,404,408,412,416,420,424,428,432,433,436,440,444,448,452,456,460,464,468,472,476,480,484,488,492,496,500,504,508,512,516,520,524,528,532,536,540,544,548,552,556,560,564,568,572,576,580,584,588,592,596,600,604,608,612,616,620,624,628,632,636,640,644,648,652,656,660,664,668,672,676,680,684,688,692,696,700,704,708,712,716,720,724,728,732,736,740,744,748,752,756,760,764,768,772,776,780,784,788,792,796,800,804,808,812,816,820,824,828,832,836,840,844,848,852,856,860,864,865,866,868,872,876,880,884,888,892,896,900,904,908,912,916,920,924,928,932,936,940,944,948,952,956,960,964,968,972,976,980,984,988,992,996,1000,1004,1008,1012,1016,1020,1024,1028,1032,1036,1040,1044,1048,1052,1056,1060,1064,1068,1072,1076,1080,1084,1088,1092,1096,1100,1104,1108,1112,1116,1120,1124,1128,1132,1136,1140,1144,1148,1152,1156,1160,1164,1168,1172,1176,1180,1184,1188,1192,1196,1200,1204,1208,1212,1216,1220,1224,1228,1232,1236,1240,1244,1248,1252,1256,1260,1264,1268,1272,1276,1280,1284,1288,1292,1296,1298,1299,1300,1304,1308,1312,1316,1320,1324,1328,1332,1336,1340,1344,1348,1352,1356,1360,1364,1368,1372,1376,1380,1384,1388,1392,1396,1400,1404,1408,1412,1416,1420,1424,1428,1432,1436,1440,1444,1448,1452,1456,1460,1464,1468,1472,1476,1480,1484,1488,1492,1496,1500,1504,1508,1512,1516,1520,1524,1528,1532,1536,1540,1544,1548,1552,1556,1560,1564,1568,1572,1576,1580,1584,1588,1592,1596,1600,1604,1608,1612,1616,1620,1624,1628,1632,1635],"columns":4,"rows":4,"width":384,"height":216,"atlasCount":26,"bytes":6318080,"url":"https://d2ol7oe51mr4n9.cloudfront.net/user_3IHQT3zhsPrMrC3eclpIQLUCZ8K/4b205d6d-f7c4-44fc-9175-7a8201b7977c.tar"},"frameCount":1636,"film":"https://d2ol7oe51mr4n9.cloudfront.net/user_3IHQT3zhsPrMrC3eclpIQLUCZ8K/16fafbbd-bdcd-4d7f-a859-d961ed8cb2f7.mp4","chapterFrames":[0,433,866,1299]};
  const section = document.getElementById('original-film');
  if (!section) return;
  const root = document.documentElement;
  const track = section.querySelector('.cinema-track');
  const stage = section.querySelector('.cinema-stage');
  const picture = section.querySelector('.cinema-picture');
  const canvas = section.querySelector('canvas');
  const context = canvas.getContext('2d', { alpha: false });
  const instruction = section.querySelector('.cinema-instruction');
  const chapterGroup = section.querySelector('.cinema-chapters');
  const chapters = [...chapterGroup.querySelectorAll('button')];
  const desktop = matchMedia('(min-width:901px) and (min-height:640px)');
  const scrollViewport = matchMedia('(min-height:480px)');
  const reduced = matchMedia('(prefers-reduced-motion:reduce)');
  const dialog = document.querySelector('.cinema-dialog');
  const movie = dialog.querySelector('video');
  const playLink = section.querySelector('.cinema-play');
  const closeButton = dialog.querySelector('.cinema-close');
  const previewBlobs = new Map(), previewImages = new Map(), previewPending = new Map();
  const blockCache = new Map(), fullImages = new Map();
  let near = false, ready = false, active = false, navLoading = false, navFailed = false;
  let desired = 0, progress = 0, paintFrame = 0, settleTimer = 0, fullController = null;
  let fullBlock = -1, lastDraw = '', dialogFocus = null, previousOverflow = '';
  let navController = null, lastChapter = -1, lastTarget = -1;
  const clamp = n => Math.max(0, Math.min(1, n));
  // The opening stage begins at the viewport edge, behind the overlay navigation.
  const headerHeight = () => 0;
  const allowed = () => Boolean(context) && scrollViewport.matches && !reduced.matches && root.dataset.motion === 'on' && !navigator.connection?.saveData;
  let offset = 0;
  const blocks = FILM.blockLengths.map(length => { const item = [offset, length]; offset += length; return item; });


  // Original supplied clip audio. Best-effort autoplay; never bypass browser policy.
  const soundButton = section.querySelector('.cinema-sound');
  const soundStatus = section.querySelector('.cinema-sound-status');
  const siteHeader = document.querySelector('.site-header');
  const intro = section.querySelector('.cinema-intro');
  const bottom = section.querySelector('.cinema-bottom');
  const audioURL = 'https://d2ol7oe51mr4n9.cloudfront.net/user_3IHQT3zhsPrMrC3eclpIQLUCZ8K/3eff4b62-e21a-4b2c-9f5e-32ed861f7451.tar';
  let soundNavigationPaused = false;
  let soundRequested = true, soundBlocked = false, soundPrimed = false, scrollSoundTried = false;
  let soundEnabled = false, audioContext = null, audioGain = null, audioAnalyser = null;
  let audioBuffers = null, audioLoading = null, audioVoice = null, soundIdle = 0, meterTimer = 0;
  let audioGeneration = 0, lastSoundFrame = -1;
  const soundChapter = frame => frame < 433 ? 0 : frame < 866 ? 1 : frame < 1299 ? 2 : 3;
  function showSoundState(state) {
    soundButton.dataset.audioState = state;
    soundButton.setAttribute('aria-pressed', String(soundEnabled));
    soundButton.setAttribute('aria-label', soundEnabled ? 'Turn off original film sound' : 'Enable original film sound');
    soundButton.querySelector('span').textContent = state === 'loading' ? 'Loading sound…' : state === 'error' ? 'Retry sound' : state === 'blocked' ? 'Enable sound' : soundEnabled ? 'Sound on' : 'Sound off';
  }
  function stopVoice(voice, duration = .12) {
    if (!voice || !audioContext) return;
    try {
      const now = audioContext.currentTime;
      voice.gain.gain.cancelScheduledValues(now);
      voice.gain.gain.setValueAtTime(voice.gain.gain.value, now);
      voice.gain.gain.linearRampToValueAtTime(0, now + duration);
      voice.source.stop(now + duration + .02);
    } catch (_) { /* Already ended. */ }
  }
  function pauseSound() {
    clearTimeout(soundIdle); soundIdle = 0;
    stopVoice(audioVoice); audioVoice = null;
    clearInterval(meterTimer); meterTimer = 0;
    soundButton.dataset.signal = '0'; soundButton.style.setProperty('--sound-level', '0');
    showSoundState(soundBlocked && soundRequested ? 'blocked' : soundEnabled ? 'idle' : 'off');
  }
  function disableSound() { soundRequested = false; soundBlocked = false; soundEnabled = false; audioGeneration++; pauseSound(); }
  function canSound() {
    const rect = track.getBoundingClientRect();
    return soundEnabled && !soundNavigationPaused && active && !document.hidden && !dialog.open && audioContext?.state === 'running' && rect.top < innerHeight && rect.bottom > innerHeight * .55;
  }
  async function loadSound() {
    if (audioBuffers) return audioBuffers;
    if (audioLoading) return audioLoading;
    audioLoading = (async () => {
      const controller = new AbortController(), timeout = setTimeout(() => controller.abort(), 30000);
      try {
        const response = await fetch(audioURL, { signal: controller.signal, cache: 'force-cache' });
        if (!response.ok) throw Error('Original audio unavailable');
        const bytes = new Uint8Array(await response.arrayBuffer()), decoder = new TextDecoder(), clips = new Map();
        if (bytes.length > 3000000) throw Error('Unexpected audio archive');
        let cursor = 0;
        while (cursor + 512 <= bytes.length) {
          const name = decoder.decode(bytes.subarray(cursor, cursor + 100)).split('\0')[0];
          if (!name) break;
          const size = parseInt(decoder.decode(bytes.subarray(cursor + 124, cursor + 136)).replace(/\0/g, '').trim(), 8);
          const match = /^original-audio-([1-4])\.m4a$/.exec(name);
          cursor += 512;
          if (!match || !Number.isFinite(size) || size < 1 || cursor + size > bytes.length) throw Error('Invalid original audio archive');
          clips.set(Number(match[1]) - 1, bytes.slice(cursor, cursor + size).buffer);
          cursor += Math.ceil(size / 512) * 512;
        }
        if (clips.size !== 4) throw Error('Missing original audio');
        audioBuffers = await Promise.all([0,1,2,3].map(index => audioContext.decodeAudioData(clips.get(index))));
        soundButton.dataset.audioReady = 'true';
        return audioBuffers;
      } finally { clearTimeout(timeout); }
    })().finally(() => { audioLoading = null; });
    return audioLoading;
  }
  function startSound(frame) {
    if (!canSound() || !audioBuffers) return;
    const chapter = soundChapter(frame), buffer = audioBuffers[chapter];
    const offset = Math.max(0, (frame - FILM.chapterFrames[chapter]) / 24);
    if (offset >= buffer.duration - .15) { pauseSound(); return; }
    stopVoice(audioVoice, .18);
    const source = audioContext.createBufferSource(), gain = audioContext.createGain(), now = audioContext.currentTime;
    source.buffer = buffer; source.playbackRate.value = 1;
    gain.gain.setValueAtTime(0, now); gain.gain.linearRampToValueAtTime(.8, now + .12);
    source.connect(gain); gain.connect(audioGain);
    const voice = { source, gain, chapter }; audioVoice = voice;
    source.onended = () => { source.disconnect(); gain.disconnect(); if (audioVoice === voice) { audioVoice = null; clearInterval(meterTimer); meterTimer = 0; soundButton.dataset.signal = '0'; soundButton.style.setProperty('--sound-level', '0'); showSoundState(soundBlocked && soundRequested ? 'blocked' : soundEnabled ? 'idle' : 'off'); } };
    source.start(now, offset); showSoundState('playing');
    soundButton.dataset.audioChapter = String(chapter + 1);
    if (!meterTimer) meterTimer = setInterval(() => {
      if (!audioVoice) return;
      const samples = new Float32Array(audioAnalyser.fftSize); audioAnalyser.getFloatTimeDomainData(samples);
      const rms = Math.sqrt(samples.reduce((sum, value) => sum + value * value, 0) / samples.length);
      soundButton.dataset.signal = rms.toFixed(5);
      soundButton.style.setProperty('--sound-level', String(Math.min(1, rms * 25)));
    }, 100);
  }
  function soundMovement(frame) {
    if (!canSound()) { if (audioVoice) pauseSound(); return; }
    if (frame === lastSoundFrame) return;
    lastSoundFrame = frame;
    // Do not seek on each wheel/touch tick: retain coherent natural-rate phrases.
    // Only a new chapter or a new scroll gesture starts at the current image.
    if (!audioVoice || audioVoice.chapter !== soundChapter(frame)) startSound(frame);
    clearTimeout(soundIdle); soundIdle = setTimeout(pauseSound, 1000);
  }
  function beginReadySound() {
    if (!soundRequested || !audioBuffers || audioContext?.state !== 'running' || document.hidden || !active || dialog.open) return;
    soundBlocked = false; soundEnabled = true;
    soundStatus.textContent = 'Original sound is on. Escape or Sound on mutes it.';
    if (!audioVoice) { startSound(desired); clearTimeout(soundIdle); soundIdle = setTimeout(pauseSound, 1600); }
  }
  function requestSound() {
    if (!soundRequested || !active || document.hidden || dialog.open) return;
    soundPrimed = true;
    const generation = audioGeneration;
    try {
      if (!audioContext) {
        const Context = window.AudioContext || window.webkitAudioContext;
        if (!Context) throw Error('Audio unavailable');
        audioContext = new Context({ latencyHint: 'interactive', sampleRate: 32000 });
        audioGain = audioContext.createGain(); audioGain.gain.value = 1;
        audioAnalyser = audioContext.createAnalyser(); audioAnalyser.fftSize = 512;
        audioGain.connect(audioAnalyser); audioAnalyser.connect(audioContext.destination);
        audioContext.addEventListener('statechange', () => {
          soundButton.dataset.audioContext = audioContext.state;
          if (audioContext.state === 'running') beginReadySound(); else pauseSound();
        });
      }
      // A suspended context may not resolve resume() until an eligible gesture.
      // Never wait forever or conceal the browser-policy fallback.
      audioContext.resume().then(() => { if (generation === audioGeneration) beginReadySound(); }).catch(() => {});
      soundBlocked = audioContext.state !== 'running';
      soundButton.dataset.audioContext = audioContext.state;
      showSoundState(soundBlocked ? 'blocked' : 'loading');
      if (soundBlocked) soundStatus.textContent = 'Your browser paused automatic audio. Enable sound to hear the original soundtrack.';
      loadSound().then(() => {
        if (generation !== audioGeneration || !soundRequested) return;
        if (audioContext.state === 'running') beginReadySound(); else { soundBlocked = true; showSoundState('blocked'); }
      }).catch(() => {
        if (generation !== audioGeneration) return;
        disableSound(); showSoundState('error'); soundStatus.textContent = 'Sound could not load. Try again, or use the full film player.';
      });
    } catch (_) { disableSound(); showSoundState('error'); }
  }
  soundButton.addEventListener('click', () => {
    soundNavigationPaused = false;
    if (soundEnabled || soundRequested && soundButton.dataset.audioState === 'loading') { disableSound(); return; }
    soundRequested = true; audioGeneration++; requestSound();
  });
  function naturalAudioGesture(event) {
    if (!event.isTrusted || !soundRequested || soundEnabled || !active) return;
    if (event.target instanceof Element && event.target.closest('a,button,video,dialog,input,textarea,select')) return;
    if (event.type === 'keydown' && !['ArrowDown','ArrowUp','PageDown','PageUp',' ','Home','End'].includes(event.key)) return;
    requestSound();
  }
  section.querySelector('.cinema-tools > a').addEventListener('click', () => { soundNavigationPaused = true; pauseSound(); });
  const resumeScrollSound = event => { if (event.isTrusted) soundNavigationPaused = false; };
  addEventListener('wheel', resumeScrollSound, { passive: true });
  addEventListener('touchmove', resumeScrollSound, { passive: true });
  addEventListener('keydown', event => { if (['ArrowDown','ArrowUp','PageDown','PageUp',' ','Home','End'].includes(event.key)) resumeScrollSound(event); });
  addEventListener('pointerdown', naturalAudioGesture, { passive: true });
  addEventListener('keydown', naturalAudioGesture);
  function updateClearView() {
    const rect = track.getBoundingClientRect(), distance = Math.max(0, -rect.top);
    const clear = active && distance > 125 && rect.bottom > siteHeader.offsetHeight;
    const fade = active ? 1 - clamp(distance / 125) : 1;
    section.style.setProperty('--cinema-copy', fade.toFixed(3));
    root.classList.toggle('film-clear', clear);
    intro.inert = clear; playLink.inert = clear; bottom.inert = clear;
    siteHeader.inert = clear;
    if (clear) {
      document.getElementById('mobile-nav').hidden = true;
      const menu = siteHeader.querySelector('.menu-toggle');
      menu.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-open');
    }
    [intro, playLink, bottom, siteHeader].forEach(element => {
      if (clear) element.setAttribute('aria-hidden', 'true'); else element.removeAttribute('aria-hidden');
    });
    if (clear && document.activeElement?.closest('.cinema-intro, .cinema-play, .cinema-bottom, .site-header')) soundButton.focus({ preventScroll: true });
    if (!canSound() && audioVoice) pauseSound();
  }

  function keep(cache, key, value, max) {
    if (cache.has(key)) cache.delete(key);
    cache.set(key, value);
    while (cache.size > max) { const first = cache.keys().next().value; cache.get(first)?.close?.(); cache.delete(first); }
    return value;
  }
  function decode(blob) {
    if (window.createImageBitmap) return createImageBitmap(blob);
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(blob), image = new Image();
      image.onload = () => { URL.revokeObjectURL(url); resolve(image); };
      image.onerror = () => { URL.revokeObjectURL(url); reject(Error('Film frame unavailable')); };
      image.src = url;
    });
  }
  function parseEntries(bytes, pattern, consume) {
    const decoder = new TextDecoder(); let cursor = 0;
    while (cursor + 512 <= bytes.length) {
      const header = bytes.subarray(cursor, cursor + 512);
      const name = decoder.decode(header.subarray(0, 100)).split('\0')[0];
      if (!name) break;
      const match = pattern.exec(name);
      const size = parseInt(decoder.decode(header.subarray(124, 136)).replace(/\0/g, '').trim(), 8);
      if (!match || !Number.isFinite(size) || size < 1 || size > 8e6) throw Error('Invalid film archive');
      cursor += 512;
      if (cursor + size > bytes.length) throw Error('Incomplete film range');
      consume(Number(match[1]), new Blob([bytes.subarray(cursor, cursor + size)], { type: 'image/webp' }));
      cursor += Math.ceil(size / 512) * 512;
    }
  }
  function activate() {
    if (ready) return;
    ready = true;
    syncMode();
    schedule();
  }
  async function previewImage(index) {
    if (previewImages.has(index)) return previewImages.get(index);
    if (!previewBlobs.has(index)) return null;
    if (!previewPending.has(index)) {
      const task = decode(previewBlobs.get(index)).then(image => {
        keep(previewImages, index, image, 3); activate(); schedule(); return image;
      }).catch(() => null).finally(() => previewPending.delete(index));
      previewPending.set(index, task);
    }
    return previewPending.get(index);
  }
  async function loadPreview() {
    if (navLoading || navFailed || !allowed() || document.hidden) return;
    navLoading = true;
    instruction.textContent = 'Loading the original scroll film…';
    navController = new AbortController();
    const timer = setTimeout(() => navController?.abort(), 45000);
    try {
      const response = await fetch(FILM.preview.url, { signal: navController.signal, cache: 'force-cache' });
      if (!response.ok) throw Error('Preview unavailable');
      const reader = response.body?.getReader();
      if (!reader) {
        parseEntries(new Uint8Array(await response.arrayBuffer()), /^atlas-(\d+)\.webp$/, (index, blob) => previewBlobs.set(index, blob));
        await previewImage(0);
      } else {
        let buffer = new Uint8Array(0); const decoder = new TextDecoder();
        while (true) {
          const { value, done } = await reader.read(); if (done) break;
          const joined = new Uint8Array(buffer.length + value.length); joined.set(buffer); joined.set(value, buffer.length); buffer = joined;
          let cursor = 0;
          while (cursor + 512 <= buffer.length) {
            const header = buffer.subarray(cursor, cursor + 512);
            const name = decoder.decode(header.subarray(0, 100)).split('\0')[0]; if (!name) break;
            const match = /^atlas-(\d+)\.webp$/.exec(name);
            const size = parseInt(decoder.decode(header.subarray(124, 136)).replace(/\0/g, '').trim(), 8);
            if (!match || !Number.isFinite(size) || size < 1 || size > 8e6 || Number(match[1]) >= FILM.preview.atlasCount) throw Error('Invalid preview archive');
            const padded = Math.ceil(size / 512) * 512;
            if (cursor + 512 + padded > buffer.length) break;
            const index = Number(match[1]);
            previewBlobs.set(index, new Blob([buffer.subarray(cursor + 512, cursor + 512 + size)], { type: 'image/webp' }));
            if (index === 0) previewImage(0);
            cursor += 512 + padded; schedule();
          }
          buffer = buffer.slice(cursor);
        }
      }
      if (previewBlobs.size !== FILM.preview.atlasCount) throw Error('Preview incomplete');
    } catch (_) {
      navFailed = true;
      if (!ready) instruction.textContent = 'Scroll preview unavailable. Play the original film instead.';
    } finally { clearTimeout(timer); navLoading = false; navController = null; }
  }
  function nearestPreview(frame) {
    const indices = FILM.preview.indices;
    let low = 0, high = indices.length - 1;
    while (low < high) { const mid = Math.floor((low + high) / 2); if (indices[mid] < frame) low = mid + 1; else high = mid; }
    return low > 0 && Math.abs(indices[low - 1] - frame) < Math.abs(indices[low] - frame) ? low - 1 : low;
  }
  function draw(image, sx, sy, sw, sh, key, sourceFrame, quality) {
    if (!image || key === lastDraw || !active || dialog.open) return;
    // Keep the sharp poster at the opening until the first HD frame is ready.
    if (sourceFrame === 0 && quality !== 'HD') return;
    const ratio = Math.max(canvas.width / sw, canvas.height / sh);
    context.drawImage(image, sx, sy, sw, sh, (canvas.width - sw * ratio) / 2, (canvas.height - sh * ratio) / 2, sw * ratio, sh * ratio);
    lastDraw = key; track.classList.add('has-frame');
    track.dataset.frame = String(sourceFrame); track.dataset.quality = quality;
  }
  function drawBest() {
    if (!active || document.hidden || dialog.open) return;
    if (fullImages.has(desired)) {
      const image = fullImages.get(desired); draw(image, 0, 0, image.width, image.height, `hd-${desired}`, desired, 'HD'); return;
    }
    const sample = nearestPreview(desired), atlas = Math.floor(sample / 16), tile = sample % 16;
    const image = previewImages.get(atlas);
    if (image) draw(image, tile % 4 * FILM.preview.width, Math.floor(tile / 4) * FILM.preview.height, FILM.preview.width, FILM.preview.height, `preview-${sample}`, FILM.preview.indices[sample], 'scroll preview');
    else previewImage(atlas);
  }
  async function sharpen(frame) {
    if (!active || document.hidden || dialog.open || fullImages.has(frame)) return;
    const block = Math.floor(frame / 8);
    if (fullController && fullBlock === block) return;
    fullController?.abort(); fullController = new AbortController(); fullBlock = block;
    const controller = fullController, timer = setTimeout(() => controller.abort(), 20000);
    try {
      let frames = blockCache.get(block);
      if (!frames) {
        const [start, length] = blocks[block];
        const response = await fetch(FILM.pack, { headers: { Range: `bytes=${start}-${start + length - 1}` }, signal: controller.signal, cache: 'force-cache' });
        // Never fall back to downloading the full168 MB frame pack.
        if (response.status !== 206) { controller.abort(); throw Error('Range response required'); }
        const bytes = new Uint8Array(await response.arrayBuffer());
        if (bytes.length !== length) throw Error('Incomplete HD range');
        frames = new Map(); parseEntries(bytes, /^frame-(\d+)\.webp$/, (index, blob) => frames.set(index, blob));
        keep(blockCache, block, frames, 2);
      }
      if (!active || controller.signal.aborted) return;
      const target = Math.floor(desired / 8) === block ? desired : frame;
      if (!frames.has(target)) return;
      const image = await decode(frames.get(target));
      keep(fullImages, target, image, 3); schedule();
    } catch (_) { /* The original preview remains a usable fallback. */ }
    finally { clearTimeout(timer); if (fullController === controller) { fullController = null; fullBlock = -1; } }
  }
  function updateLabels() {
    const index = desired < 433 ? 0 : desired < 866 ? 1 : desired < 1299 ? 2 : 3;
    if (index !== lastChapter) { lastChapter = index; chapters.forEach((button, n) => button.setAttribute('aria-pressed', String(n === index))); }
    track.style.setProperty('--film-progress', progress.toFixed(4));
  }
  function paint() {
    paintFrame = 0;
    updateClearView();
    if (!active || document.hidden || dialog.open) return;
    const rect = track.getBoundingClientRect(), header = headerHeight();
    if (rect.bottom < header || rect.top > innerHeight) { clearTimeout(settleTimer); return; }
    progress = clamp((header - rect.top) / Math.max(1, rect.height - (innerHeight - header)));
    desired = Math.round(progress * (FILM.frameCount - 1));
    updateLabels(); drawBest(); soundMovement(desired);
    if (lastTarget !== desired) {
      lastTarget = desired; clearTimeout(settleTimer);
      settleTimer = setTimeout(() => sharpen(desired), 180);
    }
  }
  function schedule() { if (!paintFrame && !document.hidden) paintFrame = requestAnimationFrame(paint); }
  function resizeCanvas() {
    const box = picture.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 1.5);
    const width = Math.min(1920, Math.round(box.width * dpr)), height = Math.round(box.height * width / Math.max(1, box.width));
    if (canvas.width !== width || canvas.height !== height) { canvas.width = width; canvas.height = height; lastDraw = ''; }
    schedule();
  }
  function syncMode() {
    const next = allowed() && ready;
    if (next !== active) {
      const work = document.getElementById('work'), beforeWork = work.getBoundingClientRect().top;
      const before = track.getBoundingClientRect(), wasActive = active;
      active = next; track.classList.toggle('is-scrubbing', active); chapterGroup.hidden = !active;
      if (!active) { clearTimeout(settleTimer); fullController?.abort(); track.classList.remove('has-frame'); lastDraw = ''; }
      if (beforeWork < 0) scrollBy({ top: work.getBoundingClientRect().top - beforeWork, behavior: 'instant' });
      else if (wasActive && before.top < headerHeight() && before.bottom > headerHeight()) scrollTo({ top: scrollY + track.getBoundingClientRect().top - headerHeight(), behavior: 'instant' });
      resizeCanvas();
    }
    soundButton.hidden = !active;
    if (active && !soundPrimed) requestSound();
    if (!active) pauseSound();
    updateClearView();
    instruction.textContent = active ? 'Scroll to enter the story ↓' : 'Press play to watch the original film.';
    if (near && allowed() && !ready && !navFailed) loadPreview();
  }
  chapters.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (!active) return;
      const rect = track.getBoundingClientRect(), header = headerHeight();
      scrollTo({ top: scrollY + rect.top - header + FILM.chapterFrames[index] / (FILM.frameCount - 1) * Math.max(1, rect.height - (innerHeight - header)), behavior: 'smooth' });
    });
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % 4;
      if (event.key === 'ArrowLeft') next = (index + 3) % 4;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = 3;
      if (next !== undefined) { event.preventDefault(); chapters[next].focus(); chapters[next].click(); }
    });
  });
  function closeFilm() { if (dialog.open) dialog.close(); }
  playLink.addEventListener('click', event => {
    if (typeof dialog.showModal !== 'function') return;
    event.preventDefault(); dialogFocus = document.activeElement; previousOverflow = document.body.style.overflow;
    pauseSound(); document.body.style.overflow = 'hidden'; movie.muted = !soundRequested; movie.src = FILM.film; dialog.showModal();
    fullController?.abort(); clearTimeout(settleTimer); closeButton.focus(); movie.play()?.catch(() => { /* Native play controls remain available. */ });
  });
  closeButton.addEventListener('click', closeFilm);
  dialog.addEventListener('close', () => {
    movie.pause(); movie.removeAttribute('src'); movie.load(); document.body.style.overflow = previousOverflow;
    dialogFocus?.focus({ preventScroll: true }); lastDraw = ''; schedule();
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeFilm(); } });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { pauseSound(); movie.pause(); clearTimeout(settleTimer); fullController?.abort(); } else schedule(); });
  addEventListener('pagehide', pauseSound);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') disableSound(); });
  new MutationObserver(syncMode).observe(root, { attributes: true, attributeFilter: ['data-motion'] });
  desktop.addEventListener('change', syncMode); scrollViewport.addEventListener('change', syncMode); reduced.addEventListener('change', syncMode);
  addEventListener('scroll', () => { schedule(); if (!scrollSoundTried && active && soundRequested && !soundEnabled) { scrollSoundTried = true; requestSound(); } }, { passive: true }); addEventListener('resize', resizeCanvas, { passive: true }); addEventListener('pageshow', schedule);
  if ('ResizeObserver' in window) new ResizeObserver(resizeCanvas).observe(picture);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { near = entries[0].isIntersecting; if (near) syncMode(); }, { rootMargin: '250px 0px' }).observe(stage);
  } else { near = true; syncMode(); }
  syncMode();
})();
