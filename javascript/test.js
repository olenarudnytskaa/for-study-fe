// window.addEventListener("DOMContentLoaded", (e) => {



const souse = document.querySelector("#souse");

souse.addEventListener("dragstart",  function(evt)  {
    souse.style.border = "3px dotted #000"; 
    evt.dataTransfer.effectAllowed ="move";
    evt.dataTransfer.setData(("text/plain", souse.querySelector("img").getAttribute("src")),pizza.querySelector("img") );

}, false);


souse.addEventListener("dragend", function (evt) {
    souse.style.border = ""; 
}, false);


const pizza = document.getElementById("pizza");
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

  const newImage = document.createElement("img");
  newImage.src = "sous-klassicheskij_1557758736353.png";
  newImage.alt = "Dropped Image";
  newImage.style.position = "absolute";
  newImage.style.top = evt.clientY - this.offsetTop;
  newImage.style.left = evt.clientX - this.offsetLeft;
  
  


  const offsetX = evt.clientX - this.offsetLeft;
  const offsetY = evt.clientY - this.offsetTop;
  const imageWidth = newImage.width;
  const imageHeight = newImage.height;

  newImage.style.left = Math.max(10, offsetX - imageWidth / 2) + "px";
  newImage.style.top = Math.max(66, offsetY - imageHeight / 2) + "px";


    this.appendChild( newImage);

    return false;
}, false);

 