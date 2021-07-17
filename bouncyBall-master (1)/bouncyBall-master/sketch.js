const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box,box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   box = new Box(200,200,50,50);
   box2 = new Box(240,100,50,100);
   ground = new Ground(200,390,400,20);


}

function draw(){
    background(0);
    Engine.update(engine);
    box.display();
    box2.display();
    ground.display();
    
}