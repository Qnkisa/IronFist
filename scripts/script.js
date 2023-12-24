//navbar hamburger script

var hamburger = document.getElementById("hamburger");
var navbar = document.getElementById("navbar");

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
});

