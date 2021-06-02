
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;*/

var laser

function preload()
{
	bg=loadImage("images/bg.jpg");
	playerImg=loadImage("images/ship5.png");
	laserImg=loadImage("images/laser2.png");
	obstacleImg=loadImage("images/asteroid1.png");
	destroy=loadAnimation("images/collapse.png");
}

function setup() {
	createCanvas(1280, 610);


//	engine = Engine.create();
//	world = engine.world;

	//Create the Bodies Here.

	player=createSprite(500, 500, 10, 10);
	player.addImage(playerImg);
	player.scale=0.4;

	obstGrp=createGroup();

	
	//Engine.run(engine);
  
}


function draw(){
   background(bg);
  
   if(frameCount%10===0){
	laser=createSprite(player.x, player.y, 1,1);
	laser.addImage(laserImg);
	laser.scale=0.08;
	laser.visible=false;	
}

for(var i=0;i<obstGrp.length;i++){
if(obstGrp.get(i).isTouching(laser)){
	obstGrp.get(i).destroy();
   //laser.changeAnimation('collided',destroy);	
}
}

if(keyWentDown("space")){
	laser.velocityY=-6;
	laser.visible=true;
}

if(keyDown(LEFT_ARROW)){
	player.x=player.x-8;
}

if(keyDown(RIGHT_ARROW)){
	player.x=player.x+8;
}
 
 

spawnMeteorite();	
 
 
  drawSprites();
 }

function spawnMeteorite(){
	if(frameCount%50===0){
	obstacle=createSprite(player.x, 0, 10, 10);
	obstacle.addImage(obstacleImg);
	obstacle.scale=0.15;
	obstacle.velocityY=10;

	obstGrp.add(obstacle);
	}
}


	

