// init canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('start');
const upBtn = document.getElementById('up');
const downBtn = document.getElementById('down');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

ctx.fillStyle = 'red';

let c = 10;
let d = 10;
let e = 10;
let f = 10;
let direction;
// navigation
let nav = (x) => {
  ctx.clearRect(c, d, e, e);
  switch (x) {
    case 'up':
      d -= f;
      break;
    case 'down':
      d += f;
      break;
    case 'left':
      c -= f;
      break;
    case 'right':
      c += f;
  }

  ctx.fillRect(c, d, e, e);
}

let restart = () => {
  ctx.clearRect(0, 0, 300, 300);
  c = 10;
  d = 10;
  ctx.fillRect(c, d, e, e);
}
restart();
startBtn.addEventListener('click', () => {
  restart();
})
upBtn.addEventListener('click', () => {
  nav('up');
})
downBtn.addEventListener('click', () => {
  nav('down');
})
leftBtn.addEventListener('click', () => {
  nav('left');
})
rightBtn.addEventListener('click', () => {
  nav('right');
})

const img = document.querySelector('img');
img.onload = () => {
  ctx.drawImage(img, 250, 250,20,20);
}
/*
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

