function reveal(y,x){
  $("#item"+(10*y+x)).css({"background-color":"skyblue"});
  if(arr[y][x]!="B"){
  $("#item"+(10*y+x)).html(arr[y][x]);
  }
  else{
    $("#item"+(10*y+x)).html('<img style = "height:3.5vh;" src = "bomb.png"></img>');
  }
  if(y<=arr.length-1&&x<=arr[0].length-1&&!revealed[y][x]&&arr[y][x]!="B"){
    numRevealed++;
    revealed[y][x]=true;
    console.log("Coords: " + y + " " + x);
    console.log(numRevealed);
  }
}

function restart(){
  time = 0;
  first_round = true;
  arr = [[],[],[],[],[],[],[],[],[]];
  bombCount = 10;
  bombsTouch = 0;
  revealed = [[],[],[],[],[],[],[],[],[]];
  allZeroes = false;
  numRevealed = 0;
  lose = false;
  for(var i =0;i<9;i++){
  for(var j = 0; j<9;j++){
    arr[i][j]="hi";
    $("#item"+(10*i+j)).css({"background-color":"blue"});
    $("#item"+(10*i+j)).empty();
  }
}
setBoxes();
  console.log(arr);
  console.log(lose);
}
 
function revealSquares(y,x,flag){
  

  if(flag){
    console.log(flagged[y][x]);
    if(flagged[y][x]){
      $("#item"+(10*y+x)).css({"background-color":"blue"});
      $("#item"+(10*y+x)).empty();
     flagged[y][x]=false;

    }
    else{
     $("#item"+(10*y+x)).css({"background-color":"skyblue"});
     $("#item"+(10*y+x)).html("F");
     flagged[y][x]=true;
    }
  }
  if(!lose){
  if(arr[y][x]!="B"&&!flag){
    reveal(y,x);
  }
  
  else if (!flag){
    lose = true;
    clearInterval(startGame);
    alert("You clicked on a mine! You lose! Press Enter to restart");
    for(var i = 0; i<arr.length;i++){
      for(var j = 0; j<arr.length;j++){
        reveal(i,j);
      }
    }
  }


  if(arr[y][x]==String(0)&&!flag){

    for(var i = Math.max(y-1,0);i<=Math.min(y+1,arr.length-1);i++){
      for(var j = Math.max(x-1,0);j<=Math.min(x+1,arr[0].length-1); j++){
        if(!revealed[i][j]){
          //console.log("recursion");
          revealSquares(i,j,false);
        }

      }
    }
    
/*
    if(x==0){
      reveal(y,x+1);
    
    if(y!=0&&y!=arr.length-1){
      reveal(y-1,x);
      reveal(y+1,x);
      reveal(y+1,x+1);
      reveal(y-1,x+1);
    }
    if(y==0){
      reveal(y+1,x);
     reveal(y+1,x+1);
    }
    if(y==arr.length-1){
      reveal(y-1,x);
      reveal(y-1,x+1);

    }
  }

else if(x==arr[0].length-1){
    reveal(y,x-1);
    if(y!=0&&y!=arr.length-1){
      reveal(y-1,x);
      reveal(y+1,x);
      reveal(y+1,x-1);
      reveal(y-1,x-1);
    }
    if(y==0){
      reveal(y+1,x);
      reveal(y+1,x-1);
    }
    if(y==arr.length-1){
      reveal(y-1,x);
      reveal(y-1,x-1);

    }
  }

else if(y==arr.length-1){
    reveal(y-1,x);
    if(x!=0&&x!=arr[0].length-1){
      reveal(y-1,x-1);
      reveal(y-1,x+1);
      reveal(y,x-1);
      reveal(y,x+1);
    }
  }
else if(y==0){
  reveal(y+1,x);
  if(x!=0&&x!=arr[0].length-1){
    reveal(y+1,x-1);
    reveal(y+1,x+1);
    reveal(y,x-1);
    reveal(y,x+1);
  }
}
else{
  reveal(y-1,x);
  reveal(y+1,x);
  reveal(y+1,x+1);
  reveal(y-1,x+1);
  reveal(y,x+1);
  reveal(y,x-1);
  reveal(y-1,x-1);
  reveal(y+1,x-1);
}
*/
/*
while(!allZeroes){
  allZeroes=true;
  for(var i=0;i<arr.length;i++){

    for(var j=0;j<arr[0].length;j++){
      if(j>0&&j<arr[0].length-1){
        if(arr[i][j]==String(0)&&revealed[i][j+1]&&arr[i][j+1]==String(0)){
          allZeroes = false;
        reveal(i-1,j);
        reveal(i+1,j);
        reveal(i+1,j+1);
        reveal(i-1,j+1);
        reveal(i,j+1);
        reveal(i,j-1);
        reveal(i-1,j-1);
        reveal(i+1,j-1);
        }
      }
    }
  }
}


 }

 */
}
  }
}


function firstClick(y,x){
  console.log(y+""+x);
  if(x==0){
    arr[y][x+1]="F";
    if(y!=0&&y!=arr.length-1){
      arr[y-1][x]="F";
      arr[y+1][x]="F";
      arr[y+1][x+1]="F";
      arr[y-1][x+1]="F";
    }
    if(y==0){
      arr[y+1][x]="F";
      arr[y+1][x+1]="F";
    }
    if(y==arr.length-1){
      arr[y-1][x]="F";
      arr[y-1][x+1]="F";

    }
  }

else if(x==arr[0].length-1){
    arr[y][x-1]="F";
    if(y!=0&&y!=arr.length-1){
      arr[y-1][x]="F";
      arr[y+1][x]="F";
      arr[y+1][x-1]="F";
      arr[y-1][x-1]="F";
    }
    if(y==0){
      arr[y+1][x]="F";
      arr[y+1][x-1]="F";
    }
    if(y==arr.length-1){
      arr[y-1][x]="F";
      arr[y-1][x-1]="F";

    }
  }

else if(y==arr.length-1){
    arr[y-1][x]="F";
    if(x!=0&&x!=arr[0].length-1){
      arr[y-1][x-1]="F";
      arr[y-1][x+1]="F";
      arr[y][x-1]="F";
      arr[y][x+1]="F";
    }
  }
else if(y==0){
  arr[y+1][x]="F";
  if(x!=0&&x!=arr[0].length-1){
    arr[y+1][x-1]="F";
    arr[y+1][x+1]="F";
    arr[y][x-1]="F";
    arr[y][x+1]="F";
  }
}
else{
  arr[y-1][x]="F";
  arr[y+1][x]="F";
  arr[y+1][x+1]="F";
  arr[y-1][x+1]="F";
  arr[y][x+1]="F";
  arr[y][x-1]="F";
  arr[y-1][x-1]="F";
  arr[y+1][x-1]="F";


}
}



/*
function setBoxes(){
  while(bombCount>0){
  for(var i=0;i<arr.length-1-1;i++){
    for(var j=0;j<arr[0].length-1;j++){
      if(Math.floor(Math.random()*10)==1&&bombCount>0&&arr[i][j]==null){
        arr[i][j]="B";
        bombCount--;
      }
    }
  }
  }
}*/
  /*
  for(var i = 0;i<arr.length-1;i++){
    for(var j=0;j<arr[0].length-1;j++){
      bombsTouch = 0;
      if(j==0){
    if(arr[i][j+1]=="B"){
      bombsTouch++;
    }
    if(i!=0&&i!=arr.length-1){
      if(arr[i-1][j]=="B"){
      bombsTouch++;
      }
      if(arr[i+1][j]=="B"){
      bombsTouch++;
      }
      if(arr[i+1][j+1]=="B"){
      bombsTouch++;
      }
      if(arr[i-1][j+1]=="B"){
        bombsTouch++;
      }
    }
    if(i==0){
      if(arr[i+1][j]=="B"){
        bombsTouch++;
      }
      if(arr[i+1][j+1]=="B"){
        bombsTouch++;
      }
    }
    if(i==arr.length-1){
      if(arr[i-1][j]=="B"){
        bombsTouch++;
      }

      if(arr[i-1][j+1]=="B"){
        bombsTouch++;
      }

    }
  }

else if(j==arr[0].length-1){
    if(arr[i][j-1]=="B"){
      bombsTouch++;
    }
    if(i!=0&&i!=arr.length-1){
      if(arr[i-1][j]=="B"){
        bombsTouch++;
      }
     if(arr[i+1][j]=="B"){
       bombsTouch++;
     }
      if(arr[i+1][j-1]=="B"){
        bombsTouch++;
    }
      if(arr[i-1][j-1]=="B"){
        bombsTouch++;
      }
    }
    if(i==0){
      if(arr[i+1][j]=="B"){
        bombsTouch++;
      }
      if(arr[i+1][j-1]=="B"){
        bombsTouch++;
      }
    }
    if(i==arr.length-1){
      if(arr[i-1][j]=="B"){
        bombsTouch++;
      }
      if(arr[i-1][j-1]=="B"){
        bombsTouch++;
      }
    }
  }

else if(i==arr.length-1){
    if(arr[i-1][j]=="B"){
      bombsTouch++;
    }
    if(j!=0&&j!=arr[0].length-1){
      if(arr[i-1][j-1]=="B"){
        bombsTouch++;
      }
      if(arr[i-1][j+1]=="B"){
        bombsTouch++;
      }
    }
  }
else if(i==0){
  if(arr[i+1][j]=="B"){
    bombsTouch++;
  }
  if(j!=0&&j!=arr[0].length-1){
    if(arr[i+1][j-1]=="B"){
      bombsTouch++;
    }
    if(arr[i+1][j+1]=="B"){
      bombsTouch++;
    }
  }
}
else{
  if(arr[i-1][j]=="B"){
    bombsTouch++;
  }
  if(arr[i+1][j]=="B"){
    bombsTouch++;
  }
  if(arr[i+1][j+1]=="B"){
    bombsTouch++;
  }
  if(arr[i-1][j+1]=="B"){
    bombsTouch++;
  }

  if(arr[i][j+1]=="B"){
    bombsTouch++;
  }
  if(arr[i][j-1]=="B"){
    bombsTouch++;
  }

  if(arr[i-1][j-1]=="B"){
    bombsTouch++;
  }
  if(arr[i+1][j-1]=="B"){
    bombsTouch++;
  }


}
  arr[i][j]=""+bombsTouch;
    }
  }
  }
*/
