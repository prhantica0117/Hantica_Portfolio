"use strict";

document.documentElement.classList.add("js");

/*
 * DATA LAYER
 * Every repeating element on the page lives here. Swap the placeholder
 * persona, project URLs, and social URLs below without touching the markup,
 * then the renderers will rebuild the UI.
 */
const portfolioData = {
  site: {
    name: "Paul Ryje Hantica",
    initials: "PRH",
    role: "BSIT Student & Web Developer",
    email: "prhantica0117@gmail.com",
    availability: "Open to internships and student collaborations · based in Cebu, Philippines",
    contactEndpoint: ""
  },

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    eyebrow: "3rd Year BSIT Student · Open to internships",
    headlineLead: "Learning by doing.",
    headlineAccent: "Building with purpose.",
    description:
      "I'm Paul, a third-year BSIT student at Consolatrix College of Toledo City. I build web and mobile projects with TypeScript, PHP, and Django, and I'm always looking for the next thing to learn.",
    primaryCta: "View my projects",
    secondaryCta: "Let's connect",
    stats: [
      { value: "3rd", label: "Year level" },
      { value: "BSIT", label: "Degree program" },
      { value: "Cebu", label: "Based in" }
    ],
    card: {
      status: "Open to internships",
      indexLabel: "Portfolio 2026",
      role: "BSIT Student & Web Developer",
      location: "Dumlog, Toledo City, Cebu, Philippines",
      meta: [
        { label: "Currently building", value: "QR-ATT Attendance System" },
        { label: "Core focus", value: "Web & mobile apps" }
      ],
      signalLabel: "Internship availability",
      signalValue: 100,
      footerLeft: "Consolatrix College",
      footerRight: "3rd Year"
    },
    badges: [
      { label: "TypeScript", icon: "code", position: "top" },
      { label: "Expo", icon: "layers", position: "right" },
      { label: "Django", icon: "server", position: "bottom" }
    ]
  },

  about: {
    intro:
      "A third-year BSIT student at Consolatrix College of Toledo City, Inc., turning coursework into practical web and mobile projects.",
    lead: "I build to understand. Every project is a chance to turn a class concept into something people can actually use.",
    paragraphs: [
      "I'm currently in my third year of BSIT at Consolatrix College of Toledo City, Inc. My work so far spans mobile attendance systems, Django dashboards, PHP social platforms, and small frontend tools.",
      "I learn best by shipping: reading the docs, breaking something, fixing it, and documenting the result. I care about clean structure, readable code, and interfaces that work on a phone first.",
      "Right now I'm focused on strengthening my TypeScript, Supabase, and Django skills while looking for an internship where I can contribute to a real product team."
    ],
    highlights: [
      { icon: "layers", text: "Built QR-ATT, an Expo + Supabase attendance system with live check-in tracking." },
      { icon: "server", text: "Developed a Django library inventory dashboard with search and status reporting." },
      { icon: "globe", text: "Created a PHP/MySQL social media app with authentication, profiles, and posts." },
      { icon: "code", text: "Exploring responsive frontend design through hand-coded HTML, CSS, and JavaScript projects." }
    ],
    quote: "The fastest way I've learned is to build something real, break it, and understand why.",
    quoteAuthor: "Paul Ryje Hantica"
  },

  skills: [
    { name: "TypeScript", icon: "code" },
    { name: "JavaScript", icon: "code" },
    { name: "HTML5", icon: "layout" },
    { name: "CSS3", icon: "pen" },
    { name: "React Native", icon: "layers" },
    { name: "Expo", icon: "zap" },
    { name: "Supabase", icon: "server" },
    { name: "PHP", icon: "server" },
    { name: "MySQL", icon: "server" },
    { name: "Python", icon: "code" },
    { name: "Django", icon: "server" },
    { name: "Git & GitHub", icon: "github" }
  ],

  projects: [
    {
      title: "QR-ATT — Smart School Attendance",
      category: "Mobile app · 2026",
      description:
        "A school attendance platform where staff create events or class schedules, generate QR codes, and students check in and out while teachers monitor live attendance summaries.",
      tech: ["Expo", "TypeScript", "Supabase", "expo-router"],
      liveUrl: "",
      repoUrl: "https://github.com/prhantica0117/ED_MIDTERM_PROJECT",
      icon: "layers",
      accent: ["#3b82f6", "#22d3ee"],
      featured: true
    },
    {
      title: "Library Inventory Dashboard",
      category: "Full-stack web app · 2026",
      description:
        "A Django book inventory dashboard with search across title, author, ISBN, and genre, plus status tracking and live summary counts.",
      tech: ["Django", "Python", "SQLite", "Bootstrap"],
      liveUrl: "",
      repoUrl: "https://github.com/prhantica0117/SIA_Finals",
      icon: "server",
      accent: ["#8b5cf6", "#6366f1"],
      featured: false
    },
    {
      title: "Socmed",
      category: "Web app · 2026",
      description:
        "A PHP/MySQL social media app with registration, login sessions, user profiles, and a timeline for creating and loading posts.",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
      liveUrl: "",
      repoUrl: "https://github.com/prhantica0117/Socmed",
      icon: "globe",
      accent: ["#22d3ee", "#8b5cf6"],
      featured: false
    },
    {
      title: "QR Attendance Module",
      category: "Coursework · 2026",
      description:
        "An Expo and TypeScript coursework build that established the QR check-in flow and interface foundations for the full attendance system.",
      tech: ["Expo", "TypeScript", "React Native"],
      liveUrl: "",
      repoUrl: "https://github.com/prhantica0117/ED_QR_Module4",
      icon: "zap",
      accent: ["#f472b6", "#8b5cf6"],
      featured: false
    },
    {
      title: "Calculator App",
      category: "Frontend · 2026",
      description:
        "A responsive browser calculator built with vanilla HTML, CSS, and JavaScript, focused on clean DOM logic and mobile-friendly layout.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveUrl: "",
      repoUrl: "https://github.com/prhantica0117/AppsDev",
      icon: "code",
      accent: ["#3b82f6", "#a855f7"],
      featured: false
    }
  ],

  socials: [
    { label: "GitHub", url: "https://github.com/prhantica0117", icon: "github" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/paul-ryje-hantica-b06154299/",
      icon: "linkedin"
    },
    { label: "Email", url: "mailto:prhantica0117@gmail.com", icon: "mail" }
  ],

  projectTypes: [
    "Internship opportunity",
    "School collaboration",
    "Freelance project",
    "Student organization",
    "Something else"
  ]
};

/*
 * SVG ICON LIBRARY
 * Kept inline so the portfolio stays dependency-free and crisp on every display.
 */
const iconPaths = {
  github:
    '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  mail:
    '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  external:
    '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  code: '<path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/>',
  layers:
    '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  cube:
    '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z"/><path d="m3 7 9 5 9-5"/><path d="M12 12v10"/>',
  sparkles:
    '<path d="m12 3-1.2 3.6L7 8l3.8 1.4L12 13l1.2-3.6L17 8l-3.8-1.4L12 3Z"/><path d="M5 15l-.6 1.8-1.9.7 1.9.7L5 20l.6-1.8 1.9-.7-1.9-.7L5 15Z"/><path d="M19 14l-.5 1.5-1.5.5 1.5.5L19 18l.5-1.5 1.5-.5-1.5-.5L19 14Z"/>',
  pen:
    '<path d="m12 19 7-7 3 3-7 7-3-3Z"/><path d="m18 13-8.5 8.5L3 22l.5-6.5L12 7l6 6Z"/><path d="m15 4 5 5"/>',
  accessibility:
    '<circle cx="12" cy="4" r="2"/><path d="M4 8h16"/><path d="M12 8v6"/><path d="m8 22 4-8 4 8"/>',
  server:
    '<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
  zap: '<path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/>',
  layout:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
  globe:
    '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>'
};

const icon = (name, className = "") =>
  `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${
    iconPaths[name] || iconPaths.sparkles
  }</svg>`;

const escapeHTML = (value = "") =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[character];
  });

const safeUrl = (value = "") => {
  const url = String(value).trim();
  return /^(https?:\/\/|mailto:|#|\/)/i.test(url) ? escapeHTML(url) : "#";
};

const safeColor = (value, fallback) => (/^#[0-9a-f]{3,8}$/i.test(value) ? value : fallback);

const $ = (id) => document.getElementById(id);

const setText = (id, value) => {
  const element = $(id);
  if (element) element.textContent = value;
};

/*
 * RENDERERS
 * Each function maps structured data into a container with template literals.
 */
const renderNavigation = () => {
  const navList = $("nav-links");

  navList.innerHTML = portfolioData.navLinks
    .map(
      (link) =>
        `<li><a class="nav-link" href="${escapeHTML(link.href)}">${escapeHTML(link.label)}</a></li>`
    )
    .join("");
};

const renderHero = () => {
  const { site, hero } = portfolioData;
  const card = hero.card;
  const signal = Math.min(100, Math.max(0, Number(card.signalValue) || 0));

  setText("hero-eyebrow-text", hero.eyebrow);
  setText("hero-headline-lead", hero.headlineLead);
  setText("hero-headline-accent", hero.headlineAccent);
  setText("hero-description", hero.description);
  setText("hero-primary-label", hero.primaryCta);
  setText("hero-secondary-label", hero.secondaryCta);

  $("hero-stats").innerHTML = hero.stats
    .map(
      (stat) =>
        `<div class="hero-stat"><dt>${escapeHTML(stat.label)}</dt><dd>${escapeHTML(stat.value)}</dd></div>`
    )
    .join("");

  $("hero-card").innerHTML = `
    <div class="hero-card__top">
      <span class="hero-card__status"><span class="status-dot" aria-hidden="true"></span>${escapeHTML(card.status)}</span>
      <span class="hero-card__index">${escapeHTML(card.indexLabel)}</span>
    </div>
    <div class="hero-card__identity">
      <div class="hero-card__avatar">${escapeHTML(site.initials)}</div>
      <div>
        <p class="hero-card__label">${escapeHTML(card.role)}</p>
        <h2>${escapeHTML(site.name)}</h2>
        <p class="hero-card__location">${escapeHTML(card.location)}</p>
      </div>
    </div>
    <div class="hero-card__meta">
      ${card.meta
        .map(
          (item) =>
            `<div><span>${escapeHTML(item.label)}</span><strong>${escapeHTML(item.value)}</strong></div>`
        )
        .join("")}
    </div>
    <div class="signal">
      <div class="signal__header"><span>${escapeHTML(card.signalLabel)}</span><span>${signal}%</span></div>
      <div class="signal__track"><span style="width: ${signal}%"></span></div>
    </div>
    <div class="hero-card__footer">
      <span>${escapeHTML(card.footerLeft)}</span>
      <span class="live">${escapeHTML(card.footerRight)}</span>
    </div>
  `;

  const allowedPositions = ["top", "right", "bottom"];
  $("hero-badges").innerHTML = hero.badges
    .map((badge, index) => {
      const position = allowedPositions.includes(badge.position) ? badge.position : "top";
      return `<span class="floating-badge floating-badge--${position}" style="--badge-delay: ${index * -1.5}s">${icon(
        badge.icon
      )}${escapeHTML(badge.label)}</span>`;
    })
    .join("");
};

const renderAbout = () => {
  const { about, skills } = portfolioData;

  setText("about-intro", about.intro);
  setText("about-lead", about.lead);
  setText("about-quote", about.quote);
  setText("about-quote-author", about.quoteAuthor);
  setText("skills-count", `${skills.length} tools`);

  $("about-paragraphs").innerHTML = about.paragraphs
    .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
    .join("");

  $("about-highlights").innerHTML = about.highlights
    .map(
      (highlight) =>
        `<li class="about-highlight"><span class="about-highlight__icon">${icon(
          highlight.icon
        )}</span><span>${escapeHTML(highlight.text)}</span></li>`
    )
    .join("");

  $("skill-badges").innerHTML = skills
    .map((skill) => `<span class="skill-badge">${icon(skill.icon)}${escapeHTML(skill.name)}</span>`)
    .join("");
};

const renderProjectCard = (project, index) => {
  const accentA = safeColor(project.accent?.[0], "#3b82f6");
  const accentB = safeColor(project.accent?.[1], "#8b5cf6");
  const featuredClass = project.featured ? " project-card--featured" : "";

  return `
    <article
      class="project-card glass${featuredClass}"
      data-tilt
      data-tilt-strength="${project.featured ? "3.5" : "5"}"
      data-reveal
      style="--accent-a: ${accentA}; --accent-b: ${accentB}; --reveal-delay: ${index * 70}ms"
    >
      <span class="project-card__aura" aria-hidden="true"></span>
      <div class="project-card__top">
        <span class="project-icon" aria-hidden="true">${icon(project.icon)}</span>
        <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="project-card__body">
        <p class="project-kicker">${escapeHTML(project.category)}</p>
        <h3>${escapeHTML(project.title)}</h3>
        <p class="project-card__description">${escapeHTML(project.description)}</p>
      </div>
      <ul class="tech-list" aria-label="Technologies used in ${escapeHTML(project.title)}">
        ${project.tech.map((tech) => `<li class="tech-tag">${escapeHTML(tech)}</li>`).join("")}
      </ul>
      <div class="project-links">
        ${
          project.liveUrl
            ? `<a class="project-link" href="${safeUrl(
                project.liveUrl
              )}" target="_blank" rel="noopener noreferrer" aria-label="View ${escapeHTML(
                project.title
              )} live site">${icon("external")}<span>Live site</span></a>`
            : ""
        }
        ${
          project.repoUrl
            ? `<a class="project-link project-link--muted" href="${safeUrl(
                project.repoUrl
              )}" target="_blank" rel="noopener noreferrer" aria-label="View ${escapeHTML(
                project.title
              )} source code">${icon("github")}<span>Source</span></a>`
            : ""
        }
      </div>
    </article>
  `;
};

const renderProjects = () => {
  const projects = portfolioData.projects;

  setText(
    "projects-intro",
    "A selection of school and personal projects, each built to solve a real problem and sharpen a new skill."
  );

  $("project-grid").innerHTML = projects.map(renderProjectCard).join("");
};

const renderContact = () => {
  const { site, socials, projectTypes } = portfolioData;

  setText(
    "contact-intro",
    "I'm open to internships, school collaborations, and entry-level opportunities where I can learn from a real team. If you're building something and think I can help, I'd love to hear about it."
  );
  setText("contact-email-text", site.email);
  setText("contact-availability", site.availability);

  $("contact-email").href = `mailto:${site.email}`;

  $("social-links").innerHTML = socials
    .map((social) => {
      const url = social.icon === "mail" ? `mailto:${site.email}` : social.url;
      const isExternal = /^https?:/i.test(url);
      return `<a class="social-link" href="${safeUrl(url)}"${
        isExternal ? ' target="_blank" rel="noopener noreferrer"' : ""
      }>${icon(social.icon)}<span>${escapeHTML(social.label)}</span></a>`;
    })
    .join("");

  $("project-type").innerHTML = `<option value="">Select a topic</option>${projectTypes
    .map((type) => `<option value="${escapeHTML(type)}">${escapeHTML(type)}</option>`)
    .join("")}`;
};

const renderSite = () => {
  const { site } = portfolioData;

  document.title = `${site.name} — ${site.role}`;
  document.querySelector(".brand")?.setAttribute("aria-label", `${site.name} home`);
  document.querySelectorAll("[data-site-name]").forEach((element) => {
    element.textContent = site.name;
  });
  document.querySelectorAll("[data-site-initials]").forEach((element) => {
    element.textContent = site.initials;
  });

  renderNavigation();
  renderHero();
  renderAbout();
  renderProjects();
  renderContact();

  setText("current-year", new Date().getFullYear());
};

/*
 * NAVIGATION
 * Mobile drawer controls, smooth same-page links, and scroll-spy states.
 */
const initNavigation = () => {
  const toggle = $("nav-toggle");
  const nav = $("site-nav");
  const links = Array.from(nav.querySelectorAll(".nav-link"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setOpen = (isOpen) => {
    nav.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  };

  const setActive = (id) => {
    links.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      nav.classList.contains("is-open") &&
      !nav.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      setOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820 && nav.classList.contains("is-open")) {
      setOpen(false);
    }
  });

  let activeFrame = 0;

  const updateActiveSection = () => {
    activeFrame = 0;
    const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 320);
    let currentId = sections[0]?.id;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      if (sectionTop <= marker) currentId = section.id;
    });

    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom && sections.length) currentId = sections[sections.length - 1].id;
    if (currentId) setActive(currentId);
  };

  const requestActiveUpdate = () => {
    if (!activeFrame) activeFrame = requestAnimationFrame(updateActiveSection);
  };

  window.addEventListener("scroll", requestActiveUpdate, { passive: true });
  window.addEventListener("resize", requestActiveUpdate);
  updateActiveSection();
};

/*
 * SCROLL UI
 * Glass header state and a slim gradient reading-progress indicator.
 */
const initScrollUI = () => {
  const header = $("site-header");
  const progressBar = $("scroll-progress-bar");
  let frame = 0;

  const update = () => {
    frame = 0;
    header.classList.toggle("is-scrolled", window.scrollY > 16);

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };

  const requestUpdate = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  update();
};

/*
 * REVEAL ON SCROLL
 * Uses IntersectionObserver so sections animate only when they enter view.
 */
const initReveal = () => {
  const elements = document.querySelectorAll("[data-reveal]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || reduceMotion) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((element) => observer.observe(element));
};

/*
 * 3D TILT
 * Pointer position feeds CSS custom properties, keeping the math out of CSS.
 */
const initTilt = () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (reduceMotion || !finePointer) return;

  document.querySelectorAll("[data-tilt]").forEach((element) => {
    const strength = Number(element.dataset.tiltStrength) || 5;
    let frame = 0;

    const handleMove = (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        frame = 0;
        element.style.setProperty("--ry", `${(x - 0.5) * strength * 2}deg`);
        element.style.setProperty("--rx", `${(0.5 - y) * strength * 2}deg`);
        element.style.setProperty("--mx", `${x * 100}%`);
        element.style.setProperty("--my", `${y * 100}%`);
      });
    };

    const reset = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      element.style.setProperty("--rx", "0deg");
      element.style.setProperty("--ry", "0deg");
      element.style.setProperty("--mx", "50%");
      element.style.setProperty("--my", "50%");
    };

    element.addEventListener("pointermove", handleMove);
    element.addEventListener("pointerleave", reset);
    element.addEventListener("pointercancel", reset);
  });
};

/*
 * CONTACT FORM
 * Validates inline. Set site.contactEndpoint to a JSON endpoint to send for real;
 * otherwise the form falls back to a prefilled email draft.
 */
const initContactForm = () => {
  const form = $("contact-form");
  if (!form) return;

  const status = $("form-status");
  const submitButton = $("form-submit");
  const submitLabel = $("form-submit-label");

  const fields = {
    name: {
      input: form.elements.name,
      error: $("name-error"),
      validate: (value) => (value.trim().length >= 2 ? "" : "Please share your name.")
    },
    email: {
      input: form.elements.email,
      error: $("email-error"),
      validate: (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Enter a valid email address."
    },
    message: {
      input: form.elements.message,
      error: $("message-error"),
      validate: (value) =>
        value.trim().length >= 10 ? "" : "Tell me a little more, at least 10 characters."
    }
  };

  const validateField = (key) => {
    const field = fields[key];
    const message = field.validate(field.input.value);
    const wrapper = field.input.closest(".field");

    field.error.textContent = message;
    wrapper.classList.toggle("is-invalid", Boolean(message));
    field.input.setAttribute("aria-invalid", String(Boolean(message)));

    return !message;
  };

  const clearField = (key) => {
    const field = fields[key];
    field.error.textContent = "";
    field.input.removeAttribute("aria-invalid");
    field.input.closest(".field").classList.remove("is-invalid");
  };

  Object.entries(fields).forEach(([key, field]) => {
    field.input.addEventListener("input", () => {
      if (field.error.textContent) clearField(key);
      if (status.textContent) {
        status.textContent = "";
        status.classList.remove("is-error");
      }
    });
    field.input.addEventListener("blur", () => {
      if (field.input.value.trim() || field.error.textContent) validateField(key);
    });
  });

  const setSubmitting = (isSubmitting) => {
    submitButton.disabled = isSubmitting;
    submitLabel.textContent = isSubmitting ? "Sending..." : "Send message";
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const isValid = Object.keys(fields)
      .map((key) => validateField(key))
      .every(Boolean);

    if (!isValid) {
      status.textContent = "Please fix the highlighted fields and try again.";
      status.classList.add("is-error");
      form.querySelector(".field.is-invalid input, .field.is-invalid textarea")?.focus();
      return;
    }

    const payload = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      projectType: form.elements.projectType.value,
      message: form.elements.message.value.trim()
    };

    setSubmitting(true);

    if (portfolioData.site.contactEndpoint) {
      try {
        const response = await fetch(portfolioData.site.contactEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error("Request failed");

        status.textContent = "Message sent. I will be in touch shortly.";
        status.classList.remove("is-error");
        form.reset();
        Object.keys(fields).forEach(clearField);
      } catch (error) {
        status.textContent = `Something went wrong. Please email ${portfolioData.site.email} directly.`;
        status.classList.add("is-error");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${payload.name}`);
    const body = encodeURIComponent(
      `Hi Paul,\n\n${payload.message}\n\nProject type: ${payload.projectType || "Not specified"}\n\n${payload.name}\n${payload.email}`
    );

    window.location.href = `mailto:${portfolioData.site.email}?subject=${subject}&body=${body}`;
    status.textContent = `Opening your email app. You can also write to ${portfolioData.site.email} directly.`;
    status.classList.remove("is-error");
    setSubmitting(false);
  });
};

const bootstrap = () => {
  renderSite();
  initNavigation();
  initScrollUI();
  initReveal();
  initTilt();
  initContactForm();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
