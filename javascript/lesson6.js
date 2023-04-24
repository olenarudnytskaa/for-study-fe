// Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
// Клас Animal містить змінні food, location і методи makeNoise, eat, sleep. 
// Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
// Dog, Cat, Horse переопределяют методи makeNoise, eat.
// Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.
// Створіть клас Ветеринар, у якому визначте метод void (Нічого не повертає) treatAnimal(Animal animal). 
// Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
// У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. 
// У циклі надсилайте їх на прийом до ветеринара.

function Animal(Cat, Dog, Horse){
   Animal.Cat = "Cat";
    Animal.Dog = "Dog";
    Animal.Horse = "Horse"
};

let NewAnimal = new Animal;
console.log(NewAnimal);

  Animal.prototype.MakeNoise = function(){
        console.log(`Така тварина спить  ${Animal.Dog}`)}
        MakeNoise = function(){
            console.log(this.Cat + this.Dog + this.Horse)
        }
    Animal.prototype.MakeNoise();

    Animal.prototype.Eat = function(){
    console.log(`Така тварина їсть  ${Animal.Dog}`);
    Eat = function(){
        console.log(`${Animal.Cat} ${Animal.dog} ${Animal.Horse}`)
 };
};
Animal.prototype.Eat();

Animal.prototype.Sleep = function(){
    console.log(`Така тварина не спить  ${Animal.Dog}`)};
    Animal.prototype.Sleep();



let AnimalDog = "гавкає";
 console.log(`${Animal.Dog} ${AnimalDog} `)
 let animalCat = "мявкає ";
 console.log(`${Animal.Cat} ${animalCat} `)
 let animalHorse = "ржє";
 console.log(`${Animal.Horse} ${animalHorse} `)
function sleep(){
}

const FoodLocation = new Object();
FoodLocation.Food = "food";
FoodLocation.Location = "location"; 


void function (i){
    console.log(`${Doc}`, i);
}

const newAnimal = [Animal];
const newDoc = [FoodLocation];
const treatAnimal = newAnimal.map((animal,FoodLocation) => newAnimal);
for(let value in Animal){
    console.log(value + Animal[value]) ;
    for(let value in FoodLocation){
        console.log(value + FoodLocation[value]) ;
    }
}
console.log(newAnimal);

const allAnimal = [newAnimal];
console.log(allAnimal);

const Doctor = "doctor";

function main(){
    newAnimal.forEach((allAnimal,Doctor) => Doctor);
    for(let value in Animal){
        console.log(value + Animal[value] + Doctor) ;
    }
}
main();

