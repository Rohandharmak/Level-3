var bball, question1image, question2image, question3image;
var buzzer, ting;
var gameState;
var Time = 0;
var nextbutton = 1;
var level3complete, nextimage,finishitimage;

function preload() {
  bball = loadAnimation("ball80.png", "ball81.png", "ball82.png", "ball83.png", "ball85.png", "ball86.png", "ball87.png", "ball88.png", "ball89.png");

  question1image = loadAnimation("question1.png");
  question2image = loadAnimation("question2.png");
  question3image = loadAnimation("question3.png")
  buzzer = loadSound("buzzer.mp3");
  ting = loadSound("ting.mp3");
  level3complete = loadAnimation("level3complete.png");
  nextimage = loadAnimation("next.png");
  finishitimage=loadAnimation("finishit.png");
}

function setup() {
  createCanvas(600, 600);
  ball = createSprite(300, 300);
  ball.addAnimation("question1", question1image);
  ball.addAnimation("question2", question2image);
  ball.addAnimation("question3", question3image);
  ball.addAnimation("bball", bball);

  left = createSprite(70, 550, 110, 100);
  left.visible = false;

  right = createSprite(510, 550, 110, 100);
  right.visible = false;

  middleleft = createSprite(219, 550, 110, 100);
  middleleft.visible = false;

  middleright = createSprite(350, 550, 110, 100);
  middleright.visible = false;


  next = createSprite(300, 50, 100, 100);
  next.visible = false;
  next.addAnimation("next", nextimage);
  
  level3image=createSprite(5000,50,100,100);
  level3image.addAnimation("complete", level3complete);
  level3image.visible=false;
}

function draw() {
 
  if (nextbutton === 1) {

    Time=Time+0.033
  }
  if (nextbutton === 2) {
    level2();
    Time=Time+0.033
  }
  if (nextbutton === 3) {
    level3();
    Time=Time+0.033
  }
  if(nextbutton===4){
    next.x=5000;
    level3image.x=300;
    }
  if (mousePressedOver(middleright)) {
    ting.play();
    ball.changeAnimation("bball", bball);
    next.visible = true;
    level3image.visible=true;

  }
  if (mousePressedOver(right)) {

    buzzer.play();
  }
  if (mousePressedOver(left)) {

    buzzer.play();
  }
  if (mousePressedOver(middleleft)) {

    buzzer.play();
  }
  if (mousePressedOver(next)) {
    nextbutton = nextbutton + 1;
    level3image.visible=false;
  }
  
  
  console.log(nextbutton);
  drawSprites();
  stroke("yellow");
  textSize(20);
  fill("yellow");
  text("Time:" + Math.round(Time), 490, 20);
}

function level2() {
      Time = Time + 0.033
  if (mousePressedOver(next) && nextbutton === 2) {
    ball.changeAnimation("question2", question2image);
    next.visible = false;
    middleright.x = 510;
    right.x = 350;

  }

}

function level3() {
  Time = Time + 0.033
  if (mousePressedOver(next) && nextbutton === 3) {
    ball.changeAnimation("question3", question3image);
    next.visible = false;
    middleright.x = 350;
    right.x = 510;

  }
}