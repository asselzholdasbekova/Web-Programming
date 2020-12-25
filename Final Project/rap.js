$(document).ready(function () {
    $("#read-button").click(function () {
        $("#text-ktl").slideToggle(400);
    });
 });
 
 $(document).ready(function () {
    $("#top-button").click(function () {
        $("#text-top").slideToggle(400);
    });
 });
 
 $(document).ready(function () {
    $("#code-button").click(function () {
        $("#text-code").slideToggle(400);
    });
 });
 
 $(document).ready(function () {
    $("#young-button").click(function () {
        $("#text-young").slideToggle(400);
    });
 });

 var myAudios=document.getElementsByClassName("music");
 var myButtons=document.getElementsByClassName("buttons");
 console.log(myButtons);
    
  
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