//your JS code here. If required.
const gridContainer = document.querySelector(".grid");
for(let i = 1; i<=9; i++){
    const gridItem = document.createElement("div");
    gridItem.id = i;
    gridItem.className = "grid-Item"
    gridItem.innerText = i;
    gridContainer.appendChild(gridItem);
}
// const form = document.querySelector("#from");
const form = document.getElementById("form")
let prevElement = null;
form.addEventListener("submit",function(event){
    event.preventDefault();
    // to change or avoid the default behaviour of any event we can use this preventDefault() method
    
    let cellId = form.inputId.value;
    let color = form.color.value;

    const cell = document.getElementById(cellId);
    cell.style.backgroundColor = color; 
    if(prevElement != null){
        prevElement.style.backgroundColor = "white";
    }
    prevElement = cell;
});