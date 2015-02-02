function rand(e) {
    var t = Math.floor(Math.random() * e + 0);
    return t
}

function FireFly(e, t, n, r) {
    this.id = e;
    this.top = t;
    this.left = n;
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

function isNode() {
    for (i = 0; i < nodes.length; i++) {
        if (licurici.current()[0] == nodes[i].points()[0] && licurici.current()[1] == nodes[i].points()[1]) {
            return true
        }
    }
    return false
}

function getNode() {
    for (i = 0; i < nodes.length; i++) {
        if (licurici.current()[0] == nodes[i].points()[0] && licurici.current()[1] == nodes[i].points()[1]) {
            return i
        }
    }
}

function getNodesDestPointsNr(e) {
    for (i = 0; i < nodes.length; i++) {
        if (i == e) {
            return nodes[i].destPoints.length
        }
    }
}

function getOutside() {
    for (i = 0; i < outside.length; i++) {
        if (licurici.current()[0] == outside[i].points()[0] && licurici.current()[1] == outside[i].points()[1]) {
            return i
        }
    }
}

function getOutsideDestPoints(e) {
    for (i = 0; i < outside.length; i++) {
        if (i == e) {
            return outside[i].destPoints
        }
    }
}

function update(e) {
    licurici.run(e)
}

function draw() {
    var e = [];
    if (isNode()) {
        var t = getNode();
        var n = rand(getNodesDestPointsNr(t));
        e.push(nodes[t].destPoints[n][0]);
        e.push(nodes[t].destPoints[n][1])
    } else {
        var r = getOutside();
        e = getOutsideDestPoints(r)
    }
    return e
}

function run() {
    update(draw())
}
Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)]
}