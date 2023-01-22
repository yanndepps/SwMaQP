/*
 * Sketching with Math and Quasi Physics
 * Sketch_05 -> ( Random_1 + Random_2 + ... + Random_N ) / N
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

let n = 10;
let record, max;
let resolution = 150;
let font;

window.preload = () => {
	font = loadFont('../../../assets/font/bauhaus.otf');
}

const sketch = () => {
	initRecord();
	for (let i = 0; i < resolution * 10; i++) {
		nextRandom();
	}
	return ({ frame, width, height }) => {
		clear();
		background(254, 253, 183);
		//---
		let v;
		for (let i = 0; i < resolution; i++) {
			v = nextRandom();
			line(v * width, 0, v * width, height);
		}

		//---
		fill(0);
		stroke(0);
		for (let i = 0; i < resolution; i++) {
			let w = width / resolution;
			let h = height / max * record[i];
			let x = w * i;
			let y = height - h;
			rect(x, y, w, h);
		}

		//---
		fill(254, 253, 183);
		drawLabel(width / 2, height - 26, 'n = ' + n, CENTER);

		n = floor(frame / 60) % 9 + 2;
		if (frame % 60 == 0) {
			initRecord();
		}
	};
};

// ---
function initRecord() {
	max = 1;
	if (!record) {
		record = [];
	} else {
		record.length = 0;
	}

	for (let i = 0; i < resolution; i++) {
		record.push(0);
	}
}

function nextRandom() {
	let v = 0;
	for (let i = 0; i < n; i++) {
		v += random(1);
	}
	v /= n;
	if (++record[floor(v * resolution)] > max) { max++; }
	return v;
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
