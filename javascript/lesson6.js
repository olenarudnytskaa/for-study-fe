// Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
// Клас Animal містить змінні food, location і методи makeNoise, eat, sleep. 
// Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
// Dog, Cat, Horse переопределяют методи makeNoise, eat.
// Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.
// Створіть клас Ветеринар, у якому визначте метод void (Нічого не повертає) treatAnimal(Animal animal). 
// Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
// У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. 
// У циклі надсилайте їх на прийом до ветеринара.

const animal = new Object();
    animal.dog = "dog";
    animal.Cat = "cat";
    animal.Horse= "horse";

    function MakeNoise(){
        console.log(`Така тварина спить ${animal.dog}`);
        MakeNoise = function(){
            console.log(`${animal.Cat} ${animal.dog} ${animal.Horse}`)
        }
    };
MakeNoise();
MakeNoise();
    function Eat(){
    console.log(`Така тварина їсть ${animal.dog}`);
    Eat = function(){
        console.log(`${animal.Cat} ${animal.dog} ${animal.Horse}`)
 };
};
Eat();
Eat();

function SkillDog(){
    console.log(`${animal.dog} гавкає`);
} ;
SkillDog();

let animalDog = "гавкає";
 console.log(`${animal.dog} ${animalDog} `)
 let animalCat = "мявкає ";
 console.log(`${animal.Cat} ${animalCat} `)
 let animalHorse = "ржє";
 console.log(`${animal.Horse} ${animalHorse} `)
function sleep(){
}

const Doc = new Object();
Doc.Food = "food";
Doc.Location = "location"; 


void function (i){
    console.log(`${Doc}`, i);
}

const newAnimal = [animal];
const newDoc = [Doc];
const treatAnimal = newAnimal.map((animal, Doc) => newAnimal);
for(let value in animal){
    console.log(value + animal[value]) ;
    for(let value in Doc){
        console.log(value + Doc[value]) ;
    }
}

const allAnimal = [newAnimal];
console.log(allAnimal);

const Doctor = "doctor";

function main(){
    newAnimal.forEach((allAnimal,Doctor) => Doctor);
    for(let value in animal){
        console.log(value + animal[value] + Doctor) ;
    }
}

main();

