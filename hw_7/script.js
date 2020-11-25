//task01
var selectedYear,
    selectedMonth,
    selectedDay;
function userDate(x){
    if (x.value!=""){
        selectedYear=x.split("-")[0];
        selectedMonth=x.split("-")[1];
        selectedDay=x.split("-")[2];
    }
}

var selectedHour,
    selectedMinute
function userTime(x){
    if (x.value!=""){
        selectedHour=x.split(":")[0];
        selectedMinute=x.split(":")[1];
    }
}

function forBtn(){
    function countFn(){
        var slctdInMillis=new Date(parseInt(selectedYear),parseInt(selectedMonth)-1,parseInt(selectedDay),parseInt(selectedHour),parseInt(selectedMinute)).getTime();
        var currentInMillis=new Date().getTime();

        var days, hours, minutes, seconds;
        seconds=Math.floor(((slctdInMillis-currentInMillis)/1000)%60);
        minutes=Math.floor((((slctdInMillis-currentInMillis)/1000)/60)%60);
        hours=Math.floor(((((slctdInMillis-currentInMillis)/1000)/60)/60)%24);
        days=Math.floor(((((slctdInMillis-currentInMillis)/1000)/60)/60)/24);

        document.getElementById("days").innerHTML=days;
        document.getElementById("hours").innerHTML=hours;
        document.getElementById("minutes").innerHTML=minutes;
        document.getElementById("seconds").innerHTML=seconds;
        
        document.getElementById("rectangle").style.backgroundColor="mediumslateblue"
        document.getElementById("titleCD").innerHTML="Countdown";
        document.getElementById("titleCD").style.marginBottom="45px";
        document.getElementById("selectTime").style.display="none";
        document.getElementById("startBtn").style.display="none";

        if ((slctdInMillis-currentInMillis)<=0){
            clearInterval(fn);

            document.getElementById("days").innerHTML="D";
            document.getElementById("hours").innerHTML="O";
            document.getElementById("minutes").innerHTML="N";
            document.getElementById("seconds").innerHTML="E";

            document.getElementById("rectangle").style.backgroundColor="pink";

            document.getElementById("titleCD").innerHTML="Select Time";
            document.getElementById("titleCD").style.marginBottom="0px";
            document.getElementById("selectTime").style.display="block";
            document.getElementById("startBtn").style.display="block";
        }    
    }
    fn=setInterval(countFn,1000);
}

//task02
function counterFn(x){
    var a=x.replace(/\n{1,}/g,"");
    a=a.replace(/\s{1,}/g,"");
    var charactersList=a.split("");
    var characters=charactersList.length;
    document.getElementById("characters").innerHTML=characters;

    var b=x.replace(/\s{1,}/g," ")
    b=b.replace(/\n{1,}/g," ");
    var wordsList=b.split(" ");
    var words=wordsList.length;
    if (wordsList[wordsList.length-1]==""){
        words-=1;
    }
    document.getElementById("words").innerHTML=words;

    var c=x.replace("!?",".");
    c=c.replace("?!",".");
    c=c.replace(";",".");
    c=c.replace(/\.{3}/g,".");
    c=c.replace(/\!{1,}/g,".");
    c=c.replace(/\?{1,}/g,".");
    var sentencesList=c.split(".");
    var sentences=sentencesList.length;
    if (sentencesList[sentencesList.length-1]==""){
        sentences-=1;
    }
    document.getElementById("sentences").innerHTML=sentences;

    var d=x.replace(/\n/g," ");
    d=d.replace(/\s{2,}/g,"\n");
    console.log(d);
    var paragraphsList=d.split("\n");
    var paragraphs=paragraphsList.length;
    if (paragraphsList[paragraphsList.length-1]==""){
        paragraphs-=1;
    }
    document.getElementById("paragraphs").innerHTML=paragraphs;

    var minutesRead=Math.floor(words/200);
    var secondsRead=Math.floor(((words/200)-Math.floor(words/200))*60);
    document.getElementById("readingTime").innerHTML=minutesRead+" m  "+secondsRead+" s";

    for (var i=0; i<x.length; i++){
        if (!(/[a-zA-Z]/).test(x[i])){
            x=x.replace(x[i]," ");
        }
    }
    var allWords=x.split(" ");
    maxCount=0;
    var keyword="";

    var keywords=[];
    var counts=[];

    for (var f=0; f<4;f++){
        for (var i=0; i<allWords.length;i++){
            if (allWords[i]!=""){
                count=0;
                for (var j=0; j<allWords.length;j++){
                    if (allWords[i]==allWords[j]){
                        count+=1;
                    }
                }
                if (count>=maxCount){
                    maxCount=count;
                    keyword=allWords[i];
                }
            }
        }
        keywords.push(keyword);
        counts.push(maxCount);
        
        var ind=allWords.indexOf(keyword);
        allWords.splice(ind,1);
    }
    document.getElementById("k0").innerHTML=keywords[0]+": ";
    document.getElementById("k1").innerHTML=keywords[1]+": ";
    document.getElementById("k2").innerHTML=keywords[2]+": ";
    document.getElementById("k3").innerHTML=keywords[3]+": ";

    document.getElementById("c0").innerHTML=counts[0];
    document.getElementById("c1").innerHTML=counts[1];
    document.getElementById("c2").innerHTML=counts[2];
    document.getElementById("c3").innerHTML=counts[3];
}