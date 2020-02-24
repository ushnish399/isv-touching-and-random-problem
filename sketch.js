var robot, boss, life;
var life6img, life5img, life4img, life3img, life2img, life1img, life0img;
var score=60;
var bullet, bullet1, bullet2, bullet3, bullet4, bullet5, bullet6, bullet7;



function preload(){
  life6img=loadImage( "lifebar6.png");
  life5img=loadImage("lifebar5.png");
  life4img=loadImage("lifebar4.png");
  life3img=loadImage("lifebar3.png");
  life2img=loadImage("lifebar2.png");
  life1img=loadImage("lifebar1.png");
  life0img=loadImage("lifebar0.png");
}





function setup() {
  createCanvas(800,800);
  robot=createSprite(400, 400, 50, 50);
  boss=createSprite(400, 200, 100, 100);
  life=createSprite(200, 400, 20, 400);
  life.addImage(life6img);
  life.scale=0.5;
}

function draw() {
  background("pink"); 

 
  
  
  if(keyDown("LEFT_ARROW")){
    robot.x=robot.x-5;
    
}
if(keyDown("RIGHT_ARROW")){
    robot.x=robot.x+5;
}
if(keyDown("UP_ARROW")){
    robot.y=robot.y-5;
}
if(keyDown("DOWN_ARROW")){
    robot.y=robot.y+5;
}
if(robot.x<0||robot.x>800||robot.y>800||robot.y<0){
    fill("white");
   textFont("courier new")
   textSize(40);
    text("COME INSIDE!!", 500, 500);  
    
}

spawnBullets();
if(robot.isTouching(bullet1)){
  score=score-1
}

if(score===50){
  life.addImage(life5img);
}
if(score===40){
  life.addImage(life4img);
}
if(score===30){
  life.addImage(life3img);
}
if(score===20){
  life.addImage(life2img);
}
if(score===10){
  life.addImage(life1img);
}
if(score===0||score<0){
  life.addImage(life0img);
  fill("white");
  textFont("courier new")
  textSize(40);
   text("GAME OVER", 500, 500);
}
  drawSprites();
}
function spawnBullets(){
  if(World.frameCount % 45 === 0){
     bullet=createSprite(boss.x, boss.y, 30, 30);
    bullet.velocityY=-5;
    bullet.lifetime=220;

     bullet1=createSprite(boss.x, boss.y, 30, 30);
    bullet1.velocityY=5;
    bullet1.lifetime=220;

     bullet2=createSprite(boss.x, boss.y, 30, 30);
    bullet2.velocityX=-5;
    bullet2.lifetime=220;

     bullet3=createSprite(boss.x, boss.y, 30, 30);
    bullet3.velocityX=5;
    bullet3.lifetime=220;

     bullet4=createSprite(boss.x, boss.y, 30, 30);
    bullet4.velocityY=-5;
    bullet4.velocityX=5;
    bullet4.lifetime=220;

     bullet5=createSprite(boss.x, boss.y, 30, 30);
    bullet5.velocityY=5;
    bullet5.velocityX=-5;
    bullet5.lifetime=220;

     bullet6=createSprite(boss.x, boss.y, 30, 30);
    bullet6.velocityX=5;
    bullet6.velocityY=5;
    bullet6.lifetime=220;

      bullet7=createSprite(boss.x, boss.y, 30, 30);
    bullet7.velocityX=-5;
    bullet7.velocityY=-5;
    bullet7.lifetime=220;
  }
}