/*
 * Sketching with Math and Quasi Physics
 * Sketch_01 -> Taming Randomness
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

const sketch = () => {
	return ({ width, height }) => {
		backround(33);
	};
};

canvasSketch(sketch, settings);
