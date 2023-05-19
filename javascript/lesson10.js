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

    let a = '';
    let b = '';
    let sign = '';
    let equal = '';

    const buttonBlack = document.getElementsByClassName("button black");
    // buttonBlack.value= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const buttonPink = document.getElementsByClassName("button pink");
    // buttonPink.value = '/, *, -,+';
    const buttonGray = document.getElementsByClassName("button gray");
    const display = document.querySelector("#display-input");
    const buttonEquel = document.querySelector("#eq");

    buttonEquel.addEventListener('click', (e)=>{
    if (e.target.contains='.button.orange') 
        e.target.classList.add(".orange:active"); 
    })
       
        

    
for (let i = 0; i < buttonBlack.length; i++) {
    buttonBlack[i].addEventListener("click", function(e) {     
        if (e.target.contains='.button.black') {
            e.target.classList.add(".black:active");
        }else if (e.target.value = display.innerHTML);})
}
for (let i = 0; i < buttonPink.length; i++) {
    buttonPink[i].addEventListener("click", function(e) {     
        if (e.target.contains='.button.pink') {
            e.target.classList.add(".pink:active");
        }})
}
for (let i = 0; i < buttonGray.length; i++) {
    buttonGray[i].addEventListener("click", function(e) {     
        if (e.target.contains='.button.gray') {
            e.target.classList.add(".gray:active");
        }})
}
});

