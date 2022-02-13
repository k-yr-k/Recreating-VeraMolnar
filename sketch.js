// Recreating 'Lent mouvement bleu, orange, rouge et noir', 1955, by Vera Molnar
// Recreated by Kenny Kim

const width = 700;
const height = 700;

let radius = 58;
let len = 8;
let color;
let colors = [];

function setup() {
  createCanvas(width, height);

  colors = [
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#d31a22",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#e2592f",
    "#d31a22",
    "#9bd6ff",
    "#9bd6ff",
    "#e2592f",
    "#9bd6ff",
    "#9bd6ff",
    "#000000",
    "#000000",
    "#9bd6ff",
    "#9bd6ff",
    "#000000",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#000000",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#d31a22",
    "#e2592f",
    "#000000",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#000000",
    "#9bd6ff",
    "#e2592f",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#9bd6ff",
    "#d31a22",
    "#000000",
    "#000000",
    "#9bd6ff",
  ];
}

function draw() {
  background(255);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let x = i * 80;
      let y = j * 80;
      color = colors[i * len + j];

      fill(color);
      noStroke();
      ellipse(y + 65, x + 65, radius);
    }
  }

  // noLoop();
}

function mouseMoved(event) {
  shuffle(colors, true);
}
