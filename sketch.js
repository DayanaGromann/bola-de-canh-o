const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var chao, bola,corda;
var caixas = []
function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  bola = new BolaDemolicao();
  chao = new solo(width/2, height - 50, width, 100);
  corda = new Corda(bola.corpo, {x: 500, y:0});

  for(var i = 0; i < 5; i ++){
    for(var j = 0; j < 5; j++){
      caixas.push(new Caixa(800 + i*100, j*100));
    }
  }
    
}

function draw() {
  Engine.update(engine);

  background(30);  
  bola.display();
  chao.display();
  corda.display();
  for(var i = 0; i < 20; i ++){
   caixas[i].display();
  }
}
