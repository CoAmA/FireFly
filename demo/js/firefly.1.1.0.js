function rand(e) {
    var t = Math.floor(Math.random() * e + 0);
    return t
}

function FireFly(e, t, n, r) {
    this.id = e;
    this.time = r;
    this.current = function() {
        var e = document.getElementById(this.id);
        if (!e) {
            alert("There is no element where the id=" + this.id);
            return false
        }
        var t = $(e).css("top");
        var n = $(e).css("left");
        var r = [];
        r.push(t);
        r.push(n);
        return r
    };
	this.skipTo = function(e){
		var t = document.getElementById(this.id);
        if (!t) {
            alert("There is no element where the id=" + this.id);
            return false
        }
        if (e == null) {
            return false
        } else {
            return $(t).css({'top': e[0],'left': e[1]);
        }
	}
    this.run = function(e) {
        var t = document.getElementById(this.id);
        if (!t) {
            alert("There is no element where the id=" + this.id);
            return false
        }
        if (e == null) {
            return false
        } else {
            return $(t).animate({
                top: e[0],
                left: e[1]
            }, this.time)
        }
    }
}

function Node(e, t, n) {
    this.top = e;
    this.left = t;
    this.points = function() {
        var e = [];
        e.push(this.top);
        e.push(this.left);
        return e
    };
    this.destPoints = n
}

function Outside(e, t, n) {
    this.top = e;
    this.left = t;
    this.points = function() {
        var e = [];
        e.push(this.top);
        e.push(this.left);
        return e
    };
    this.destPoints = n
}
function FireFlyRun(firefly,nodes,outside){
	this.isNode = function () {
		for (i = 0; i < nodes.length; i++) {
			if (firefly.current()[0] == nodes[i].points()[0] && firefly.current()[1] == nodes[i].points()[1]) {
				return true
			}
		}
		return false
	};

	this.getNode = function (){
		for (i = 0; i < nodes.length; i++) {
			if (firefly.current()[0] == nodes[i].points()[0] && firefly.current()[1] == nodes[i].points()[1]) {
				return i
			}
		}
	};

	this.getNodesDestPointsNr = function(e) {
		for (i = 0; i < nodes.length; i++) {
			if (i == e) {
				return nodes[i].destPoints.length
			}
		}
	};

	this.getOutside = function() {
		for (i = 0; i < outside.length; i++) {
			if (firefly.current()[0] == outside[i].points()[0] && firefly.current()[1] == outside[i].points()[1]) {
				return i
			}
		}
	};

	this.getOutsideDestPoints = function(e) {
		for (i = 0; i < outside.length; i++) {
			if (i == e) {
				return outside[i].destPoints
			}
		}
	};

	this.update = function(e) {
		firefly.run(e);
		console.log('works3');
	};

	this.draw = function() {
		var e = [];
		console.log('works2');
		if (this.isNode()) {
			var t = this.getNode();
			var n = rand(this.getNodesDestPointsNr(t));
			e.push(nodes[t].destPoints[n][0]);
			e.push(nodes[t].destPoints[n][1])
		} else {
			var r = this.getOutside();
			e = this.getOutsideDestPoints(r)
		}
		return e
	};

	this.run = function() {
		this.update(this.draw())
	}
}
Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)]
}