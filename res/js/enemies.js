
//Manage our enemy planes
function Enemies(){

	var planes = new Array();
	var renderedPlanes = 0;
	var totalPlanes = 0;
	var allowedPlanes = 30;
	var spawnFrequency = 15;

	function spawnPlane(){

		planes[renderedPlanes] = new Enemy();

		renderedPlanes++;
		totalPlanes++;

		renderedPlanes %= allowedPlanes;
		if(totalPlanes > allowedPlanes)
			totalPlanes = allowedPlanes;
	}

	this.tick = function(){

		for(var i = 0; i < totalPlanes;i++){
			planes[i].tick();
		}

		if(frameCount % spawnFrequency == 0){
			spawnPlane();
		}
	}

	this.getPlanes = function(){
		return planes;
	}
}


//An enemy plane
function Enemy(){

	var sprite = new Sprite("enemy"+random(1,3)+".png",32);

	var planeSpeed = 5;
	var planeSpeedVariance = 2;

	var speed_x = random(-Math.floor(planeSpeedVariance / 1),Math.floor(planeSpeedVariance / 1));
	var speed_y = random(planeSpeed - planeSpeedVariance,planeSpeed + planeSpeedVariance);
		
	var plane_angle = Math.atan2(speed_x,speed_y);

	sprite.setRotation(-plane_angle);

	var position = new Position(
		random(0,gameWidth),
		-sprite.getHeight()
	);
	
	var alive = true;

	function draw(){
		sprite.draw(position);
	}

	this.tick = function(){		
		if(alive){
			position.x += speed_x;
			position.y += speed_y;

			draw();
		}
	}

	this.getPosition = function(){
		return position;
	}

	this.destroy = function(){
		alive = false;
		position = null;
	}
	
	this.isAlive = function(){
		return alive;
	}
	
	this.getSprite = function(){
		return sprite;
	}
}