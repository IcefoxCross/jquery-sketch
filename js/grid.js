var squares = 4;
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
		squares = prompt("What will the new grid X size be? (X * X)");
		remakeGrid(squares);
	});
});

function remakeGrid(newS){
	$row.css("height", winSize / newS);
	$square.css({
		'height': winSize / newS,
		'width': winSize / newS
	});

	for (var i = 0; i < newS; i++) {
		$row.append($square.clone());
	}
	for (var i = 0; i < newS; i++) {
		$("#container").append($row.clone());
	}
}