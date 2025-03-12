let switchBtn=document.querySelector(".switch");
let body=document.body;

switchBtn.addEventListener("click",()=>{
    body.classList.toggle("on");
})