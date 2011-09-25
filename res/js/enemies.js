
//Manage our enemy planes
function Enemies(){

	var planes = new Array();
	var renderedPlanes = 0;
	var totalPlanes = 0;
	var allowedPlanes = 15;

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

		if(frameCount % 5 == 0){
			spawnPlane();
		}
	}
}


//An enemy plane
function Enemy(){

	var sprite = new Sprite("enemy"+random(1,3)+".png",32);

	var speed_x = random(-3,3);
	var speed_y = random(10,20);

	var position = new Position(
		random(0,gameWidth),
		-sprite.getHeight()
	);

	function draw(){
		sprite.draw(position);
	}

	this.tick = function(){

		position.x += speed_x;
		position.y += speed_y;

		draw();
	}


}