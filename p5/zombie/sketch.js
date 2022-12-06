let backgroundImg;
let gameoverImg;
let shooterImg;
let shooterSize = 90;
let shooterXPos = 800;
let bulletImg;
let bulletArr = [];
let zombieImg;
let zombieArr = [];
let scoreDigit = 0;
let Score = ' score:';


function preload() {
	shooterImg = loadImage("shooter.png");
	backgroundImg = loadImage("map.jpg");
	bulletImg = loadImage("bullet.png");
	zombieImg = loadImage("zombie.png");
	gameoverImg = loadImage("gameover.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	noCursor();
}

function draw() {

	image(backgroundImg, 0, 0, width, height);
	displayShooter();

	if (frameCount % 60 === 1) {
		let zombieObj = new zombie();
		zombieArr.push(zombieObj);
	}
	for (let i = 0; i < zombieArr.length; i++) {
		zombieArr[i].drawZombie();
		if (zombieArr[i].hit === true) {
			zombieArr.splice(i, 1);
			i = i - 1;
			scoreDigit = scoreDigit + 1;
		}
	}

	for (let i = 0; i < bulletArr.length; i++) {
		bulletArr[i].drawBullet();
		if (bulletArr[i].x >= width) {
			bulletArr.splice(i, 1);
			i = i - 1;

		}
	}

	//scoreInformation
	noStroke();
	textSize(30);
	text(Score, width / 2 - 150, 100);
	text(scoreDigit, width / 2 - 50, 100);

}

function mousePressed() {
	let bulletObj = new bullet(shooterXPos + 70, mouseY + 10);
	bulletArr.push(bulletObj);
}

function displayShooter() {
	image(shooterImg, shooterXPos, mouseY, shooterSize, shooterSize);
}

class bullet {
	constructor(xPos, yPos) {
		this.x = xPos;
		this.y = yPos;
		this.velX = 9;
		this.size = 30;
		this.diameter = 15;
	}

	drawBullet() {
		this.x = this.x + this.velX;
		image(bulletImg, this.x, this.y, this.size, this.size);
	}
}


class zombie {
	constructor(xPos, yPos) {
		this.x = width - 10;
		this.y = random(100, height - 100);
		this.velX = random(-3, -1);
		this.size = 100;
		this.hit = false;
	}
	drawZombie() {

		for (let i = 0; i < bulletArr.length; i++) {
			let distance = dist(this.x, random(this.y, this.y + 70), bulletArr[i].x, bulletArr[i].y);
			if (distance < bulletArr[i].diameter && !this.hit) {
				this.hit = true;
				bulletArr.splice(i, 1);
				i = i - 1;
			}
		}
		this.x = this.x + this.velX;
		image(zombieImg, this.x, this.y, this.size, this.size);
		if (this.x < shooterXPos - 300) {
			imageMode(CENTER);
			image(gameoverImg, width / 2, height / 2, 500, 500);
			noLoop();
		}
	}
}