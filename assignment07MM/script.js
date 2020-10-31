var board;
const player="X";
const computer="O";
const arrayWin=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const boxes=document.querySelectorAll(".box");

start();
function start(){
    document.querySelector(".end").style.display="none";
    board=Array.from(Array(9).keys());
    for (var i=0; i<boxes.length;i++){
        boxes[i].innerText="";
        boxes[i].addEventListener("click",clickFn,false);
    }
}
function clickFn(object) {
    if (typeof board[object.target.id]=="number"){
        forClickFn(object.target.id, player);
        if(tieCheck){
            forClickFn(computerChoice(),computer);
    }
    }
    
}
function forClickFn(objectID,playing){
    board[objectID]=playing;
    document.getElementById(objectID).innerText=playing;
    let won=resultCheck(board,playing);
    if (won){
        over(won);
    } 
}
function resultCheck(board,playing){
    let play=board.reduce((accum, elem, ind)=>(elem===playing)?accum.concat(ind):accum,[]);
    let won=null;
    for (let[ind, win] of arrayWin.entries()){
        if (win.every(elem=>play.indexOf(elem)>-1)){
            won={ind:ind, playing:playing};
            break;
        }
    }
    return won;
}
function over(won){
    for (var i=0; i<boxes.length; i++){
        boxes[i].removeEventListener("click",clickFn,false)
    }
    winner(won.playing==player?"You are Winner!":"You are Loser!");
}
function winner(message){
    document.querySelector(".end").style.display="block";
    document.querySelector(".end .endText").innerText=message;
}
function emptyboxes(){
    return board.filter(element=> typeof element=="number");
}
function computerChoice(){
    return emptyboxes()[0];
}
function tieCheck(){
    if (emptyboxes().length==0){
        for(var i=0; i<boxes.length;i++){
            boxes[i].removeEventListener("click", clickFn,false);
        }
        winner("Tie Game!");
        return true;
    }
    return false;
}
