const display = document.getElementById('display');

const button = document.getElementsByTagName('button');

let x;
let ops = null;

let opslockfx = (a, b, c) => {
  button[a].disabled =
  button[b].disabled =
  button[c].disabled =
    true;
}



button[0].addEventListener('click', () => {
  x = display.textContent;
  display.innerText += '+';
  ops = '+';
  opslockfx(1, 2, 3);
});
button[1].addEventListener('click', () => {
  x = display.textContent;
  display.innerText += '-';
  ops = '-';
  opslockfx(0, 2, 3);
});
button[2].addEventListener('click', () => {
  x = display.textContent;
  display.innerText += '×';
  ops = '*';
  opslockfx(0, 1, 3);
});
button[3].addEventListener('click', () => {
  x = display.textContent;
  display.innerText += '÷';
  ops = '/';
  opslockfx(0, 1, 2);
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
  for (let i = 0; i < 4; i++) {
    button[i].removeAttribute('disabled');
  }
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