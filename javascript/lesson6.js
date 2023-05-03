// Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
// Клас Animal містить змінні food, location і методи makeNoise, eat, sleep. 
// Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
// Dog, Cat, Horse переопределяют методи makeNoise, eat.
// Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.
// Створіть клас Ветеринар, у якому визначте метод void (Нічого не повертає) treatAnimal(Animal animal). 
// Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
// У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. 
// У циклі надсилайте їх на прийом до ветеринара.

class Animal{
    constructor(Name, Food, Location, Sound,Doctor){
    this.Name = Name;
    this.Food = Food;
    this.Location = Location;
    this.Sound = Sound;
}
treatAnimal() {
    console.log(`The ` + this.Name  + ` is located in  ` + this.Location + ` eat` + this.Food + ` make ` + this.Sound);
  }
// visitDoc(){
    // console.log(`The ` + this.Name  + ` visit doctor  ` + `${Doctor}` );
// }
};


class Dog extends Animal{
    constructor(Name, Food, Location, Sound,  Bark ){
    super( Name, Food, Location, Sound, );
    this.Bark = Bark;
}
};

class Cat extends Animal{
    constructor(Name,  Food, Location , Sound,  Meow ){
    super(Name, Food, Location , Sound);
    this.Meow = Meow;
}
};

class Horse extends Animal{
    constructor(Name,  Food, Location , Sound,  Igogo){
    super(Name, Food, Location, Sound);
    this.Igogo = Igogo;
}
};

class Doctor extends Animal{
    constructor(Name, Food, Location, Sound ){
    super( Name, Food, Location, Sound );
    }
};


const dog = new Dog('Sharik', ' meat', ' home', 'bark' );
const cat = new Cat('Myrchik', ' fish', ' home', 'meow' );
const horse = new Horse ( 'Star', ' hay' , ' farm house' , 'igogo')
const doctor = new Doctor ('Jack');
dog.treatAnimal();
cat.treatAnimal();
horse.treatAnimal();

const dogg = new Dog( 'Sharik',' Jack')
dogg.visitDoc();

Animal.prototype.MakeNoise = function(){
        console.log(`Така тварина спить ` + dog.Name)};     
dog.MakeNoise();

Animal.prototype.Eat = function(){
    console.log(`Така тварина їсть `  + cat.Name)};
cat.Eat();


Animal.prototype.Sleep = function(){
    console.log(`Така тварина не спить ` + horse.Name)};
horse.Sleep();


// Animal.prototype.Main = function(){
    // console.log(`The ` + this.Name + `visit doctor` + this.Doctor + ` at ` + this.Time )
// }
// newDog.Main();




const main = [Cat, Dog, Horse];
const maindoc =  main.map((main) => `${Animal} - ${doc}`);
console.log(maindoc)





