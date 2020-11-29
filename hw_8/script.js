var questions=document.querySelectorAll("p");
var options1=document.querySelectorAll(".option1");
var options2=document.querySelectorAll(".option2");
var options3=document.querySelectorAll(".option3");
var options4=document.querySelectorAll(".option4");
var answers=document.querySelectorAll(".answers");

const myjson="http://127.0.0.1:5500/hw_8/data.json";


fetch(myjson).then(x=>x.json()).then(x=>{
        for (var i=0; i<questions.length;i++){
            questions[i].innerHTML=x[i].question;
            options1[i].innerHTML=x[i].option1;
            options2[i].innerHTML=x[i].option2;
            options3[i].innerHTML=x[i].option3;
            options4[i].innerHTML=x[i].option4;
            answers[i].innerHTML="Answer: "+x[i].answer;
    }
    })

var countCorrect=0;
var myForm1=document.querySelector("#form1");
var radios1=myForm1.querySelectorAll("input");
var myForm2=document.querySelector("#form2");
var radios2=myForm2.querySelectorAll("input");
var myForm3=document.querySelector("#form3");
var radios3=myForm3.querySelectorAll("input");
var radios123=[radios1,radios2,radios3];
function checkFn(){
    fetch(myjson).then(x=>x.json()).then(x=>
    {
        a=[x[0].option1,x[0].option2,x[0].option3,x[0].option4];
        b=[x[1].option1,x[1].option2,x[1].option3,x[1].option4];
        c=[x[2].option1,x[2].option2,x[2].option3,x[2].option4];
        var abc=[a,b,c];
        for (var i=0; i<radios123.length;i++){
            for(var j=0; j<radios1.length;j++){
                if (radios123[i][j].checked && abc[i][j]==x[i].answer){
                    countCorrect+=1;
                    radios123[i][j].parentElement.style.backgroundColor="green";
                }
                else if(radios123[i][j].checked && abc[i][j]!=x[i].answer){
                    radios123[i][j].parentElement.style.backgroundColor="red";
                }
            }
        }
        document.getElementById("score").innerHTML=countCorrect;
    })
    var m=document.querySelectorAll("input");
    for(var i=0; i<m.length;i++){
        m[i].disabled="true";
    }
    displayAns=document.querySelectorAll(".answers");
    for (var i=0;i<answers.length;i++){
        answers[i].style.display="block";
    }
    document.getElementById("result").style.display="flex";
    document.getElementById("fullname").innerHTML=fullname;
}
function changeFn(){
    fullname=document.getElementById("register-form").value;
    console.log(fullname);
}
