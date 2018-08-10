var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

document.getElementById("canvas").style.background = "rgb(240, 240, 240)"

class RainSplashEffect {
	constructor(x, y){
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
		this.move();
		console.log(this.x + "     " + this.y)
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
		c.strokeStyle = "11, 101, 149";
		//c.fillStyle = '17, 132, 179';
      	//c.fill();
		c.stroke();
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

		collision(){
			if (this.y > canvas.height) {
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
						this.splashes.push(new RainSplashEffect(saveX, canvas.height))
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
			c.strokeStyle = "11, 101, 149";
			c.fillStyle = '17, 132, 179';
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
			c.fillStyle = '17, 132, 179';
      		c.fill();
			c.stroke()

		}
};

class SettingOne {

	constructor(){
		this.raindrops = []
		var i;
		for (i=0; i < 100; i++){
			let randomValue = Math.random();
			var x = Math.random()*(1.5*canvas.width)
			var y = -1*(randomValue*(canvas.height*2))
			this.raindrops.push(new Rain(x, y, randomValue));
		}
	}

	draw(){
		this.raindrops.forEach(function(element) {
  			element.draw(x);
		});
	}
};

settings = []
settings.push(new SettingOne())


var x = 0
function animate() {
    requestAnimationFrame(animate);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    settings[0].draw()

}

animate();





