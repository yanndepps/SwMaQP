/*
 * Sketching with Math and Quasi Physics
 * Sketch_07 -> Cross Product
 * ©kynd
 *Look up for Projection Matrix for more proper 3D projection
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

let font;
window.preload = () => {
	font = loadFont('../../../assets/font/bauhaus.otf');
}

const sketch = () => {
	return ({ width, height }) => {
		background(33);
	};
};

// ---
function signedNoise(x, y, z) {
	return (noise(x, y, z) - 0.5) * 2;
}

function getProjectionFunc(n, z, m = 1) {
	let nearClip = n;
	let cameraZ = z;
	let multiplier = m;
	return (v) => {
		let r = abs(cameraZ - nearClip) / abs(cameraZ - v.z) * multiplier;
		return new p5.Vector(v.x * r, v.y * r);
	}
}

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
	textSize(14);
	textAlign(align);
	if (align == LEFT) { x += 6; }
	if (align == RIGHT) { x -= 6; }
	text(label, x, y);
	pop();
}

// ---
canvasSketch(sketch, settings);
