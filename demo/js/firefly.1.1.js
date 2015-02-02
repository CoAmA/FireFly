Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}
function rand(max) {
  var randomNumber = Math.floor((Math.random() * max) + 0);
  return randomNumber;
}

// Licurici class Declaration
function FireFly (id,time) {
	
	this.id = id;
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
	this.previous = [];
	this.next = [];
	this.run = function (){
		var element = document.getElementById(this.id);
		if( ! element ){
			alert('There is no element where the id='+this.id);
			return false;
		}
		if(this.next == null){
			return false;
		}else{
			return $(element).animate({top:this.next[0],left:this.next[1]},this.time);
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
		if(firefly.current()[0] == nodes[i].points()[0] && firefly.current()[1] == nodes[i].points()[1]){
			return true;
		}
	}
	return false;
}
function getNode(){
	for(i=0;i<nodes.length;i++){
		if(firefly.current()[0] == nodes[i].points()[0] && firefly.current()[1] == nodes[i].points()[1]){
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
function getNodeIdById(id){
	for(i=0;i<nodes.length;i++){
		if(i==id){
			return i;
		}
	}
}
function getNodeIdByPoints(coords){
	for(i=0;i<nodes.length;i++){
		if(coords[0] == nodes[i].points()[0] && coords[1] == nodes[i].points()[1]){
			return i;
		}
	}
}
function getOutside(){
	for(i=0;i<outside.length;i++){
		if(firefly.current()[0] == outside[i].points()[0] && firefly.current()[1] == outside[i].points()[1]){
			return i;
		}
	}
}
function getOutsidePoints(){
	for(i=0;i<outside.length;i++){
		if(firefly.current()[0] == outside[i].points()[0] && firefly.current()[1] == outside[i].points()[1]){
			return outside[i].points();
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
function update(){
	console.log(firefly.next);
	firefly.run();
	//console.log(firefly.next);
	firefly.previous.push(firefly.next[0]);
	firefly.previous.push(firefly.next[1]);
	console.log(firefly.previous);
	firefly.next.length = 0;
}
function draw(){
	if(!isNode()){
		var out = getOutside();
		firefly.next = getOutsideDestPoints(out);
		
	}else{
		var node = getNode();
		var nr = rand(getNodesDestPointsNr(node));
		//console.log(nr);
		//while(firefly.previous == nodes[node].destPoints[nr]){
		//	var nr = rand(getNodesDestPointsNr(node));
			//console.log(nr);
		//}
		firefly.next.push(nodes[node].destPoints[nr][0]);
		firefly.next.push(nodes[node].destPoints[nr][1]);
		//console.log(coords);
	}
	//console.log(firefly.previous);
	firefly.previous.length = 0;
	console.log(firefly.next);
}
function run(){
	update();
	draw();
}














