let visitMsg = document.querySelector("#lastVisit");
let lastVisit = (localStorage.getItem("lastVisit-ls") || 0);
let dateNow = Date.now();
localStorage.setItem("lastVisit-ls", dateNow);

let timedif = dateNow - lastVisit;

if(lastVisit !== 0){
    if(timedif < 86400000){
        visitMsg.innerHTML = `Back so soon! Awesome!`;
        console.log(visitMsg);
    }
    else {
        let days = Math.floor(timedif/86400000);
        console.log(days)
        if(days > 1){
            visitMsg.textContent = `You last visited ${days} days ago.`;
            console.log(visitMsg);
        }
        else {
            visitMsg.textContent = `You last visited ${days} day ago.`;
            console.log(visitMsg);
        }
    }
}
else {
    visitMsg.textContent = `Welcome! Let us know if you have any questions.`;
    console.log(visitMsg);
}

let timestamp = document.querySelector("#timestamp");
timestamp.setAttribute("value", dateNow);