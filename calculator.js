// write the JS functions for your calculator in this file
var calc=document.querySelector(".calc");
var clickExtendFlex=document.querySelector(".click-extend-flex");
var forward=document.querySelector(".forward");
var oldtext=document.querySelector(".sign");
var btnReturn=document.querySelector(".return")

forward.addEventListener("click",function(){
  forward.style.display="none";
  clickExtendFlex.style.display="block";
  calc.style.width=calc.offsetWidth+76+"px";
  clickExtendFlex.className="click-extend-flex-java";
  clickExtendFlex.style.display="flex";
});
btnReturn.addEventListener("click",function(){
  
    calc.style.width=calc.offsetWidth-76+"px";
    forward.style.display="block";
    clickExtendFlex.className="click-extend-flex-java";
    clickExtendFlex.style.display="none";
    forward.style.display="flex";
});