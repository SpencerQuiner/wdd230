// Responsive hamburger menu code
const hamburgerbtn = document.querySelector("#hamburgerbtn");
const navmenu = document.querySelector(".menulinks");

hamburgerbtn.addEventListener("click", ()=>{
    navmenu.classList.toggle("open");
    hamburgerbtn.classList.toggle("open");
});

//footer scripts

const date = new Date();
//console.log(date);
let copywrite = date.getFullYear();
let lastmodified = new Date(document.lastModified);
let lastmod = lastmodified.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
//console.log(lastmod)
document.querySelector('#copywrite').textContent = `Copywrite \xA9${copywrite} \u2022 Spencer Quiner \u2022 WDD 230`;
document.querySelector('#lastmod').textContent = `Last Modified: ${lastmod}`;

const currentDate = date.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});
const currentTime = date.toLocaleTimeString('en-us',{timeStyle: "short"});
document.querySelector("#date-time").textContent = `${currentDate} ${currentTime}`;

//banner display functionality
const banner = document.querySelector("#banner");
let displayDate = date.toLocaleDateString("en-us", {weekday:"long"});
//console.log(displayDate);
function displayBanner(date){
    if(date==="Monday" || date ==="Tuesday" || date === "Wednesday") {
        banner.classList.toggle("open");
    } else {
        banner.classList.toggle("closed");
    }
}

displayBanner(displayDate);

//close banner button
const bannerCloseBtn = document.querySelector("#closeBanner");
bannerCloseBtn.addEventListener("click", ()=>{
    banner.classList.toggle("closed");
})

