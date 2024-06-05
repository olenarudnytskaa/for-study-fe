let a = '';
let b = '';
let sign = '';
let memory = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','.'];
const action = ['-', '+', '*', '/'];
const save = ['mrs', 'm+', 'm-'];

const out = document.querySelector('#display >input');

function clearAll(){
    a="";
    b="";
    sign ="";
    equal=false;
    memory ="";
    out.value = 0;
    };
    document.querySelector('#C').onclick = clearAll;

    const buttons = document.getElementsByClassName('keys');
        Array.from(buttons).forEach(function(button) {
        button.addEventListener('click', (e)=>{
       

const key = e.target.value;
if (digit.includes(key)) {
    if (finish) {
      a = key;
      out.value = a;
      finish = false;
    } else {
      a += key;
      out.value = a;
    }
  } else if (action.includes(key)) {
    if (a !== '') {
      sign = key;
      b = a;
      a = '';
    }
} else if (key === '=') {
    if (a !== '' && b !== '' && sign !== '') {
      const result = calculate(parseFloat(b), parseFloat(a), sign);
      out.value = result;
      a = result.toString();
      b = '';
      sign = '';
      finish = true;
    }
}else if (key === 'C') {
    clearAll();
  }})
})


function calculate(a, b, sign,) {
    switch (sign) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return '';

    }
  };



let memoryValue = null; 

const mrcButton = document.querySelector('#mrc');
mrcButton.addEventListener('click', (e) => {
  if (memoryValue === null) {
    memoryValue = parseFloat(out.value); 
    out.value = "mrc" + out.value; 
  } else {
    memoryValue = null; 
    out.value = ""; 
  }
});

const mplusButton = document.querySelector('#mplus');
mplusButton.addEventListener('click', (e) => {
  const currentValue = parseFloat(out.value);
  if (!isNaN(currentValue) && memoryValue !== null) {
    const result = memoryValue + currentValue;
    out.value = result.toString();
  }
});

const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', (e) => {
  const currentValue = parseFloat(out.value);
  if (!isNaN(currentValue) && memoryValue !== null) {
    const result = currentValue - memoryValue;
    out.value = result.toString();
  }
});
