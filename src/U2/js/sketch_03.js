/*
 * Sketching with Math and Quasi Physics
 * Sketch_03 -> Random_N
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

const sketch = () => {
	return ({ frame, width, height }) => {
		clear();
		background(254, 253, 183);
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
	let v = pow(random(1), 2);
	if (++record[floor(v * resolution)] > max) { max++; }
	return v;
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
