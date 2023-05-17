// В папке calculator дана верстка макета калькулятора. 
// Необходимо сделать этот калькулятор рабочим.<br>
// При клике на клавиши с цифрами - набор 
// введенных цифр должен быть показан на табло 
// калькулятора.<br>
// При клике на знаки операторов 
// (`*`, `/`, `+`, `-`) на табло ничего не происходит
//  - программа ждет введения
// второго числа для выполнения операции.<br>
// Если пользователь ввел одно число, 
// выбрал оператор, и ввел второе число, 
// то при нажатии как кнопки `=`,
// так и любого из операторов, 
// в табло должен появиться результат выполенния
//  предыдущего выражения.<br>
// При нажатии клавиш `M+` или `M-` в левой части
//  табло необходимо показать маленькую букву 
// `m` - это значит,
// что в памяти хранится число. Нажатие на
//  `MRC` покажет число из памяти на экране. 
// Повторное нажатие `MRC`
// должно очищать память.
window.addEventListener("DOMContentLoaded", () => {
const buttonBlack = document.getElementsByClassName('button black');
const keys = document.getElementsByClassName('keys')
const display = document.getElementsByClassName('display');
const result =  document.querySelector('#eq');

const myFunc = function(event) {
    if(event.target.tagName === "button black") { 
      event.target.style.color = "black:active"
    }
};
})



