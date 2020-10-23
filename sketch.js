
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1= new Bob(280,400,30);
	bob2= new Bob(340,400,30);
	bob3= new Bob(400,400,30);
	bob4= new Bob(460,400,30);
	bob5= new Bob(520,400,30);
  roof1= new Roof(400,200,500,30);
  rope1= new rope(bob1.body, roof1.body, -20, 30);
  rope2= new rope(bob2.body, roof1.body, -10, 30);
  rope3= new rope(bob3.body, roof1.body, 400, 30);
  rope4= new rope(bob4.body, roof1.body, 10, 30);
  rope5= new rope(bob5.body, roof1.body, 20, 30);
	Engine.run(engine);
  if (keyCode===UP_ARROW){
    
  }
}


function draw() {
  rectMode(CENTER);
  background(225);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



