// init canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('start');
const upBtn = document.getElementById('up');
const downBtn = document.getElementById('down');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// snake
let s = 10; // snake size
let x = 10; // x co-ordinate
let a = 15; // x mover
let y = 10; // y co-ordinate
let b = 15; // y movwr

ctx.fillStyle = 'green';

let j;
let i;

//horizontal snake

function hs() {
  j = 0;
  for (i = 0; i < 3; i++) {
    ctx.fillRect(x + (i * a), y + (j * b), s, s);
  }
}

//vertical snake

function vs() {
  i = 0;
  for (j = 0; j < 3; j++) {
    ctx.fillRect(x + (i * a), y + (j * b), s, s);
  }
}

function draw() {
  ctx.clearRect(0, 0, 300, 300);
}

function moveUp() {
  draw();
  vs();
  y -= 10;
}

function moveLeft() {
  draw();
  hs();
  x -= 10;
}

function moveRight() {
  draw();
  hs();
  x += 10;
}

function moveDown() {
  draw();
  vs();
  y += 10
}



upBtn.addEventListener('click', () => {

  setInterval(moveUp, 500);
});
leftBtn.addEventListener('click', () => {

  setInterval(moveLeft, 500);
});
rightBtn.addEventListener('click', () => {

  setInterval(moveRight, 500);
});
downBtn.addEventListener('click', () => {

  setInterval(moveDown, 500);
});
