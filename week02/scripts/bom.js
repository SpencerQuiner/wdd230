const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener(click , ()=>{
    if(input.value != ''){
        
        
    }
    else {
        let message = document.createElement('span').textContent= `Please enter a book and chapter reference. `;
        document.querySelector("label").appendChild(message);
        input.focus();
    }
});
