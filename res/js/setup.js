//A few global constants
img_src = "res/img/";
frameCount = 0;

preload("bullet.png");
preload("snow.jpg");
preload("bullet.png");


$(window).load(function(){

	gameWidth = window.innerWidth;
	gameHeight = window.innerHeight;

	canvas = document.getElementById("game");
	context = canvas.getContext("2d");

	context.canvas.width  = gameWidth;
	context.canvas.height = gameHeight;

	//Our game object
	game = new Game();

	function gameLoop(){

		context.canvas.width  = window.innerWidth;
		context.canvas.height = window.innerHeight;
		context.clearRect(0,0,500,500);
		//Run all our game logic and abstract out all the junk
		game.tick();
		frameCount++;
		setTimeout(gameLoop,0);

	}

	setTimeout(gameLoop,0);
});