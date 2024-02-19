const url = 'data/members.json';
const spotLight = [];
const membForSpotlight = ["Silver", "Gold"];
const cards = document.querySelector("#memberSpotLight");



async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    selectForSpotLight(data.members);
    displaySpotlight(spotLight);
  }

function selectForSpotLight(members) {
    members.forEach(member =>{
      if(membForSpotlight.includes(member.membership)){
        spotLight.push(member);
      }
    });
    //console.log(spotLight)
    return spotLight;
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function displaySpotlight(array) {
  let used = [];
  let count = 0;
  while (count !== 3) {
    let i = getRandomInt(0, array.length);
    if(used.includes(i)){

    }else{
      used.push(i);
      count++;
      //console.log(count);
      //console.log(array[i]);
        let card = document.createElement("section");
        let company = document.createElement("h2");
        company.innerText = `${array[i].coname}`;
        company.setAttribute("id", "company")
        let logo = document.createElement("img");
        logo.setAttribute("src", array[i].logo);
        logo.setAttribute("alt", `${array[i].coname}`)
        logo.setAttribute("loading", "lazy");   
        let location = document.createElement("p");
        location.innerHTML = `${array[i].address}`;
        location.setAttribute("id", "location");
        let tnumber = document.createElement("p"); 
        tnumber.innerHTML = `${array[i].telephone}`;
        tnumber.setAttribute("id", "telephone");
        let website = document.createElement("a"); 
        website.setAttribute("href", array[i].siteurl);
        website.setAttribute("target", "_blank");
        website.innerHTML = `${array[i].siteurl}`;
        website.setAttribute("id", "website");
        let hours = document.createElement("p");
        hours.innerHTML = `open: ${array[i].hours}`;
        hours.setAttribute("id", "hours");
        let membership = document.createElement("h3");
        membership.innerHTML = `${array[i].membership} Member`;
        let city = document.createElement("p");
        city.innerHTML = `Arrecife, Spain 35500`;
        city.setAttribute("id", "city");
        
        card.appendChild(logo);
        card.appendChild(company);
        card.appendChild(location);
        card.appendChild(city);
        card.appendChild(tnumber);
        card.appendChild(website);
        card.appendChild(hours);
        cards.appendChild(card);
    }
    
  }
  //console.log(used);
}
  
 getMemberData();
  


