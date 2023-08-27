

var menu = document.getElementsByClassName("menu");
menu.addEventListener("click", mobile );

function mobile(){
    var nav = document.getElementsByClassName("nav");
    nav.classList.toggle("hidden");
    

}