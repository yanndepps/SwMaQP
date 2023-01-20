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
	dimensions: [1024, 1024],
	animate: true
};

let degA, degB, degC;
let pA, pB, pC;

const sketch = () => {
	degA = degB = degC = 0;
	pA = createVector(0, -80);
	pB = createVector(100, 0);
	pC = createVector(-100, 100);
	return ({ context, width, height }) => {
		clear();
		background(15, 157, 88);
	};
};

canvasSketch(sketch, settings);
