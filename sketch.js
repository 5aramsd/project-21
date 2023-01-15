
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	
	}
	ball = Matter.Bodies.circle(50,300,10,ball_options);
	//groundObj=new Ground(width/2670,width,20);
	leftSide = new Ground(1100,600,20,120)
	rightSide= new Ground(1150,600,20,120)

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  //background(0);
  //groundObj.display();
  leftSide.display()
  rightSide.display()
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites()
 
}



