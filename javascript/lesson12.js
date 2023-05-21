window.addEventListener("DOMContentLoaded", () => {

const table = document.querySelector('table');
table.addEventListener("mousedown", e  =>{

     });







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
        });

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
    
