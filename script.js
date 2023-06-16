const button = document.getElementById("toggle");
let body = document.getElementById("body");
console.log(body);
button.addEventListener("click",e =>{
    e.button.checked= (e.button.checked==true)?false:true;
    body.classList.toggle("dark");
});