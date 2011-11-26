
//Manage our enemy planes
function Enemies(){

	var planes = new Array();
	var renderedPlanes = 0;
	var totalPlanes = 0;
	var allowedPlanes = 30;
	var spawnFrequency = 150;

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

	//1 for fine, 2 for exploding
	var state = 1;
	
	var planeSpeed = 5;
	var planeSpeedVariance = 2;

	var speed_x = random(-Math.floor(planeSpeedVariance / 1),Math.floor(planeSpeedVariance / 1));
	var speed_y = random(planeSpeed - planeSpeedVariance,planeSpeed + planeSpeedVariance);
		
	var plane_angle = Math.atan2(speed_x,speed_y);
	
	var enemy = this;
	
	var Explosion = function(){
		
		var boom = new Sprite("boom.png",32);
		var tickCount = 0;
		
		this.draw = function(position,enemy,sprite){
			
			if(tickCount > 5){
				enemy.removeFromScreen();
			}else{
			
				if(tickCount < 4)
					enemy.draw();
				
				enemy.speed_x /= 2;
				enemy.speed_y /= 2;
			
				boom.state = tickCount;
				
				boom.draw(position);
				tickCount++;
			}
		}
	
	}
	
	var destroyExplosion = new Explosion();

	sprite.setRotation(-plane_angle);

	var position = new Position(
		random(0,gameWidth),
		-sprite.getHeight()
	);
	
	var alive = true;

	this.draw = function(){
		sprite.draw(position);
	}

	this.tick = function(){		
		if(alive){
			position.x += speed_x;
			position.y += speed_y;


			if(state == 1)
				this.draw();
			else if(state == 2)
				destroyExplosion.draw(position,enemy,sprite);
		}
	}

	this.getPosition = function(){
		return position;
	}

	this.destroy = function(){
		
		state = 2;
	}
	
	this.isAlive = function(){
		return alive;
	}
	
	this.getSprite = function(){
		return sprite;
	}
	
	this.removeFromScreen = function(){
		
		console.log('Removing');
	
		alive = false;
		position = null;
	}
}