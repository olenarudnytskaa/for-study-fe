// const buttonBlack = document.getElementsByClassName("button black");
// const button = [buttonBlack];
// button.forEach((b) => {
// addEventListener('click', (e) => {
// e.target.classList.add('black:active');
// console.log(button)
// const displayInput = document.getElementsByClassName('button black');
// document.querySelector('#display').textContent=displayInput;
// })})
//displayInput.classList.add('show');
// buttonBlack.classList.add('black:active');

const buttonBlackList = document.getElementsByClassName("button black");
Array.from(buttonBlackList).forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.target.classList.add('black:active');
    const displayInput = this.value;
    document.querySelector('#display input').value = displayInput;
  });
});