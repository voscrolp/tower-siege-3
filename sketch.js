
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hexagon, rope;
var ground, platform1, platform2;
var block1,block2,block3;
var block4,block5;
var block6;

var block7,block8,block9;
var block10,block11;
var block12;

var count, frame;
var bg, backgroundImg;

var score;

var blocks = [];

function preload(){
  getBackgroundImg();
}

function setup() {
  createCanvas(800, 700);
  
  count = 0;
  score = 0;


	engine = Engine.create();
	world = engine.world;

	//Bodies
	hexagon = new Hexagon(150,475,50,50);
  rope = new Rope(hexagon.body,{x:150,y:400});
  
  ground = new Ground(400,675,800,50);
  platform1 = new Ground(600,250,200,10);
  platform2 = new Ground(600,500,200,10);

  block1 = new Block(550,220);
  block2 = new Block(600,220);
  block3 = new Block(650,220);

  block4 = new Block(575,170);
  block5 = new Block(625,170);

  block6 = new Block(600,120);


  block7 = new Block(550,470);
  block8 = new Block(600,470);
  block9 = new Block(650,470);

  block10 = new Block(575,420);
  block11 = new Block(625,420);

  block12 = new Block(600,370);


	Engine.run(engine);
  
}


function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }
  rectMode(CENTER);
  Engine.update(engine);
  ellipseMode(RADIUS);
  fill('yellow');
  ellipse(150,400,10,10);
  

  if(count == 2){
    frame++;
    if(frame<=1){
      hexagon.shrink();
    }
  }

  if(count == 3){
    frame = frame;
    frame = 0;
  }

  if(count == 4){
    frame++;
    if(frame<=1){
      hexagon.shrink();
    }
  }

  if(count == 5){
    frame = frame;
    frame = 0;
  }

  if(count == 6){
    frame++;
    if(frame<=1){
      hexagon.shrink();
    }
  }

  if(count == 7){
    frame = frame;
    frame = 0;
  }

  if(count == 8){
    frame++;
    if(frame<=1){
      hexagon.shrink();
    }
  }

  if(count == 9){
    frame = frame;
    frame = 0;
  }

  if(count == 10){
    frame = frame;
    frame = 0;
    hexagon.reset();
  }

  rope.display();
  hexagon.display();

  ground.display();
  platform1.display();
  platform2.display();

  block1.display();
  block2.display();
  block3.display();

  block4.display();
  block5.display();

  block6.display();


  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();

  block12.display();
  
  drawSprites();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();

  push();
  fill(255);
  noStroke();
  textSize(15);
  text("Score:" + score,30,30);
  pop();

 
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
		Matter.Body.setPosition(hexagon.body,{x:160,y:570});
    rope.attach();
    count = count + 1;
	}
}

async function getBackgroundImg(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var responseJSON = await response.json();
  var datetime = responseJSON.currentDateTime;
  var hour = datetime.slice("11","13");
  console.log(hour);

  if(hour > 6 && hour < 19){
    bg = 'sprites/light blue background.jpg';
  }else{
    bg = 'sprites/black background image.jpg';
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}



