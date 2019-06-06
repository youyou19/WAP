var xPuzzSize = 400, yPuzzSize = 400, yPiece = 100, xPiece = 100;
var wX = xPuzzSize - xPiece;
var wY = yPuzzSize - yPiece;

var positionSpecial;

$(document).ready(function(){
	$("#puzzlearea div").addClass("puzzlepiece");
	refreshPositions();

	$("#puzzlearea div").each(function(idx){
		var numberOfPiece = idx;
		var positionX = ((numberOfPiece)*xPiece)%xPuzzSize;
		var positionY = (parseInt((numberOfPiece)/(yPuzzSize/yPiece)))*yPiece;

		setPosition($(this), {positionX, positionY}, true);
	});

	$("#shufflebutton").click(function(){
		//shuffle();
		var timer = setInterval(shuffle,10);
		setTimeout(function(){
			clearTimeout(timer);
			showMovables();
		},1000);
		
	});
	
});

function setPosition(element, position, changebg){
	var bgX = -position.positionX;
	var bgY = -position.positionY;
	element.css("left", position.positionX);
	element.css("top", position.positionY);

	if(changebg){
		element.css("background-position-x", bgX);
		element.css("background-position-y", bgY);
	}
}
function setWBPosition(position){
	wX = position.positionX;
	wY = position.positionY;
}function getElement(position){
	var found = null;
	$("#puzzlearea div").each(function(idx){
		
			if(parseInt($(this).css("top")) === parseInt(position.positionY) && parseInt($(this).css("left")) === parseInt(position.positionX)){
			found = $(this);
			return false;
		}
	});
	return found;
}

function refreshPositions(){
	wX = parseInt(wX);
	wY = parseInt(wY);
	var left = {positionX: wX-xPiece, positionY: wY};
	var right = {positionX: wX+xPiece, positionY: wY};
	var above = {positionX: wX, positionY: wY-yPiece};
	var below = {positionX: wX, positionY: wY+yPiece};
	positionSpecial = {
		top_left: [right, below ],		
		top_right: [left, below ],		
		bottom_right: [left, above ],		
		bottom_left: [right, above ],		
		right: [left, above, below ],		
		left: [right, above, below ],		
		top: [right, left, below ],		
		bottom: [right, left, above ],		
		center: [right, left, below , above]		
	};
}

function shuffle(){
	function move(positions){
		var min = 0;
		var elements = [];		
		var max = positions.length-1;
		var idx = Math.floor(Math.random()*(max-min+1)+min);

		for (let i = max; i >= 0; i--) {
			elements[i] = getElement(positions[i]);
		}

		setPosition(elements[idx],{positionX:wX, positionY: wY});
		setWBPosition(positions[idx]);
	}
	//if the whitebox is on the top left corner
	if(wX === 0 && wY === 0){
		move(positionSpecial.top_left);
	}
	//if the whitebox is on the top right corner
	else if(wX === (xPuzzSize - xPiece) && wY === 0){
		move(positionSpecial.top_right);
	}
	//if the whitebox is on the bottom left corner
	else if(wX === 0 && wY === (yPuzzSize - yPiece)){
		move(positionSpecial.bottom_left);
	}
	//if the whitebox is on the bottom right corner
	else if(wX === (xPuzzSize - xPiece) && wY === (yPuzzSize - yPiece)){
		move(positionSpecial.bottom_right);
	}
	//if the whitebox is on the right column
	else if(wX === (xPuzzSize - xPiece)){
		move(positionSpecial.right);
	}
	//if the whitebox is on the left column
	else if(wX === 0){
		move(positionSpecial.left);
	}
	//if the whitebox is on the top row
	else if(wY === 0){
		move(positionSpecial.top);
	}
	//if the whitebox is on the bottom row
	else if(wY === (yPuzzSize - yPiece)){
		move(positionSpecial.bottom);
	}
	//if the whitebox is in other position
	else{
		move(positionSpecial.center);
	}
	refreshPositions();
}

function showMovables(){
	$(".movablepiece").each(function(){
            $(this).unbind("click");
        });
	$(".movablepiece").each(function(){
            $(this).removeClass("movablepiece");
        });

	function show(positions){
		for (var i = positions.length-1; i >= 0; i--) {
			getElement(positions[i]).addClass("movablepiece");
		}
	}
	//if the whitebox is on the top left corner
	if(wX === 0 && wY === 0){
		show(positionSpecial.top_left);
	}
	//if the whitebox is on the top right corner
	else if(wX === (xPuzzSize - xPiece) && wY === 0){
		show(positionSpecial.top_right);
	}
	//if the whitebox is on the bottom left corner
	else if(wX === 0 && wY === (yPuzzSize - yPiece)){
		show(positionSpecial.bottom_left);
	}
	//if the whitebox is on the bottom right corner
	else if(wX === (xPuzzSize - xPiece) && wY === (yPuzzSize - yPiece)){
		show(positionSpecial.bottom_right);
	}
	//if the whitebox is on the right column
	else if(wX === (xPuzzSize - xPiece)){
		show(positionSpecial.right);
	}
	else if(wX === 0){
		show(positionSpecial.left);
	}
	
	else if(wY === 0){
		show(positionSpecial.top);
	}
	
	else if(wY === (yPuzzSize - yPiece)){
		show(positionSpecial.bottom);
	}
	//if the whitebox is in other position
	else{
		show(positionSpecial.center);
	}

	$(".movablepiece").click(function(){
			
		var wb = {positionX:wX, positionY: wY};
		
		setWBPosition({positionX: $(this).css("left"), positionY: $(this).css("top")});
		setPosition($(this),wb);
		refreshPositions();
		showMovables();
	});
}