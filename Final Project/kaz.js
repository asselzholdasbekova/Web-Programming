var mvs=document.getElementsByClassName("youtube");

function displayVideo(n){
    mvs[n].style.display="flex";
    $(mvs[n]).animate({opacity:"1"});
    document.body.style.overflowY="hidden";
}

function closeVideo(n){
    mvs[n].style.display="none";
    $(mvs[n]).animate({opacity:"0"});
    document.body.style.overflowY="scroll";
    mvs[n].pause();
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