// =========================
// DARK MODE WITH LOCAL STORAGE
// =========================
const darkBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (darkBtn) darkBtn.textContent = "☀️";
}

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            darkBtn.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            darkBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });
}

// =========================
// TUTOR DATA + SEARCH
// =========================
const tutors = [
    { name: "Ayesha Daniels", subject: "Mathematics", level: "High School", image: "https://i.pravatar.cc/150?img=32" },
    { name: "Jason Smith", subject: "Science", level: "Grade 8 - 12", image: "https://i.pravatar.cc/150?img=12" },
    { name: "Mahir Lindsay", subject: "Programming", level: "Beginner Web Development", image: "https://i.pravatar.cc/150?img=56" },
    { name: "Zara Khan", subject: "English", level: "Reading and Writing", image: "https://i.pravatar.cc/150?img=47" }
];

const tutorContainer = document.getElementById("tutorContainer");
const searchInput = document.getElementById("searchInput");

function displayTutors(list) {
    if (!tutorContainer) return;

    tutorContainer.innerHTML = "";

    list.forEach(tutor => {
        const card = document.createElement("div");
        card.className = "card tutor-card";
        card.innerHTML = `
            <img src="${tutor.image}" alt="${tutor.name}">
            <h3>${tutor.name}</h3>
            <p><strong>Subject:</strong> ${tutor.subject}</p>
            <p><strong>Level:</strong> ${tutor.level}</p>
            <a href="contact.html" class="btn">Book Tutor</a>
        `;
        tutorContainer.appendChild(card);
    });
}

displayTutors(tutors);

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const searchValue = searchInput.value.toLowerCase();
        const filteredTutors = tutors.filter(tutor =>
            tutor.name.toLowerCase().includes(searchValue) ||
            tutor.subject.toLowerCase().includes(searchValue) ||
            tutor.level.toLowerCase().includes(searchValue)
        );
        displayTutors(filteredTutors);
    });
}

// =========================
// CONTACT FORM FEEDBACK
// =========================
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        feedback.textContent = "Thank you! Your message has been received.";
        contactForm.reset();
    });
}

// =========================
// SCROLL REVEAL ANIMATION
// =========================
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
