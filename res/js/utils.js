
//A simple position object
function Position (x,y) {
	this.x = x;
	this.y = y;

	this.near = function(otherPosition,radius){

		var x1 = this.x;
		var y1 = this.y;

		var x2 = otherPosition.x;
		var y2 = otherPosition.y;

		return (Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2)) <= radius);

	}

}

//Prelaod Images
function preload(url){
	var image = new Image();
	image.src = img_src+url;
}

//random range
function random(from, to){
       return Math.floor(Math.random() * (to - from + 1) + from);
    }