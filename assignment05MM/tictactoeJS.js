var cellsBlock=document.getElementById('cellsBlock');
var turn=0;
var cellsArray=document.getElementsByClassName('cells');
var conditionArray=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
cellsBlock.addEventListener('click',function(event) {
    if (turn%2==0){
        event.target.innerHTML="X";
    }
    else{
        event.target.innerHTML="O";
    }
    turn++;
    analys();
}
)
function analys(){
    for (var i=0; i<conditionArray.length; i++){
        if (cellsArray[conditionArray[i][0]].innerHTML=="X"
        && cellsArray[conditionArray[i][1]].innerHTML=="X"
        && cellsArray[conditionArray[i][2]].innerHTML=="X"){
            alert("X's won!");
            location.reload();
        }
        else if(cellsArray[conditionArray[i][0]].innerHTML=="O"
        && cellsArray[conditionArray[i][1]].innerHTML=="O"
        && cellsArray[conditionArray[i][2]].innerHTML=="O"){
            alert("O;s won!");
            location.reload();
        }
    }
}
