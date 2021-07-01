
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;*/

var laser, gameState;

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
	console.log(player.y);

	 gameState="start";
}


function draw(){
   background(bg);

   if(gameState==="start"){
	strokeWeight(5);
	stroke("black")
	fill("yellow");
	textSize(35);
	text("Cosmic Ranger", windowWidth/2-100, windowHeight-600);
	fill("orange");
	textSize(25);
	text("Shoot the lasers and don't let the meteorites touch you!",
	 windowWidth/2-250, windowHeight-500);
	text("Press 'enter' to play", windowWidth/2-250, windowHeight-450);
   }
	if(keyDown(ENTER)){
		gameState="play";
	}

	if(gameState==="play"){
if(keyWentDown("space")){
	spawnLas();
}

for(var i=0;i<obstGrp.length;i++){
if(laserGrp.isTouching(obstGrp.get(i))){
	obstGrp.get(i).destroy();
   	
}
}




/*if(keyDown(UP_ARROW)){
	player.y=player.y-8;
	
}*/


if(keyDown(LEFT_ARROW)){
	player.x=player.x-8;
	
}

if(keyDown(RIGHT_ARROW)){
	player.x=player.x+8;
	
} 

spawnMeteorite();	
 
drawSprites();

}

for(var i=0;i<obstGrp.length;i++){
	if(obstGrp.isTouching(player)){
		gameState="end";
	}
}

if(gameState==="end"){
	fill("red");
	textSize(40);
	text("Game Over!", windowWidth/2-100, windowHeight-400);
	obstGrp.destroyEach();
	player.destroy();
}
 
}

function spawnMeteorite(){
	if(frameCount%50===0){
	obstacle=createSprite(player.x, windowHeight-600, 10, 10);
	obstacle.addImage(obstacleImg);
	obstacle.scale=0.15;
	obstacle.velocityY=8;
	obstGrp.add(obstacle);
	}
}

function spawnLas(){
		laser=createSprite(player.x, player.y, 1,1);
		laser.addImage(laserImg);
		laser.scale=0.08;
		laser.velocityY=-6;
		laserGrp.add(laser);
}
	

