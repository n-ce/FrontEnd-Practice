// init canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function rndNo(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// snake
let s = 10; // snake size
let x = rndNo(2, 28) * 10; // x co-ordinate
let a = 0; // x mover
let y = rndNo(2, 28) * 10; // y co-ordinate
let b = 0; // y movwr
let k = 3; // length of tail
let l = 10; // distance between tails
rndNo(1, 2) == 1 ? a = l : b = l;

let z = rndNo(1, 29) * l;
let w = rndNo(1, 29) * l;
let score = 0;
function draw() {
  if (x == z && y == w) {
    z = rndNo(1, 29) * l;
    w = rndNo(1, 29) * l;
    score+=10;
  }
  ctx.fillStyle='#FC0B';
  ctx.fillRect(220,0,80,20);
  ctx.fillStyle='black';
  ctx.font = "900 15px Arial";
  ctx.fillText("SCORE "+score, 220, 15);
  //head
  ctx.fillStyle = 'green';
  ctx.fillRect(x + a, y + b, s, s);
  ctx.fillStyle = 'red';
  ctx.fillRect(z, w, s, s);


  if (x == 0 || x == 300 || y == 0 || y == 300) {
    alert('game has ended');
    location.reload();
  }
}
setInterval(function() {
  ctx.clearRect(0, 0, 300, 300);
  draw();
  x += a;
  y += b;

}, 400);

let move = (p1, p2, p3) => {
  if (b !== p1) {
    b = p2;
    a = p3;
  }
}

// apple
