let btnElement=document.querySelector('button');
let spanElement=document.getElementById('userName');

btnElement.onclick=function(){
    let username=prompt("Enter your Name:");
    spanElement.textContent=username;

}