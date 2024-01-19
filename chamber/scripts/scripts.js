// Responsive hamburger menu code
const hamburgerbtn = document.querySelector("#hamburgerbtn");
const navmenu = document.querySelector(".menulinks");

hamburgerbtn.addEventListener("click", ()=>{
    navmenu.classList.toggle("open");
    hamburgerbtn.classList.toggle("open");
});

//footer scripts

const date = new Date();
let copywrite = date.getFullYear();
let lastmodified = new Date(document.lastModified);
let lastmod = lastmodified.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
console.log(lastmod)
document.querySelector('#copywrite').textContent = `Copywrite \xA9${copywrite} \u2022 Spencer Quiner`;
document.querySelector('#lastmod').textContent = `Last Modified: ${lastmod}`;