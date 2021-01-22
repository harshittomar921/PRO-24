
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground1;
var Hammer1;
var Stone1;
var Rubber1;
var Iron1;
var Sand;
var Sand1;
var Sand2;
var Sand3;
var Sand4;
var Sand5;
var Sand6;
var Sand7;
var Sand8;
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   Ground1=new Ground(600,400,1200,20)
   Hammer1=new Hammer(100,100)
   Stone1 = new Stone(700,230,50,50);
   Rubber1 = new Rubber(400,200,25,25)
   Iron1 = new Iron(300,300,35,35)
   Sand = new SandParticles (380,300,7,7)
   Sand1 = new SandParticles (382,300,7,7)
   Sand2 = new SandParticles (384,300,7,7)
   Sand3 = new SandParticles (386,300,7,7)
   Sand4 = new SandParticles (388,300,7,7)
   Sand5 = new SandParticles (390,300,7,7)
   Sand6 = new SandParticles (392,300,7,7)
   Sand7 = new SandParticles (394,300,7,7)
   Sand8 = new SandParticles (400,300,7,7)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground1.display();
  Hammer1.display();
  Stone1.display();
  Rubber1.display();
  Iron1.display();
  Sand.display();
  Sand1.display();
  Sand2.display();
  Sand3.display();
  Sand4.display();
  Sand5.display();
  Sand6.display();
  Sand7.display();
  Sand8.display();

  drawSprites();
}



