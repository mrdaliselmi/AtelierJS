const p=document.querySelector("p")

document.querySelector("#color").addEventListener("input",(e)=>{
    p.style.color=document.querySelector("#color").value
})
document.querySelector("#size").addEventListener("input",(e)=>{
    p.style.fontSize=document.querySelector("#size").value+"px"
})
const font=document.querySelector(".select")
font.addEventListener("input",(e)=>{p.style.fontFamily=e.target.value}) 