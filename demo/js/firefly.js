//how long it takes the FireFly to reach from point A to point B
var time = 2000;

//create the FireFly
firefly1 = new FireFly('firefly1','-15px','53px',time);
firefly2 = new FireFly('firefly2','10px','847px',time);
firefly3 = new FireFly('firefly3','492px','890px',time);

var nodes1 = [];
//create as manny nodes as you need by pushing them into nodes array
nodes1.push(new Node('250px','540px',[['-15px','53px'],['10px','847px'],['469px','167px']]));
nodes1.push(new Node('469px','167px',[['250px','540px'],['466px','573px'],['220px','170px']]));

var outside1 = [];
//create as manny nodes as you need by pushing them into nodes array
outside1.push(new Outside('-15px','53px',['250px','540px']));
outside1.push(new Outside('10px','847px',['250px','540px']));
outside1.push(new Outside('492px','890px',['250px','540px']));
outside1.push(new Outside('466px','573px',['469px','167px']));
outside1.push(new Outside('220px','170px',['469px','167px']));

//create as many fireflies events as you want
firefliesrun1 = new FireFlyRun(firefly1,nodes1,outside1);
firefliesrun2 = new FireFlyRun(firefly2,nodes1,outside1);
firefliesrun3 = new FireFlyRun(firefly3,nodes1,outside1);

function run(){
	firefliesrun1.run();
	firefliesrun2.run();
	firefliesrun3.run();
}

//Go FireFly Go


setInterval(run, time+100);