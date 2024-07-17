let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
function  addIetm(){

    if (inp.value.trim() === "") return;

    let item=document.createElement("li");
    let textSpan = document.createElement("span");
    textSpan.innerText = inp.value;

    let timeSpan = document.createElement("span");
    let currentTime = new Date().toLocaleString();
    timeSpan.innerText = ` (Added at: ${currentTime})`;
    timeSpan.style.marginLeft = "10px";
    timeSpan.style.fontSize = "smaller";
    timeSpan.style.color = "gray";

    // item.innerText=inp.value;
    let delBtn=document.createElement('button');
    delBtn.innerText='delete';
    delBtn.classList.add('delete');
      
    item.appendChild(textSpan);
    item.appendChild(timeSpan);
    item.appendChild(delBtn)

   
    ul.appendChild(item);
    inp.value="";
  
};
btn.addEventListener("click",function(){
    addIetm();
});
inp.addEventListener("keydown",function(event){
    if(event.key=='Enter'){
        addIetm();
    }
})

// let delBtns=document.querySelectorAll('.delete');
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();

//     })
// }


ul.addEventListener("click",function(event){
    if(event.target.nodeName =='BUTTON'){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log('item deleted')
    }
})