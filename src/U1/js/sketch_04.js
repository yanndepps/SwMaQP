/*
 * Sketching with Math and Quasi Physics
 * Sketch_04 -> Manhattan Distance Between Two Points
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

let counter;
let p, q, r;

const sketch = () => {
	counter = 0;
	p = createVector(0, 0);
	q = createVector(0, 0);
	r = createVector(0, 0);
	//---
	return ({ width, height, time }) => {
		clear();
		background(245, 177, 217);
		//---
		const cx = width / 2, cy = height / 2;
		// const t = frameCount + 30;
		const t = Math.round(time * 30);
		const a0 = radians(t), a1 = radians(t * 2), a2 = radians(t * 3), a3 = radians(t * 4);
		p.x = cos(a0) * 150;
		p.y = sin(a3) * 100;
		q.x = -cos(a1) * 150;
		q.y = -sin(a2) * 100;
		r.x = p.x;
		r.y = q.y;

		const dx = Math.abs(p.x - q.x);
		const dy = Math.abs(p.y - q.y);
		const distance = dx + dy;

		push();
		translate(cx, cy);
		fill(0);
		stroke(0);
		drawLineWithLabel(p.x, p.y, r.x, r.y, 'dx: ' + dx.toPrecision(4), LEFT);
		drawLineWithLabel(q.x, q.y, r.x, r.y, 'dy: ' + dy.toPrecision(4), CENTER, 0, 14);
		drawLabel(0, cy - 16, 'distance = dx + dy = ' + distance.toPrecision(4), CENTER);
		drawSquareMarker(p, 10);
		drawTriangleMarker(q, 12);
		drawCircleMarker(r, 4);
		pop();

		counter++;
	};
};

// ---
function drawCircleMarker(p, size) {
	ellipse(p.x, p.y, size * 2, size * 2);
}

function drawSquareMarker(p, size) {
	rect(p.x - size, p.y - size, size * 2, size * 2);
}

function drawTriangleMarker(p, size) {
	let r3 = sqrt(3) / 3 * size;
	triangle(p.x, p.y - r3 * 2, p.x - size, p.y + r3, p.x + size, p.y + r3);
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

// ---
canvasSketch(sketch, settings);
