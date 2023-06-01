window.addEventListener("DOMContentLoaded", () => {

           
const souse = document.querySelector("#sauceClassic");

souse.addEventListener("dragstart",  function(evt)  {
    souse.style.border = "3px dotted #000"; 
    evt.dataTransfer.effectAllowed ="move";
    // сonst imageSrc = sauce.querySelector("img");
    // evt.dataTransfer.setData("text/plain", imageSrc);
}, false);


souse.addEventListener("dragend", function (evt) {
    souse.style.border = ""; 
}, false);


const pizza = document.querySelector("#cake");
pizza.addEventListener("dragenter", function (evt) {
    pizza.style.border = "3px solid red";
}, false);

pizza.addEventListener("dragleave", function (evt) {
    pizza.style.border = "";
}, false);

pizza.addEventListener("dragover", function (evt) {
    
    if (evt.preventDefault) evt.preventDefault();
    return false;
}, false);

pizza.addEventListener("drop", function (evt) {

    
    if (evt.preventDefault) evt.preventDefault();
    if (evt.stopPropagation) evt.stopPropagation();

    pizza.style.border = "";
    const draggedImageSrc = evt.dataTransfer.getData("text/plain");

  const newImage = document.createElement("div");
  newImage.src = "sous-klassicheskij_1557758736353.png";
  newImage.alt = "Dropped Image";
  newImage.style.position = "absolute";
  newImage.style.top = evt.clientY - this.offsetTop;
  newImage.style.left = evt.clientX - this.offsetLeft;
  
  


  const offsetX = evt.clientX - this.offsetLeft;
  const offsetY = evt.clientY - this.offsetTop;
  const imageWidth = newImage.width;
  const imageHeight = newImage.height;

  newImage.style.left = Math.max(0, offsetX - imageWidth / 2) + "px";
  newImage.style.top = Math.max(0, offsetY - imageHeight / 2) + "px";


    this.appendChild( newImage);

    return false;
}, false);







    const inputName = document.getElementById('name');
    inputName.addEventListener('keypress', (e) => {
        const valuename = inputName.value;
            const pattern = /([A-Z-a-z])/;
            if (!pattern.test(valuename)) {
                inputName.classList.add("mistake");
                inputName.classList.remove("succesfully");
            } else  {
                (pattern.test(valuename))
                inputName.classList.add("succesfully");
                inputName.classList.remove("mistake");
            }
        })
    

    const inputPhone = document.getElementById('phone');
    inputPhone.addEventListener('keypress', (e) => {
        const valuephone = inputPhone.value;
            const patternN = /\+380\d{9}$/;
            if (!patternN.test(valuephone)) {
                inputPhone.classList.add("mistake");
                inputPhone.classList.remove("succesfully");
            } else {
                (patternN.test(valuephone))
                inputPhone.classList.add("succesfully");
                inputPhone.classList.remove("mistake");
            }})
        ;

        const inputmail = document.getElementById('mail');
        inputmail.addEventListener('keypress', (e) => {
            const value = inputmail.value;
                const pattern = /\w+\@\w+\./;
                if (!pattern.test(value)) {
                    inputmail.classList.add("mistake");
                    inputmail.classList.remove("succesfully");
                } else {
                    (pattern.test(value))
                    inputmail.classList.add("succesfully");
                    inputmail.classList.remove("mistake");
                }})
            
     const btnSubmit = document.getElementById('btnSubmit');
     btnSubmit.addEventListener('mousedown', (e) => {
        window.location.replace('lesson12.1.html');
     });
})
