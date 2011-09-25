function Bullet (position,speed,direction) {

	var position = new Position(position.x,position.y);
	var speed = speed;
	var direction = direction;

	var sprite = new Sprite("bullet.png?",32);

	function draw(){
		sprite.draw(position);
	};

	this.tick = function(){
		position.y += speed * direction;
		draw();
	};

}