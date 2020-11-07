var x=1;
function displayFn(){
    if (x==1){
        document.getElementById("gallery").style.display="flex";
        document.getElementById("displayBtn").innerHTML="Hide Gallery";
        return x=0;
    }
    else{
        document.getElementById("gallery").style.display="none";
        document.getElementById("displayBtn").innerHTML="Show Full Gallery";
        return x=1;
    }
}
  
function clickFn() {
	let button = document.querySelector("button");
	button.parentNode.classList.add("note");
}
document.querySelector("coursp").addEventListener("click",clickFn);