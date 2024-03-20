// Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
// rate (ставка за день роботи), days (кількість відпрацьованих днів).
// Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
// Зарплата - це добуток (мноставки rate на кількість відпрацьованих днів days.


const worker = new Object();

worker.name = "Ivan";
worker.surname = "Ivanov";
worker.rate = 1500;
worker.days= 20;
worker.getSalary =  worker.rate * worker.days;
document.write(`Salary for ${worker.name} ${worker.surname} ${worker.getSalary}` );


// Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
// який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
// який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
// та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.

const myString = 'reverse';
const reverse = Array.from(myString).reverse();
console.log(reverse);


const mString = 'ucFirst';
function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("ucFirst"));

const MyString =  ['reverse', 'uwcirst', 'ucwords'];
const capitalizedArray = MyString.map(str => str.charAt(0).toUpperCase() + str.slice(1));

console.log(capitalizedArray);

