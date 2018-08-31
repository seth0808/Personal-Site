// Canvas Setup //
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
// End Canvas Setup //

// Check if Mobile // 
window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
// Check if Mobile //
var ua = navigator.userAgent.toLowerCase(); 
if (mobilecheck() || (ua.indexOf('safari') != -1 && ua.indexOf('chrome') <= -1 )) {
	alert("More functionality available when using Google Chrome...");
	$("#canvas").css("background-image", "url('assets/background.jpg')");

}
	// Background //
	colorChange = false;

	var fgr = 25;
	var fgg = 25;
	var fgb = 112;

	var sgr = 230;
	var sgg = 230;
	var sgb = 255;

	var fr = 0;
	var fg = 0;
	var fb = 0;

	var sr = 0;
	var sg = 0;
	var sb = 0;


	// End Background //


	// Setting Zero Classes //
	class RainSplashEffect {
		constructor(x, y){
			this.iterations = 0;
			this.x = x;
			this.y = y;
			if (Math.random() < 0.5){
				this.xVel = Math.random()*(-2);
			} else{
				this.xVel = Math.random();
			}
			this.yVel = Math.random()*(-3);
			this.yAcc = 0.15
			this.height = Math.random()*5;
			this.width = Math.random()*5;
			this.radius = 0.1
		}

		move(){
			this.x += this.xVel;
			this.y += this.yVel;
			this.yVel += this.yAcc;
			
		}

		draw(){
			this.iterations ++;
			if (this.iterations < 40){
				this.move();
				c.beginPath();
				c.moveTo(this.x, this.y + this.radius);
				c.lineTo(this.x, this.y + this.height - this.radius);
				c.arcTo(this.x, this.y + this.height, this.x + this.radius, this.y + this.height, this.radius);
				c.lineTo(this.x + this.width - this.radius, this.y + this.height);
				c.arcTo(this.x + this.width, this.y + this.height, this.x + this.width, this.y + this.height-this.radius, this.radius);
				c.lineTo(this.x + this.width, this.y + this.radius);
				c.arcTo(this.x + this.width, this.y, this.x + this.width - this.radius, this.y, this.radius);
				c.lineTo(this.x + this.radius, this.y);
				c.arcTo(this.x, this.y, this.x, this.y + this.radius, this.radius);
				c.strokeStyle = "100, 69, 0";
				c.fillStyle = '100, 69, 0';
				c.strokeStyle = 'rgba(100, 69, 0, 0.5)';
				c.fillStyle = 'rgba(100, 69, 0, 1)';
		      	c.fill();
				c.stroke();
			}


		}
		
	}

	class Rain {

			constructor(x, y, randomValue){
				this.x = x;
				this.y = y;
				this.xVel = -3;
				this.yVel = 8;
				this.yAcc = 0.15;
				this.radius = randomValue*2;
				this.splashes = [];
			}

			move() {
				this.x += this.xVel;
				this.y += this.yVel;
				this.yVel += this.yAcc;
			}

			getTailStartAngle() {
				let directionAngle = Math.atan(this.yVel/this.xVel);
				let tailAngle = directionAngle - Math.PI
				return tailAngle + ((Math.PI*2)/3)
			}

			getTailEndAngle() {
				let directionAngle = Math.atan(this.yVel/this.xVel);
				let tailAngle = directionAngle - Math.PI
				return tailAngle - ((Math.PI*2)/3)
			}

			collisionWithHTML(){
				if (this.y > parseInt($("#item").css("top"), 10)+15 && this.y < parseInt($("#item").css("top"), 10)+20 && this.x > parseInt($("#item").css("left")) && this.x < parseInt($("#item").css("left"))+10)  {
					return true;
				}else if (this.y > parseInt($("#item").css("top"), 10)+10 && this.y < parseInt($("#item").css("top"), 10)+20 && this.x > parseInt($("#item").css("left"))+11 && this.x < parseInt($("#item").css("left"))+40)  {
					return true;
				}else if (this.y > parseInt($("#item").css("top"), 10)+40 && this.y < parseInt($("#item").css("top"), 10)+50 && this.x > parseInt($("#item").css("left"))+41 && this.x < parseInt($("#item").css("left"))+90)  {
					return true;
				}else {
					return false;
				}
			}

			collision(){
				if (this.y > canvas.height || this.collisionWithHTML()) {
					if (this.x < 0){
						return 1;
					} else {
						return 2;
					}
				} else {
					return 0;
				}
			}



			draw() {
				let collisionValue = this.collision();
				let saveX = this.x;
				let saveY = this.y;
				if (collisionValue != 0) {
					this.splashes = [];
					this.y = -1*(Math.random()*(canvas.height*2));
					this.x = Math.random()*(1.5*canvas.width)
					this.yVel = 8;
					var i;
					var j = Math.round(Math.random()*5);
					if (collisionValue == 2){
						for (i = 0; i < j; i++){
							this.splashes.push(new RainSplashEffect(saveX, saveY-10))
						}
					}
					
				}
				for (i=0; i < this.splashes.length; i++){
					this.splashes[i].draw();
				}
				this.move()
				c.beginPath();
				//   (x, y, r, sAngle, eAngle, cc)
				c.arc(this.x, this.y, this.radius, this.getTailStartAngle(), this.getTailEndAngle(), true);
				c.fillStyle = 'rgba(0, 127, 1, 0.5)';
				c.strokeStyle = 'rgba(11, 101, 149, 0.5)';
	      		c.fill();
				c.stroke();

				c.beginPath();
				var x = (Math.cos(this.getTailStartAngle())*this.radius)+this.x;
				var y = (Math.sin(this.getTailStartAngle())*this.radius)+this.y;
				c.moveTo(x, y);
				x = this.x - (Math.cos(Math.atan(this.yVel/this.xVel)+Math.PI)*this.radius*2);
				y = this.y - (Math.sin(Math.atan(this.yVel/this.xVel)+Math.PI)*this.radius*2);
				c.lineTo(x, y);
				x = (Math.cos(this.getTailEndAngle())*this.radius)+this.x; 
				y = (Math.sin(this.getTailEndAngle())*this.radius)+this.y;
				c.lineTo(x, y);
				c.fillStyle = 'rgba(17, 132, 179, 1)';
				c.strokeStyle = 'rgba(11, 101, 149, 0.5)';
	      		c.fill();
				c.stroke()

			}
	};

	class SettingZero {

		constructor(){
			this.raindrops = []
			this.stopper = true;
			this.totalDraw = 150;
			this.interval = 0;
			var i;
			for (i=0; i < this.totalDraw; i++){
				let randomValue = Math.random();
				var x = Math.random()*(1.5*canvas.width)
				var y = -1*(randomValue*(canvas.height*2))
				this.raindrops.push(new Rain(x, y, randomValue));
			}
		}

		draw(){
			if (this.stopper == false){	
				this.totalDraw = 50;
				var i;
				for (i = 0; i < this.totalDraw; i++){
					this.raindrops[i].draw();
				}
			}else {
				this.interval ++;
				if (this.interval == 10){
					this.interval = 0;
					this.totalDraw -=2;
				}
				
				var i;
				for (i = 0; i < this.totalDraw; i++){
					this.raindrops[i].draw();
				}
			}
		}

		endSetting() {
			this.stopper = true;
			
		}

		beginSetting() {
			this.stopper = false;
			$("#item").fadeOut("slow", function(){
				$("#item").replaceWith($("<div id='item'><img src='assets/umbrella.png' height='20px' width='20px'></div> <!-- End of Umbrella Div -->"));
				$("#item").fadeOut(0);
				$("#item").fadeIn("slow");
			});

			
		}
	};
	// End Setting Zero Classes //

	// Setting One Classes // 
	class Beam {

		constructor(x, y, order){
			this.fade = true;
			this.x = x;
			this.y = y;
			this.opacity = 0;
			this.angle = (-1*Math.PI/4) - ((1 + Math.random()) * (order * Math.PI/2));
		}

		move() {
			this.angle += 0.003;
			if (this.angle > Math.PI*2){
				this.angle = 0;
			}
			if (this.fade == true){
				if (this.opacity > 0){
					this.opacity -= 0.001;
				}
			}else{
				if (this.opacity < 0.05){
					this.opacity += 0.001;
				}
			}
			
		}

		draw() {
			this.move()
			c.beginPath();
			c.moveTo(this.x, this.y);
			var length = 2 * Math.sqrt(canvas.width**2 + canvas.height**2);
			var x = (Math.cos(this.angle) * length) + this.x;
			var y = (Math.sin(this.angle) * length) + this.y;
			c.lineTo(x, y);
			var x = (Math.cos(this.angle+Math.PI/4) * length) + this.x;
			var y = (Math.sin(this.angle+Math.PI/4) * length) + this.y;
			c.lineTo(x, y);
			c.lineTo(this.x, this.y)
			c.fillStyle = 'rgba(253, 184, 19, ' + this.opacity.toString() + ')';
			c.strokeStyle = 'rgba(0, 0, 0, 0)';
	      	c.fill();
			c.stroke();

		}

		decrease(value) {
			this.fade = value;
		}

		setX(value) {
			this.x = value;
		}
	}

	class SettingOne {

		constructor(){
			this.bOne = new Beam(canvas.width+10, -100, 0);
			this.bTwo = new Beam(canvas.width+10, -100, 1);
		}

		draw(){
				this.bOne.draw();
				this.bTwo.draw();
		}

		endSetting() {
			this.bOne.decrease(true);
			this.bTwo.decrease(true);
		}

		beginSetting() {
			this.bOne.setX(canvas.width+10);
			this.bTwo.setX(canvas.width+10);
			this.bOne.decrease(false);
			this.bTwo.decrease(false);
			$("#item").fadeOut("slow", function(){
				$("#item").replaceWith($("<div id='item'><img src='assets/ball.png' height='20px' width='20px'></div> <!-- End of Umbrella Div -->"));
				$("#item").fadeOut(0);
				$("#item").fadeIn("slow");
			});

		}
	};
	// End Setting One Classes // 

	// Setting Two Classes //
	class Snow {

		constructor(x, y) {
			this.x = x;
			this.y = y;
			if (Math.random() < 0.5) {
				this.xVel = Math.random() * -1;
			} else {
				this.xVel = Math.random() * 1;
			}
			let random = Math.random();
			this.yVel = 5 * random;
			this.yAcc = 0.1;
			this.radius = 2 * random;
		}

		collision() {
			if (this.y > canvas.height){
				return true;
			}
		}

		move() {
			this.x += this.xVel;
			this.y += this.yVel;
			this.yVel += this.yAcc;
			if (this.collision() == true){
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * -50;
				let random = Math.random();
				this.yVel = 5 * random;
				this.radius = 2 * random;
			}
		}

		draw(){
			this.move();
			c.beginPath();
			//   (x, y, r, sAngle, eAngle, cc)
			c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
			c.fillStyle = 'rgb(240, 240, 236)';
			c.strokeStyle = 'rgba(245, 245, 245, 0.5)';
	  		c.fill();
			c.stroke();

		}
	}

	class SettingTwo {

		constructor(){
			var i;
			this.stopper = true;
			this.snowFall = [];
			this.totalDraw = 200;
			for (i = 0; i < this.totalDraw; i++){
				var x = Math.random() * canvas.width;
				var y = Math.random() * -1000;
				this.snowFall.push(new Snow(x, y));
			}
		}

		draw(){
			if (this.stopper == false){
				var i;
				for (i = 0; i < this.totalDraw; i++){
					this.snowFall[i].draw();
				}
			}
		}

		endSetting() {
			this.stopper = true;
		}

		beginSetting() {
			this.stopper = false;
			$("#item").fadeOut("slow", function(){
				$("#item").replaceWith($("<div id='item'><img src='assets/snow.png' height='20px' width='20px'></div> <!-- End of Umbrella Div -->"));
				$("#item").fadeOut(0);
				$("#item").fadeIn("slow");
			});
		}
	};

	//End Setting Two Classes //

	// Setting Three Classes //
	class Lightning {
		constructor() {
			this.x = Math.random() * canvas.width;
			this.y = -10;
			this.path = [];
			this.path.push([this.x, this.y]);
			while (this.y < canvas.height){
				if (Math.random()<0.5){
					this.x += Math.random()*-10;
				}else {
					this.x += Math.random()*10;
				}
				this.y += Math.random()*20;
				this.path.push([this.x, this.y])
			}
		}

		new(){
			this.x = Math.random() * canvas.width;
			this.y = -10;
			this.path = [];
			this.path.push([this.x, this.y]);
			while (this.y < canvas.height){
				if (Math.random()<0.5){
					this.x += Math.random()*-10;
				}else {
					this.x += Math.random()*10;
				}
				this.y += Math.random()*20;
				this.path.push([this.x, this.y])
			}
		}

		draw() {
			c.beginPath();
			c.moveTo(this.path[0][0], this.path[0][1]);
			var i;
			for (i=0; i < this.path.length; i++){
				c.lineTo(this.path[i][0], this.path[i][1]);
			}
			c.strokeStyle = "rgba(255, 255, 255, 0.75)"
			c.stroke();
		}
	}

	class SettingThree {

		constructor(){
			this.raindrops = []
			this.stopper = true;
			this.totalDraw = 150;
			this.interval = 0;
			this.lightning = new Lightning();
			this.lightningTimer = 0;
			var i;
			
			for (i=0; i < this.totalDraw; i++){
				let randomValue = Math.random();
				var x = Math.random()*(1.5*canvas.width)
				var y = -1*(randomValue*(canvas.height*2))
				this.raindrops.push(new Rain(x, y, randomValue));
			}
		}

		draw(){
			if (this.stopper == false){	
				this.totalDraw = 50;
				if (this.lightningTimer > 510){
					this.lightningTimer = 0;
					this.lightning.new()
				}
				if (this.lightningTimer > 500){
					this.lightning.draw();
				}
				this.lightningTimer ++;
				var i;
				for (i = 0; i < this.totalDraw; i++){

					this.raindrops[i].draw();
				}
			}else {
				this.interval ++;
				if (this.interval == 10){
					this.interval = 0;
					this.totalDraw -=2;
				}
				
				var i;
				for (i = 0; i < this.totalDraw; i++){
					this.raindrops[i].draw();
				}
			}
		}

		endSetting() {
			this.stopper = true;
		}

		beginSetting() {
			this.stopper = false;
			$("#item").fadeOut("slow", function(){
				$("#item").replaceWith($("<div id='item'><img src='assets/storm.png' height='20px' width='20px'></div> <!-- End of Umbrella Div -->"));
				$("#item").fadeOut(0);
				$("#item").fadeIn("slow");
			});
		}
	};

	//End Setting Three Classes //

	// Node //
	class Node {
	constructor() {
		this.reset();
		this.z = Math.random();
		this.radius= this.z  *7;
		this.xVel = -3 * this.z;
		if (Math.random() < 0.5) {
			this.yVel = -1 * this.z;
		} else {
			this.yVel = 1 * this.z;
		}
		let random = Math.random();
			if (random < 0.25){
				this.color = 1;
			} else if (random < 0.5) {
				this.color = 2;
			} else if (random < 0.75){
				this.color = 3;
			} else {
				this.color = 4;
			}
		}

	getX() {
		return this.x
	}
	getY() {
		return this.y
	}
	reset() {
		this.x = (Math.random() * 100) + canvas.width + this.radius*2;
		this.y = Math.random() * canvas.height;
	}

	move(){
		if (this.x + this.radius*2 < 0) {
			this.reset();
		}if (this.y > canvas.height + this.radius*2 || this.y + this.radius*2 < 0){
			this.reset();
		}
		this.x += this.xVel;
		this.y += this.yVel;
	}

	draw() {
		this.move();
		c.beginPath();
		//   (x, y, r, sAngle, eAngle, cc)
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
		if (this.color == 1){
			c.fillStyle = 'rgb(49, 131, 149)';
		} else if (this.color == 2) {
			c.fillStyle = 'rgb(45, 146, 152)';
		} else if (this.color == 3) {
			c.fillStyle = 'rgb(34, 98, 108)';
		} else {
			c.fillStyle = 'rgb(30, 78, 90)';
		}
		
		c.strokeStyle = 'rgba(240, 240, 240, 0.05)';
  		c.fill();
		c.stroke();
	}

}
// End Node //

	nodes = [];
	var i; 
	var j;
	let totalDraw = 50;
	for (i = 0; i < totalDraw; i++){
		nodes.push(new Node());
	}


	// Regulate the Seasons //
	settings = [];
	settings.push(new SettingZero());
	settings.push(new SettingOne());
	settings.push(new SettingTwo());
	settings.push(new SettingThree());

	nextSetting = 0;
	changeSettings();

	timer = 0;
	function changeSettings(){
		//Rain
		if (nextSetting == 0){
			nextSetting = 1;
			settings[3].endSetting()
			settings[0].beginSetting()
			settings[1].endSetting()
			settings[2].endSetting()
			
			colorChange = true;
	  		fr = 25;
	  		fg = 25;
	  		fb = 112;

	  		sr = 230;
	  		sg = 230;
	  		sb = 255;
	  	//Clear
		}else if (nextSetting == 1){
			nextSetting = 2;
			settings[0].endSetting()
			settings[1].beginSetting()
			settings[2].endSetting()
			settings[3].endSetting()
			colorChange = true;
			fr = 135;
	  		fg = 206;
	  		fb = 235;

	  		sr = 255;
	  		sg = 235;
	  		sb = 205;
	  	//Snow
		} else if (nextSetting == 2){
			nextSetting = 3;
			settings[0].endSetting()
			settings[1].endSetting()
			settings[2].beginSetting()
			settings[3].endSetting()
			colorChange = true;
	  		fr = 120;
	  		fg = 200;
	  		fb = 255;

	  		sr = 240;
	  		sg = 240;
	  		sb = 240;
		}
		//Thunderstorm
		else if (nextSetting == 3){
			nextSetting = 0;
			settings[0].endSetting()
			settings[1].endSetting()
			settings[2].endSetting()
			settings[3].beginSetting()
			colorChange = true;
			fr = 45;
	  		fg = 54;
	  		fb = 86;

	  		sr = 145;
	  		sg = 154;
	  		sb = 186;
		}
		//Clouds
		else if (nextSetting == 4){
			nextSetting = 0;
			settings[0].endSetting()
			settings[1].endSetting()
			settings[2].endSetting()
			settings[3].endSetting()
			colorChange = true;
			fr = 189;
	  		fg = 183;
	  		fb = 107;

	  		sr = 220;
	  		sg = 220;
	  		sb = 220;
	  		$("#item").fadeOut("slow", function(){
				$("#item").replaceWith($("<div id='item'><img src='assets/cloud.png' height='20px' width='20px'></div> <!-- End of Umbrella Div -->"));
				$("#item").fadeOut(0);
				$("#item").fadeIn("slow");
			});
		}
		//Smoke
		else if (nextSetting == 5){
			nextSetting = 0;
			settings[0].endSetting()
			settings[1].endSetting()
			settings[2].endSetting()
			settings[3].endSetting()
			colorChange = true;
			fr = 70;
	  		fg = 70;
	  		fb = 120;

	  		sr = 170;
	  		sg = 150;
	  		sb = 180;
	  		$("#item").fadeOut("slow", function(){
				$("#item").replaceWith($("<div id='item'><img src='assets/smoke.png' height='20px' width='20px'></div> <!-- End of Umbrella Div -->"));
				$("#item").fadeOut(0);
				$("#item").fadeIn("slow");
			});
		}
		//Haze
		else if (nextSetting == 6){
			nextSetting = 0;
			settings[0].endSetting()
			settings[1].endSetting()
			settings[2].endSetting()
			settings[3].endSetting()
			colorChange = true;
			fr = 70;
	  		fg = 70;
	  		fb = 120;

	  		sr = 170;
	  		sg = 150;
	  		sb = 180;
	  		$("#item").fadeOut("slow", function(){
				$("#item").replaceWith($("<div id='item'><img src='assets/haze.png' height='20px' width='20px'></div> <!-- End of Umbrella Div -->"));
				$("#item").fadeOut(0);
				$("#item").fadeIn("slow");
			});
		}
		//Mist
		else if (nextSetting == 7){
			nextSetting = 0;
			settings[0].endSetting()
			settings[1].endSetting()
			settings[2].endSetting()
			settings[3].endSetting()
			colorChange = true;
			fr = 70;
	  		fg = 70;
	  		fb = 120;

	  		sr = 170;
	  		sg = 150;
	  		sb = 180;
	  		$("#item").fadeOut("slow", function(){
				$("#item").replaceWith($("<div id='item'><img src='assets/mist.png' height='20px' width='20px'></div> <!-- End of Umbrella Div -->"));
				$("#item").fadeOut(0);
				$("#item").fadeIn("slow");
			});
		}
	}

	// End Regulate the Seasons //

	// Animate // 
	var x = 0
	randomSettingChanger = true;
	function animate() {
		if ($('#box').is(":checked") && !(mobilecheck() || (ua.indexOf('safari') != -1 && ua.indexOf('chrome') <= -1 ))) {

			if (randomSettingChanger == true){
				timer ++;
				if (timer == 600){
					timer = 0;
					changeSettings();
				}
			}
			
		    requestAnimationFrame(animate);
		    canvas.width = window.innerWidth;
		    canvas.height = window.innerHeight;
		    settings.forEach(function(element) {
			  	element.draw();
			});
		    if (colorChange == true){
			    var done = true;
				if (fr < fgr){
					fgr --;
					done = false;
				} else if (fr > fgr){
					fgr ++;
					done = false;
				}
				if (fg < fgg){
					fgg --;
					done = false;
				} else if (fg > fgg){
					fgg ++;
					done = false;
				}
				if (fb < fgb){
					fgb --;
					done = false;
				} else if (fb > fgb){
					fgb ++;
					done = false;
				}
				if (sr < sgr){
					sgr --;
					done = false;
				} else if (sr > sgr){
					sgr ++;
					done = false;
				}
				if (sg < sgg){
					sgg --;
					done = false;
				} else if (sg > sgg){
					sgg ++;
					done = false;
				}
				if (sb < sgb){
					sgb --;
					done = false;
				} else if (sb > sgb){
					sgb ++;
					done = false;
				}
				if (done){
					bool = false;
				}
			}
				document.getElementById("canvas").style.background = "linear-gradient(rgba(" + fgr.toString() + "," + fgg.toString() + "," + fgb.toString() + "), rgb(" + sgr.toString() + "," + sgg.toString() + "," + sgb.toString() + ", 0.95))"
		} else {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			$("#canvas").css("background-image", "url('assets/background.jpg')");
			requestAnimationFrame(animate);
			for (i = 0; i < totalDraw; i++){
				for (j = 0; j < totalDraw; j++){
					let diffX = (Math.abs(nodes[i].getX() - nodes[j].getX()));
					let diffY = (Math.abs(nodes[i].getY() - nodes[j].getY()));
					if (diffX < 40 && diffY < 40){
						c.beginPath();
						c.moveTo(nodes[i].getX(), nodes[i].getY());
						c.lineTo(nodes[j].getX(), nodes[j].getY());
						c.strokeStyle = "rgba(255, 255, 255, 0.5)";
						c.stroke();
					}
				}
			}
			for (i = 0; i < totalDraw; i++){
				nodes[i].draw()
			}
		}
		
	}

	animate();
	// End Animate //


	//  Get Weather //
	var currentWeather;
	var OpenWeather = (function(){
		var self = {};
		
		if (!$)
			throw "JQuery is required for OpenWeather API";

		var appId = '', 		// API key consumed by API for validation
			zip = '',			// Get weather for this zip code
			ready = false,		// Validatea that the API has returned data
			rawResponse = {},	// Contains raw response from API
			iconEl = '',		// ID for element containing weather icon
			infoEl = '';		// ID for element containing weather info
		
		self.zip = function(newZip){
			// Sets new zip code if provided and fetch new data, 
			// 		otherwise returns current zip code
			if (typeof newZip === 'undefined'){
				return zip;
			} else if (typeof newZip == 'string' && newZip.length == 5) {
				zip = newZip;
				retrieveWeather();
				return zip;	
			} else {
				throw 'Invalid Zip: Must be a 5-character string';
				return false;type	
			}
		};
		
		self.appId = function(newAppId){
			// Sets new AppId if provided and fetch new data, 
			// otherwise returns current AppId
			if (typeof newAppId === 'undefined'){
				return appId;
			} else {
				appId = newAppId;
				retrieveWeather();
				return appId;	
			}
		};
		
		var apiUrl = function(){	
			// assembled API call URL
			return 'https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=' + appId;
		};
		
		var retrieveWeather = function(){
			// call to API
			$.ajax({
				type: 'GET',
				url: apiUrl(), 
				dataType: 'jsonp',
				success: function(result){
				
					// set raw response data
					rawResponse = result;
					currentWeather = rawResponse.weather[0].main;
					
					return true;
				}
			});
		};
		
		self.init = function(initData){
			// set intializing data
			if(typeof initData.zip == 'undefined' || typeof initData.appId == 'undefined') {
				// require zip and appID
				throw 'must provide zip and app id';
				return self;
			} else {
			
				if (typeof initData.icon === 'undefined')
					initData.icon = ''; // permit null icon ID
					
				if (typeof initData.info === 'undefined')
					initData.info = ''; // permit null info ID
					
				zip = initData.zip;
				appId = initData.appId;
				iconEl = initData.icon;
				infoEl = initData.info;
				
				return self;
			}
		};
		
		self.fetch = function(){
			// fetches weather
			return retrieveWeather();
		}
		
		function kelvinToF(K){
			return (K*9/5 - 459.67).toFixed(1);
		}
		
		function mpsToMph(mps){
			return (2.236936*mps).toFixed(1).toString();
		}
		
		function degToCardDir(deg){
			var dir = '';
			switch(true) {
				case (deg <= 11.25 && deg > 348.75 ):
					dir = 'N';
					break;
				case (deg <= 33.75 && deg > 11.25 ):
					dir = 'NNE';
					break;
				case (deg <= 56.25 && deg > 33.75 ):
					dir = 'NE';
					break;	
				case (deg <= 78.75 && deg > 56.25 ):
					dir = 'ENE';
					break;
				case (deg <= 101.25 && deg > 78.75 ):
					dir = 'E';
					break;
				case (deg <= 123.75 && deg > 101.25 ):
					dir = 'ESE';
					break;
				case (deg <= 146.25 && deg > 123.75 ):
					dir = 'SE';
					break;
				case (deg <= 168.75 && deg > 146.25 ):
					dir = 'SSE';
					break;
				case (deg <= 191.25 && deg > 168.75 ):
					dir = 'S';
					break;
				case (deg <= 213.75 && deg > 191.25 ):
					dir = 'SSW';
					break;
				case (deg <= 236.25 && deg > 213.75 ):
					dir = 'SW';
					break;
				case (deg <= 258.75 && deg > 236.25 ):
					dir = 'WSW';
					break;
				case (deg <= 281.25 && deg > 258.75 ):
					dir = 'W';
					break;
				case (deg <= 303.75 && deg > 281.25 ):
					dir = 'WNW';
					break;
				case (deg <= 326.25 && deg > 303.75 ):
					dir = 'NW';
					break;
				case (deg <= 348.75 && deg > 326.25 ):
					dir = 'NNW';
					break;
				default:
					break;
			}
			return dir;
		}
		
		return self;
	}());



	OpenWeather.init({
		zip: '90210',                              // zip, required
		appId: 'e9fa1fe1bd6b464092719170a71067d3', // API Key, required
		//icon: 'weather-icon',                      // icon ID, optional
		//info: 'weather-info'                       // info ID, optional
	}).fetch();

	OpenWeather.zip('07940');

	// Event Handlers //



	document.addEventListener('keydown', (event) => {
	  const keyName = event.key;
	  if (keyName == "Enter"){
	  	randomSettingChanger = false;
	  	let zipCode = document.getElementById("zip").value;
	  	if (zipCode == "" || OpenWeather.zip(zipCode.toString()) == false){
	  		return;
	  	}
	  	if (currentWeather == "Clear"){
	  		$("#locInfo").text("Zip: " + zipCode.toString() + "  |  " + currentWeather.toString()); 
	  		nextSetting = 1;
			changeSettings();
	  	} else if (currentWeather == "Rain"){
	  		$("#locInfo").text("Zip: " + zipCode.toString() + "  |  " + currentWeather.toString()); 
	  		nextSetting = 0;
			changeSettings();
	  	} else if (currentWeather == "Snow"){
	  		$("#locInfo").text("Zip: " + zipCode.toString() + "  |  " + currentWeather.toString()); 
	  		nextSetting = 2;
			changeSettings();
		} else if (currentWeather == "Clouds"){
	  		$("#locInfo").text("Zip: " + zipCode.toString() + "  |  " + currentWeather.toString()); 
	  		nextSetting = 4;
			changeSettings();
		} else if (currentWeather == "Thunderstorm"){
	  		$("#locInfo").text("Zip: " + zipCode.toString() + "  |  " + currentWeather.toString()); 
	  		nextSetting = 3;
			changeSettings();
		} else if (currentWeather == "Smoke"){
	  		$("#locInfo").text("Zip: " + zipCode.toString() + "  |  " + currentWeather.toString()); 
	  		nextSetting = 5;
			changeSettings();
		} else if (currentWeather == "Haze"){
	  		$("#locInfo").text("Zip: " + zipCode.toString() + "  |  " + currentWeather.toString()); 
	  		nextSetting = 6;
			changeSettings();
		} else if (currentWeather == "Mist"){
	  		$("#locInfo").text("Zip: " + zipCode.toString() + "  |  " + currentWeather.toString()); 
	  		nextSetting = 7;
			changeSettings();
	  	} else {
	  		$("#locInfo").text("Zip: " + zipCode.toString() + "  |  " + currentWeather.toString()); 
	  	}
	  	
	  }
	});

	// End Event Handlers //





