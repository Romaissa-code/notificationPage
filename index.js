const post=document.querySelectorAll(".post"); 
const markAsRead = document.getElementById("markAsRead");
const redDote=document.querySelectorAll(".redDote"); 
let  counter=document.getElementById("counter"); 
markAsRead.addEventListener("click",()=>{
counter.innerHTML=0;
post.forEach((pst) => {
  pst.classList.remove("unRead");
});
redDote.forEach((rdt) => {
rdt.style.visibility = "hidden";
     
});

})
