// Створіть сайт з коментарями. Коментарі тут : https://jsonplaceholder.typicode.com/
    // Сайт має виглядати так : https://kondrashov.online/images/screens/120.png
    // На сторінку виводити по 10 коментарів, у низу сторінки зробити поле
    //  пагінації (перемикання сторінок) при перемиканні
    // сторінок показувати нові коментарі. 
    // з коментарів виводити : 
    // "id": 1,
    // "name"
    // "email"
    // "body":
   function rec (method = "GET", url ="", callback){
    const com = new XMLHttpRequest;

    com.open(method, url);
    com.send();
    com.addEventListener("readystatechange", () => {
        if(com.readyState = 4 && com.status >= 200 && com.status < 300){
            if (com.responseText) {
            callback(JSON.parse(com.responseText));
        } else if(readyState === 4){
            console.error('error')
        }
    }
})
}
 const show = (data = []) => {
    const body = document.querySelector('#output')
    data.forEach((el, i) =>{
const message =  `
 <div class="main">  
    <div class="column">
          <div class="id">${el.id}</div>
         <div class="name">${el.name}</div>
         <div>${el.email}</div>
         <p>${el.body}</p>
 </div></div>
 `
 body.insertAdjacentHTML("beforeend", message[0])
      });

    const array = data; 
    const parts = 50;
    const arrayLength = array.length;
    const partSize = Math.ceil(arrayLength / parts);
    const dividedArray = [];
    
    for (let i = 0; i < arrayLength; i += partSize) {
      const part = array.slice(i, i + partSize);
      dividedArray.push(part);
    }
    console.log(dividedArray);
    
   

    const divided = dividedArray;

const outputContainer = document.querySelector("#output"); 

const show = (data = []) => {
  outputContainer.textContent = ""; 

 data.forEach((el) => {
    const message = `
    <div class="main">
        <div class="column">
        <div class="id">${el.id}</div>
        <div class="name">${el.name}</div>
        <div>${el.email}</div>
        <p>${el.body}</p>
        </div>
    </div>
    `;

    outputContainer.insertAdjacentHTML("beforeend", message);
  });
 }



divided.forEach((part, index) => {
  const button = document.createElement("button");
  button.textContent = ` ${index + 1}`;

  button.addEventListener("click", () => {
    const elementsToShow = part.slice(0, 50);

    show(elementsToShow); 
  });

  document.getElementsByClassName("pagination")[0].appendChild(button);
});

}

rec("GET", "https://jsonplaceholder.typicode.com/comments", show)