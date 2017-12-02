var x = 0;

function getRandomNumber(upper) {
	if (isNaN(upper)) {
		console.log("The argument \"" + upper + "\" that you entered into the getRandomNumber() function is not a number.")
	} else {
		var randomNumber = Math.floor(Math.random() * upper) + 1;
		return randomNumber;
	}
}

function setup() {
	createCanvas(320, 240);
}

function draw() {
  background(0);
  ellipse(x, 120, 16, 16);
  x = x + 1;
  if (x > width) {
  	x = 0;
  }
}