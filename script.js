
'use strict';

/* ── NAVBAR SCROLL ── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const topbar = document.getElementById('topbar');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar?.classList.toggle('scrolled', y > 60);
    if (topbar) topbar.style.transform = y > 90 ? 'translateY(-100%)' : 'translateY(0)';
  }, { passive: true });
}

/* ── MOBILE DRAWER ── */
function initDrawer() {
  const ham = document.getElementById('hamburger');
  const drawer = document.getElementById('mobDrawer');
  const overlay = document.getElementById('mobOverlay');
  const close = document.getElementById('drawerClose');

  const open = () => { drawer.classList.add('open'); overlay.classList.add('open'); ham.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const shut = () => { drawer.classList.remove('open'); overlay.classList.remove('open'); ham.classList.remove('open'); document.body.style.overflow = ''; };

  ham?.addEventListener('click', () => drawer.classList.contains('open') ? shut() : open());
  close?.addEventListener('click', shut);
  overlay?.addEventListener('click', shut);
  document.querySelectorAll('.dl').forEach(l => l.addEventListener('click', shut));
}

/* ── ACTIVE NAV ON SCROLL ── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -45% 0px' }).observe
  // observe each section
  sections.forEach(s => {
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
      });
    }, { rootMargin: '-45% 0px -45% 0px' }).observe(s);
  });
}

/* ── COUNTERS ── */
function initCounters() {
  const els = document.querySelectorAll('.count[data-to]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      const to = parseInt(target.dataset.to, 10);
      const dur = 1800;
      const start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        target.textContent = Math.round(ease * to);
        if (p < 1) requestAnimationFrame(tick);
        else target.textContent = to;
      };
      requestAnimationFrame(tick);
      obs.unobserve(target);
    });
  }, { threshold: 0.5 });
  els.forEach(e => obs.observe(e));
}

/* ── AOS ── */
function initAOS() {
  const els = document.querySelectorAll('[data-aos]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      const delay = parseInt(target.dataset.aosDelay || 0);
      setTimeout(() => target.classList.add('aos-animate'), delay);
      obs.unobserve(target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach(e => obs.observe(e));
}

/* ── GALLERY FILTER ── */
function initGallery() {
  const btns = document.querySelectorAll('.gfb');
  const items = document.querySelectorAll('.gi');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      items.forEach(item => {
        const show = f === 'all' || item.dataset.cat === f;
        item.style.transition = 'opacity .3s, transform .3s';
        if (show) {
          item.style.display = '';
          setTimeout(() => { item.style.opacity = '1'; item.style.transform = ''; }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.92)';
          setTimeout(() => { item.style.display = 'none'; }, 320);
        }
      });
    });
  });
}

/* ── BACK TO TOP ── */
function initBTT() {
  const btn = document.getElementById('btt');
  window.addEventListener('scroll', () => btn?.classList.toggle('vis', window.scrollY > 400), { passive: true });
  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── SMOOTH SCROLL ── */
function initSmooth() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = (document.getElementById('navbar')?.offsetHeight || 68) + 8;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });
}

/* ── BRAND IMG FALLBACK ── */
function initBrandFallback() {
  document.querySelectorAll('.bc-img img').forEach(img => {
    img.addEventListener('error', function () {
      this.style.display = 'none';
      const next = this.nextElementSibling;
      if (next) next.style.display = 'flex';
    });
  });
}

/* ── SERVICE CARD TILT ── */
function initTilt() {
  if (window.innerWidth < 768) return;
  document.querySelectorAll('.svc-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-6px) perspective(600px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

/* ── HERO FLOATING PARTICLES ── */
function initParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const wrap = document.createElement('div');
  wrap.style.cssText = 'position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:1;';
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 4 + 2;
    const colors = ['rgba(232,0,61,.5)', 'rgba(46,139,192,.5)', 'rgba(91,200,245,.4)', 'rgba(255,255,255,.2)'];
    p.style.cssText = `
      position:absolute;border-radius:50%;
      width:${size}px;height:${size}px;
      left:${Math.random()*100}%;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation:particleUp ${Math.random()*12+8}s linear ${Math.random()*8}s infinite;
    `;
    wrap.appendChild(p);
  }
  hero.appendChild(wrap);

  // Add keyframes
  if (!document.getElementById('particleStyle')) {
    const st = document.createElement('style');
    st.id = 'particleStyle';
    st.textContent = `
      @keyframes particleUp {
        0%   { transform: translateY(100vh) rotate(0deg);   opacity: 0; }
        10%  { opacity: 1; }
        90%  { opacity: .5; }
        100% { transform: translateY(-80px) rotate(540deg); opacity: 0; }
      }
    `;
    document.head.appendChild(st);
  }
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initDrawer();
  initActiveNav();
  initCounters();
  initAOS();
  initGallery();
  initBTT();
  initSmooth();
  initBrandFallback();
  initTilt();
  initParticles();
  console.log('%c💊 Pharma Medico — Website Ready', 'color:#E8003D;font-weight:800;font-size:13px;');
});

