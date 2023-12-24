function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    answer.classList.toggle('open');
    if (answer.classList.contains('open')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
        answer.style.maxHeight = 0;
    }
}


var classHeadingKickboxing = document.getElementById("class-heading-kickboxing");
var showClassKickboxing = document.getElementById("show-class-kickboxing");
var hideClassKickboxing = document.getElementById("hide-class-kickboxing");

let isShownKickboxing = false;

classHeadingKickboxing.addEventListener("click",function(){
    isShownKickboxing = !isShownKickboxing;
    if(isShownKickboxing){
        showClassKickboxing.style.display = "none";
        hideClassKickboxing.style.display = "block";
    }
    else{
        showClassKickboxing.style.display = "block";
        hideClassKickboxing.style.display = "none";
    }
});

var classHeadingBoxing = document.getElementById("class-heading-boxing");
var showClassBoxing = document.getElementById("show-class-boxing");
var hideClassBoxing = document.getElementById("hide-class-boxing");

let isShownBoxing = false;

classHeadingBoxing.addEventListener("click",function(){
    isShownBoxing = !isShownBoxing;
    if(isShownBoxing){
        showClassBoxing.style.display = "none";
        hideClassBoxing.style.display = "block";
    }
    else{
        showClassBoxing.style.display = "block";
        hideClassBoxing.style.display = "none";
    }
});

var classHeadingFunctional = document.getElementById("class-heading-functional");
var showClassFunctional = document.getElementById("show-class-functional");
var hideClassFunctional = document.getElementById("hide-class-functional");

let isShownFunctional = false;

classHeadingFunctional.addEventListener("click",function(){
    isShownFunctional = !isShownFunctional;
    if(isShownFunctional){
        showClassFunctional.style.display = "none";
        hideClassFunctional.style.display = "block";
    }
    else{
        showClassFunctional.style.display = "block";
        hideClassFunctional.style.display = "none";
    }
});