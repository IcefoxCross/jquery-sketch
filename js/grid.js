var squares = 16;
var winSize = 640;
var grid = true;

$(document).ready(function(){
	remakeGrid(squares);

	$(".blocks").click(function() {
		squares = parseInt(prompt("What will the new grid X size be? (X * X)"));
		remakeGrid(squares);
	});

	$(".square").hover(function() {
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		$(this).css("background-color", "#" + randomColor);
	});

	$(".grid").click(function(){toggleGrid()});
});

function remakeGrid(newS){
	$("#container").empty();
	var $row = $("<div />", {class: "row"});
	var $square = $("<div />", {class: "square"});
	var newGrid = winSize / newS;
	$row.css({"height": newGrid});
	$square.css({
		'height': newGrid,
		'width': newGrid,
	});

	for (var i = 0; i < newS; i++) {
		$row.append($square.clone());
	}
	for (var i = 0; i < newS; i++) {
		$("#container").append($row.clone());
	}
}

function toggleGrid(){
	grid ? $(".square").css("outline", "0") : $(".square").css("outline", "1px solid");
	grid = !grid;
}