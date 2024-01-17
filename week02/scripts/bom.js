const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");


button.addEventListener("click" , ()=>{
    if(input.value != ""){
        const li = document.createElement("li");
        li.textContent = input.value;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        li.append(deleteBtn);
        list.append(li);
        input.value= "";
        deleteBtn.addEventListener("click", ()=>{
            list.removeChild(li);
            input.focus();
        });   
    }
    else {
        alert( `Please enter a book and chapter reference. `);
        input.focus();
    }

});
