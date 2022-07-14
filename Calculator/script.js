const display = document.getElementById('display');

const button = document.getElementsByTagName('button');

let x;
let ops = null;

let opslock = (boolean) => {
  for(let j = 0;j<4;j++)
  button[j].disabled = boolean;
}



button[0].addEventListener('click', () => {
  x = display.textContent;
  display.innerText += '+';
  ops = '+';
  opslock(true);
});
button[1].addEventListener('click', () => {
  x = display.textContent;
  display.innerText += '-';
  ops = '-';
  opslock(true);
});
button[2].addEventListener('click', () => {
  x = display.textContent;
  display.innerText += '×';
  ops = '*';
  opslock(true);
});
button[3].addEventListener('click', () => {
  x = display.textContent;
  display.innerText += '÷';
  ops = '/';
  opslock(true);
});
button[4].addEventListener('click', () => {
  display.innerText += 1;
});
button[5].addEventListener('click', () => {
  display.innerText += 2;
});
button[6].addEventListener('click', () => {
  display.innerText += 3;
});
button[7].addEventListener('click', () => {
  if (ops == null) {
    display.innerText = display.innerText;
  }
  else if (display.innerText != '') {

    if (ops == '+') {
      display.innerText = parseInt(x) + parseInt(display.textContent.replace(x + '+', ''));
    }
    else if (ops == '-') {
      display.innerText = parseInt(x) - parseInt(display.textContent.replace(x + '-', ''));
    }
    else if (ops == '*') {
      display.innerText = parseInt(x) * parseInt(display.textContent.replace(x + '×', ''));
    }
    else if (ops == '/') {
      display.innerText = parseInt(x) / parseInt(display.textContent.replace(x + '÷', ''));
    }
    ops = null;
  }
  opslock(false);
});
button[8].addEventListener('click', () => {
  display.innerText += 4;
});
button[9].addEventListener('click', () => {
  display.innerText += 5;
});
button[10].addEventListener('click', () => {
  display.innerText += 6;
});
button[11].addEventListener('click', () => {
  display.innerText = null;
  x = 0;
  y = 0;
});
button[12].addEventListener('click', () => {
  display.innerText += 7;
});
button[13].addEventListener('click', () => {
  display.innerText += 8;
});
button[14].addEventListener('click', () => {
  display.innerText += 9;
});
button[15].addEventListener('click', () => {
  display.innerText += 0;
});
