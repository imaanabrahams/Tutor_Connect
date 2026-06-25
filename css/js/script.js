/* ============================================================
   TutorConnect — Interactions
   Concepts: variables, objects, arrays, functions, conditionals,
   DOM manipulation, event handling, form validation, user feedback.
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- DATA ---------------- */
  const FEATURES = [
    {
      icon: "🎯",
      title: "Personalised Plans",
      text: "Tailored to your learning style and goals.",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      text: "Monitor your improvement over time.",
    },
    {
      icon: "💬",
      title: "1-on-1 Support",
      text: "Direct access to your tutor, any time.",
    },
    {
      icon: "🌐",
      title: "Flexible Online",
      text: "Learn from anywhere, at your own pace.",
    },
  ];

  // Each subject is a full page: short card text + tagline, about, topics list.
  const SERVICES = [
    {
      icon: "📚",
      title: "Mathematics",
      text: "Grade 8 to University level. Algebra, calculus, statistics, and more.",
      tagline: "From Grade 8 to university-level mastery.",
      about:
        "Build rock-solid foundations and tackle advanced topics with confidence. Our maths tutors break complex concepts into clear, manageable steps so the work finally clicks.",
      topics: [
        "Algebra & equations",
        "Calculus & limits",
        "Statistics & probability",
        "Geometry & trigonometry",
        "Financial maths",
        "University first-year support",
      ],
    },
    {
      icon: "🧪",
      title: "Science",
      text: "Physics & Chemistry with hands-on problem solving and concept mastery.",
      tagline: "Physics & Chemistry, made intuitive.",
      about:
        "Understand the why behind every formula and reaction. Our science tutors use real examples and guided problem solving to turn memorisation into genuine understanding.",
      topics: [
        "Mechanics & motion",
        "Electricity & magnetism",
        "Chemical reactions",
        "Organic chemistry",
        "Practical experiments",
        "Exam problem techniques",
      ],
    },
    {
      icon: "💻",
      title: "Programming",
      text: "HTML, CSS, JavaScript — from beginner fundamentals to real projects.",
      tagline: "Code from your first line to real projects.",
      about:
        "Learn to build for the web with HTML, CSS and JavaScript — starting from absolute beginner fundamentals and working up to projects you can actually show off.",
      topics: [
        "HTML & semantic markup",
        "CSS & responsive design",
        "JavaScript fundamentals",
        "The DOM & events",
        "Intro to Python",
        "Project-based learning",
      ],
    },
    {
      icon: "📖",
      title: "Languages",
      text: "English & Afrikaans — reading comprehension, writing, and grammar.",
      tagline: "English & Afrikaans, mastered.",
      about:
        "Strengthen reading comprehension, writing, and grammar in English and Afrikaans with experienced language tutors who make every text approachable.",
      topics: [
        "Reading comprehension",
        "Essay & creative writing",
        "Grammar & syntax",
        "Afrikaans Eerste & Tweede Taal",
        "Oral & presentation skills",
        "Matric language prep",
      ],
    },
    {
      icon: "📝",
      title: "Exam Preparation",
      text: "Structured revision, past papers, and strategies to maximise your marks.",
      tagline: "Walk into every exam ready.",
      about:
        "Structured revision, past papers, and proven techniques to maximise your marks. We focus on NSC and IEB exams and the strategy that turns preparation into results.",
      topics: [
        "Study timetables",
        "Past paper drills",
        "Memo analysis",
        "Time management",
        "Exam technique & calm",
        "NSC & IEB focus",
      ],
    },
    {
      icon: "🎨",
      title: "Art & Design",
      text: "Visual arts, design principles, composition, and creative techniques.",
      tagline: "Create with confidence.",
      about:
        "Explore visual arts, design principles, composition, and creative techniques with practicing artists and designers who help you build a portfolio you're proud of.",
      topics: [
        "Drawing & sketching",
        "Colour theory",
        "Composition",
        "Digital design basics",
        "Portfolio building",
        "Creative critique",
      ],
    },
  ];

  const TUTORS = [
    {
      name: "Dr. Sarah Mokoena",
      subject: "Mathematics",
      level: "Grade 8 – University",
      bio: "PhD in Applied Mathematics. Specialises in calculus and statistics.",
      rating: 4.9,
      reviews: 142,
      photo: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "James Dlamini",
      subject: "Science",
      level: "Physics & Chemistry",
      bio: "BSc Physics graduate with 6 years of tutoring experience.",
      rating: 4.8,
      reviews: 98,
      photo: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Priya Naidoo",
      subject: "Programming",
      level: "HTML, CSS, JavaScript",
      bio: "Senior front-end developer turned coding tutor. Passionate about beginner education.",
      rating: 4.9,
      reviews: 211,
      photo: "https://i.pravatar.cc/150?img=45",
    },
    {
      name: "Michael van der Berg",
      subject: "Languages",
      level: "English & Afrikaans",
      bio: "MA in Linguistics. Experienced in matric English and Afrikaans preparation.",
      rating: 4.7,
      reviews: 76,
      photo: "https://i.pravatar.cc/150?img=33",
    },
    {
      name: "Amahle Zulu",
      subject: "Exam Preparation",
      level: "All subjects, Grade 10–12",
      bio: "Former school teacher specialising in matric exam strategy and past papers.",
      rating: 5.0,
      reviews: 63,
      photo: "https://i.pravatar.cc/150?img=44",
    },
    {
      name: "David Peterson",
      subject: "Art & Design",
      level: "Visual Arts, All levels",
      bio: "Fine arts graduate and practicing designer with a passion for teaching creativity.",
      rating: 4.8,
      reviews: 54,
      photo: "https://i.pravatar.cc/150?img=15",
    },
    {
      name: "Nomsa Khumalo",
      subject: "Mathematics",
      level: "Grade 8 – Grade 12",
      bio: "Qualified mathematics teacher with 9 years of classroom and tutoring experience.",
      rating: 4.8,
      reviews: 119,
      photo: "https://i.pravatar.cc/150?img=49",
    },
    {
      name: "Ethan Botha",
      subject: "Science",
      level: "Chemistry & Biology",
      bio: "MSc Chemistry candidate. Makes complex reactions simple and memorable.",
      rating: 4.7,
      reviews: 88,
      photo: "https://i.pravatar.cc/150?img=52",
    },
    {
      name: "Lerato Sithole",
      subject: "Programming",
      level: "Python, JavaScript, Web Dev",
      bio: "Software engineer helping students build real-world projects from day one.",
      rating: 4.9,
      reviews: 174,
      photo: "https://i.pravatar.cc/150?img=31",
    },
    {
      name: "Robert Swanepoel",
      subject: "Languages",
      level: "Afrikaans Literature & Writing",
      bio: "Published Afrikaans author with a deep love for language and literature.",
      rating: 4.6,
      reviews: 42,
      photo: "https://i.pravatar.cc/150?img=68",
    },
    {
      name: "Fatima Essa",
      subject: "Mathematics",
      level: "University level",
      bio: "Engineering graduate specialising in linear algebra and calculus for first-years.",
      rating: 4.9,
      reviews: 97,
      photo: "https://i.pravatar.cc/150?img=26",
    },
    {
      name: "Thabo Molefe",
      subject: "Exam Preparation",
      level: "NSC & IEB preparation",
      bio: "Specialist in NSC and IEB exam techniques with a 97% student pass record.",
      rating: 4.8,
      reviews: 130,
      photo: "https://i.pravatar.cc/150?img=59",
    },
  ];

  const SUBJECTS = [
    "All",
    "Mathematics",
    "Science",
    "Programming",
    "Languages",
    "Exam Preparation",
    "Art & Design",
  ];
  const TUTOR_EXTRAS = [
    {
      rate: 320,
      available: true,
      next: "Today 17:00",
      match: 97,
      tags: ["Fast reply", "Study plan"],
    },
    {
      rate: 280,
      available: true,
      next: "Tue 18:30",
      match: 94,
      tags: ["Lab support", "Exam drills"],
    },
    {
      rate: 350,
      available: true,
      next: "Wed 16:00",
      match: 96,
      tags: ["Projects", "Code review"],
    },
    {
      rate: 260,
      available: false,
      next: "Next week",
      match: 88,
      tags: ["Writing", "Orals"],
    },
    {
      rate: 300,
      available: true,
      next: "Thu 19:00",
      match: 95,
      tags: ["Past papers", "Calm strategy"],
    },
    {
      rate: 240,
      available: true,
      next: "Sat 10:00",
      match: 90,
      tags: ["Portfolio", "Creative critique"],
    },
    {
      rate: 250,
      available: true,
      next: "Today 15:30",
      match: 92,
      tags: ["Foundations", "Homework"],
    },
    {
      rate: 290,
      available: false,
      next: "Next week",
      match: 87,
      tags: ["Chemistry", "Biology"],
    },
    {
      rate: 330,
      available: true,
      next: "Fri 17:30",
      match: 95,
      tags: ["Python", "Web apps"],
    },
    {
      rate: 230,
      available: true,
      next: "Thu 16:00",
      match: 86,
      tags: ["Literature", "Essays"],
    },
    {
      rate: 360,
      available: true,
      next: "Mon 18:00",
      match: 93,
      tags: ["University", "Calculus"],
    },
    {
      rate: 310,
      available: true,
      next: "Tue 17:00",
      match: 94,
      tags: ["NSC", "IEB"],
    },
  ];
  TUTORS.forEach((tutor, index) =>
    Object.assign(tutor, TUTOR_EXTRAS[index] || TUTOR_EXTRAS[0]),
  );

  /* ---------------- HELPERS ---------------- */
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const slug = (name) =>
    name
      .toLowerCase()
      .replace(/&/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  function initials(name) {
    return name
      .replace(/^(Dr|Mr|Mrs|Ms)\.?\s+/i, "")
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }

  /* ---------------- RENDERING ---------------- */
  function renderFeatures(target) {
    const el = $(target);
    if (!el) return;
    el.innerHTML = FEATURES.map(
      (f) => `
      <article class="feature">
        <span class="feature__icon" aria-hidden="true">${f.icon}</span>
        <h3>${f.title}</h3><p>${f.text}</p>
      </article>`,
    ).join("");
  }

  function serviceCard(s) {
    return `
      <article class="service" data-open-subject="${s.title}" role="button" tabindex="0" aria-label="Open ${s.title}">
        <span class="service__icon" aria-hidden="true">${s.icon}</span>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
        <span class="service__more">Learn more →</span>
      </article>`;
  }
  function renderServices(target, limit) {
    const el = $(target);
    if (!el) return;
    const list = limit ? SERVICES.slice(0, limit) : SERVICES;
    el.innerHTML = list.map(serviceCard).join("");
  }

  function tutorCard(t) {
    return `
      <article class="tutor" data-subject="${t.subject}">
        <div class="tutor__head">
          <span class="tutor__avatar">
            <img src="${t.photo}" alt="Portrait of ${t.name}" loading="lazy" onerror="this.remove()" />
            ${initials(t.name)}
          </span>
          <div>
            <h3 class="tutor__name">${t.name}</h3>
            <span class="tutor__subject">${t.subject}</span>
            <span class="tutor__level">${t.level}</span>
          </div>
        </div>
        <p class="tutor__bio">${t.bio}</p>
        <div class="tutor__meta">
          <span class="tutor__chip ${t.available ? "tutor__chip--live" : ""}">${t.available ? "Available this week" : "Limited slots"}</span>
          <span class="tutor__chip">${t.next}</span>
          <span class="tutor__chip tutor__rate">R${t.rate}/hr</span>
          <span class="tutor__chip">${t.match}% match</span>
        </div>
        <div class="tutor__foot">
          <span class="tutor__rating"><span class="star">★</span> ${t.rating.toFixed(1)} <span class="reviews">(${t.reviews} reviews)</span></span>
          <button class="tutor__book" data-book="${t.name}">Book Session →</button>
        </div>
      </article>`;
  }

  let activeSubject = "All";
  function renderTutors() {
    const grid = $("#tutorGrid");
    if (!grid) return;
    const q = ($("#tutorSearch") ? $("#tutorSearch").value : "")
      .trim()
      .toLowerCase();
    const onlyAvailable = $("#availableOnly") && $("#availableOnly").checked;
    const sortBy = $("#tutorSort") ? $("#tutorSort").value : "recommended";
    const list = TUTORS.filter((t) => {
      const matchSubject =
        activeSubject === "All" || t.subject === activeSubject;
      const matchSearch =
        !q ||
        (t.name + " " + t.subject + " " + t.level).toLowerCase().includes(q);
      const matchAvailability = !onlyAvailable || t.available;
      return matchSubject && matchSearch && matchAvailability;
    }).sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      if (sortBy === "rate") return a.rate - b.rate;
      return b.match - a.match;
    });
    grid.innerHTML = list.map(tutorCard).join("");
    const count = $("#tutorCount");
    if (count)
      count.textContent =
        list.length + (list.length === 1 ? " tutor found" : " tutors found");
    const empty = $("#tutorEmpty");
    if (empty) empty.hidden = list.length !== 0;
  }

  function renderSubjectPills() {
    const wrap = $("#subjectPills");
    if (!wrap) return;
    wrap.innerHTML = SUBJECTS.map(
      (s) =>
        `<button class="pill ${s === activeSubject ? "pill--active" : ""}" data-subject="${s}">${s}</button>`,
    ).join("");
  }

  function initQuickMatch() {
    const subject = $("#matchSubject");
    if (!subject) return;
    subject.innerHTML = SERVICES.map(
      (s) => `<option value="${s.title}">${s.title}</option>`,
    ).join("");
    const form = $("#quickMatchForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const chosenSubject = subject.value;
      const chosenLevel = $("#matchLevel").value;
      const chosenGoal = $("#matchGoal").value;
      const match = TUTORS.filter((t) => t.subject === chosenSubject).sort(
        (a, b) =>
          b.available - a.available || b.match - a.match || b.rating - a.rating,
      )[0];
      if (!match) return;
      const result = $("#matchResult");
      $("#heroMatchScore").textContent = match.match + "%";
      result.hidden = false;
      result.innerHTML = `
        <strong>${match.name}</strong> is your best ${chosenSubject} match for ${chosenLevel.toLowerCase()}.
        <br>${chosenGoal}: start with a ${match.next.toLowerCase()} session at R${match.rate}/hr.
        <br><button class="btn btn--ghost" data-page="tutors" data-filter="${chosenSubject}">View matching tutors</button>
        <button class="btn btn--primary" data-book="${match.name}">Book ${match.name.split(" ")[0]}</button>`;
    });
  }

  /* ---------------- SUBJECT PAGE ---------------- */
  function renderSubjectPage(subjectName) {
    const s = SERVICES.find((x) => x.title === subjectName);
    if (!s) return false;
    $("#subjectIcon").textContent = s.icon;
    $("#subjectTitle").textContent = s.title;
    $("#subjectTitle2").textContent = s.title;
    $("#subjectTitle3").textContent = s.title;
    $("#subjectTagline").textContent = s.tagline;
    $("#subjectAbout").textContent = s.about;
    $("#subjectTopics").innerHTML = s.topics
      .map((t) => `<li>${t}</li>`)
      .join("");

    const tutors = TUTORS.filter((t) => t.subject === subjectName);
    $("#subjectTutors").innerHTML = tutors.map(tutorCard).join("");
    $("#subjectTutorCount").textContent = tutors.length
      ? tutors.length +
        (tutors.length === 1 ? " tutor available" : " tutors available")
      : "New tutors joining soon — message us and we'll find a match.";
    return true;
  }

  /* ---------------- ROUTING ---------------- */
  const PAGES = [
    "home",
    "about",
    "services",
    "tutors",
    "contact",
    "signin",
    "terms",
    "privacy",
    "subject",
  ];

  function setActive(id) {
    $$(".page").forEach((p) => p.classList.remove("page--active"));
    const el = $("#page-" + id);
    if (el) el.classList.add("page--active");
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function showPage(name, opts) {
    opts = opts || {};
    if (PAGES.indexOf(name) === -1) name = "home";
    setActive(name);

    // nav highlight (subject pages highlight Services)
    const navName = name === "subject" ? "services" : name;
    $$(".nav__link").forEach((l) =>
      l.classList.toggle("is-active", l.dataset.page === navName),
    );

    if (name === "home") animateStats();
    if (name === "tutors") {
      if (opts.filter) {
        activeSubject = opts.filter;
        renderSubjectPills();
      }
      renderTutors();
    }
    if (name === "signin") {
      setAuthMode(opts.authmode || "signin");
      if (opts.authmode && opts.authmode !== "signin") {
        const authTab = document.querySelector(
          `#authTabs .auth-tab[data-auth="${opts.authmode}"]`,
        );
        if (authTab) authTab.click();
      }
    }

    closeMobile();
    try {
      history.replaceState(null, "", "#" + name);
    } catch (e) {}
  }

  function openSubject(subjectName) {
    if (!renderSubjectPage(subjectName)) return;
    setActive("subject");
    $$(".nav__link").forEach((l) =>
      l.classList.toggle("is-active", l.dataset.page === "services"),
    );
    closeMobile();
    try {
      history.replaceState(null, "", "#subject-" + slug(subjectName));
    } catch (e) {}
  }

  function closeMobile() {
    $("#navMobile").classList.remove("is-open");
    $("#navBurger").classList.remove("is-open");
    $("#navBurger").setAttribute("aria-expanded", "false");
  }

  /* ---------------- THEME ---------------- */
  const root = document.documentElement;
  const THEME_KEY = "tutorconnect-theme";
  function setTheme(mode) {
    root.setAttribute("data-theme", mode);
    const btn = $("#themeToggle");
    if (btn)
      btn.title =
        mode === "dark" ? "Switch to light mode" : "Switch to dark mode";
    try {
      localStorage.setItem(THEME_KEY, mode);
    } catch (e) {}
  }
  (function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch (e) {}
    if (saved) return setTheme(saved);
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  })();
  $("#themeToggle").addEventListener("click", function () {
    setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  /* ---------------- STAT COUNT-UP ---------------- */
  let statsAnimated = false;
  function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    $$("#statRow .stat-card__num").forEach(function (el) {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      const space = el.dataset.format === "space";
      if (reduce || isNaN(target)) return;
      let cur = 0;
      const inc = target / 40;
      el.textContent = "0" + suffix;
      (function tick() {
        cur += inc;
        if (cur >= target) cur = target;
        let shown = Math.round(cur);
        if (space)
          shown = shown.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        el.textContent = shown + suffix;
        if (cur < target) requestAnimationFrame(tick);
      })();
    });
  }

  /* ---------------- MOBILE MENU ---------------- */
  const burger = $("#navBurger");
  burger.addEventListener("click", function () {
    const open = $("#navMobile").classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });

  /* ---------------- TOAST ---------------- */
  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    if (!t) return;
    t.textContent = msg;
    t.hidden = false;
    requestAnimationFrame(() => t.classList.add("is-show"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      t.classList.remove("is-show");
      setTimeout(() => {
        t.hidden = true;
      }, 250);
    }, 2600);
  }

  /* ---------------- CLICK DELEGATION ---------------- */
  document.addEventListener("click", function (e) {
    const pageBtn = e.target.closest("[data-page]");
    if (pageBtn) {
      e.preventDefault();
      showPage(pageBtn.dataset.page, {
        filter: pageBtn.dataset.filter,
        authmode: pageBtn.dataset.authmode,
      });
      return;
    }
    const subjBtn = e.target.closest("[data-open-subject]");
    if (subjBtn) {
      e.preventDefault();
      openSubject(subjBtn.dataset.openSubject);
      return;
    }

    const social = e.target.closest("[data-social]");
    if (social) {
      toast("Follow us on " + social.dataset.social + " (demo link).");
      return;
    }

    const book = e.target.closest("[data-book]");
    if (book) {
      toast(
        "Session request sent to " +
          book.dataset.book +
          " — they'll be in touch!",
      );
      return;
    }

    const pill = e.target.closest(".pill[data-subject]");
    if (pill) {
      activeSubject = pill.dataset.subject;
      renderSubjectPills();
      renderTutors();
      return;
    }
  });

  // keyboard access for service cards (Enter / Space)
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".service[data-open-subject]");
    if (card) {
      e.preventDefault();
      openSubject(card.dataset.openSubject);
    }
  });

  /* ---------------- TUTOR SEARCH ---------------- */
  const search = $("#tutorSearch");
  if (search) search.addEventListener("input", renderTutors);

  /* ---------------- CONTACT FORM ---------------- */
  const contactForm = $("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = $("#cName"),
        email = $("#cEmail"),
        msg = $("#cMsg");
      let ok = true;
      const fail = (f, m) => {
        f.classList.add("is-invalid");
        const er = $('.field__error[data-for="' + f.id + '"]');
        if (er) er.textContent = m;
        ok = false;
      };
      const clear = (f) => {
        f.classList.remove("is-invalid");
        const er = $('.field__error[data-for="' + f.id + '"]');
        if (er) er.textContent = "";
      };
      [name, email, msg].forEach(clear);
      if (!name.value.trim()) fail(name, "Please enter your name.");
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) fail(email, "Please enter your email.");
      else if (!re.test(email.value.trim()))
        fail(email, "Enter a valid email address.");
      if (!msg.value.trim()) fail(msg, "Please write a short message.");
      if (!ok) return;
      $("#contactSuccess").hidden = false;
      contactForm.reset();
      setTimeout(() => {
        $("#contactSuccess").hidden = true;
      }, 5000);
    });
  }

  /* ---------------- SIGN IN (accepts any login) ---------------- */
  const authForm = $("#authForm");
  const authMsg = $("#authMsg");

  function flashAuth(text, ok) {
    if (!authMsg) return;
    authMsg.textContent = text;
    authMsg.className = "auth-msg " + (ok ? "auth-msg--ok" : "auth-msg--error");
    authMsg.hidden = false;
  }
  function setSignedIn(username) {
    $("#navHi").textContent = "Hi, " + username;
    $("#navAvatar").textContent = (username[0] || "U").toUpperCase();
    $(".nav__signin").hidden = true;
    $("#navAccount").hidden = false;
  }
  function setAuthMode(mode) {
    const isCreate = mode === "create";
    const signupFields = document.querySelectorAll(".signup-only");
    $$(".auth-tab").forEach((t) =>
      t.classList.toggle("auth-tab--active", t.dataset.auth === mode),
    );

    signupFields.forEach((field) => {
      field.hidden = !isCreate;
      field.setAttribute("aria-hidden", String(!isCreate));
      field.classList.toggle("field--hidden", !isCreate);
    });

    $("#authTitle").textContent = isCreate
      ? "Create your account"
      : "Welcome back";
    $("#authSub").textContent = isCreate
      ? "Join TutorConnect — it's free."
      : "Sign in to your TutorConnect account.";
    $("#authSubmit").textContent = isCreate ? "Create Account" : "Log In";

    if (authMsg) authMsg.hidden = true;
  }
  $$(".auth-tab").forEach((tab) =>
    tab.addEventListener("click", () => setAuthMode(tab.dataset.auth)),
  );

  const togglePass = $("#togglePass");
  if (togglePass)
    togglePass.addEventListener("click", function () {
      const p = $("#authPass");
      p.type = p.type === "password" ? "text" : "password";
    });

  if (authForm) {
    authForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const mode = $("#authTabs .auth-tab--active")
        ? $("#authTabs .auth-tab--active").dataset.auth
        : "signin";
      const user = $("#authUser").value.trim();
      const pass = $("#authPass").value;
      const confirmPass = $("#confirmPass").value;
      const fullName = $("#fullName").value.trim();
      const email = $("#email").value.trim();
      const role = $("#role").value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!user || !pass) {
        flashAuth("Enter any username and password to continue.", false);
        return;
      }

      if (mode === "create") {
        if (!fullName) {
          flashAuth("Please enter your full name.", false);
          return;
        }
        if (!email || !emailPattern.test(email)) {
          flashAuth("Enter a valid email address.", false);
          return;
        }
        if (!role) {
          flashAuth("Choose whether you're a student or tutor.", false);
          return;
        }
        if (!confirmPass) {
          flashAuth("Confirm your password.", false);
          return;
        }
        if (pass !== confirmPass) {
          flashAuth("Passwords do not match.", false);
          return;
        }
      }

      flashAuth(
        mode === "create"
          ? "✓ Account created! Signing you in…"
          : "✓ Success! Signing you in…",
        true,
      );
      setSignedIn(user);
      showPage("tutors");
      location.hash = "tutors";
      setTimeout(function () {
        if (authMsg) authMsg.hidden = true;
        authForm.reset();
      }, 600);
    });
  }

  const signout = $("#navSignout");
  if (signout)
    signout.addEventListener("click", function () {
      $("#navAccount").hidden = true;
      $(".nav__signin").hidden = false;
      setAuthMode("signin");
      showPage("signin");
      toast("You've been signed out.");
    });

  /* ---------------- BOOT ---------------- */
  renderFeatures("#featureGrid");
  renderFeatures("#aboutFeatures");
  renderServices("#homeServices", 6);
  renderServices("#servicesGrid");
  renderSubjectPills();
  renderTutors();

  const hash = (location.hash || "").replace("#", "");
  if (hash.indexOf("subject-") === 0) {
    const want = hash.slice("subject-".length);
    const match = SERVICES.find((s) => slug(s.title) === want);
    if (match) openSubject(match.title);
    else showPage("home");
  } else {
    showPage(PAGES.indexOf(hash) !== -1 ? hash : "home");
  }
})();
