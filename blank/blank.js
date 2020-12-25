function load() {
    $('#f1').animate({ opacity: '1' }, "400");
    $('#f2').animate({ opacity: '1' }, "400");
    $('#about').animate({ opacity: '1' }, "400");
    // //   var a = document.getElementById('id_menu');
    //   document.querySelector(".menu").style.display = "none";
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function open_submit(){
//   document.querySelector(".contact").style.display = "flex";
// }
// function close_submit(){
//   document.querySelector(".contact").style.display = "none";
// /////////////////////////////////////////////////////////////////////////////////////////////////////
function over_1() {
    document.querySelector("#i1").style.opacity = '0.7';
    document.querySelector(".rating_round_1").style.border = 'none';
    document.querySelector("#i1").style.width = '150px';
    document.querySelector("#i1").style.height = '150px';
    $('#i1').animate({ opacity: '1' }, "slow");
}
function out_1() {
    document.querySelector("#i1").style.width = '110px';
    document.querySelector("#i1").style.height = '110px';
    document.querySelector("#i1").style.opacity = '1';
    document.querySelector(".rating_round_1").style.border = '2px solid red';
}

function over_2() {
    document.querySelector("#i2").style.opacity = '0.7';
    document.querySelector(".rating_round_2").style.border = 'none';
    document.querySelector("#i2").style.width = '150px';
    document.querySelector("#i2").style.height = '150px';
    $('#i2').animate({ opacity: '1' }, "slow");
}
function out_2() {
    document.querySelector("#i2").style.width = '110px';
    document.querySelector("#i2").style.height = '110px';
    document.querySelector("#i2").style.opacity = '1';
    document.querySelector(".rating_round_2").style.border = '2px solid red';
}

function over_3() {
    document.querySelector("#i3").style.opacity = '0.7';
    document.querySelector(".rating_round_3").style.border = 'none';
    document.querySelector("#i3").style.width = '150px';
    document.querySelector("#i3").style.height = '150px';
    $('#i3').animate({ opacity: '1' }, "slow");
}
function out_3() {
    document.querySelector("#i3").style.width = '110px';
    document.querySelector("#i3").style.height = '110px';
    document.querySelector("#i3").style.opacity = '1';
    document.querySelector(".rating_round_3").style.border = '2px solid red';
}

function over_4() {
    document.querySelector("#i4").style.opacity = '0.7';
    document.querySelector(".rating_round_4").style.border = 'none';
    document.querySelector("#i4").style.width = '150px';
    document.querySelector("#i4").style.height = '150px';
    $('#i4').animate({ opacity: '1' }, "slow");
}
function out_4() {
    document.querySelector("#i4").style.width = '110px';
    document.querySelector("#i4").style.height = '110px';
    document.querySelector("#i4").style.opacity = '1';
    document.querySelector(".rating_round_4").style.border = '2px solid red';
}

function over_5() {
    document.querySelector("#i5").style.opacity = '0.7';
    document.querySelector(".rating_round_5").style.border = 'none';
    document.querySelector("#i5").style.width = '150px';
    document.querySelector("#i5").style.height = '150px';
    $('#i5').animate({ opacity: '1' }, "slow");
}
function out_5() {
    document.querySelector("#i5").style.width = '110px';
    document.querySelector("#i5").style.height = '110px';
    document.querySelector("#i5").style.opacity = '1';
    document.querySelector(".rating_round_5").style.border = '2px solid red';
}

function over_6() {
    document.querySelector("#i6").style.opacity = '0.7';
    document.querySelector(".rating_round_6").style.border = 'none';
    document.querySelector("#i6").style.width = '150px';
    document.querySelector("#i6").style.height = '150px';
    $('#i6').animate({ opacity: '1' }, "slow");
}
function out_6() {
    document.querySelector("#i6").style.width = '110px';
    document.querySelector("#i6").style.height = '110px';
    document.querySelector("#i6").style.opacity = '1';
    document.querySelector(".rating_round_6").style.border = '2px solid red';
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
function insta_over() {
    document.querySelector("#insta").style.width = '30px';
    document.querySelector("#insta").style.height = '30px';
}
function insta_out() {
    document.querySelector("#insta").style.width = '25px';
    document.querySelector("#insta").style.height = '25px';
}
function vk_over() {
    document.querySelector("#vk").style.width = '30px';
    document.querySelector("#vk").style.height = '30px';
}
function vk_out() {
    document.querySelector("#vk").style.width = '25px';
    document.querySelector("#vk").style.height = '25px';
}




AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

window.onscroll = function showHeader() {
    var div = document.getElementsByClassName('nav_link'); 
        
        

     var header = document.querySelector('.header');

     if (window.pageYOffset > 100){
        header.classList.add('header_fixed');
        document.getElementById("img1").src="Credo 11 png.png";
        document.getElementById("img111").src="credo1.png";
        //document.querySelector(".header").style.backgroundColor = "#262626";
        for (var i = 0; i < div.length; i++){
            style = div[i].style;
            style.color = "#E7CA40";
        }
        
    }
    else{
        header.classList.remove('header_fixed');
        document.getElementById("img1").src="Credo 22 png.png";
        document.getElementById("img111").src="credo/Credo_2_png-removebg-preview.png";
        //document.querySelector(".header").style.backgroundColor = "#E2E2E2";

        for (var i = 0; i < div.length; i++){
            style = div[i].style;
            style.color = "black";
        }
    }
 }
function load(){
    $(".intro_inner").animate({opacity: '1'}, "slow");
    $(".intro_img").animate({opacity: '1'}, "slow");
}
/*botton  оставить заявку*/

function popup(){    
    var btn = document.getElementById("question").innerHTML;
    {
        document.querySelector(".popup").style.display = "flex";
        $(".popup").animate({opacity: "1"}, "slow");
       
    }
}   
function close_popup(){    
    $(".popup").animate({opacity: "0"}, "slow");
    document.querySelector(".popup").style.display = "none";
}


/*=========================================================*/
/*swiper*/
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true
});


/*===================================*/
var myVideo = document.getElementById("video1");
       
function popup_video(){    
    document.querySelector(".popup_video").style.display = "flex";
    myVideo.play(); 
}

function close_popup_video(){   
    myVideo.pause(); 
    document.querySelector(".popup_video").style.display = "none";
} 
var x=1;
function displayFn(){
    if (x==1){
        document.getElementById("second_gallery").style.display="flex";
        document.getElementById("Btn").innerHTML="Скрыть галерею";
        return x=0;
    }
    else{
        document.getElementById("second_gallery").style.display="none";
        document.getElementById("Btn").innerHTML="Показать галерею";
        return x=1;
    }
}

/*======================================*/
$(function(){
    $(".header a").on('click',function(){
        $("html,body").animate({
            scrollTop:$($.attr(this,'href')).offset().top

        },700);
    });

});
