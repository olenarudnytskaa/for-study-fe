// 
// Створити карточки товару і розмістити на сторінці.
// Коли покупець натисне кнопку купити, виконати збереження даних на стороні клієнта.
// додакти кнопку кошик за натиском на яку виконується відобрадення елементів які обрав користувач
// Додатково записувати дату та час додавання товару до сховища.

// Викорситовувати Ajax та fetch

// https://fakestoreapi.com/products


function req (url = "", callback) {
    const data = fetch(url);
      data
      .then((i)=>{ return i.json()}) 
      .then(i => callback(i))
  } 
  
  function createCardProduct (productName, productPrice, productCategory, productImg, productDescription, eventFN, fullProductInfo) {
      const cardContainer = document.createElement("div"),
      btn = document.createElement("button"),
      name = document.createElement("div"),
      image = document.createElement("img"),
      description = document.createElement("p"),
      price = document.createElement("div"),
      category = document.createElement("span");
  
      cardContainer.classList.add("card");
      name.classList.add("card__name");
      description.classList.add("card__description");
      price.classList.add("card__price");
      category.classList.add("card__category");
      btn.classList.add("card__btn")
  
      btn.innerText = "Додати до кошика";
      name.innerText = productName;
      price.innerText = productPrice + "грн.";
      description.innerText = productDescription;
      image.src = productImg;
      category.innerText = productCategory;
  
      btn.addEventListener("click", () => {eventFN(fullProductInfo)})
  
      cardContainer.append(image, name, category, description, price, btn)
  
      return cardContainer
  }
  
  
  export {req, createCardProduct}