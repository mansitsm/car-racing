var  database;

var canvas,playerCount=0,gameState=0,player,form,game;

function setup(){

  database = firebase.database();
  console.log(database);

  canvas=createCanvas(500,500);
game=new Game();
game.getState()
game.start()
 
}

function draw(){
  background("white");
  
   
  
}

