var Play=1
var end=0
var gameState

var mario

function preload()
{
mario_running=loadAnimation("Capture1.png","Capture3.png","capture4.png")  
}
function setup()
{
createCanvas(600,200) 
  mario=createSprite(300,300,20,20)
  mario.scale=0.5

ground.createSprite(0,170,600,20)
ground.velocityX=-7
}
function draw()
{
 background("blue") 
 ground.width/2  





drawSprites();
}













