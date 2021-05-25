const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//const Body=Matter.Body;
//const Constraint=Matter.Constraint;

var engine,world;
var snow,backgroundImg;
var dew=[];
function preload(){
     getBackgroundImg();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
  world=engine.world;

  
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);  
  Engine.update(engine);

  drawSprites();
}
async function getBackgroundImg(){
var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
var responseJSON=await response.json();
var datetime=responseJSON.datetime;
var hour=datetime.slice(11,13);
if(hour>=06&&hour<=12){
  snow="snow1.jpg";
}else if(hour>=12&&hour==18){
  snow="snow2.jpg";
}
else{
  snow="snow3.jpg";
}
backgroundImg=loadImage(snow);
console.log(backgroundImg);
}