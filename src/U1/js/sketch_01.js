/*
 * Sketching with Math and Quasi Physics
 * Sketch_01 -> Sine, Cosine and Tangent
 * ©kynd
 */

const canvasSketch = require('canvas-sketch');
const p5 = require('p5')
new p5()

const settings = {
	p5: true,
	context: '2d',
	dimensions: [1024, 1024],
	animate: true
};

let deg;
let font;

window.preload = () => {
	font = loadFont('../../../assets/font/bauhaus.otf');
}

const sketch = () => {
	deg = 45;
	return ({ width, height, canvasHeight }) => {
		clear();
		background(135, 108, 209);
		//---
		let hypotenuse = width * 0.25;
		let rad = radians(deg); // PI * deg / 180
		let sine = sin(rad);
		let cosine = cos(rad);
		let opposite = sine * hypotenuse;
		let adjacent = cosine * hypotenuse;
		let tangent = sine / cosine;
		//---
		push();
		translate(width / 2, height / 2);
		fill(255);
		stroke(0);
		strokeWeight(1);
		ellipse(0, 0, hypotenuse * 2, hypotenuse * 2);
		line(-hypotenuse, 0, hypotenuse, 0);

		fill(0);
		stroke(0);
		strokeWeight(3);
		line(0, 0, adjacent, 0);
		drawLineWithLabel(0, 0, adjacent, -opposite, 'hypotenuse: ' + hypotenuse.toPrecision(3), (adjacent > 0) ? RIGHT : LEFT);
		drawLineWithLabel(adjacent, 0, adjacent, -opposite, 'opposite: ' + opposite.toPrecision(3), (adjacent > 0) ? LEFT : RIGHT);
		drawLabel(adjacent / 2, 16, 'adjacent: ' + adjacent.toPrecision(3), LEFT);
		pop();

		drawLabel(16, canvasHeight - 120, 'angle(degrees): ' + deg.toPrecision(3), LEFT);
		drawLabel(16, canvasHeight - 96, 'angle(radians): ' + rad.toPrecision(3), LEFT);
		drawLabel(16, canvasHeight - 72, 'sine: ' + sine.toPrecision(3), LEFT);
		drawLabel(16, canvasHeight - 48, 'cosine: ' + cosine.toPrecision(3), LEFT);
		drawLabel(16, canvasHeight - 24, 'tangent: ' + tangent.toPrecision(3), LEFT);

		deg++;
	};
};

// --- Utils --- //
function drawLineWithLabel(x0, y0, x1, y1, label, align = CENTER, offsetX = 0, offsetY = 0) {
	line(x0, y0, x1, y1);
	let mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
	drawLabel(mx + offsetX, my + offsetY, label, align);
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

canvasSketch(sketch, settings);
