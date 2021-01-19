var helicopterIMG, helicopter, package, packageIMG;
var packageBody, ground;
var userEngine, userWorld;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	userEngine = Engine.create();
	userWorld = userEngine.world;

	package = createSprite(width / 2, 80, 10, 10);
	package.addImage(packageIMG)
	package.scale = 0.2;
	World.add(userWorld, package);
	console.log(package);

	
	helicopter = createSprite(width / 2, 200, 10, 10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale = 0.6;
	World.add(userWorld, helicopter);
	

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)




	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 3, isStatic: true });
	World.add(userWorld, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(userWorld, ground);


	Engine.run(userEngine);

}


function draw() {

	background(0);
	Engine.update(userEngine);

	rectMode(CENTER);
	rect(package.position.x, package.position.y, 50, 70);

	package.x = packageBody.position.x
	package.y = packageBody.position.y
	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.setStatic = false;
	}
}






