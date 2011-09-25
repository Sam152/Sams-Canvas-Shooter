function Game () {

	var player = new Player();
	var enemies = new Enemies();
	var background = new Background("snow.jpg");


	this.tick = function(){

		
		background.tick();
		player.tick();
		enemies.tick();

	};

}