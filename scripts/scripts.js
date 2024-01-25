// Responsive hamburger menu code
const hamburgerbtn = document.querySelector("#hamburgerbtn");
const navmenu = document.querySelector(".menulinks");

hamburgerbtn.addEventListener("click", ()=>{
    navmenu.classList.toggle("open");
    hamburgerbtn.classList.toggle("open");
});

//Dark Mode code
const darkbtn = document.querySelector("#darkmode");
const main = document.querySelector("main");
const title = document.querySelector("#classTitle");
const titleh1 = document.querySelector("h1");
const activities = document.querySelector("#activities");
const info = document.querySelector("#info");


darkbtn.addEventListener("click", ()=>{
    darkbtn.classList.toggle("dark");
    main.classList.toggle("dark");
    title.classList.toggle("dark");
    titleh1.classList.toggle("dark");
    activities.classList.toggle("dark");
    info.classList.toggle("dark");
});

//visit counter

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
}
else {
    visitsDisplay.textContent = `This is your first visit, Welcome!`
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);