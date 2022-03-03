var Turn="playerA";
var GameArray=[0,0,0,0,0,0,0,0,0];//0 for not selected , A for player 1 and B for player 2
function SetImg(e){
    var TagetTD=e.srcElement;
    var TDimg =document.createElement("img") ;
    TDimg.src="circle.png";
    TagetTD.appendChild(TDimg);
}


