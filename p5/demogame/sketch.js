let snowflakeImg;
let backgroundImg;
let snowflakes = [];


function preload() {
	snowflakeImg = loadImage("snowflake.png");
	backgroundImg = loadImage("BG.png");
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);


	for (let i = 0; i < 400; i = i + 1) {
		let x = random(10, width - 10);
		let y = random(-600, 0);
		snowflakes[i] = createSnowflake(x, y);
	}
}

function draw() {

	image(backgroundImg, 0, 0, width, height);

	for (let i = 0; i < 400; i = i + 1) {
		updateSnowflake(snowflakes[i]);
	}
}


function createSnowflake(x, y) {
	let snowflakeObj = {};
	snowflakeObj.x = x;
	snowflakeObj.y = y;
	snowflakeObj.velY = random(3, 8);
	snowflakeObj.size = random(50, 65);

	return snowflakeObj;
}

function updateSnowflake(s) {
	s.y = s.y + s.velY;

	if (s.size > 0 && s.y > height - 800) {
		s.size = s.size - 0.5;
	}

	if (s.size < 0 && s.y > height - 800) {
		s.size = random(50, 65);
		s.x = random(10, width - 10);
		s.y = random(-300, 0);
	}
	image(snowflakeImg, s.x, s.y, s.size, s.size);
}