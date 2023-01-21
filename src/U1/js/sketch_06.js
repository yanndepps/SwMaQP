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

const sketch = () => {
	//---
	return ({ width, height }) => {
		background(33);
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
	line(x1, y1, x1 - v.y * 4 - v.x * 4, y1 - v.x * 4 - v.y * 4);
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
