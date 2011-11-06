function Player () {

	var speed = 10;
	var sprite = new Sprite("plane.png?",65);
	var bullets = new Array();
	var allowedBullets = 10;
	var renderedBullets = 0;
	var totalBullets = 0;
	var bulletSpeed = 30;
	var fireRate = 333;
	
	var lastFired = milliseconds();

    var position = new Position(
		(gameWidth / 2) - (sprite.getWidth() / 2),
		gameHeight - sprite.getHeight()
	);

	function draw (){
		sprite.draw(position);
	};

	this.tick = function(){

		//Game logic for player here

		if(control.left){
			position.x -= speed;
			sprite.state = 0;
		}else if(control.right){
			position.x += speed;
			sprite.state = 2;
		}else{
			sprite.state = 1;
		}

		if(control.up){
			position.y -= speed;
		}else if(control.down){
			position.y += speed;
		}

		if(position.y + sprite.getHeight() > gameHeight)
			position.y = gameHeight - sprite.getHeight();
		else if(position.y < 0)
			position.y = 0;

		if(position.x + sprite.getWidth() > gameWidth)
			position.x = gameWidth - sprite.getWidth();
		else if(position.x < 0)
			position.x = 0;

		if(control.space && milliseconds() - lastFired > fireRate){
			fireBullet();
			lastFired = milliseconds();
		}

		draw();
		drawBullets();
	};

	function fireBullet(){

		bullets[renderedBullets] = new Bullet(
			new Position(
				position.x + 0.25*sprite.getWidth(),
				position.y + 10
			),
			bulletSpeed,
			-1
		);

		renderedBullets++;
		totalBullets++;

		renderedBullets %= allowedBullets;
		if(totalBullets > allowedBullets)
			totalBullets = allowedBullets;
	}

	function drawBullets(){

		for(var i = 0; i < totalBullets;i++){
			bullets[i].tick();
		}


	}

	this.getBullets = function(){
		return bullets;
	}

}