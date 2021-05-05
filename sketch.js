
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, invisibleGround;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(900,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15;
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.X=ground.width/2;
 // console.log(ground.x);
  
  invisibleGround=createSprite(400,360,900,5);
  invisibleGround.visible=false;

  
}


function draw() {
  background(255);
  
   
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+ survivalTime,100,50);
  
 

  if(keyDown("space")&& monkey.y >=100){
    monkey.velocityY=-12;
  }
 
  monkey.velocityY = monkey.velocityY+0.8;
  
   if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  monkey.collide(invisibleGround);
  
  //spawn the bananas
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
}

function spawnBananas(){

if(frameCount % 80 === 0){
  banana=createSprite(600,200,40,10);
  banana.addImage(bananaImage)
  banana.y=Math.round(random(120,200));
  banana.scale=0.1;
  banana.velocityX=-4;
  
  banana.lifetime=390;
  
  banana.depth=monkey.depth
  monkey.depth=monkey.depth;
    }
}


function spawnObstacles(){

if(frameCount % 300 === 0){
  obstacles=createSprite(600,325,40,10);
  obstacles.addImage(obstacleImage)
  
  obstacles.scale=0.1;
  obstacles.velocityX=-4;
  
  obstacles.lifetime=390;
    }
}





