const souse = document.querySelectorAll(".draggable");
const selectedValues = Array.from(souse).map(function(element) {

element.addEventListener("dragstart",  function(evt)  {
    selectedValues.style.border = "3px dotted #000"; 
    evt.dataTransfer.effectAllowed ="move";
    evt.dataTransfer.setData("text/plain", "sauceClassic");
}, false);

element.addEventListener("dragend", function (evt) {
    selectedValues.style.border = ""; 
}, false);

element.addEventListener("dragend", function (evt) {
   
    const name = document.querySelector('#ketch').textContent;
    document.querySelector('#sauce').innerHTML += "<br>" + name;
});

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

    if (draggedImageSrc === "sauceClassic") {
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

  newImage.style.left = Math.max(0, offsetX - imageWidth / 2) + "px";
  newImage.style.top = Math.max(0, offsetY - imageHeight / 2) + "px";

this.appendChild( newImage);

    return false
 }}, false);})