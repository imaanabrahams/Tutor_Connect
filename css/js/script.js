/* ======================
   DARK MODE
====================== */

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {

    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark");
        darkBtn.textContent = "☀️";
    }

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme","dark");
            darkBtn.textContent = "☀️";
        } else {
            localStorage.setItem("theme","light");
            darkBtn.textContent = "🌙";
        }

    });
}

/* ======================
   SCROLL ANIMATION
====================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section, .card, .service-card, .tutor-card")
.forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});

/* ======================
   COUNTER ANIMATION
====================== */

function animateCounter(id, target){

    const element = document.getElementById(id);

    if(!element) return;

    let count = 0;

    const speed = target / 100;

    const update = () => {

        count += speed;

        if(count < target){
            element.innerText = Math.floor(count);
            requestAnimationFrame(update);
        }
        else{
            element.innerText = target.toLocaleString();
        }

    };

    update();
}

animateCounter("tutorsCount",12);
animateCounter("studentsCount",100000);

/* ======================
   CONTACT FORM
====================== */

const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", (e)=>{

        e.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;

        const feedback =
            document.getElementById("feedback");

        if(
            name === "" ||
            email === "" ||
            message === ""
        ){
            feedback.innerHTML =
                "❌ Please fill in all fields";
            feedback.style.color = "red";
            return;
        }

        feedback.innerHTML =
            "✅ Message sent successfully!";
        feedback.style.color = "green";

        form.reset();

    });

}

/* ======================
   NAVBAR SCROLL EFFECT
====================== */

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.15)";
    } else {
        nav.style.boxShadow =
        "0 2px 20px rgba(0,0,0,.08)";
    }

});