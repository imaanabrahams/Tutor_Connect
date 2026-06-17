// ======================
// TUTOR DATA
// ======================

const tutors = [
    {
        name: "Sarah Johnson",
        subject: "Mathematics",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        name: "David Smith",
        subject: "Programming",
        rating: "⭐⭐⭐⭐"
    },
    {
        name: "Fatima Adams",
        subject: "English",
        rating: "⭐⭐⭐⭐⭐"
    }
];

// ======================
// DISPLAY TUTORS
// ======================

const tutorContainer = document.getElementById("tutorContainer");

function displayTutors(data) {

    if (!tutorContainer) return;

    tutorContainer.innerHTML = "";

    data.forEach(tutor => {
        tutorContainer.innerHTML += `
            <div class="card">
                <h3>${tutor.name}</h3>
                <p>${tutor.subject}</p>
                <p>${tutor.rating}</p>
            </div>
        `;
``    });
}

if (tutorContainer) {
    displayTutors(tutors);
}

// ======================
// SEARCH
// ======================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const search =
            searchInput.value.toLowerCase();

        const filtered = tutors.filter(tutor =>
            tutor.name.toLowerCase().includes(search) ||
            tutor.subject.toLowerCase().includes(search)
        );

        displayTutors(filtered);

    });

}

// ======================
// CONTACT FORM
// ======================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const feedback =
            document.getElementById("feedback");

        if (!name || !email || !message) {

            feedback.innerText =
                "Please complete all fields.";

            feedback.style.color = "red";

            return;
        }

        feedback.innerText =
            "Message sent successfully!";

        feedback.style.color = "green";

        contactForm.reset();

    });

}

// ======================
// DARK MODE
// ======================

const darkBtn =
    document.getElementById("darkModeBtn");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    if (darkBtn) {
        darkBtn.textContent = "☀️";
    }

}

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (
            document.body.classList.contains("dark")
        ) {

            darkBtn.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            darkBtn.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    });

}

// ======================
// COUNTERS
// ======================

const tutorsCount =
    document.getElementById("tutorsCount");

const studentsCount =
    document.getElementById("studentsCount");

if (tutorsCount && studentsCount) {

    let tutorCount = 0;
    let studentCount = 0;

    const interval = setInterval(() => {

        tutorCount += 10;
        studentCount += 200;

        tutorsCount.innerText = tutorCount;
        studentsCount.innerText = studentCount;

        if (tutorCount >= 500) {

            clearInterval(interval);

            tutorsCount.innerText = "500+";
            studentsCount.innerText = "10000+";

        }

    }, 20);
}
