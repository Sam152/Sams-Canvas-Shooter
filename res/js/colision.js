function Colisions(){

	this.tick = function(player,enemies){

		var colisionRadius = 35;

		var bullets = player.getBullets();
		var planes = enemies.getPlanes();

		for(var i = 0; i < bullets.length;i++){

			for(var n = 0; n < planes.length; n++){

				var bullet = bullets[i];
				var plane = planes[n];

				if(bullet.isAlive() && plane.isAlive()){

					var bulletPosition = bullet.getSprite().getCenter();
					var planePosition = plane.getSprite().getCenter();

					if(bulletPosition.near(planePosition,colisionRadius)){

						bullet.destroy();
						plane.destroy();

					}
				}
			}
		}
	}
}