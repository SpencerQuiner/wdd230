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

const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
console.log(numVisits)
if (numVisits !== 0) {
    visitsDisplay.textContent = `${numVisits}`;
}
else {
    visitsDisplay.textContent = `This is your first visit, Welcome!`
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

//weather widget code

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=28.97&lon=-13.55&appid=7b3c2187ff8bed01ba017ffc52941ee9&units=imperial"

async function apiFetch(url){
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }    
}

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch(url);