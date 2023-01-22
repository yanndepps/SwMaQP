/*
 * Sketching with Math and Quasi Physics
 * Sketch_01 -> Position
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

let position;
let font;
window.preload = () => {
	font = loadFont('../../../assets/font/bauhaus.otf');
}

const sketch = () => {
	position = createVector(100, -100);
	return ({ width, height }) => {
		clear();
		background(117, 147, 208);
		//---
		const hw = width / 2, hh = height / 2;

		push();
		translate(hw, hh);
		fill(0);
		stroke(0);
		strokeWeight(2);
		drawArrow(0, 0, position.x, position.y);
		drawLabel(position.x, position.y, `position (${position.x.toPrecision(4)}, ${position.y.toPrecision(4)})`, LEFT);

		strokeWeight(1);
		line(-hw, 0, hw, 0);
		line(0, -hh, 0, hh);
		drawLabel(0, -4, 'Origin', LEFT);
		pop();

		position = createVector(mouseX - hw, mouseY - hh);
	};
};

// ---
function drawArrow(x0, y0, x1, y1) {
	line(x0, y0, x1, y1);
	let v = createVector(x1 - x0, y1 - y0).normalize();
	line(x1, y1, x1 - v.y * 4 - v.x * 4, y1 + v.x * 4 - v.y * 4);
	line(x1, y1, x1 + v.y * 4 - v.x * 4, y1 - v.x * 4 - v.y * 4);
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
