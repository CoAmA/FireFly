Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}
function rand(max) {
  var randomNumber = Math.floor((Math.random() * max) + 0);
  return randomNumber;
}

// Licurici class Declaration
function FireFly (id,top,left,time) {
	
	this.id = id;
	this.top = top;
	this.left = left;
	this.time = time;
	this.current = function(){
		var element = document.getElementById(this.id);
		if( ! element ){
			alert('There is no element where the id='+this.id);
			return false;
		}
		var top = $(element).css('top');
		var left = $(element).css('left');
		var current = [];
		current.push(top);
		current.push(left);
		return current;
	};
	this.run = function (coords){
		var element = document.getElementById(this.id);
		if( ! element ){
			alert('There is no element where the id='+this.id);
			return false;
		}
		if(coords == null){
			return false;
		}else{
			return $(element).animate({top:coords[0],left:coords[1]},this.time);
		}
	};
}
// Node class Declaration
function Node (top,left,destPoints){
	this.top = top;
	this.left = left;
	this.points = function(){
		var points = [];
		points.push(this.top);
		points.push(this.left);
		return points;
	};
	this.destPoints = destPoints;
}
function Outside (top,left,destPoints){
	this.top = top;
	this.left = left;
	this.points = function(){
		var points = [];
		points.push(this.top);
		points.push(this.left);
		return points;
	};
	this.destPoints = destPoints;
}
function isNode(){
	for(i=0;i<nodes.length;i++){
		if(licurici.current()[0] == nodes[i].points()[0] && licurici.current()[1] == nodes[i].points()[1]){
			return true;
		}
	}
	return false;
}
function getNode(){
	for(i=0;i<nodes.length;i++){
		
		if(licurici.current()[0] == nodes[i].points()[0] && licurici.current()[1] == nodes[i].points()[1]){
			return i;
		}
	}
}
function getNodesDestPointsNr(node){
	
	for(i=0;i<nodes.length;i++){
		
		if(i==node){
			return nodes[i].destPoints.length;
		}
	}
}
function getOutside(){
	for(i=0;i<outside.length;i++){
		if(licurici.current()[0] == outside[i].points()[0] && licurici.current()[1] == outside[i].points()[1]){
			return i;
		}
	}
}
function getOutsideDestPoints(out){
	for(i=0;i<outside.length;i++){
		if(i==out){
			return outside[i].destPoints;
		}
	}
}
function update(coords){
	licurici.run(coords);
}
function draw(){
	var coords = [];
	if(isNode()){
		var node = getNode();
		var nr = rand(getNodesDestPointsNr(node));
		coords.push(nodes[node].destPoints[nr][0]);
		coords.push(nodes[node].destPoints[nr][1]);
	}else{
		var out = getOutside();
		coords = getOutsideDestPoints(out);
	}
	return coords;
}
function run(){
	update(draw());
}














