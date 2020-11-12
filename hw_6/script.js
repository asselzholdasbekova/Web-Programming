
function multiplication(){
    let num1=document.querySelector("#input01");
    let num2=document.querySelector("#input02");
    document.querySelector("#resultValue").innerHTML=num1.value*num2.value;
}

function division(){
    let num1=document.querySelector("#input01");
    let num2=document.querySelector("#input02");
    document.querySelector("#resultValue").innerHTML=num1.value/num2.value;
}

function conversion(){
    let select=document.querySelector("#selection");
    let initialValue=document.querySelector("#initialValue");
    let x=initialValue.value;
    if (select.value=="fc"){
        document.querySelector("#convertedValue").innerHTML=((x-32)/9*5);
    }
    else if (select.value=="cf"){
        document.querySelector("#convertedValue").innerHTML=((x/5*9)+32);
    }
}

function displayVolume(){
    let radius=document.querySelector("#radius");
    let volume=document.querySelector("#volume");
    volume.value=(radius.value)**3*3.14*(4/3);
}

function reverseq(){
    let a=document.querySelector("#originalNumber");
    let b=document.querySelector("#reversedNumber");
    let string="";
    let string1="";
    string+=a.value;
    let list=Array.from(string);
    for (let i=list.length-1; i>=0; i--){
        string1+=list[i];
    }
    b.value=parseInt(string1);
}

let m=document.querySelector("#border1");
m.style.border="10px solid black";
m.style.width="50px";
m.style.height="50px";
m.style.padding="5px";
let n=document.querySelector("#border2");
n.style.border="2px solid black";
n.style.width="90%";
n.style.height="90%";


let k=document.querySelector("#border3");
k.style.width="50px";
k.style.height="50px";
k.style.border="2px solid red";
k.style.borderRadius="25px";

document.querySelector("#background").style.backgroundColor="#EAEAEA";
document.querySelector("#background").style.width="300px";
document.querySelector("#background").style.height="312px";
var circless=document.getElementsByClassName('circles');
for (var i=0;i<circless.length; i++){
    var circle=circless[i];
    circle.style.width="50px";
    circle.style.height="50px";
    circle.style.border="1px solid black";
    circle.style.borderRadius="25px";
}
document.querySelector("#circle1").style.backgroundColor="white";
document.querySelector("#circle2").style.backgroundColor="gainsboro";
document.querySelector("#circle2").style.marginLeft="50px";
document.querySelector("#circle3").style.backgroundColor="silver";
document.querySelector("#circle3").style.marginLeft="100px";
document.querySelector("#circle4").style.backgroundColor="gray";
document.querySelector("#circle4").style.marginLeft="150px";
document.querySelector("#circle5").style.backgroundColor="dimgray";
document.querySelector("#circle5").style.marginLeft="200px";
document.querySelector("#circle6").style.backgroundColor="black";
document.querySelector("#circle6").style.marginLeft="250px";