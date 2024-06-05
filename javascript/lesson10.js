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
window.addEventListener("DOMContentLoaded", (e) => {

    const buttonEquel = document.querySelector("#eq");
    buttonEquel.addEventListener('click', (e)=>{
    e.target.classList.add("orange:active"); 
    const displayInput = this.value;
    document.querySelector('#display input').value = displayInput;
    })

    const buttonclean = document.querySelector("#C");
    buttonclean.addEventListener('click', (e)=>{
    e.target.classList.add("orange:active"); 
    buttonclean.value = 0;
    const displayInput = this.value;
    document.querySelector('#display input').value = displayInput;
    },
    function clearAll(){
    a="";
    b="";
    sign ="";
    equal=false;
    })

    const buttonBlackList = document.getElementsByClassName("button black");
Array.from(buttonBlackList).forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.target.classList.add('black:active');
    const displayInput = this.value;
    document.querySelector('#display input').value = displayInput;
    
  });
});

const buttonPink = document.getElementsByClassName("button pink");
Array.from(buttonPink).forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.target.classList.add(".pink:active");
        // const displayInput = this.value;
    // document.querySelector('#display input').value = displayInput;

})});
const buttonGray = document.getElementsByClassName("button gray");
Array.from(buttonGray).forEach(function(button) {
    button.addEventListener('click', function(e) {
            e.target.classList.add(".gray:active");
            const displayInput = this.value;
    document.querySelector('#display input').value = displayInput;
})});
})

let  a = '';
let b = '';
let sign = '';
let equal = '';

const out = document.querySelector('#display input');
out.textContent= '';
out.textContent = a;
out.addEventListener('click', function(e) {

})
    






