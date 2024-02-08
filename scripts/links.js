const linksurl = "data/links.json";
const linksURL = "https://spencerquiner.github.io/wdd230/data/links.json";
const links = document.querySelector("#links");
const baseURL = "https://spencerquiner.github.io/wdd230/";
const ul = document.createElement("ul");


const displayLinks = (weeks) =>{
    weeks.forEach(weeks => {
        const li = document.createElement("li");
        li.innerHTML = `${weeks.week}: ${weeks.links.map(link => checkLink(link)).join(" | ")}`;

        ul.appendChild(li);
    });
    links.appendChild(ul);
}

function checkLink(link) {
    if (link.url.includes("http")) {
       return `<a href="${link.url}">${link.title}</a>`;
    } else {
       return `<a href="${baseURL}${link.url}">${link.title}</a>`;
    }
}

async function getLinks() {
    const response = await fetch(linksurl);
    const data = await response.json();
    console.log(data); // temporary testing of data retreival
    displayLinks(data.weeks);
}

 getLinks();