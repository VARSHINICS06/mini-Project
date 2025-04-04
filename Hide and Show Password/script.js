const eyes=document.getElementById("eyes");
const password=document.getElementById("password");
eyes.onclick=function(){
if(password.type==="password"){
    password.type="text";
    eyes.classList.remove("fa-eye-slash");
    eyes.classList.add("fa-eye");
}else{
    password.type="password";
    eyes.classList.remove("fa-eye");
    eyes.classList.add("fa-eye-slash");
}
};
