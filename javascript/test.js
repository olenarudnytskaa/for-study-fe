// window.addEventListener("DOMContentLoaded", (e) => {

    const wrapper = document.getElementsByTagName('input');
    for (let i = 0; i < wrapper.length; i++) {
    wrapper[i].addEventListener("click", function(e) {     
        if (e.target.tagName === 'DIV') {
            e.target.classList.add("black");
    }})}
    
   document.querySelector('#display').addEventListener("click", (e) =>{
    e.target=wrapper;
   })
  