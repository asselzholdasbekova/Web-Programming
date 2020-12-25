
var myAudios=document.getElementsByClassName("music");
var myButtons=document.getElementsByClassName("buttons");

function playMusic(n) {
    var myAudio = myAudios[n];
    var myBtn=myButtons[n]
    if(myAudio.paused) {
       myAudio.play();
       myBtn.innerHTML="Pause";
         }
    else {
       myAudio.pause();
       myBtn.innerHTML="Play";
    }
}

var mvs=document.getElementsByClassName("news-item");

function displayBlock(n){
    mvs[n].style.display="flex";
    $(mvs[n]).animate({opacity:"1"});
    document.body.style.overflowY="hidden";
}

function closeBlock(n){
    mvs[n].style.display="none";
    $(mvs[n]).animate({opacity:"0"});
    document.body.style.overflowY="scroll";
}

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

//AOS initialization
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
