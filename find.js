var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return Math.sqrt(Math.pow(x0-x1, 2) + Math.pow(y0-y1, 2));
};


var findIt = function(e) {
    //console.log(e.x);
    //console.log(e.y);
	//console.log(distance(e.x, e.y, targetX, targetY));
	var color = getColor(distance(e.x, e.y, targetX, targetY));
	console.log(color);
	box.style.backgroundColor = color;
};

var getColor = function(dist){
	var blackDist = distance(0, 0, boxHeight, boxWidth) / 2;
	//console.log((Math.floor(256 - (256 * (dist / blackDist)))).toString(16));
	var color = Math.floor(256 - (256 * (dist / blackDist)))
	if(color < 0) color = 0;
	if(color > 255) color = 255;
	if(color > 15) hex = color.toString(16);
	else hex = "0" + color.toString(16);
	//console.log("#" + hex + hex + hex);
	return "#" + hex + hex + hex;
}

box.addEventListener("mousemove", findIt);

