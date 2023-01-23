/*
 * Sketching with Math and Quasi Physics
 * Sketch_03 -> Acceleration
 * ©kynd
 */

const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
	p5: true,
	context: '2d',
	dimensions: [1024, 1024],
	animate: true
};

let font;
window.preload = () => {
	font = loadFont('../../../assets/font/bauhaus.otf');
}

let fps;
let position;
let velocity;
let acceleration;
let maxSpeed;


const sketch = () => {
	fps = 60;
	position = createVector(100, -100);
	velocity = createVector(48, -48);
	acceleration = createVector(30, 30);
	maxSpeed = 256;
	//---
	return ({ width, height }) => {
		clear();
		background(117, 147, 208);
		//---
		const hw = width / 2, hh = height / 2;
		const vx = position.x + velocity.x;
		const vy = position.y + velocity.y;
		const ax = position.x + acceleration.x;
		const ay = position.y + acceleration.y;
		//---
		push();
		translate(hw, hh);
		fill(0);
		stroke(0);
		strokeWeight(2);
		drawArrow(position.x, position.y, vx, vy);
		drawCircleMarker(position, 4);

		strokeWeight(2);
		drawArrow(position.x, position.y, ax, ay);

		drawLabel(position.x, position.y, `position (${position.x.toPrecision(4)}, ${position.y.toPrecision(4)})`, LEFT);
		drawLabel(vx, vy, `velocity (${velocity.x.toPrecision(4)}, ${velocity.y.toPrecision(4)})`, LEFT);
		drawLabel(ax, ay, `acceleration (${acceleration.x.toPrecision(4)}, ${acceleration.y.toPrecision(4)})`, LEFT);

		strokeWeight(1);
		line(-hw, 0, hw, 0);
		line(0, -hw, 0, hh);
		drawLabel(0, -4, 'Origin', LEFT);
		pop();

		acceleration = createVector(mouseX - position.x - hw, mouseY - position.y - hh).div(2);
		const vDelta = acceleration.copy().div(fps);
		velocity.add(vDelta);
		if (velocity.mag() > maxSpeed) {
			velocity.setMag(maxSpeed);
		}
		const pDelta = velocity.copy().div(fps);
		position.add(pDelta);
		if (position.x > hw || position.x < -hw) { velocity.x = -velocity.x; }
		if (position.y > hh || position.y < -hh) { velocity.y = -velocity.y; }
	};
};

// ---
function drawCircleMarker(p, size) {
	ellipse(p.x, p.y, size * 2, size * 2);
}

function drawArrow(x0, y0, x1, y1) {
	line(x0, y0, x1, y1);
	let v = createVector(x1 - x0, y1 - y0).normalize();
	line(x1, y1, x1 - v.y * 4 - v.x * 4, y1 + v.x * 4 - v.y * 4);
	line(x1, y1, x1 + v.y * 4 - v.x * 4, y1 - v.x * 4 - v.y * 4);
}

function drawLabel(x, y, label, align = CENTER) {
	push();
	strokeWeight(0);
	textFont(font);
	textSize(24);
	textAlign(align);
	if (align == LEFT) { x += 6; }
	if (align == RIGHT) { x -= 6; }
	text(label, x, y);
	pop();
}

// ---
canvasSketch(sketch, settings);
