const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var courtImg;
var netImg;

var database;
var game, form;
var net;
var shuttle;

function preload() {
  courtImg = loadImage("assets/badmintonCourt.png");
  netImg = loadImage("assets/net.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  database = firebase.database()

  net = createSprite(635, 400, 20, 500);
  net.addImage(netImg);
  net.scale = 1.5;

  shuttle = new Shuttle(650, 310, 50);

  game = new Game()
  game.start()
}

function draw() {
  background(51);
  image(courtImg, 0, 0, width, height);
  Engine.update(engine);

  text(mouseX + "," + mouseY, mouseX, mouseY);

  shuttle.display();

  drawSprites();
}