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

	var lastSeen = new Position(0,0);

	image.src = img_src+src;

	this.draw = function(position){

		var source_x = width * this.state;
		var source_y = 0;

		context.drawImage(
			image,
			source_x,
			source_y,
			width,
			image.height,
			position.x,
			position.y,
			width,
			image.height
		);
		
		lastSeen = position;
	};

	this.getWidth = function(){
		return width;
	}

	this.getHeight = function(){
		return image.height;
	}
	
	this.getCenter = function(){
		return new Position(lastSeen.x + (this.getHeight() / 2),lastSeen.y + (this.getWidth() / 2));
	}
}