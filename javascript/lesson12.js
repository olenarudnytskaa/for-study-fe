window.addEventListener("DOMContentLoaded", () => {
const table = document.querySelector('table');
// table.addEventListener("mousedown", e  =>{
//    e.target.classList.add('')
    // });


    const name = document.querySelector('#name')
    name.onkeypress= function(e){
        let inputVal= document.querySelector('#name');
        const pattern = /\D+$/;
        debugger
        if (!pattern.test(inputVal)) {
            // this.classList.remove("footer input")
             this.classList.add("error");
            e.target.classList.add("error")
        }
     
           
         }
        })