var squares = 8;
var winSize = 640;
var $row = $("<div />", {class: "row"});
var $square = $("<div />", {class: "square"});

$(document).ready(function(){
	remakeGrid(squares);

	$(".square").hover(function() {
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		$(this).css("background", "#" + randomColor);
	});

	$(".blocks").click(function() {
		var newSquare = parseInt(prompt("What will the new grid X size be? (X * X)"));
		remakeGrid(newSquare);
	});
});

function remakeGrid(newS){
	$("#container").empty();
	var newGrid = Math.floor(winSize / newS);
	$row.css({"height": newGrid});
	$square.css({
		'height': newGrid,
		'width': newGrid
	});

	for (var i = 0; i < newS; i++) {
		$row.append($square.clone());
	}
	for (var i = 0; i < newS; i++) {
		$("#container").append($row.clone());
	}
}