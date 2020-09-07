
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rightWall, leftWall, bottomWall;
var paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,650,1000,20);
	rightWall = new Dustbin(900,590,20,100);
	leftWall = new Dustbin(700,590,20,100);
	bottomWall = new Dustbin(800,630,216,20);
	paperObject = new Paper(100,640,35);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  rightWall.display();
  leftWall.display();
  bottomWall.display();
  paperObject.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:210,y:-210});
	 }
   }