var Turn="playerA";
var GameArray=new Array(0,0,0,0,0,0,0,0,0);//0 for not selected , 1 for player 1 and 2 for player 2
var A_Array=new Array;//Array of select indexes by player A
var B_Array=new Array;//Array of select indexes by player B
var Win_Array=new Array([0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]);
var A_Wins=0;
var B_Wins=0;
function SetImg(e){
    var TagetTD=e.srcElement;
    var TDNum=(eval(TagetTD.id)-1);
    if(GameArray[TDNum]==0){
      if(Turn=="playerA"){
        var TDimg =document.createElement("img") ;
        TDimg.src="multiply.png";
        TagetTD.appendChild(TDimg);
        GameArray[TDNum]=1;
        A_Array.push(eval(TDimg.parentNode.id)-1);
        GameCheck(Turn);
        Turn="playerB";  
      }  
      else if(Turn=="playerB"){
        var TDimg =document.createElement("img") ;
        TDimg.src="circle.png";
        TagetTD.appendChild(TDimg);
        GameArray[TDNum]=2;
        B_Array.push(eval(TDimg.parentNode.id)-1);
        GameCheck(Turn);
        Turn="playerA";
      }
    }  
    ShowTurn();
}
function ResetBoard(){
//-----------------------------------------------------------
//first method working
  var Children= document.getElementsByTagName("img");
  for(var i =0;i<Children.length;i++){
    var Parent=Children[i].parentNode ; 
    Parent.removeChild(Children[i]);  
    i--;  
  } 
  GameArray=[0,0,0,0,0,0,0,0,0];
  Turn="playerA";
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
function Reset(){
    var Children= document.getElementsByTagName("img");
    for(var i =0;i<Children.length;i++){
      var Parent=Children[i].parentNode ; 
      Parent.removeChild(Children[i]);  
      i--;  
    }
    A_Wins=0;
    document.getElementById("A_Wins").innerText=A_Wins; 
    B_Wins=0;
    document.getElementById("B_Wins").innerText=B_Wins; 
    GameArray=[0,0,0,0,0,0,0,0,0];
    Turn="playerA";
}

function ShowTurn(){
  if(Turn=="playerA"){
    document.getElementById("player_A").style.textDecoration ="underline";
    document.getElementById("player_B").style.textDecoration ="none";
  }
  else{
    document.getElementById("player_B").style.textDecoration ="underline";
    document.getElementById("player_A").style.textDecoration ="none";
  }
}





function GameCheck(player){
  if(player=="playerA"){
    for(var j=0;j<Win_Array.length;j++){
    if(Win_Array[j].every(SelectedIndexes => A_Array.includes(SelectedIndexes))){alert("Plyer A Won");ResetBoard();A_Array=[];B_Array=[];
    A_Wins++;
    document.getElementById("A_Wins").innerText=A_Wins;  
    } 
    else if(!GameArray.includes(0)){alert("Draw!!!");ResetBoard();A_Array=[];B_Array=[]}
    }
  }
  else if(player=="playerB"){
      for(var j=0;j<Win_Array.length;j++){
      if(Win_Array[j].every(SelectedIndexes => B_Array.includes(SelectedIndexes))){ alert("Plyer B Won");ResetBoard();A_Array=[];B_Array=[];
      B_Wins++;
      document.getElementById("B_Wins").innerText=B_Wins;
      }
      else if(!GameArray.includes(0)){alert("Draw!!!");ResetBoard();A_Array=[];B_Array=[]}
      }  
  }
  

}
