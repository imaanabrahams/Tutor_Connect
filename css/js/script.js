const tutors = [

{
    name:"Sarah Johnson",
    subject:"Mathematics",
    rating:"⭐⭐⭐⭐⭐"
},

{
    name:"David Smith",
    subject:"Programming",
    rating:"⭐⭐⭐⭐"
},

{
    name:"Fatima Adams",
    subject:"English",
    rating:"⭐⭐⭐⭐⭐"
}

];

const container =
document.getElementById("tutorContainer");

function displayTutors(data){

    container.innerHTML="";

    data.forEach(tutor=>{

        container.innerHTML += `
        <div class="tutor-card">
            <h3>${tutor.name}</h3>
            <p>${tutor.subject}</p>
            <p>${tutor.rating}</p>
        </div>
        `;
    });

}

displayTutors(tutors);

document
.getElementById("searchInput")
.addEventListener("keyup",()=>{

const search =
document
.getElementById("searchInput")
.value
.toLowerCase();

const filtered =
tutors.filter(tutor =>
tutor.name.toLowerCase().includes(search)
||
tutor.subject.toLowerCase().includes(search)
);

displayTutors(filtered);

});

document
.getElementById("contactForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const message =
document.getElementById("message").value;

if(
name === "" ||
email === "" ||
message === ""
){

document.getElementById("feedback")
.innerText =
"Please complete all fields.";

return;

}

document.getElementById("feedback")
.innerText =
"Message sent successfully!";

});

document
.getElementById("darkModeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkBtn.textContent = "☀️";
    } else {
        darkBtn.textContent = "🌙";
    }

});

const darkBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    darkBtn.textContent = "☀️";
}

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



let tutorCount = 0;
let studentCount = 0;

const tutorInterval = setInterval(() => {

    tutorCount += 10;
    studentCount += 200;

    document.getElementById("tutorsCount").innerText = tutorCount;
    document.getElementById("studentsCount").innerText = studentCount;

    if(tutorCount >= 500){

        clearInterval(tutorInterval);

        document.getElementById("tutorsCount").innerText = "500+";
        document.getElementById("studentsCount").innerText = "10000+";
    }

},20);
