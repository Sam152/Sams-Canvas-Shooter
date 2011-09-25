function Background(image){


	var backgroundSpeed = 3;
	var bgImage = new Image();
	bgImage.src = img_src+image;


	var loopCount = 0;

	function draw(x,y){
		context.drawImage(
			bgImage,
			x,
			y
		);
	}

	this.tick = function(){

		var bleed = 1;
		var width = bgImage.width;
		var height = bgImage.height;

		loopCount += backgroundSpeed;


		for(var i = -bleed;i < (gameWidth / width) + bleed;i++){
			for(var n = -bleed;n < (gameHeight / height) + bleed;n++){

				draw(
					i*width,
					n*height + loopCount
				);

				loopCount %= height;

			}
		}
	}





}