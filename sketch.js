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

	block = new Block(340,575,30,40)
	block1 = new Block(370,575,30,40)
	block2 = new Block(400,575,30,40)
	block3 = new Block(430,575,30,40)
	block4 = new Block(460,575,30,40)
	block5 = new Block(370,535,30,40)
	block6 = new Block(400,535,30,40)
	block7 = new Block(430,535,30,40)
	block8 = new Block(400,495,30,40)
hexagon = createSprite(140,575,30,30)
hexagon.shapeColor=color(250, 255, 0)

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  block.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(hexagon.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
	slingShot.fly();
}
