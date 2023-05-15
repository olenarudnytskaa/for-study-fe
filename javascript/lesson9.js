
// Створіть на сторінці div і дайте йому 
// зовнішній відступ 150 пікселів. 
// Використовуючи JS виведіть у консоль відступ
        
//  Створіть програму секундомір.
// * Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"<br>
// * При натисканні на кнопку стоп фон секундоміра має бути
//  червоним, старт - зелений, скидання - сірий
// * Виведення лічильників у форматі ЧЧ:ММ:СС
 // * Реалізуйте Завдання використовуючи 
// синтаксис ES6 та стрілочні функції
        
// Реалізуйте програму перевірки телефону<br>
// * Використовуючи JS Створіть поле для введення 
// телефону та кнопку збереження<br>
// * Користувач повинен ввести номер телефону у 
// форматі 0(Початок з 0)ХХ-ХХХ-ХХ-ХХ <br>
// * Після того як користувач натискає кнопку
//  зберегти перевірте правильність введення номера, якщо номер
// правильний
// зробіть зелене тло і використовуючи 
// document.location переведіть через 3с користувача 
// на сторінку
// https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg/
//  якщо буде помилка, відобразіть її в діві до input.

// Слайдер 
// Створіть слайдер кожні 3 сек змінюватиме зображення <br>
// Зображення для відображення<br>
// https://new-science.ru/wp-content/uploads/2020/03/4848-4.jpg<br>
// https://universetoday.ru/wp-content/uploads/2018/10/Mercury.jpg<br>
// https://naukatv.ru/upload/files/shutterstock_418733752.jpg<br>
// https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2018-12/20180913_zaa_p138_057.jpg<br>
// https://nnst1.gismeteo.ru/images/2020/07/shutterstock_1450308851-640x360.jpg

const div = document.querySelector('#div');
div.style.margin = '150px'; 
console.log(div);


// const buttonStart = document.querySelector('#start');
// buttonStart.onclick = ()=>{
    // const hours = document.querySelector('#hours');
    // hours.classList.add("green");
    // const minutes = document.querySelector('#minutes');
    // minutes.classList.add("green");
    // const seconds = document.querySelector('#seconds');
    // seconds.classList.add("green");
// };


// const buttonStop = document.querySelector('#stop');
// buttonStop.onclick = ()=>{
    // const hours = document.querySelector('#hours');
    // hours.classList.add("red");
    // const minutes = document.querySelector('#minutes');
    // minutes.classList.add("red");
    // const seconds = document.querySelector('#seconds');
    // seconds.classList.add("red");
// }

const buttonReset = document.querySelector('#reset');
buttonReset.onclick = ()=>{
    const hours = document.querySelector('#hours');
    hours.classList.add("silver");
    const minutes = document.querySelector('#minutes');
    minutes.classList.add("silver");
    const seconds = document.querySelector('#seconds');
    seconds.classList.add("silver");
}


let counter = 0, intervalHandler;

const get = id => document.getElementById('#start');


function $ (selector) {
    return document.querySelector(selector);
}
const coount = () => {
    $("#seconds").innerHTML = + counter;
    counter++; 
    $("#seconds").classList.add("green");
    $("#minutes").classList.add("green");
    $("#hours").classList.add("green");
}

$("#start").onclick = () => {
    intervalHandler = setInterval(coount, 1000);
}


$("#stop").onclick = () => {
    clearInterval(intervalHandler);
    $("#seconds").classList.remove("green");
    $("#seconds").classList.add("red");
    $("#minutes").classList.remove("green");
    $("#minutes").classList.add("red");
    $("#hours").classList.remove("green");
    $("#hours").classList.add("red");
}



$("#reset").onclick = () => {
  clearInterval(intervalHandler); 
  $("#seconds").innerHTML = counter=0;
  $("#seconds").classList.remove("green","red");
  $("#seconds").classList.add("silver");
  $("#hours").classList.remove("green","red");
  $("#hours").classList.add("silver");
  $("#minutes").classList.remove("green","red");
  $("#minutes").classList.add("silver");
}



let counterminutes = 0;
const Count= () => {
  counterminutes++;
  document.querySelector('#minutes').textContent=counterminutes;
  if (counterminutes === 60) {
    clearInterval(intervalId);
}
}
setInterval(Count,60000)

let counterhours = 0;
const counters = () => {
  counters++;
  document.querySelector('#minutes').textContent=counterhours;
  if (counterhours === 24) {
    clearInterval(intervalId);
}
}
setInterval(counters,3600000)



const numberInput = document.createElement('input');
numberInput.innerText = '';
numberInput.id = 'number';
numberInput.placeholder = '(0ХХ)ХХХ ХХ ХХ'
document.body.append(numberInput);



const saveButton = document.createElement('button');
saveButton.innerHTML = 'save';
saveButton.id = 'button';
document.body.append(saveButton);


saveButton.onclick = function (){
    const pattern = /^\d+$/;
    let number = document.querySelector('#number').value;
    const valid = pattern.test(number);
    if (valid) output = numberInput.style.background = "green";
    else output = document.location = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg/' ;
    setTimeout(output, 4000);
document.querySelector('#button').innerHTML = output;
return valid;
}





let slideIndex = 0;
const slider = document.querySelector('.pictures');
const slides = slider.getElementsByTagName('img');

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000);
}
showSlides();


