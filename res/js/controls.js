/* * * *

An HTML5 Controller. Creates a `control` object which is accessible in the
global scope that contains the state of the keyboard in an easily accessible way.
E.g if (controller.left) player.moveLeft()

 * * * */

var control;

function Controller(){

	this.up = false;
	this.down = false;
	this.left = false;
	this.right = false;
	this.space = false;

	//This could be seen as a bit of a hack, but I'm not sure how to get around it
	var parent = this;

	this.keyEvent = function(e) {

		var action = e.type == "keydown";

		//Lets use WASD and ULDR
		switch(e.keyCode){
			case 87:
			case 38:
				parent.up = action;
				break;

			case 65:
			case 37:
				parent.left = action;
				break;

			case 40:
			case 83:
				parent.down = action;
				break;

			case 39:
			case 68:
				parent.right = action;
				break;

			case 32:
				parent.space = action;
				break;
		}
	}

}

control = new Controller();

window.addEventListener('keydown',control.keyEvent,true);
window.addEventListener('keyup',control.keyEvent,true);