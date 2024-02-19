const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const windData = document.querySelector("#wind");
const forecast = document.querySelector("#forcast")
const lat = "28.97";
const lon ="-13.55";
const appid = "7b3c2187ff8bed01ba017ffc52941ee9";
const forcastArray = [];

const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=imperial`;
const forcasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${appid}&units=imperial`;

async function apiFetch(url){
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
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
    windData.innerHTML = `${data.wind.speed}mph  `;
    document.querySelector("#winddir").style.transform = `rotate(${data.wind.deg}deg)`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;
}

//three day forcast code.
async function apiFetchForcast(url){
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            selectData(data);
            displayForcastResults(forcastArray);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }    
}

function selectData(data) {
    const today = data.list[0].dt;
    const date1 = today + 86400;
    const date2 = date1 + 86400;
    const date3 = date2 + 86400;
    const dates = [date1, date2, date3];
    data.list.forEach(Element => {
        if(dates.includes(Element.dt)){
            forcastArray.push(Element);
        }
       
    });
}

function displayForcastResults(data){
    
    data.forEach(element => {
        const dateData = document.createElement("div");
        const forcastDate = document.createElement("p");
        forcastDate.innerHTML = `${element.dt_txt}`
        const forcastTemp = document.createElement("p");
        forcastTemp.innerHTML = `Temp: ${element.main.temp}&deg;F`;
        const forcastConditions = document.createElement("figure");
        const forcastIcon = document.createElement("img");
        const forcastDesc = document.createElement("figcaption");
        const iconurl = `https://openweathermap.org/img/w/${element.weather[0].icon}.png`;
        let desc = element.weather[0].description;
        forcastIcon.setAttribute("src", iconurl);
        forcastIcon.setAttribute("alt", desc);
        forcastDesc.textContent = `${desc}`;
        forcastConditions.appendChild(forcastIcon);
        forcastConditions.appendChild(forcastDesc);
        dateData.appendChild(forcastDate);
        dateData.appendChild(forcastTemp);
        dateData.appendChild(forcastConditions);
        forecast.appendChild(dateData);
    });    
}

apiFetch(weatherurl);
apiFetchForcast(forcasturl);

//open forecast button
const openforecast = document.querySelector("#forcastbtn");
openforecast.addEventListener("click", ()=>{
    forecast.classList.add("open");
    forecast.classList.remove("closed");
    openforecast.classList.add("closed");
    openforecast.classList.remove("open")
})
//close forecast button
const forecastCloseBtn = document.querySelector("#closeforecast");
forecastCloseBtn.addEventListener("click", ()=>{
    forecast.classList.add("closed");
    forecast.classList.remove("open");
    openforecast.classList.add("open");
    openforecast.classList.remove("closed")
})