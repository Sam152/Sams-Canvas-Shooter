function Game () {

	var player = new Player();
	var enemies = new Enemies();
	var background = new Background("snow.jpg");
	var colisions = new Colisions();
	var UserInterface = new UI();

	this.tick = function(){
		background.tick();
		player.tick();
		enemies.tick();
		colisions.tick(player,enemies);
		UserInterface.tick();
	};

}