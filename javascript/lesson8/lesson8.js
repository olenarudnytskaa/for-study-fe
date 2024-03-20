// /* <Створіть 2 інпути та одну кнопку.
//  Зробіть так, щоб інпути обмінювалися вмістом. */}
// Створіть 5 див на сторінці потім використовуючи getElementsByTagName і forEath поміняйте дивам колір тла.

// Створіть багаторядкове поле для введення тексту та кнопки. Після натискання кнопки користувачем програма повинна
    // згенерувати тег div з текстом, який був у багаторядковому полі. багаторядкове поле слід очистити після
    // переміщення інформації

    // Створіть картинку та кнопку з назвою "Змінити картинку"
    // зробіть так щоб при завантаженні сторінки була картинка
    // https://itproger.com/img/courses/1476977240.jpg
    // При натисканні на кнопку вперше картинка замінилася на
    // https://itproger.com/img/courses/1476977488.jpg
    // при другому натисканні щоб картинка замінилася на
    // https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png

    // Створює на сторінці 10 парахрафів і зробіть так, щоб при натисканні на параграф він зникав


// * <li>Попрацювати з файлом 08 */}

    
const [...div] = document.getElementsByTagName("div");
div.forEach((element) => {
element.style.color = "red"
});

function getuserText(){
    const userText = document.getElementById("userText").value;
    document.body.append(userText);
}

function cleanuserText(){
    const userText = document.getElementById("userText").value ="";
    document.body.append(userText);
}


const buttonn = document.createElement('button' );
buttonn.type = 'text';
document.body.append(buttonn);



let image = document.querySelector('#img');
let images = [
    'https://itproger.com/img/courses/1476977240.jpg',
    'https://itproger.com/img/courses/1476977488.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
  ];
  let index = 0;
  function changePictures() {
    index = (index + 1) % images.length; 
    image.src = images[index]; 
  }
   
const paragraph = document.querySelector("p");
 onclick = function() {
    document.querySelector('p').hidden = true;
 }

const  inputtext = document.querySelector ('#input1');
const  InputText = document.querySelector ('#input2');
function changeInput(){
    let buffer = input1.value;
	input1.value = input2.value;
	input2.value= buffer;
    } 
    
    
function check(){
    let button = document.querySelectorAll('#list');
console.log(button)
}
check();


function selectFirstChild(){
    const ul = document.querySelector('#list');
    ul.firstElementChild.style.color = "red";
    }

function selectLastChild(){
    const ul = document.querySelector('#list');
    ul.lastElementChild.style.color = "red";
    }

    let counter = 0;
    let selectedElement = null;
    
function selectNextNode() {
    const lis = document.querySelectorAll('li');
    
    if (selectedElement) {
        selectedElement.style.color = "black";
    }
    selectedElement = lis[counter % lis.length];
    selectedElement.style.color = "red";
    counter++;
    }
 
    


function Check(){
    const liElements = document.querySelectorAll('li');
    liElements.forEach(function(li) {
      if (li.nextElementSibling) {
        console.log("Next", li);
      } else {
        console.log("No next", li);
      }
    });
  }
  Check();

function selectPrevNode(){
    const lis = document.querySelectorAll('li');
    
    if (selectedElement) {
        selectedElement.style.color = "black";
    }
    counter = (counter - 1 + lis.length) % lis.length;
    selectedElement = lis[counter];
    selectedElement.style.color = "red"
    }

function createNewChild(){
    const li = document.createElement('li');
    li.innerHTML = "List Item 6"; 
    list.append(li);
}

function removeLastChild(){
    const ul = document.querySelector('#list');
    ul.lastElementChild.remove(ul);
    }

function createNewChildAtStart(){
    const li = document.createElement('li');
    li.innerHTML = "List Item 0"; 
    list.prepend(li);
    }

  

   