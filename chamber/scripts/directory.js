const url = 'data/members.json';
const cards = document.querySelector("#cards");


async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.members); // temporary testing of data retreival
    displaymembers(data.members);
  }

  const displaymembers = (members) =>{
    members.forEach(member => {
        let card = document.createElement("section");
        let company = document.createElement("h2");
        company.innerText = `${member.coname}`;
        company.setAttribute("id", "company")
        let logo = document.createElement("img");
        logo.setAttribute("src", member.logo);
        logo.setAttribute("alt", `${member.coname}`)
        logo.setAttribute("loading", "lazy");   
        let location = document.createElement("p");
        location.innerHTML = `${member.address}`;
        location.setAttribute("id", "location");
        let tnumber = document.createElement("p"); 
        tnumber.innerHTML = `${member.telephone}`;
        tnumber.setAttribute("id", "telephone");
        let website = document.createElement("a"); 
        website.setAttribute("href", member.siteurl);
        website.setAttribute("target", "_blank");
        website.innerHTML = `${member.siteurl}`;
        website.setAttribute("id", "website");
        let hours = document.createElement("p");
        hours.innerHTML = `open: ${member.hours}`;
        hours.setAttribute("id", "hours");
        let membership = document.createElement("h3");
        membership.innerHTML = `${member.membership} Member`;
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

    });
  }
  
  getMemberData();

  const gridbtn = document.querySelector("#grid");
  const listbtn = document.querySelector("#list");
  

  gridbtn.addEventListener("click", () => {
	// example using arrow function
	cards.classList.add("grid");
	cards.classList.remove("list");
  gridbtn.classList.add("active");
  listbtn.classList.remove("active");
});

listbtn.addEventListener("click", showList); // example using defined function

function showList() {
	cards.classList.add("list");
	cards.classList.remove("grid");
  listbtn.classList.add("active");
  gridbtn.classList.remove("active");
}