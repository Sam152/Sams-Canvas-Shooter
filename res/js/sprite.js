/* * * *

An HTML5 Sprite sheet. Allows a sprite sheet to be defined and accessed easily.
Sprites should be equal width apart and defined only horizontally. This would
be handy for rendering images with multiple states or an animation class.

 * * * */

function Sprite (src,width) {

	//Publics
	this.state = 0;

	//Privates
	var width = width;
	var image = new Image();
	var image_rotation = 0;
	var last_seen = new Position(0,0);
	image.src = img_src+src;
	var total_states = image.width / width;

	this.draw = function(position){
		
		last_seen = position;

		var source_x = width * this.state;
		var source_y = 0;

		var drawPosition = new Position(position.x,position.y);

		context.save();

		if(image_rotation != 0){
			context.translate(position.x,position.y);
			context.rotate(image_rotation);
			drawPosition.x = -this.getWidth() / 2;
			drawPosition.y = -this.getHeight() / 2;
		}
		
		console.log(drawPosition.x);

		context.drawImage(
			image,
			source_x,
			source_y,
			width,
			image.height,
			drawPosition.x,
			drawPosition.y,
			width,
			image.height
		);
		
		context.restore();
		
		//context.fillRect(position.x-1,position.y-1,position.x+1,position.y+1);		

	};

	this.getWidth = function(){
		return width;
	}

	this.getHeight = function(){
		return image.height;
	}
	
	this.setRotation = function(in_angle){
		image_rotation = in_angle;
	}

	this.getCenter = function(){
		return new Position(Math.ceil(last_seen.x + (this.getWidth() / 2)),Math.ceil(last_seen.y + (this.getHeight() / 2)));
	}
}