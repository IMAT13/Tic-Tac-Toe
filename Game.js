var Turn="playerA";
var GameArray=new Array(0,0,0,0,0,0,0,0,0);//0 for not selected , 1 for player 1 and 2 for player 2
function SetImg(e){
    var TagetTD=e.srcElement;
    var TDNum=(eval(TagetTD.id)-1);
    if(GameArray[TDNum]==0){
      if(Turn=="playerA"){
        var TDimg =document.createElement("img") ;
        TDimg.src="circle.png";
        TagetTD.appendChild(TDimg);
        Turn="playerB";
        GameArray[TDNum]=1;
      }  
      else if(Turn=="playerB"){
        var TDimg =document.createElement("img") ;
        TDimg.src="multiply.png";
        TagetTD.appendChild(TDimg);
        Turn="playerA";
        GameArray[TDNum]=2;
      }
    }  

}
function Reset(){
   var Parents= document.getElementsByTagName("td");
//    var Children= document.getElementsByTagName("img");
    for(var i =0;i<=8;i++){
        var child = Parents[i].lastElementChild; 
        while (child) {
            Parents[i].removeChild(child);
            child = Parents[i].lastElementChild;
   }
   GameArray=[0,0,0,0,0,0,0,0,0];
   Turn="playerA";
}
}


