const display = document.getElementById('display');

let x;
let ops;

// Operations Lock
let opslock = (boolean) => {
  for (let j = 0; j < 4; j++)
    document.getElementsByTagName('button')[j].disabled = boolean;
}

// Number Input
let no = (number) => {
  display.value += number;
  if (ops == null) {
    opslock(false);
  }
}

// Operation Input
let op = (operation) => {
  if (display.value != '') {
    x = display.value; // storing first number
    display.value += operation;
    ops = operation;
    opslock(true);
  }
}

// Result
let result = () => {
  if (display.value != '') {
    if (ops == '+') {
      display.value = parseInt(x) + parseInt(display.value.replace(x + '+', ''));
    }
    else if (ops == '-') {
      display.value = parseInt(x) - parseInt(display.value.replace(x + '-', ''));
    }
    else if (ops == '×') {
      display.value = parseInt(x) * parseInt(display.value.replace(x + '×', ''));
    }
    else if (ops == '÷') {
      display.value = parseInt(x) / parseInt(display.value.replace(x + '÷', ''));
    }
    ops = null;
    opslock(false);
  }
}
