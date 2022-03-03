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
//-----------------------------------------------------------
//first method wich is not working
   var Children= document.getElementsByTagName("img");
   for(var i =0;i<Children.length;i++){
    var Parent=Children[i].parentNode ; 
    Parent.removeChild(Children[i]);     
  }
//------------------------------------------------------------
//second method working
  // var Parents= document.getElementsByTagName("td");
  //     for(var i =0;i<=Parents.length;i++){
  //         var child = Parents[i].lastElementChild; 
  //         while (child) {
  //             Parents[i].removeChild(child);
  //             child = Parents[i].lastElementChild;
  //    }
  //  GameArray=[0,0,0,0,0,0,0,0,0];
  //  Turn="playerA";
//-----------------------------------------------------------
//third method working
    /*for(var i=0;i<GameArray.length;i++){
      if(GameArray[i]!=0){
        var ParentID=""+(1+i);
        var Parent=document.getElementById(ParentID);  
        while (Parent.hasChildNodes()) {
          Parent.removeChild(Parent.firstChild);
          GameArray[i]=0;
        }
      }
    }
    Turn="playerA";*/
//------------------------------------------------------------

}



