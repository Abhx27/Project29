
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,600,150,10);
	ground.shapeColor=color(182, 64, 65)

hexagon = createSprite(140,575,30,30)
hexagon.shapeColor=color(250, 255, 0)

block1 = createSprite(340,575,30,40)
block1.shapeColor=color(255, 0, 0)
block2 =  createSprite(370,575,30,40)
block2.shapeColor=color(0, 0, 255)
block3 =  createSprite(400,575,30,40)
block3.shapeColor=color(255,0,0)
block4 =  createSprite(430,575,30,40)
block4.shapeColor=color(0,0,255)
block5 =  createSprite(460,575,30,40)
block5.shapeColor=color(255,0,0)

block6 =  createSprite(370,535,30,40)
block6.shapeColor=color(255,0,0)
block7 =  createSprite(400,535,30,40)
block7.shapeColor=color(0,0,255)
block8 =  createSprite(430,535,30,40)
block8.shapeColor=color(255,0,0)

block9 =  createSprite(400,495,30,40)
block9.shapeColor=color(255,0,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(hexagon.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
	slingShot.fly();
}