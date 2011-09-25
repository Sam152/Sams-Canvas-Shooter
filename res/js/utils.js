
//A simple position object
function Position (x,y) {
	this.x = x;
	this.y = y;
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