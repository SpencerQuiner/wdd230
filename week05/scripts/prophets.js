const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.prophets); // temporary testing of data retreival
    displayProphets(data.prophets);
  }

  const displayProphets = (prophets) =>{
    prophets.forEach(prophet => {
        const card = document.createElement("section");
        let fullName = document.createElement("h2");
        let firstName = prophet.name;
        let lastName = prophet.lastname;
        fullName.innerText = `${firstName} ${lastName}`;
        let birthd = document.createElement("p");
        let bdate = prophet.birthdate;
        birthd.innerHTML = `Date of Birth: ${bdate}`;
        let birthp = document.createElement("p"); 
        let bplace = prophet.birthplace;
        birthp.innerHTML = `Place of Birth: ${bplace}`;
        let portrait = document.createElement("img");
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${firstName} ${lastName}`)
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340px");
        portrait.setAttribute("height", "440px")
        card.appendChild(fullName);
        card.appendChild(birthd);
        card.appendChild(birthp)
        card.appendChild(portrait);
        cards.appendChild(card);

    });
  }
  
  getProphetData();