/*
 * Sketching with Math and Quasi Physics
 * Sketch_05 -> Perspective Projection ( Fixed Camera )
 * ©kynd
 * Look up for Projection Matrix for more proper 3D projection
 * e.g. http://www.songho.ca/opengl/gl_projectionmatrix.html
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

const sketch = () => {
	//---
	return ({ width, height }) => {
		clear();
		background(33);
	};
};

// ---
function project(v, nearClip, cameraZ) {
	let r = abs(cameraZ - nearClip) / abs(cameraZ - v.z);
	return new p5.Vector(v.x * r, v.y * r);
}
function drawCircleMarker(p, size) {
	ellipse(p.x, p.y, size * 2, size * 2);
}

function drawSquareMarker(p, size) {
	rect(p.x - size, p.y - size, size * 2, size * 2);
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
