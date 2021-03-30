const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies,
  Body = Matter.Body,
  Render = Matter.Render,
  Constraint=Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=150;
var score =0;
var PLAY=1;
var END=0;
var gameState=PLAY;
var count=0;
var particle;
function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   //CREATE DIVIDERS
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
   //END CREATE DIVIDERS

   //CREATE DOTS
    for (var j = 75; j <=width; j=j+50){
      plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j,375));
    }
   //END CREATE DOTS
}
 

 
function draw() {
  background("black");
  Engine.update(engine);
 textSize(36);
 fill("green");
 text("Score: "+score,15,40);
 text("Turns Used: "+count,525,40);
 text("/5",750,40);
 textSize(24);
 text("500      500      500      500      100      100      100      200      200      200",20,475);
  
   //DISPLAY DOTS
   for (var i = 0; i < plinkos.length; i++) {
   plinkos[i].display();
   }
   //END DISPLAY DOTS

     for (var j = 0; j < particles.length; j++) {
      particles[j].display();
     }
   //DISPLAY DIVIDERS

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   //END DISPLAY DIVIDERS
   if(count===5){
     gameState=END;
   }
   if(gameState===END){
     textSize(50);
     fill("red");
     text("GAME OVER",255,140);
   }
   if(mouseWentDown("leftButton")){
    if(gameState!==END){
      particles.push(new Particle(mouseX, 10,10));
      count=count+1;
    }
   }
   if(particle.body.position.y>500){
     score=score+500
   }
   console.log(count); 
//END FUNCTION DRAW
}
