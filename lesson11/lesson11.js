4.
// - При завантаженні сторінки показати користувачеві 
// поле введення (`input`) з написом `Price`. 
// Це поле буде служити для введення числових значень
// - Поведінка поля має бути такою:
// - При фокусі на полі введення – у нього має
//  з'явитися рамка зеленого кольору. При втраті 
// фокусу вона пропадає.
// - Коли забрали фокус з поля - його значення 
// зчитується, над полем створюється `span`, 
// в якому має бути виведений текст: 
// . 
// Поруч із ним має бути кнопка з хрестиком (`X`).
//  Значення всередині поля введення фарбується зеленим.
// - При натисканні на `Х` - `span` з текстом та 
// кнопка `X` повинні бути видалені.
// - Якщо користувач ввів число менше 0 - при втраті 
// фокусу підсвічувати поле введення червоною рамкою, 
// під полем виводити фразу - `Please enter correct price`. 
// `span` зі значенням при цьому не створюється.
// */


 window.addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector('#price');
   
    
    const span = document.querySelector("span")

    const mouse = (e) => {
            e.target.classList.add("price");  
        }
    
    input.addEventListener("mouseover", e => mouse(e, {}))
    input.addEventListener("mouseover", e  =>{
    input.focus()
    });
    input.onkeypress= function(e){
        let inputVal= document.querySelector('#price').value;
        const pattern = /\d+$/;
        const paragraf = document.querySelector('p')
        if (!pattern.test(inputVal)) {
            this.classList.remove("price");
            this.classList.add("error");
            paragraf.style.display = "block";
        }
        else {
            (pattern.test(inputVal))
            this.classList.remove("error");
            this.classList.add("right");
            paragraf.style.display = "none";
         }
        }

    input.onmouseout = function () {
        this.classList.remove("right")
        let inputVal= document.querySelector('#price').value;
        const pattern = /\d+$/;
        if (!pattern.test(inputVal)) {
            this.classList.remove("price");
            this.classList.add(".error");
           
        } else {
            (pattern.test(inputVal))
                this.classList.add("right");
        document.querySelector("span").classList.add("show")
        const value = document.querySelector('#price').value;
        document.querySelector("span").textContent = value;
        input.blur();
    };
}
    
    

    const mouseDown = document.querySelector('button');
    mouseDown.addEventListener("mousedown", e => mouse(e, {}))
mouseDown.onmousedown = function () {
        span.remove()
        mouseDown.remove()
        
    }

 })
