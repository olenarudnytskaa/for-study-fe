import {req, createCardProduct, getData} from "./lesson14.1.js"

req("https://fakestoreapi.com/products", showProductCard)


function showProductCard (arr = []) {
   const newElementsArr = arr.map(({title, description, image, price, category, id}) =>  {
       return  createCardProduct(title, price, category, image, description, addToBasket,  {title, description, image, price, category, id})
    }) 

    document.querySelector(".products")
    .append(...newElementsArr)
}

function addToBasket (info) {

    if(localStorage.product){
        const product = JSON.parse(localStorage.product);
        
        if(!Array.isArray(product)) {
            alert("перезавантажье сторінку")
        }
        if(info){
           product.push(info); 
        localStorage.setItem("cartDate", new Date());
        }
        localStorage.product = JSON.stringify(product);
        
    }else if (info){
        localStorage.product = JSON.stringify([info])
        localStorage.setItem("cartDate", new Date());
        
    } else {
        return
    }

    const productArr = JSON.parse(localStorage.product);
   
    const newArr = productArr.map((el) => {
     return   createProductBasket(el.title, el.price)
    })
    
    document.querySelector(".basket").innerHTML = ""
    document.querySelector(".basket").append(...newArr);
   

    const basket = document.querySelector(".basket");
    let savedDate = localStorage.getItem("cartDate", new Date()); 
    if (!savedDate) {
        savedDate = getData();
        localStorage.setItem("cartDate", savedDate);
      } 
    basket.childNodes.forEach((element) => {
    element.textContent += " "+ savedDate;
   
    })
}

function createProductBasket (name, price) {
    const li = document.createElement("li");
    li.innerText = `Назва позиції : ${name}. Ціна : ${price}`
    return li
  
}

 addToBasket()
