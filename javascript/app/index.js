window.addEventListener("load", function(){
    
    let a = prompt("What is your name?", "");
    const pP = document.createElement('p');
    pP.innerHTML = "What is your name?";
    const messageBot = document.querySelector('.messageBot');
    messageBot.appendChild(pP);

    let answer = a;
    const p = document.createElement('p');
    p.innerHTML = answer;
    const messageHuman= document.querySelector('.messageHuman');
    messageHuman.appendChild(p);


    let b = prompt("How old are you?", "");
    const age = document.createElement('div');
    age.innerHTML = "How old are you?";
    messageBot.appendChild(age);
    let answerAge = b;

    const pAge = document.createElement('div');
    pAge.innerHTML = answerAge;

    const messageH = document.querySelector('.messageHuman');
    messageH.appendChild(pAge);
    
   
    
})
    



       