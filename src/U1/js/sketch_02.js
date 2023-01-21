/*
 * Sketching with Math and Quasi Physics
 * Sketch_02 -> Rotating 2D Points
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

let degA, degB, degC;
let pA, pB, pC;

const sketch = () => {
	degA = degB = degC = 0;
	pA = createVector(0, -80);
	pB = createVector(100, 0);
	pC = createVector(-100, 100);
	return ({ width, height, canvasHeight }) => {
		clear();
		background(15, 157, 88);
		//---
		let cx = width / 2, cy = height / 2;
		let radA = radians(degA);
		let radB = radians(degB);
		let radC = radians(degC);
		let npA = rotate2d(pA, radA);
		let npB = rotate2d(pB, radB);
		let npC = rotate2d(pC, radC);

		//---
		push();
		translate(cx, cy);
		fill(0);
		stroke(0);
		line(0, 0, pA.x, pA.y);
		line(0, 0, pB.x, pB.y);
		line(0, 0, pC.x, pC.y);
		drawTriangleMarker(pA, 12);
		drawCircleMarker(pB, 12);
		drawSquareMarker(pC, 10);

		fill(255);
		stroke(255);
		ellipse(0, 0, 8, 8);
		line(0, 0, npA.x, npA.y);
		line(0, 0, npB.x, npB.y);
		line(0, 0, npC.x, npC.y);
		drawTriangleMarker(npA, 12);
		drawCircleMarker(npB, 12);
		drawSquareMarker(npC, 10);
		pop();

		//---
		degA += 1;
		degB += 2;
		degC += 4;
	};
};

// ---
function rotate2d(p, rad) {
	let sine = sin(rad);
	let cosine = cos(rad);
	return new p5.Vector(p.x * cosine + p.y * sine, -p.x * sine + p.y * cosine);
}

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

// ---
canvasSketch(sketch, settings);
