// window.addEventListener("DOMContentLoaded", () => {

// const cake = document.querySelector('#cake')
const plateS = document.querySelector('#small');
const parentElement = document.querySelector('#price'); 
const souses = document.querySelector('#sauce')
const topping = document.querySelector('#topping')

plateS.addEventListener('click', function(e) { 
  const cake = document.querySelector('#cake')
  parentElement.innerHTML = '';
 souses.innerHTML = ''
 topping.innerHTML = ''
const image = "klassicheskij-bortik_1556622914630.png"
cake.insertAdjacentHTML('beforeend',`<img src="${image}" alt="Cake Image">`)
  const position = 'beforeend'; 
  const htmlString = '<div>50</div>'; 
  parentElement.insertAdjacentHTML(position, htmlString);
 
});

const plateM = document.querySelector('#mid');
plateM.addEventListener('click', function(e) {
  const cake = document.querySelector('#cake')
  const image = "klassicheskij-bortik_1556622914630.png"
cake.insertAdjacentHTML('beforeend',`<img src="${image}" alt="Cake Image">`)
  parentElement.innerHTML = ''; 
  souses.innerHTML = ''
  topping.innerHTML = ''
  // cake.innerHTML = ''
  const position = 'beforeend'; 
  const htmlString = '<div>60</div>'; 
  parentElement.insertAdjacentHTML(position, htmlString);
});

const plateL = document.querySelector('#big');
plateL.addEventListener('click', function(e) {
  const cake = document.querySelector('#cake')
  const image = "klassicheskij-bortik_1556622914630.png"
  cake.insertAdjacentHTML('beforeend',`<img src="${image}" alt="Cake Image">`)
  parentElement.innerHTML = ''; 
  souses.innerHTML = ''
 topping.innerHTML = ''
  const position = 'beforeend'; 
  const htmlString = '<div>80</div>'; 
  parentElement.insertAdjacentHTML(position, htmlString);
});

    

const souse = document.querySelector("#sauceClassic");

souse.addEventListener("dragstart",  function(evt)  {
    souse.style.border = "3px dotted #000"; 
    evt.dataTransfer.effectAllowed ="move";
    evt.dataTransfer.setData("text/plain", "sauceClassic");
}, false);

souse.addEventListener("dragend", function (evt) {
    souse.style.border = ""; 
}, false);

souse.addEventListener("dragend", function (evt) {
   
    const name = document.querySelector('#ketch').textContent;
    document.querySelector('#sauce').innerHTML += "<br>" + name;
    const b =  parseInt(name.replace(/\D/g, ''));
    function calculateTotal() {
        const priceElements = document.querySelectorAll('#price');
        let total = b;
       
        priceElements.forEach(function (element) {
            const value = parseInt(element.textContent);
            if (!isNaN(value)) {
              total += value;
            }
          });
        return total;
      }
      
      const total = calculateTotal();
      document.querySelector('#price').innerHTML = total;
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
 }}, false);
 ;


const sauceBBQ = document.querySelector("#sauceBBQ");

sauceBBQ.addEventListener("dragstart",  function(evt)  {
    sauceBBQ.style.border = "3px dotted #000"; 
    evt.dataTransfer.effectAllowed ="move";
    evt.dataTransfer.setData("text/plain", "sauceBBQ");
}, false);

sauceBBQ.addEventListener("dragend", function (evt) {
    sauceBBQ.style.border = ""; 
}, false);

sauceBBQ.addEventListener("dragend", function (evt) {
   
    const nameBBQ = document.querySelector('#BBQname').textContent;
    document.querySelector('#sauce').innerHTML += "<br>" + nameBBQ;
    const b =  parseInt(nameBBQ.replace(/\D/g, ''));
    function calculateTotal() {
        const priceElements = document.querySelectorAll('#price');
        let total = b;
       
        priceElements.forEach(function (element) {
            const value = parseInt(element.textContent);
            if (!isNaN(value)) {
              total += value;
            }
          });
        return total;
      }
      
      const total = calculateTotal();
      document.querySelector('#price').innerHTML = total;
});

const pizzaTwo = document.querySelector("#cake");
pizzaTwo.addEventListener("dragenter", function (evt) {
    pizzaTwo.style.border = "3px solid red";
}, false);

pizzaTwo.addEventListener("dragleave", function (evt) {
    pizza.style.border = "";
}, false);

pizzaTwo.addEventListener("dragover", function (evt) {
    
    if (evt.preventDefault) evt.preventDefault();
    return false;
}, false);

pizzaTwo.addEventListener("drop", function (evt) {


    if (evt.preventDefault) evt.preventDefault();
    if (evt.stopPropagation) evt.stopPropagation();

    pizzaTwo.style.border = "";
    const draggedImageSrc = evt.dataTransfer.getData("text/plain");
    if (draggedImageSrc === "sauceBBQ") {
  const BBQ = document.createElement("img");
  BBQ.src = "sous-bbq_155679418013.png";
  BBQ.alt = "Dropped Image";
  BBQ.style.position = "absolute";
  BBQ.style.top = evt.clientY - this.offsetTop;
  BBQ.style.left = evt.clientX - this.offsetLeft;
  
  const offsetX = evt.clientX - this.offsetLeft;
  const offsetY = evt.clientY - this.offsetTop;
  const imageWidth = BBQ.width;
  const imageHeight = BBQ.height;

  BBQ.style.left = Math.max(0, offsetX - imageWidth / 2) + "px";
  BBQ.style.top = Math.max(0, offsetY - imageHeight / 2) + "px";

    this.appendChild(BBQ);

    return false;
}}, false);
;


const sauceRikotta = document.querySelector("#sauceRikotta");

sauceRikotta.addEventListener("dragstart",  function(evt)  {
    sauceRikotta.style.border = "3px dotted #000"; 
    evt.dataTransfer.effectAllowed ="move";
    evt.dataTransfer.setData("text/plain", "sauceRikotta");
}, false);

sauceRikotta.addEventListener("dragend", function (evt) {
    sauceRikotta.style.border = ""; 
}, false);

sauceRikotta.addEventListener("dragend", function (evt) {
 
    
    const nameRikotta = document.querySelector('#Ricotta').textContent;
    document.querySelector('#sauce').innerHTML += "<br>" + nameRikotta;
    const b =  parseInt(nameRikotta.replace(/\D/g, ''));
    function calculateTotal() {
        const priceElements = document.querySelectorAll('#price');
        let total = b;
       
        priceElements.forEach(function (element) {
            const value = parseInt(element.textContent);
            if (!isNaN(value)) {
              total += value;
            }
          });
        return total;
      }
      
      const total = calculateTotal();
      document.querySelector('#price').innerHTML = total;
});

const pizzaThree = document.querySelector("#cake");
pizzaThree.addEventListener("dragenter", function (evt) {
    pizzaThree .style.border = "3px solid red";
}, false);

pizzaThree.addEventListener("dragleave", function (evt) {
    pizza.style.border = "";
}, false);

pizzaThree.addEventListener("dragover", function (evt) {
    
    if (evt.preventDefault) evt.preventDefault();
    return false;
}, false);
;
pizzaThree.addEventListener("drop", function (evt) {
    

    if (evt.preventDefault) evt.preventDefault();
    if (evt.stopPropagation) evt.stopPropagation();

    pizzaThree.style.border = "";
    const draggedImageSrc = evt.dataTransfer.getData("text/plain");

    if (draggedImageSrc === "sauceRikotta") {
  const ricotta = document.createElement("img");
  ricotta.src = "sous-rikotta_1556623391103.png";
  ricotta.alt = "Dropped Image";
  ricotta.style.position = "absolute";
  ricotta.style.top = evt.clientY - this.offsetTop;
  ricotta.style.left = evt.clientX - this.offsetLeft;
  
  const offsetX = evt.clientX - this.offsetLeft;
  const offsetY = evt.clientY - this.offsetTop;
  const imageWidth = ricotta.width;
  const imageHeight = ricotta.height;

  ricotta.style.left = Math.max(0, offsetX - imageWidth / 2) + "px";
  ricotta.style.top = Math.max(0, offsetY - imageHeight / 2) + "px";


    this.appendChild( ricotta);

    return false;
   
}}, false);
;


const mocOne = document.querySelector("#moc1");

mocOne.addEventListener("dragstart",  function(evt)  {
    mocOne.style.border = "3px dotted #000"; 
    evt.dataTransfer.effectAllowed ="move";
    evt.dataTransfer.setData("text/plain", "moc1");
}, false);

mocOne.addEventListener("dragend", function (evt) {
    mocOne.style.border = ""; 
}, false);

mocOne.addEventListener("dragend", function (evt) {

    const nameCheese = document.querySelector('#cheeseName').textContent;
    document.querySelector('#topping').innerHTML += "<br>" +  nameCheese ;
    const b =  parseInt(nameCheese.replace(/\D/g, ''));
    function calculateTotal() {
        const priceElements = document.querySelectorAll('#price');
        let total = b;
       
        priceElements.forEach(function (element) {
            const value = parseInt(element.textContent);
            if (!isNaN(value)) {
              total += value;
            }
          });
        return total;
      }
      
      const total = calculateTotal();
      document.querySelector('#price').innerHTML = total;

});

const pizzaFour = document.querySelector("#cake");
pizzaFour.addEventListener("dragenter", function (evt) {
    pizzaFour.style.border = "3px solid red";
}, false);

pizzaFour.addEventListener("dragleave", function (evt) {
    pizzaFour.style.border = "";
}, false);

pizzaFour.addEventListener("dragover", function (evt) {
    
    if (evt.preventDefault) evt.preventDefault();
    return false;
}, false);

pizzaFour.addEventListener("drop", function (evt) {


    if (evt.preventDefault) evt.preventDefault();
    if (evt.stopPropagation) evt.stopPropagation();

    pizzaFour.style.border = "";
    const draggedImageSrc = evt.dataTransfer.getData("text/plain");

    if (draggedImageSrc === "moc1") {
  const newImage = document.createElement("img");
  newImage.src = "mocarela_1556623220308.png";
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
 }}, false);
 ;

 const mocTwo = document.querySelector("#moc2");

 mocTwo.addEventListener("dragstart",  function(evt)  {
     mocTwo.style.border = "3px dotted #000"; 
     evt.dataTransfer.effectAllowed ="move";
     evt.dataTransfer.setData("text/plain", "moc2");
 }, false);
 
 mocTwo.addEventListener("dragend", function (evt) {
     mocTwo.style.border = ""; 
 }, false);

 mocTwo.addEventListener("dragend", function (evt) {

        const nameCheese = document.querySelector('#fetaname').textContent;
        document.querySelector('#topping').innerHTML += "<br>" +  nameCheese ;
        const b =  parseInt(nameCheese.replace(/\D/g, ''));
        function calculateTotal() {
            const priceElements = document.querySelectorAll('#price');
            let total = b;
           
            priceElements.forEach(function (element) {
                const value = parseInt(element.textContent);
                if (!isNaN(value)) {
                  total += value;
                }
              });
            return total;
          }
          
          const total = calculateTotal();
          document.querySelector('#price').innerHTML = total;
    });
    
 
 const pizzaFive = document.querySelector("#cake");
 pizzaFive.addEventListener("dragenter", function (evt) {
     pizzaFive.style.border = "3px solid red";
 }, false);
 
 pizzaFive.addEventListener("dragleave", function (evt) {
     pizzaFive.style.border = "";
 }, false);
 
 pizzaFive.addEventListener("dragover", function (evt) {
     
     if (evt.preventDefault) evt.preventDefault();
     return false;
 }, false);
 
 pizzaFive.addEventListener("drop", function (evt) {

     if (evt.preventDefault) evt.preventDefault();
     if (evt.stopPropagation) evt.stopPropagation();
 
     pizzaFive.style.border = "";
     const draggedImageSrc = evt.dataTransfer.getData("text/plain");
 
     if (draggedImageSrc === "moc2") {
   const newImage = document.createElement("img");
   newImage.src = "mocarela_1556785182818.png";
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
  }}, false);
  ;
 

  const mocarela = document.querySelector("#mocarela");

  mocarela.addEventListener("dragstart",  function(evt)  {
    mocarela.style.border = "3px dotted #000"; 
      evt.dataTransfer.effectAllowed ="move";
      evt.dataTransfer.setData("text/plain", "mocarela");
  }, false);
  
  mocarela.addEventListener("dragend", function (evt) {
    mocarela.style.border = ""; 
  }, false);

  mocarela.addEventListener("dragend", function (evt) { 
        const nameCheese = document.querySelector('#mozarelaname').textContent;
        document.querySelector('#topping').innerHTML += "<br>" + nameCheese ;
        const b =  parseInt(nameCheese.replace(/\D/g, ''));
        function calculateTotal() {
            const priceElements = document.querySelectorAll('#price');
            let total = b;
           
            priceElements.forEach(function (element) {
                const value = parseInt(element.textContent);
                if (!isNaN(value)) {
                  total += value;
                }
              });
            return total;
          }
          
          const total = calculateTotal();
          document.querySelector('#price').innerHTML = total;
    });
  
  const pizzaSix = document.querySelector("#cake");
  pizzaSix.addEventListener("dragenter", function (evt) {
      pizzaSix.style.border = "3px solid red";
  }, false);
  
  pizzaSix.addEventListener("dragleave", function (evt) {
      pizzaSix.style.border = "";
  }, false);
  
  pizzaSix.addEventListener("dragover", function (evt) {
      if (evt.preventDefault) evt.preventDefault();
      return false;
  }, false);
  
  pizzaSix.addEventListener("drop", function (evt) {
 
      if (evt.preventDefault) evt.preventDefault();
      if (evt.stopPropagation) evt.stopPropagation();
  
      pizzaSix.style.border = "";
      const draggedImageSrc = evt.dataTransfer.getData("text/plain");
  
      if (draggedImageSrc === "mocarela") {
    const newImage = document.createElement("img");
    newImage.src = "mocarela.png";
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
   }}, false);


   const telya = document.querySelector("#telya");
   telya.addEventListener("dragstart",  function(evt)  {
    telya.style.border = "3px dotted #000"; 
       evt.dataTransfer.effectAllowed ="move";
       evt.dataTransfer.setData("text/plain", "telya");
   }, false);
   telya.addEventListener("dragend", function (evt) {
       telya.style.border = ""; 
   }, false);

   telya.addEventListener("dragend", function (evt) {
    

        const nameCheese = document.querySelector('#telyaname').textContent;
        document.querySelector('#topping').innerHTML += "<br>"  +nameCheese;
        const b =  parseInt(nameCheese.replace(/\D/g, ''));
        function calculateTotal() {
            const priceElements = document.querySelectorAll('#price');
            let total = b;

            priceElements.forEach(function (element) {
                const value = parseInt(element.textContent);
                if (!isNaN(value)) {
                  total += value;
                }
              });
          
            return total;
          }
          
          const total = calculateTotal();
          document.querySelector('#price').innerHTML = total;
    });

   const pizzaSeven = document.querySelector("#cake");
   pizzaSeven.addEventListener("dragenter", function (evt) {
       pizzaSeven.style.border = "3px solid red";
   }, false);

   pizzaSeven.addEventListener("dragleave", function (evt) {
       pizzaSeven.style.border = "";
   }, false);
   
   pizzaSeven.addEventListener("dragover", function (evt) {
       
       if (evt.preventDefault) evt.preventDefault();
       return false;
   }, false);
   
   pizzaSeven.addEventListener("drop", function (evt) {
   
       
       if (evt.preventDefault) evt.preventDefault();
       if (evt.stopPropagation) evt.stopPropagation();
   
       pizzaSeven.style.border = "";
       const draggedImageSrc = evt.dataTransfer.getData("text/plain");
   
       if (draggedImageSrc === "telya") {
     const newImage = document.createElement("img");
     newImage.src = "telyatina_1556624025747.png";
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
    }}, false);
 
 
    const vetchOne = document.querySelector("#vetch1");
    vetchOne.addEventListener("dragstart",  function(evt)  {
        vetchOne.style.border = "3px dotted #000"; 
        evt.dataTransfer.effectAllowed ="move";
        evt.dataTransfer.setData("text/plain", "vetch1");
    }, false);
    vetchOne.addEventListener("dragend", function (evt) {
        vetchOne.style.border = ""; 
    }, false);
 

    vetchOne.addEventListener("dragend", function (evt) {
            const nameCheese = document.querySelector('#tomatename').textContent;
            document.querySelector('#topping').innerHTML += "<br>" + nameCheese ;
            const b =  parseInt(nameCheese.replace(/\D/g, ''));
       
        function calculateTotal() {
            const priceElements = document.querySelectorAll('#price');
            let total = b;
           
            priceElements.forEach(function (element) {
                const value = parseInt(element.textContent);
                if (!isNaN(value)) {
                  total += value;
                }
              });
            return total;
          }
          
          const total = calculateTotal();
          document.querySelector('#price').innerHTML = total;
        });

    const pizzaEight = document.querySelector("#cake");
    pizzaEight.addEventListener("dragenter", function (evt) {
        pizzaEight.style.border = "3px solid red";
    }, false);
 
    pizzaEight.addEventListener("dragleave", function (evt) {
        pizzaEight.style.border = "";
    }, false);
    
    pizzaEight.addEventListener("dragover", function (evt) {
        
        if (evt.preventDefault) evt.preventDefault();
        return false;
    }, false);
    
    pizzaEight.addEventListener("drop", function (evt) {
     

        if (evt.preventDefault) evt.preventDefault();
        if (evt.stopPropagation) evt.stopPropagation();
    
        pizzaEight.style.border = "";
        const draggedImageSrc = evt.dataTransfer.getData("text/plain");
    
        if (draggedImageSrc === "vetch1") {
      const newImage = document.createElement("img");
      newImage.src = "vetchina.png";
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
     } false;})


     const vetchTwo = document.querySelector("#vetch2");
     vetchTwo.addEventListener("dragstart",  function(evt)  {
         vetchTwo.style.border = "3px dotted #000"; 
         evt.dataTransfer.effectAllowed ="move";
         evt.dataTransfer.setData("text/plain", "vetch2");
     }, false);
     vetchTwo.addEventListener("dragend", function (evt) {
         vetchTwo.style.border = ""; 
     }, false);

    
     vetchTwo.addEventListener("dragend", function (evt) {
           
        const nameCheese = document.querySelector('#mushroomname').textContent;
        document.querySelector('#topping').innerHTML += "<br>" + nameCheese ;
        const b =  parseInt(nameCheese.replace(/\D/g, ''));
        function calculateTotal() {
            const priceElements = document.querySelectorAll('#price');
            let total = b;
           

            priceElements.forEach(function (element) {
                const value = parseInt(element.textContent);
                if (!isNaN(value)) {
                  total += value;
                }
              });
          
            return total;
          }
          
          const total = calculateTotal();
          document.querySelector('#price').innerHTML = total;
     })
      

  
     const pizzaNine = document.querySelector("#cake");
     pizzaNine.addEventListener("dragenter", function (evt) {
         pizzaNine.style.border = "3px solid red";
     }, false);
  
     pizzaNine.addEventListener("dragleave", function (evt) {
         pizzaNine.style.border = "";
     }, false);
     
     pizzaNine.addEventListener("dragover", function (evt) {
         
         if (evt.preventDefault) evt.preventDefault();
         return false;
     }, false);
     
     pizzaNine.addEventListener("drop", function (evt) {
           
         if (evt.preventDefault) evt.preventDefault();
         if (evt.stopPropagation) evt.stopPropagation();
     
         pizzaNine.style.border = "";
         const draggedImageSrc = evt.dataTransfer.getData("text/plain");
     
         if (draggedImageSrc === "vetch2") {
       const newImage = document.createElement("img");
       newImage.src = "vetchina_1556623556129.png";
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
          } false;
        })
   





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
     })