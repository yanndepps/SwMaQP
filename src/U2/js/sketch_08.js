/*
 * Sketching with Math and Quasi Physics
 * Sketch_08 -> Perlin Noise : Variation over time
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

let record = [], x = 0;
let resolution = 150;

const sketch = () => {
	for (let i = 0; i < resolution * 10; i++) {
		nextRandom();
	}
	return ({ width, height }) => {
		clear();
		background(254, 253, 183);
		nextRandom();
		//---

		fill(0);
		stroke(0);
		for (let i = 0; i < record.length; i++) {
			let w = width / resolution;
			let h = height * record[i];
			let x = w * i;
			let y = height - h;
			rect(x, y, w, h);
		}
	};
};

// ---
function nextRandom() {
	let v = noise(x);
	x += 0.01;
	record.push(v);
	if (record.length > resolution) { record.shift(); }
}

// ---
canvasSketch(sketch, settings);
