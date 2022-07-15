const display = document.getElementById('display');

const button = document.getElementsByTagName('button');

let x;
let ops = null;
// Operations Luck
let opslock = (boolean) => {
  for (let j = 0; j < 4; j++)
    button[j].disabled = boolean;
}

// Number Input
let no = (number) => {
  display.innerText += number;
}
// Operation Input

let op = (operation) => {
  x = display.textContent;
  display.innerText += operation;
  ops = operation;
  opslock(true);
}

button[7].addEventListener('click', () => {
  if (ops == null) {
    display.innerText = display.innerText;
  }
  else if (display.innerText != '') {
    switch (ops) {
      case '+':
        display.innerText = parseInt(x) + parseInt(display.textContent.replace(x + '+', ''));
        break;
      case '-':
        display.innerText = parseInt(x) - parseInt(display.textContent.replace(x + '-', ''));
        break;
      case '×':
        display.innerText = parseInt(x) * parseInt(display.textContent.replace(x + '×', ''));
        break;
      case '÷':
        display.innerText = parseInt(x) / parseInt(display.textContent.replace(x + '÷', ''));

    }
    ops = null;
  }
  opslock(false);
});

button[11].addEventListener('click', () => {
  display.innerText = null;
  x = 0;
  opslock(false);
});