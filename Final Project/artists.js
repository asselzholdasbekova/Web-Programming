const menu = document.querySelector('.h-menu')
 const nav = document.querySelector('.nav')
 
 let isOpen = false
 
 menu.addEventListener('click', () => {
    
    if (isOpen) {
       nav.style.display = 'none'
       isOpen = false
    } else {
       nav.style.display = 'block'
       isOpen = true
    }
 
    menu.classList.toggle('open')
 });

var artistsList=document.getElementsByClassName("artist");
var infosList=document.getElementsByClassName("aboutItems");

function displayInfo(n){
    infosList[n].style.display="flex";
    $(infosList[n]).animate({opacity:"1"});
    document.body.style.overflowY="hidden";
}

function closeInfo(n){
    infosList[n].style.display="none";
    $(infosList[n]).animate({opacity:"0"});
    document.body.style.overflowY="scroll";
}
AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false, 
    disableMutationObserver: false,
    debounceDelay: 50, 
    throttleDelay: 99, 
    offset: 120, 
    delay: 0, 
    duration: 750, 
    easing: 'ease', 
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
});


 