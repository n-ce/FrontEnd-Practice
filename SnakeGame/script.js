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
let k = 0; // length of tail
let l = 10; // distance between tails
rndNo(1, 2) == 1 ? a = l : b = l;

let z = rndNo(1, 29) * l;
let w = rndNo(1, 29) * l;
let score = 0;
let tail = [];

let m = 0; // array storing

function draw() {
  // scoreboard
  ctx.fillStyle = '#FC0B';
  ctx.fillRect(220, 0, 80, 20);

  // scoretext
  ctx.fillStyle = 'black';
  ctx.font = "900 15px Arial";
  ctx.fillText("SCORE " + score, 220, 15);

  // snake head
  ctx.fillStyle = 'green';
  ctx.fillRect(x + a, y + b, s, s);

  // apple
  ctx.fillStyle = 'red';
  ctx.fillRect(z, w, s, s);
}

let drawps = () => {
  ctx.clearRect(0, 0, 300, 300);
  if (x == z && y == w) {
    z = rndNo(1, 29) * l;
    w = rndNo(1, 29) * l;
    score += 10;
    k++;
  }
  if (x == -10 || x == 300 || y == -10 || y == 300) {
    clearInterval(interval);
    if (confirm('The Game has ended.\nDo you want to restart?') == true) {
      location.reload();
    }
  }
  tail.push([x, y]);
  ctx.fillStyle = 'green';
  for (let i = 0; i < k; i++) {
    ctx.fillRect(tail[m - i][0], tail[m - i][1], s, s);
  }
  m++;
  draw();
  x += a;
  y += b;

}



let speed = prompt('Enter Speed between 1(fastest) to 1000(slowest)\ndefault:300');
if (speed == null) { speed = 300 }


const interval = setInterval(() => {
  drawps();
}, speed);

let play = false;
let pause = () => {
  if (play == false) {
    clearInterval(interval);
    play = true;
  }
  else {
    const interval2 = setInterval(() => {
      drawps();
    }, 300);
  }
}


// direction changer
let move = (p1, p2, p3) => {
  if (b !== p1) {
    b = p2;
    a = p3;
  }
}