/*
 * Sketching with Math and Quasi Physics
 * Sketch_09 -> Random Walkers
 * ©kynd
 */

const p5 = require('p5');
new p5();
const canvasSketch = require('canvas-sketch');

const settings = {
	p5: true,
	context: '2d',
	dimensions: [1024, 1024],
	animate: true
};

let walkers = [];
let font;
window.preload = () => {
	font = loadFont('../../../assets/font/bauhaus.otf');
}

const sketch = ({ width, height }) => {
	walkers.push(new RandomWalker(random(0, width), random(0, height), uniform(), drawCircleMarker, 'uniform'));
	walkers.push(new RandomWalker(random(0, width), random(0, height), perlin(), drawTriangleMarker, 'perlin'));
	walkers.push(new RandomWalker(random(0, width), random(0, height), gaussian(), drawSquareMarker, 'gaussian'));
	walkers.push(new RandomWalker(random(0, width), random(0, height), gaussian_perlin(), drawSquareMarker, 'gaussian + perlin'));
	return () => {
		clear();
		background(254, 253, 183);
		//---
		let v;
		for (let i = 0; i < walkers.length; i++) {
			walkers[i].update();
		}

		for (let i = 0; i < walkers.length; i++) {
			walkers[i].draw();
		}
	};
};

// ---
class RandomWalker {
	constructor(x, y, randomFunc, renderFunc, label) {
		this.x = x;
		this.y = y;
		this.label = label;
		this.random = randomFunc;
		this.render = renderFunc;
		this.log = [];
	}

	update() {
		this.x = constrain(this.x + this.random() * 2, 0, width);
		this.y = constrain(this.y + this.random() * 2, 0, height);
		this.log.push(createVector(this.x, this.y));
		if (this.log.length > 100) {
			this.log.shift();
		}
	}

	draw() {
		push();
		fill(0);
		noStroke();
		this.render(createVector(this.x, this.y), 8);
		drawLabel(
			this.x + ((this.x < width / 2) ? 8 : -8),
			this.y + 26,
			this.label,
			(this.x < width / 2) ? LEFT : RIGHT
		);
		noFill();
		stroke(0);
		beginShape();
		for (let i = 0; i < this.log.length; i++) {
			vertex(this.log[i].x, this.log[i].y);
		}
		endShape();
		stroke(0);
		line(this.x, 0, this.x, height);
		line(0, this.y, width, this.y);
		pop();
	}
}

// ---
function uniform() {
	return () => { return random(-1, 1); }
}

function perlin() {
	let i = 0, n = random(100);
	return () => {
		n += 0.01;
		i = (i + 1) % 2;
		return (noise(i + n) - 0.5) * 2;
	}
}

function gaussian() {
	return () => { return randomGaussian(0, 1); }
}

function gaussian_perlin() {
	let g = gaussian();
	let p = perlin();
	return () => { return (g() * 0.2 + p() * 0.8); }
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

function drawStartMarker(p, size) {
	beginShape();
	for (let i = 0; i < 5; i++) {
		let a0 = PI * 2 / 5 * i;
		let a1 = PI * 2 / 5 * (i + 0.5);
		vertex(p.x + sin(a0) * size * 1.5, p.y - cos(a0) * size * 1.5);
		vertex(p.x + sin(a1) * size * 0.5, p.y - cos(a1) * size * 0.5);
	}
	endShape(CLOSE);
}

// ---
canvasSketch(sketch, settings);
