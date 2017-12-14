var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;
var counter = 0;

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
    if(counter > 0) return "red";
    var blackDist = distance(0, 0, boxHeight, boxWidth);
    //console.log((Math.floor(256 - (256 * (dist / blackDist)))).toString(16));
    var color = Math.floor(100 - (100 * (dist / blackDist)))
    if(color < 0) color = 0;
    if(color > 100) color = 100;
    color = "hsl(216, 100%, " + color + "%)";
    return color;
}

var isFound = function(e){
    console.log(distance(e.x, e.y, targetX, targetY));
    var epsilon = 10;
    if(counter == 0 && distance(e.x, e.y, targetX, targetY) < epsilon){
	console.log("Good job! You found it!");
	box.style.backgroundColor = "red";
	var msg = document.createElement("h1");
	msg.innerHTML="Good job! You found it!";
	msg.setAttribute("style", "text-align:center;");
	box.appendChild(msg);
	console.log(msg);
	counter++;
    }
}

box.addEventListener("mousemove", findIt);
box.addEventListener("click", isFound);
