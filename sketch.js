//spiderman se topa con varios villanos como venom,duende verde y dr octopus que
//estan tratando de armar un arma letal , ayuda a spiderman a lanzar estas bombas con su
//telarana antes de que terminen su arma

const Engine = Matter.Engine;//crea una constante para la biblioteca del motor 
const World= Matter.World;//crea una constante para la bibloteca del mundo
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;//crea una constante para la biblioteca de los cuerpos restringidos

var ground1;
var bloques1,bloques2,bloques3,bloques4,bloques5;
var bloques6;
var vigas1,vigas2;
var engine,world;
var venom1;
var duendeVerde1;
var Droctopus1;
var bomba1;

var spiderman1;

var gameState = "onSling"
var constraiedLog;

var bg = "BG(1).png" 

function preload(){
getTime();
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();//crea el motor
  world = engine.world;//crea el mundo

  ground1 = new ground(600,height,1200,20);
  bloques1 = new bloques(700,320,100,70);
  bloques2 = new bloques(920,320,100,70);
  bloques3 = new bloques(700,290,100,70);
  bloques4 = new bloques(920,290,100,70);
  bloques5 = new bloques(700,260,100,70);
  bloques6 = new bloques(700,260,100,70);
 // bloques6 = new bloques(950,320,80,70)

  bomba1 = new bombas(200,500);
  venom1 = new venom(810,350);
  Droctopus1 = new DRoctopus(920,80,120,120)
  duendeVerde1 = new duendeVerde(620,300)

  spiderman1 = new spiderman(bomba1.body,{x:200, y:200})
  
  
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground1.display();
  venom1.display();
  bloques1.display();
  bloques2.display();
  bloques3.display();
  bloques4.display();
  bloques5.display();
  bloques6.display();
  duendeVerde1.display();
  spiderman1.display();
  bomba1.display();
  Droctopus1.display();
 
  
}

function mouseDragged(){ //para que arrastes con el mouse al pajaro
  //if(gameState!=="launched"){
   Matter.Body.setPosition(bomba1.body,{x: mouseX, y: mouseY})
 // }
  
}
function mouseReleased(){//para que se soltara la bomba
spiderman1.fly();
gameState = "launched"

}
function keyPressed(){
    if(keyCode===32){
        //bomba1.trajectory = [];
        Matter.Body.setPosition(bomba1.body,{x:200,y:50})
        spiderman1.attack(bomba1.body)
    }
}

async function getTime(){
  console.log("INICIO")
  var response =  await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles")
  var responseJSON = await response.json();
  console.log("responseJson "+ responseJSON)
  var datetime = responseJSON.datetime
  var hour = datetime.slice(11,13)
  console.log("hour: "+ hour)
  
  if(hour >=6 && hour <=20){
      console.log("ya es de dia: ")
      bg = "BG(1).png"
  }
  else{
      console.log("es de nocche")
      bg = "BG(2).jpg"
  }
  backgroundImage = loadImage(bg)
}