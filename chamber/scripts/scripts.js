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
//console.log(lastmod)
document.querySelector('#copywrite').textContent = `Copywrite \xA9${copywrite} \u2022 Spencer Quiner`;
document.querySelector('#lastmod').textContent = `Last Modified: ${lastmod}`;


//visit counter
let message = document.querySelector("#lastVisit");
let lastVisit = (localStorage.getItem("lastVisit-ls") || 0);
//console.log(lastVisit);

let dateNow = Date.now();
//console.log(dateNow);
localStorage.setItem("lastVisit-ls", dateNow);

let timedif = dateNow - lastVisit;
//console.log(timedif);

if(lastVisit !== 0){
    if(timedif < 86400000){
        message.innerText = `Back so soon! Awesome!`;
    }
    else {
        let days = Math.floor(timedif/86400000);
        //console.log(days)
        if(days > 1){
            message.innerText = `You last visited ${days} days ago.`;
        }
        else {
            message.innerText = `You last visited ${days} day ago.`;
        }
    }
}
else {
    message.textContent = `Welcome! Let us know if you have any questions.`;
}

let timestamp = document.querySelector("#timestamp");
timestamp.setAttribute("value", dateNow);
