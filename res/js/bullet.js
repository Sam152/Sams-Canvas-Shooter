function Bullet (position,speed,direction) {

	var position = new Position(position.x,position.y);
	var speed = speed;
	var direction = direction;
	var alive = true;

	var sprite = new Sprite("bullet.png",32);

	function draw(){
		sprite.draw(position);
	};

	this.tick = function(){
		if(alive){
			position.y += speed * direction;
			draw();
		}
	};

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