const day=document.querySelector("#day");
const content=document.querySelector("#content");
const list=document.querySelector(".list-group");
const form=document.querySelector(".right")
const addBtn=document.querySelector(".add")
form.addEventListener("input",(e)=>{
    if((day.value)&&(content.value)){
        addBtn.disabled=false
    }else{
        addBtn.disabled=true
    }
});

addBtn.addEventListener("click", function(e) {
        list.innerHTML+='<li class="list-group-item">'+day.value+" : "+content.value+
        '<button type="button" class="btn-close" style="position:absolute;right:0%;" onclick="destroy(event)" aria-label="Close"></button>'+'</li>';
        day.value="";
        content.value="";
        addBtn.disabled=true;
});

function destroy(e){
    const element=e.target;
    element.parentNode.parentNode.removeChild(element.parentNode);
};