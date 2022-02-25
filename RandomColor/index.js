function randomColorHex() {
    return randomColor = Math.floor(Math.random()*16777215).toString(16)
}

list=document.querySelector("ol")

list.addEventListener("click",(e)=>{
    e.target.style.color = "#" + randomColorHex();
})