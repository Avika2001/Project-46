
var backdrop, backdrop_img;
var player, player_img;
var dragonflyGroup, dragonfly, dragonflyPlaying_img, dragonflyEnd_img;
var play = 1;
var gameState = play;
var coin, coin_img, coinGroup;
var score = 0;



function preload(){
	backdrop_img = loadImage("backdrop.png");
	player_img = loadImage("player.png");
	dragonflyPlaying_img = loadImage("dragonfly_playing.png");
	coin_img = loadImage("coin.png");

}

function setup() {
	createCanvas(1000, 600);

  backdrop = createSprite(745,300,400,400);
  backdrop.addImage(backdrop_img);
  backdrop.velocityX =  -5;
  backdrop.scale = 2;
	
	player = createSprite(100,450,50,50);
	player.addImage(player_img);
	player.scale = 0.3;

	dragonflyGroup = new Group();
	coinGroup = new Group();
  
}


function draw() {

  background(0);

  if(gameState === play){

	if(keyDown("UP_ARROW")){
		player.y = player.y - 5;
	}
	if(keyDown("DOWN_ARROW")){
		player.y = player.y + 5;
	}
	if(backdrop.x<270){
		backdrop.x = 745;
	}
	if(frameCount % 100 === 0){
		newDragonfly();
	}
	if(frameCount % 170 === 0){
		newCoin();
	}
	if(coinGroup.isTouching(player)){
		coinGroup.destroyEach();
		if(player.scale > 0.15 || player.scale == 0.15){
		player.scale = player.scale-0.03;
		}
	  } 

  }
  drawSprites();

  fill("orange");
  textSize(30);
  text("Score: "+score,850,50);
}

function newDragonfly(){
	var dragonfly = createSprite(1000,(random(100,500)),50,50);
	dragonfly.addImage(dragonflyPlaying_img);
	dragonfly.scale = 0.2;
	dragonfly.velocityX = -5;
	dragonfly.lifetime = 300;
	dragonflyGroup.add(dragonfly);
}

function newCoin(){
	var coin = createSprite(1000,500,50,50);
	coin.addImage(coin_img);
	coin.scale = 0.2;
	coin.velocityX = -5;
	coin.lifetime = 300;
	coinGroup.add(coin);
}



