const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];


button.addEventListener("click" , ()=>{
    if(input.value != ""){
        console.log(input.value);
        displaylist(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus(); 
        console.log(chaptersArray);
    }
    else {
        alert( `Please enter a book and chapter reference. `);
        input.focus();
    }

});



chaptersArray.forEach(chapter => {
    displaylist(chapter);
});

function displaylist(item){
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
        li.textContent = item;
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete");
        li.append(deleteBtn);
        list.append(li);
        deleteBtn.addEventListener("click", ()=>{
            list.removeChild(li);
            console.log("chapter removed");
            deleteChapter(li.textContent);
            input.focus()});
};

function setChapterList() {
    localStorage.setItem("bomChapterList", JSON.stringify(chaptersArray));
};

function getChapterList(){
    return JSON.parse(localStorage.getItem("bomChapterList"));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item!== chapter);
    setChapterList();
    console.log(chaptersArray);
}
