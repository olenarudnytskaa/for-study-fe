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
        // case 'm+':
            // return saveButton+out.value;
        // case 'm-':
            // return saveButton+out.value;
    }
  }

  const buttonsMemory = document.getElementsByClassName('keys');
  Array.from(buttons).forEach(function(button) {
  button.addEventListener('click', (e)=>{
const key = e.target.value;
key.value = 'mrs';
key.textContent = 'mrs';
key.value = 'm+';
key.value = 'm-';
const saveButton = out.value;
out.value + saveButton
if (save.includes(key)) {
saveButton;
 }
 
else if (key === 'm+') {
     saveButton + out.value
    //  out.value = result;
    finish = true
    // out.value + save;
    // b += save;
    // out.value + save;
    // finish += save;
    // out.value + save;
 }
else if (key === 'm-') {
    saveButton - out.value;
    finish = true
  }})})
 