(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setupReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (reducedMotion) {
      elements.forEach(el => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -50px" });

    elements.forEach(el => observer.observe(el));
  }

  function setupParallax() {
    if (reducedMotion || !window.matchMedia("(pointer:fine)").matches) return;

    const avatar = document.querySelector("#avatarFrame");
    const hero = document.querySelector(".hero");
    if (!avatar || !hero) return;

    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      avatar.style.transform = `perspective(900px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
    }, { passive: true });

    hero.addEventListener("pointerleave", () => {
      avatar.style.transform = "";
    });
  }

  function setupCursor() {
    if (!window.matchMedia("(pointer:fine)").matches) return;

    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100, ringX = -100, ringY = -100;

    window.addEventListener("pointermove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }, { passive: true });

    function tick() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(tick);
    }
    tick();

    document.querySelectorAll("a, button, .project-card, .skill-card, .float-card").forEach(el => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-active"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-active"));
    });
  }

  function setupParticles() {
    const host = document.querySelector("#particles");
    if (!host || reducedMotion) return;

    const count = window.innerWidth < 600 ? 20 : 38;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("i");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      particle.style.animationDuration = `${8 + Math.random() * 12}s`;
      particle.style.setProperty("--drift", `${-50 + Math.random() * 100}px`);
      host.appendChild(particle);
    }
  }

  function setupScrollProgress() {
    const line = document.createElement("div");
    line.className = "scroll-progress";
    document.body.appendChild(line);

    window.addEventListener("scroll", () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      line.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
    }, { passive: true });
  }

  window.PortfolioAnimations = {
    init() {
      setupReveal();
      setupParallax();
      setupCursor();
      setupParticles();
      setupScrollProgress();
    }
  };
})();
