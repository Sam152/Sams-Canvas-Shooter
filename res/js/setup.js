//A few global constants
img_src = "res/img/";
frameCount = 0;

preload("bullet.png");
preload("snow.jpg");


window.onload = function(){
	

	//A pretty crude frame rate limiter (accounting for the fact there is no sleep in javascript
	//and the use of a while(1) is bad practice and drains the CPU.
	var framesPerSeond = 30;
	var frameStart;
	var frameEnd;
	var frameTime;
	var nextTimeout = 0;
	var millisecondFrameTime = 1000 / framesPerSeond;

	//Make our canvas the size of the browser window
	gameWidth = window.innerWidth;
	gameHeight = window.innerHeight;

	canvas = document.getElementById("game");
	context = canvas.getContext("2d");

	//Enable our canvas text library
	CanvasTextFunctions.enable(context);
	
	context.canvas.width  = gameWidth;
	context.canvas.height = gameHeight;

	//Our gameplay object that will handle all of our gameplay elements
	game = new Game();

	function gameLoop(){

		frameStart = milliseconds();

		context.canvas.width  = window.innerWidth;
		context.canvas.height = window.innerHeight;
		context.clearRect(0,0,500,500);
		//Run all our game logic and abstract out all the messy stuff
		game.tick();
		frameCount++;
		setTimeout(gameLoop,nextTimeout);
		
		frameEnd = milliseconds();
		
		frameTime = frameEnd - frameStart;
		
		if(frameTime > millisecondFrameTime){
			nextTimeout = 0;
			console.log('Performance is sucking! I need to go optimise my code.');
		}else{
			nextTimeout = millisecondFrameTime - frameTime;
		}
		

	}

	setTimeout(gameLoop,0);
}