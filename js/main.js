(() => {
  const state = { lang: localStorage.getItem("portfolio-lang") || "en", theme: localStorage.getItem("portfolio-theme") || "dark" };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const translations = {
    en: {
      "nav.home": "HOME", "nav.about": "ABOUT", "nav.skills": "SKILLS", "nav.projects": "PROJECTS", "nav.journey": "JOURNEY", "nav.contact": "CONTACT",
      "hero.eyebrow": "DEVELOPER SIGNAL DETECTED", "hero.hello": "HELLO, I'M", "hero.nameFirst":"SORIYA", "hero.nameLast":"MUT", "hero.role":"Web Developer", "hero.roleCode":"&lt; Web Developer /&gt;", "hero.explore": "EXPLORE MY WORK", "hero.connect": "LET'S CONNECT",
      "hero.description": "I’m an IT student passionate about web development, programming, software quality, and building meaningful digital experiences.",
      "about.title": "MORE THAN JUST A STUDENT", "about.subtitle": "A learner who turns curiosity into working interfaces and experiments.",
      "about.paragraph1": "My name is Soriya MUT. I am an IT student at Passerelles Numériques Cambodia. My main interests are Web Development, Programming, Software Quality, and Technology.",
      "about.paragraph2": "I enjoy learning by building projects, solving programming problems, researching user needs, and experimenting with new technologies.",
      "skills.title": "MY TECH ARSENAL", "skills.subtitle": "Tools and concepts I’m learning through practice.",
      "projects.title": "THINGS I'VE BUILT", "projects.subtitle": "Small steps, real practice, and experiments that become better over time.",
      "system.title": "SYSTEM STATUS", "journey.title": "MY JOURNEY", "journey.subtitle": "A learning path focused on practical growth.",
      "missions.title": "NEXT LEVEL", "strengths.title": "WHAT MAKES ME DIFFERENT",
      "contact.title": "LET'S BUILD SOMETHING MEANINGFUL", "contact.description": "Have a project, opportunity, or simply want to connect? I'd love to hear from you.",
      "boot.initializing":"INITIALIZING", "boot.loading":"LOADING PORTFOLIO CORE", "boot.connecting":"CONNECTING TO DEVELOPER MODE",
      "common.buildLearnGrow":"BUILD • LEARN • GROW", "common.learning":"● Learning", "common.active":"● Active", "common.practicing":"● Practicing", "common.scrollExplore":"SCROLL TO EXPLORE", "common.visualId":"VISUAL_ID: 01", "common.build":"BUILD", "common.practicalProjects":"Practical projects", "common.learn":"LEARN", "common.newTechnologies":"New technologies", "common.test":"TEST", "common.qualityMindset":"Quality mindset", "common.online":"● ONLINE", "common.learningWord":"LEARNING", "common.activeWord":"ACTIVE", "common.practicingWord":"PRACTICING", "common.webDevelopment":"WEB DEVELOPMENT", "common.keepLearning":"KEEP LEARNING",
      "sections.profile":"01 / PROFILE", "sections.arsenal":"02 / ARSENAL", "sections.builds":"03 / BUILDS", "sections.liveHud":"04 / LIVE HUD", "sections.path":"05 / PATH", "sections.nextQuests":"06 / NEXT QUESTS", "sections.console":"07 / CONSOLE", "sections.traits":"08 / TRAITS", "sections.connection":"09 / CONNECTION",
      "profile.characterFile":"CHARACTER_PROFILE.exe", "profile.developerUnit":"DEVELOPER UNIT / 01", "profile.name":"NAME", "profile.role":"ROLE", "profile.itStudent":"IT STUDENT", "profile.class":"CLASS", "profile.webDeveloper":"WEB DEVELOPER", "profile.specialty":"SPECIALTY", "profile.problemSolving":"PROBLEM SOLVING", "profile.status":"STATUS", "profile.mission":"MISSION", "profile.developerXp":"DEVELOPER XP", "profile.learningMode":"LEARNING MODE", "profile.progressNote":"VISUAL PROGRESS INDICATOR — NOT A REAL QUALIFICATION",
      "system.portfolioOnline":"PORTFOLIO ONLINE", "system.currentMode":"CURRENT MODE", "system.currentFocus":"CURRENT FOCUS", "system.buildStatus":"BUILD STATUS", "system.mindset":"MINDSET",
      "journey.present":"2026 — PRESENT", "journey.itWeb":"IT / WEB DEVELOPMENT", "journey.description":"Developing technical and professional skills through practical learning in programming, web development, databases, software development, and quality assurance.",
      "terminal.title":"DEVELOPER TERMINAL", "terminal.subtitle":"Interactive portfolio information — no real system commands are executed.", "terminal.whoamiOutput":"IT Student<br>Web Developer<br>QA Learner<br>Problem Solver", "terminal.statusOutput":"Learning...<br>Building...<br>Experimenting...", "terminal.commandLabel":"Terminal command", "terminal.placeholder":"type about, skills, projects, contact, status",
      "contact.openChannels":"OPEN_CHANNELS", "contact.encrypted":"ENCRYPTED", "contact.ready":"READY", "contact.toConnect":"TO CONNECT?", "contact.openEmail":"OPEN EMAIL",
      "footer.designed":"DESIGNED AS A DEVELOPER COMMAND CENTER", "hud.title":"DEVELOPER HUD", "hud.online":"SYSTEM ONLINE", "hud.mode":"MODE", "hud.focus":"FOCUS", "hud.webDev":"WEB DEV", "hud.qa":"QA", "hud.energy":"ENERGY", "hud.building":"BUILDING", "hud.welcome":"Welcome, developer.",
      "nav.open":"Open navigation", "meta.title":"SORIYA // Developer Command Center", "meta.description":"Soriya MUT — futuristic anime-inspired developer portfolio.", "common.avatarFallback":"ANIME AVATAR<br>URL REQUIRED", "common.aboutVisual":"ABOUT // VISUAL", "terminal.chip.about":"about", "terminal.chip.skills":"skills", "terminal.chip.projects":"projects", "terminal.chip.contact":"contact", "terminal.chip.status":"status", "terminal.chip.help":"help"
    },
    km: {
      "nav.home": "ទំព័រដើម", "nav.about": "អំពីខ្ញុំ", "nav.skills": "ជំនាញ", "nav.projects": "គម្រោង", "nav.journey": "ដំណើរ", "nav.contact": "ទំនាក់ទំនង",
      "hero.eyebrow": "បានរកឃើញសញ្ញាអ្នកអភិវឌ្ឍន៍", "hero.hello": "សួស្តី ខ្ញុំឈ្មោះ", "hero.nameFirst":"សូរិយា", "hero.nameLast":"មុត", "hero.role":"អ្នកអភិវឌ្ឍន៍គេហទំព័រ", "hero.roleCode":"&lt; អ្នកអភិវឌ្ឍន៍គេហទំព័រ /&gt;", "hero.explore": "មើលគម្រោង", "hero.connect": "ទាក់ទងខ្ញុំ",
      "hero.description": "ខ្ញុំជានិស្សិត IT ដែលចូលចិត្តការអភិវឌ្ឍន៍គេហទំព័រ ការសរសេរកម្មវិធី គុណភាពកម្មវិធី និងការបង្កើតបទពិសោធន៍ឌីជីថលដែលមានអត្ថន័យ។",
      "about.title": "លើសពីគ្រាន់តែជានិស្សិត", "about.subtitle": "អ្នករៀនដែលបម្លែងការចង់ដឹងទៅជាការអនុវត្ត និងការសាកល្បង។",
      "about.paragraph1": "ខ្ញុំឈ្មោះ សូរិយា មុត។ ខ្ញុំជានិស្សិត IT នៅ Passerelles Numériques Cambodia។ ចំណាប់អារម្មណ៍សំខាន់របស់ខ្ញុំគឺ Web Development, Programming, Software Quality និង Technology។",
      "about.paragraph2": "ខ្ញុំចូលចិត្តរៀនតាមរយៈការបង្កើតគម្រោង ដោះស្រាយបញ្ហាកម្មវិធី សិក្សាពីតម្រូវការអ្នកប្រើប្រាស់ និងសាកល្បងបច្ចេកវិទ្យាថ្មីៗ។",
      "skills.title": "ឃ្លាំងបច្ចេកវិទ្យារបស់ខ្ញុំ", "skills.subtitle": "ឧបករណ៍ និងចំណេះដឹងដែលខ្ញុំកំពុងរៀនតាមរយៈការអនុវត្ត។",
      "projects.title": "អ្វីដែលខ្ញុំបានបង្កើត", "projects.subtitle": "ជំហានតូចៗ ការអនុវត្តពិត និងការសាកល្បងដែលកាន់តែប្រសើរ។",
      "system.title": "ស្ថានភាពប្រព័ន្ធ", "journey.title": "ដំណើររបស់ខ្ញុំ", "journey.subtitle": "ដំណើរសិក្សាដែលផ្តោតលើការរីកចម្រើនជាក់ស្តែង។",
      "missions.title": "កម្រិតបន្ទាប់", "strengths.title": "អ្វីដែលធ្វើឱ្យខ្ញុំខុសគេ",
      "contact.title": "តោះបង្កើតអ្វីមួយដែលមានអត្ថន័យ", "contact.description": "មានគម្រោង ឱកាស ឬចង់ស្គាល់គ្នា? ខ្ញុំរីករាយក្នុងការស្តាប់ពីអ្នក។",
      "boot.initializing":"កំពុងចាប់ផ្តើម", "boot.loading":"កំពុងផ្ទុកផ្នែកស្នូល Portfolio", "boot.connecting":"កំពុងភ្ជាប់ទៅរបៀបអ្នកអភិវឌ្ឍន៍",
      "common.buildLearnGrow":"បង្កើត • រៀន • រីកចម្រើន", "common.learning":"● កំពុងរៀន", "common.active":"● សកម្ម", "common.practicing":"● កំពុងអនុវត្ត", "common.scrollExplore":"រមូរចុះក្រោមដើម្បីស្វែងយល់", "common.visualId":"លេខសម្គាល់រូបភាព៖ ០១", "common.build":"បង្កើត", "common.practicalProjects":"គម្រោងអនុវត្តជាក់ស្តែង", "common.learn":"រៀន", "common.newTechnologies":"បច្ចេកវិទ្យាថ្មីៗ", "common.test":"តេស្ត", "common.qualityMindset":"ផ្នត់គំនិតផ្តោតលើគុណភាព", "common.online":"● ONLINE", "common.learningWord":"កំពុងរៀន", "common.activeWord":"សកម្ម", "common.practicingWord":"កំពុងអនុវត្ត", "common.webDevelopment":"ការអភិវឌ្ឍន៍គេហទំព័រ", "common.keepLearning":"បន្តរៀនជានិច្ច",
      "sections.profile":"០១ / ប្រវត្តិរូប", "sections.arsenal":"០២ / ឃ្លាំងជំនាញ", "sections.builds":"០៣ / គម្រោង", "sections.liveHud":"០៤ / ស្ថានភាពផ្ទាល់", "sections.path":"០៥ / ដំណើរ", "sections.nextQuests":"០៦ / បេសកកម្មបន្ទាប់", "sections.console":"០៧ / កុងសូល", "sections.traits":"០៨ / ចំណុចខ្លាំង", "sections.connection":"០៩ / ទំនាក់ទំនង",
      "profile.characterFile":"CHARACTER_PROFILE.exe", "profile.developerUnit":"ក្រុមអ្នកអភិវឌ្ឍន៍ / ០១", "profile.name":"ឈ្មោះ", "profile.role":"តួនាទី", "profile.itStudent":"និស្សិត IT", "profile.class":"ថ្នាក់", "profile.webDeveloper":"អ្នកអភិវឌ្ឍន៍គេហទំព័រ", "profile.specialty":"ជំនាញពិសេស", "profile.problemSolving":"ការដោះស្រាយបញ្ហា", "profile.status":"ស្ថានភាព", "profile.mission":"បេសកកម្ម", "profile.developerXp":"ពិន្ទុបទពិសោធន៍អ្នកអភិវឌ្ឍន៍", "profile.learningMode":"របៀបសិក្សា", "profile.progressNote":"សូចនាករវឌ្ឍនភាពសម្រាប់ការបង្ហាញប៉ុណ្ណោះ — មិនមែនជាគុណវុឌ្ឍិពិតទេ",
      "system.portfolioOnline":"PORTFOLIO កំពុងដំណើរការ", "system.currentMode":"របៀបបច្ចុប្បន្ន", "system.currentFocus":"ការផ្តោតអារម្មណ៍បច្ចុប្បន្ន", "system.buildStatus":"ស្ថានភាពការបង្កើត", "system.mindset":"ផ្នត់គំនិត",
      "journey.present":"២០២៦ — បច្ចុប្បន្ន", "journey.itWeb":"IT / ការអភិវឌ្ឍន៍គេហទំព័រ", "journey.description":"កំពុងអភិវឌ្ឍជំនាញបច្ចេកទេស និងវិជ្ជាជីវៈតាមរយៈការរៀនអនុវត្តក្នុងការសរសេរកម្មវិធី ការអភិវឌ្ឍន៍គេហទំព័រ Database ការអភិវឌ្ឍកម្មវិធី និងការធានាគុណភាពកម្មវិធី។",
      "terminal.title":"ស្ថានីយអ្នកអភិវឌ្ឍន៍", "terminal.subtitle":"ព័ត៌មានអំពី Portfolio ដែលអាចអន្តរកម្មបាន — មិនមានការប្រតិបត្តិពាក្យបញ្ជាប្រព័ន្ធពិតទេ។", "terminal.whoamiOutput":"និស្សិត IT<br>អ្នកអភិវឌ្ឍន៍គេហទំព័រ<br>អ្នករៀន QA<br>អ្នកដោះស្រាយបញ្ហា", "terminal.statusOutput":"កំពុងរៀន...<br>កំពុងបង្កើត...<br>កំពុងសាកល្បង...", "terminal.commandLabel":"ពាក្យបញ្ជាស្ថានីយ", "terminal.placeholder":"វាយ about, skills, projects, contact ឬ status",
      "contact.openChannels":"បណ្តាញទំនាក់ទំនង", "contact.encrypted":"បានអ៊ិនគ្រីប", "contact.ready":"រួចរាល់", "contact.toConnect":"ត្រៀមទំនាក់ទំនង?", "contact.openEmail":"បើកអ៊ីមែល",
      "footer.designed":"រចនាជា Developer Command Center", "hud.title":"ផ្ទាំងគ្រប់គ្រងអ្នកអភិវឌ្ឍន៍", "hud.online":"ប្រព័ន្ធកំពុងដំណើរការ", "hud.mode":"របៀប", "hud.focus":"ការផ្តោត", "hud.webDev":"WEB DEV", "hud.qa":"QA", "hud.energy":"ថាមពល", "hud.building":"កំពុងបង្កើត", "hud.welcome":"សូមស្វាគមន៍ អ្នកអភិវឌ្ឍន៍។",
      "nav.open":"បើកម៉ឺនុយ", "meta.title":"សូរិយា // មជ្ឈមណ្ឌលអ្នកអភិវឌ្ឍន៍", "meta.description":"Portfolio របស់ សូរិយា ម៉ុត — រចនាបែបទំនើប និងបែប Anime សម្រាប់អ្នកអភិវឌ្ឍន៍។", "common.avatarFallback":"រូបតំណាង Anime<br>ត្រូវការតំណរូបភាព", "common.aboutVisual":"អំពីខ្ញុំ // រូបភាព", "terminal.chip.about":"អំពីខ្ញុំ", "terminal.chip.skills":"ជំនាញ", "terminal.chip.projects":"គម្រោង", "terminal.chip.contact":"ទំនាក់ទំនង", "terminal.chip.status":"ស្ថានភាព", "terminal.chip.help":"ជំនួយ"
    }
  };

  function safeText(value) {
    return String(value ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[c]));
  }

  function applyLanguage() {
    const dict = translations[state.lang];
    $$("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });
    $$("[data-i18n-html]").forEach(el => {
      const key = el.dataset.i18nHtml;
      if (dict[key]) el.innerHTML = dict[key];
    });
    $$("[data-i18n-attr]").forEach(el => {
      const pairs = el.dataset.i18nAttr.split("|");
      pairs.forEach(pair => {
        const [attr, key] = pair.split(":");
        if (dict[key]) el.setAttribute(attr, dict[key]);
      });
    });
    $$("[data-i18n-attr-placeholder]").forEach(el => {
      const key = el.dataset.i18nAttrPlaceholder;
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    document.documentElement.lang = state.lang === "km" ? "km" : "en";
    document.body.classList.toggle("khmer-mode", state.lang === "km");
    localStorage.setItem("portfolio-lang", state.lang);
    renderSkills();
    renderProjects();
    renderMissions();
    renderStrengths();
    renderContact();
    renderTypingRoles();
  }

  function applyTheme() {
    document.documentElement.dataset.theme = state.theme;
    $("#themeToggle").textContent = state.theme === "dark" ? "☼" : "☾";
    localStorage.setItem("portfolio-theme", state.theme);
  }

  function setImage(img, url, fallback) {
    if (!img || !url) return;
    img.src = url;
    img.addEventListener("error", () => {
      img.style.display = "none";
      fallback?.classList.add("show");
    }, { once: true });
  }

  function renderProfile() {
    const p = PortfolioData.profile;
    if (!p) return;
    setImage($("#avatar"), PortfolioData.images.avatar, $("#avatarFallback"));
    setImage($("#aboutImage"), PortfolioData.images.aboutImage, $(".image-fallback"));
    $("#heroBackdrop").style.backgroundImage = `url("${PortfolioData.images.heroBackground}")`;
    $(".contact-bg").style.backgroundImage = `url("${PortfolioData.images.contactBackground}")`;
  }

  function renderSkills() {
    const skills = PortfolioData.skills.skills;
    $("#skillsGrid").innerHTML = skills.map((skill, i) => `
      <article class="skill-card panel reveal" style="--delay:${i * 60}ms">
        <div class="skill-top"><span class="skill-icon">${safeText(skill.icon)}</span><span class="skill-level">${safeText(typeof skill.level === "object" ? skill.level[state.lang] : skill.level)}</span></div>
        <h3>${safeText(skill.name)}</h3>
        <p>${safeText(typeof skill.description === "object" ? skill.description[state.lang] : skill.description)}</p>
        <div class="skill-meter"><i style="width:${55 + (i % 4) * 10}%"></i></div>
      </article>
    `).join("");
    PortfolioAnimations.init();
  }

  function renderProjects() {
    const projects = PortfolioData.projects.projects;
    const images = PortfolioData.images.projects || [];
    $("#projectsGrid").innerHTML = projects.map((project, i) => {
      const image = images.find(x => x.id === project.id)?.image || "";
      return `
        <article class="project-card panel reveal">
          <div class="project-image">
            <img src="${safeText(image)}" alt="${safeText(project.title[state.lang])}" loading="lazy"
              onerror="this.style.display='none';this.parentElement.classList.add('broken')">
            <div class="project-image-fallback">${state.lang === "km" ? "គម្រោង // " : "PROJECT // "}${safeText(project.number)}</div>
            <span class="project-number">${safeText(project.number)}</span>
          </div>
          <div class="project-body">
            <span class="project-category">${safeText(project.category[state.lang])}</span>
            <h3>${safeText(project.title[state.lang])}</h3>
            <p>${safeText(project.description[state.lang])}</p>
            <div class="tech-list">${project.technologies.map(t => `<span>${safeText(t)}</span>`).join("")}</div>
            <a href="${safeText(project.link)}" class="project-link">${state.lang === "km" ? "មើលគម្រោង" : "VIEW PROJECT"} <b>↗</b></a>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderMissions() {
    $("#missionsGrid").innerHTML = PortfolioData.site.missions.map(m => `
      <article class="mission-card panel reveal">
        <div class="mission-number">${safeText(m.number)}</div>
        <div><span class="mission-status">${safeText(typeof m.status === "object" ? m.status[state.lang] : m.status)}</span><h3>${safeText(typeof m.title === "object" ? m.title[state.lang] : m.title)}</h3></div>
        <span class="mission-arrow">↗</span>
      </article>
    `).join("");
  }

  function renderStrengths() {
    $("#strengthGrid").innerHTML = PortfolioData.site.strengths.map(s => `
      <article class="strength-card panel reveal">
        <span class="strength-icon">${safeText(s.icon)}</span>
        <h3>${safeText(typeof s.title === "object" ? s.title[state.lang] : s.title)}</h3>
        <p>${safeText(typeof s.description === "object" ? s.description[state.lang] : s.description)}</p>
      </article>
    `).join("");
  }

  function renderContact() {
    const c = PortfolioData.site.contact;
    const items = [
      [state.lang === "km" ? "អ៊ីមែល" : "EMAIL", c.email, c.email && !c.email.startsWith("REPLACE") ? `mailto:${c.email}` : ""],
      ["GITHUB", c.github, c.github],
      ["LINKEDIN", c.linkedin, c.linkedin],
      ["TELEGRAM", c.telegram, c.telegram],
      ["FACEBOOK", c.facebook, c.facebook]
    ].filter(item => item[1]);

    $("#contactLinks").innerHTML = items.map(([label, value, href]) => `
      <a class="contact-link" href="${safeText(href || "#")}" ${href && !href.startsWith("mailto:") ? 'target="_blank" rel="noopener noreferrer"' : ""}>
        <span>${safeText(label)}</span><b>${safeText(value)}</b><i>↗</i>
      </a>
    `).join("") || `<div class="contact-empty">${state.lang === "km" ? "សូមបន្ថែមតំណទំនាក់ទំនងរបស់អ្នកនៅក្នុង" : "Add your contact links in"} <code>data/site.json</code>.</div>`;

    const email = c.email && !c.email.startsWith("REPLACE") ? `mailto:${c.email}` : "#";
    $("#emailButton").href = email;
  }

  function renderTypingRoles() {
    const roles = PortfolioData.profile.roles[state.lang] || PortfolioData.profile.roles.en;
    const target = $("#typedRole");
    if (!target) return;

    if (window.__typingTimer) clearInterval(window.__typingTimer);
    let roleIndex = 0, charIndex = 0, deleting = false;

    window.__typingTimer = setInterval(() => {
      const role = roles[roleIndex];
      target.textContent = deleting ? role.slice(0, --charIndex) : role.slice(0, ++charIndex);

      if (!deleting && charIndex === role.length) {
        deleting = true;
        setTimeout(() => {}, 900);
      } else if (deleting && charIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }, 90);
  }

  function setupNavigation() {
    const nav = $("#navbar");
    const menu = $("#navMenu");
    $("#menuToggle").addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      $("#menuToggle").setAttribute("aria-expanded", String(open));
    });

    $$(".nav-link").forEach(link => link.addEventListener("click", () => menu.classList.remove("open")));

    const sections = $$("main section[id]");
    const links = $$(".nav-link");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => observer.observe(section));

    window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 40), { passive: true });
  }

  function setupTerminal() {
    const body = $("#terminalBody");
    const input = $("#terminalCommand");
    const form = $("#terminalForm");

    const commandsByLang = {
      en: {
        about: "Soriya MUT — IT Student, Web Developer, QA Learner, Problem Solver.",
        skills: "HTML5 • CSS3 • SASS/SCSS • Python • Flask • Git/GitHub • QA • Responsive Design.",
        projects: "IT Awareness Club • Python Mini Projects • Digital Service Research.",
        contact: "Open the CONTACT section to find available channels.",
        status: "Learning... Building... Experimenting... KEEP LEARNING.",
        help: "Available: about, skills, projects, contact, status, clear, help"
      },
      km: {
        about: "សូរិយា ម៉ុត — និស្សិត IT, អ្នកអភិវឌ្ឍន៍គេហទំព័រ, អ្នករៀន QA និងអ្នកដោះស្រាយបញ្ហា។",
        skills: "HTML5 • CSS3 • SASS/SCSS • Python • Flask • Git/GitHub • QA • Responsive Design។",
        projects: "ក្លឹប IT Awareness • គម្រោងតូចៗជាមួយ Python • ស្រាវជ្រាវសេវាឌីជីថល។",
        contact: "បើកផ្នែក ទំនាក់ទំនង ដើម្បីស្វែងរកបណ្តាញទំនាក់ទំនងដែលមាន។",
        status: "កំពុងរៀន... កំពុងបង្កើត... កំពុងសាកល្បង... បន្តរៀនជានិច្ច។",
        help: "អាចប្រើបាន៖ about, skills, projects, contact, status, clear, help"
      }
    };
    const commands = commandsByLang[state.lang];

    function run(command) {
      const cmd = command.trim().toLowerCase();
      if (!cmd) return;

      const line = document.createElement("div");
      line.innerHTML = `soriya@portfolio:~$ <span>${safeText(cmd)}</span>`;
      body.appendChild(line);

      if (cmd === "clear") {
        body.innerHTML = "";
      } else {
        const out = document.createElement("div");
        out.className = "terminal-output";
        out.innerHTML = safeText(commands[cmd] || `Command not found: ${cmd}. Type "help".`);
        body.appendChild(out);
      }
      body.scrollTop = body.scrollHeight;
    }

    form.addEventListener("submit", e => {
      e.preventDefault();
      run(input.value);
      input.value = "";
    });

    $$(".command-chips button").forEach(btn => btn.addEventListener("click", () => run(btn.dataset.command)));
  }

  function setupToggles() {
    $("#langToggle").addEventListener("click", () => {
      state.lang = state.lang === "en" ? "km" : "en";
      applyLanguage();
      showToast(state.lang === "km" ? "ភាសាខ្មែរ បានបើក" : "English mode enabled");
    });

    $("#themeToggle").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      applyTheme();
      showToast(`${state.theme.toUpperCase()} MODE`);
    });
  }

  function setupEasterEggs() {
    let clicks = 0, resetTimer;
    $("#avatarFrame").addEventListener("click", () => {
      clicks++;
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => clicks = 0, 1000);
      if (clicks >= 4) {
        clicks = 0;
        showToast(state.lang === "km" ? "ប្រព័ន្ធកំពុងដំណើរការ // សូមស្វាគមន៍ អ្នកអភិវឌ្ឍន៍។" : "SYSTEM ONLINE // WELCOME, DEVELOPER.");
        $("#hudOverlay").classList.add("open");
      }
    });

    $("#hudClose").addEventListener("click", () => $("#hudOverlay").classList.remove("open"));
    $("#hudOverlay").addEventListener("click", e => {
      if (e.target === $("#hudOverlay")) $("#hudOverlay").classList.remove("open");
    });

    window.addEventListener("keydown", e => {
      if (e.key.toLowerCase() === "k" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
        $("#hudOverlay").classList.toggle("open");
      }
    });
  }

  function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  async function init() {
    $("#year").textContent = new Date().getFullYear();
    applyTheme();
    setupNavigation();
    setupToggles();
    setupTerminal();
    setupEasterEggs();

    try {
      await loadPortfolioData();
      renderProfile();
      renderSkills();
      renderProjects();
      renderMissions();
      renderStrengths();
      renderContact();
      applyLanguage();
      PortfolioAnimations.init();
    } catch (error) {
      console.error(error);
      showToast(state.lang === "km" ? "មិនអាចផ្ទុកទិន្នន័យ Portfolio បានទេ។ សូមប្រើ Local Server។" : "Portfolio data could not be loaded. Use a local server.");
    }
  }

  function hideBootScreen() {
    const boot = $("#boot-screen");
    if (!boot) return;
    boot.classList.add("hidden");
  }

  // Do not wait for every image/font on the page. Hide the intro as soon
  // as the app is ready so the portfolio feels instant.
  document.addEventListener("portfolio:data-ready", () => {
    requestAnimationFrame(() => setTimeout(hideBootScreen, 120));
  });

  document.addEventListener("portfolio:data-ready", () => {});
  init();
})();
