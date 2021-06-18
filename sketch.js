
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
	createCanvas(windowWidth, windowHeight);


//	engine = Engine.create();
//	world = engine.world;

	//Create the Bodies Here.

	player=createSprite(windowWidth-921, windowHeight-191, 10, 10);
	player.addImage(playerImg);
	player.scale=0.4;

	obstGrp=createGroup();
	laserGrp=createGroup();
	
	//Engine.run(engine);
	console.log(windowWidth, windowHeight);
  
}


function draw(){
   background(bg);
	laserGrp.debug=true;
  
  

if(keyWentDown("space")){
	laserGrp.setVelocityYEach=-6;
	laserGrp.visibleEach=true;
}

for(var i=0;i<obstGrp.length;i++){
if(laserGrp.isTouching(obstGrp.get(i))){
	obstGrp.get(i).destroy();
   //laser.changeAnimation('collided',destroy);	
}
}



if(keyDown(LEFT_ARROW)){
	player.x=player.x-8;
}

if(keyDown(RIGHT_ARROW)){
	player.x=player.x+8;
}
 
 spawnLas();

spawnMeteorite();	
 
 
  drawSprites();
 }

function spawnMeteorite(){
	if(frameCount%50===0){
	obstacle=createSprite(player.x, windowHeight-691, 10, 10);
	obstacle.addImage(obstacleImg);
	obstacle.scale=0.15;
	obstacle.velocityY=10;

	obstGrp.add(obstacle);
	}
}

function spawnLas(){
	if(frameCount%10===0){
		laser=createSprite(player.x, player.y, 1,1);
		laser.addImage(laserImg);
		laser.scale=0.08;
		laser.visible=false;
		
		laserGrp.add(laser);
	}
}
	

