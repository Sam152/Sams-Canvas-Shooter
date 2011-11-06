function UI(){

	var title = new PageTitle();

	this.draw = function(){
		title.draw();
	}


	this.tick = function(){
		//Put the logic for the interactive menus here
		this.draw();
	}
}

function PageTitle(){
	
	var heading_string = 'Sam152';
	var sub_heading_string = 'An interactive homepage & portfolio';
	
	var heading_size = 44;
	var sub_heading_size = 10;
	
	var position = new Position(30,27);

	this.draw = function(){
		roundRect(position.x,position.y,270,75,10,"rgba(200, 200, 200, .6)","rgba(0, 0, 0, .9)");
		context.drawText('sans',heading_size,50,75,heading_string);
		context.drawText('sans',sub_heading_size,50,93,sub_heading_string);
	}
}

function pageLinks(){

	var links = [
		//Key value links
		['cv','Curriculum Vitae'],
		['foo','GitHub'],
		['foo','Stack Overflow'],
		['foo','LinkedIn']
	];


}