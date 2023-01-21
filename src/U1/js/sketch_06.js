/*
 * Sketching with Math and Quasi Physics
 * Sketch_06 -> Dot Product
 * ©kynd
 */

const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
	p5: true,
	context: '2d',
	dimensions: [512, 512],
	animate: true
};

let font;
window.preload = () => {
	font = loadFont('../../../assets/font/bauhaus.otf');
}

let deg;

const sketch = () => {
	deg = 240;
	return ({ width, height }) => {
		clear();
		background(15, 157, 88);
		//---
		let m = 60; // magnifier
		let v1 = createVector(1, -1).normalize();
		let rad = radians(deg);
		let v2 = createVector(cos(rad), sin(rad)).mult(3);
		let dotProduct = v2.dot(v1.copy().normalize());
		let p = v1.copy().normalize().mult(dotProduct);

		push();
		translate(width / 2, height / 2);
		fill(255);
		stroke(0);
		strokeWeight(1);
		let hh = height / 2;
		// line(-hh, -hh, hh, hh);
		line(-hh, hh, hh, -hh);
		line(v2.x * m, v2.y * m, p.x * m, p.y * m);

		//---
		fill(0);
		stroke(0);
		strokeWeight(3);
		drawArrow(0, 0, v1.x * m, v1.y * m);
		drawArrow(0, 0, v2.x * m, v2.y * m);

		strokeWeight(1);
		line(0, 0, 72, 72);
		line(p.x * m, p.y * m, p.x * m + 72, p.y * m + 72);
		drawLineWithLabel(64, 64, p.x * m + 64, p.y * m + 64, 'dot product = ' + dotProduct.toPrecision(3), LEFT);

		fill(255);
		stroke(0);
		strokeWeight(1);
		drawCircleMarker(p.copy().mult(m), 4);
		drawCircleMarker(v2.copy().mult(m), 4);
		drawCircleMarker(createVector(0, 0), 4);

		fill(0);
		noStroke();
		drawLabel(v1.x * m + 4, v1.y * m, 'v1(magnitude = 1)', LEFT);
		drawLabel(v2.x * m + 4, v2.y * m, 'v2(magnitude = 3)', LEFT);
		pop();

		deg++
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

function drawLineWithLabel(x0, y0, x1, y1, label, align = CENTER, offsetX = 0, offsetY = 0) {
	line(x0, y0, x1, y1);
	let mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
	drawLabel(mx + offsetX, my + offsetY, label, align);
}

function drawLabel(x, y, label, align = CENTER) {
	push();
	strokeWeight(0);
	textFont(font);
	textSize(14);
	textAlign(align);
	if (align == LEFT) { x += 6; }
	if (align == RIGHT) { x -= 6; }
	text(label, x, y);
	pop();
}

canvasSketch(sketch, settings);
