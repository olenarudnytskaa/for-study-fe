// Створити клас Car , Engine та Driver.
// Клас Driver містить поля - ПІБ, стаж водіння.
// Клас Engine містить поля – потужність, виробник.
// Клас Car містить поля – марка автомобіля, клас автомобіля, вага, 
// водій типу Driver, мотор типу Engine. Методи start(), stop(), turnRight(), turnLeft(), 
// які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" 
// або "Поворот ліворуч". А також метод toString(), 
// який виводить повну інформацію про автомобіль, її водія і двигуна.

// Створити похідний від Car клас - Lorry (вантажівка),
//  що характеризується також вантажопідйомністю кузова.
// Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.
// https://storage.googleapis.com/www.examclouds.com/oop/car-ierarchy.png

class Driver{
    constructor(name, driveExpirience){
            this.name = name;
            this.driveExpirience = driveExpirience;
        }
    }
class Engine {
    constructor(power, produce){
            this.power =  power;
            this.produce = produce;
    }
        };
class Car  {
    constructor(classAuto, weightAuto, modelAuto){
            this.classAuto= classAuto ;
            this.weightAuto = weightAuto;
            this.modelAuto = modelAuto;
        }
       
    };

function start(){
        console.log( `Поїхали  ${this.name}`)
     }
start();
    

function stop(){
    console.log(`Зупиняємося ${this.name}`)
    }
    stop();

function turnRight(){
    console.log(`Поворот праворуч ${this.name}`)
}
turnRight();

function turnLeft(){
    console.log(`Поворот лівору ${this.name}` )
 }
turnLeft();

const driver = new Driver('Maks', 5);
const eigine = new Engine('200hp', 'Germany');
const car = new Car('SportCar', '5tons', 'cabriolet', );
console.log(driver.name  + eigine.produce + car.classAuto + car.modelAuto + car.weightAuto );

const machine = new Car('Sport Car', '5 tons', 'cabriolet'  )
Car.prototype.toString = function CarToString(){
    return `${this.classAuto}  ${this.modelAuto}  ${this.weightAuto}`
}
console.log(machine.toString());
document.write(machine.toString())


const CarDriver = new Driver('Maks', '5years' )
Driver.prototype.toString = function driverToString(){
    return `${this.name}  ${this.driveExpirience}`
}
console.log(CarDriver.toString());
document.write('<br>'+ CarDriver.toString())

const engenire = new Engine('200hp', 'Germany' )
Engine.prototype.toString = function engenireToString(){
    return `${this.power} ${this.produce} `
}
console.log(eigine.toString());
document.write('<br>'+ engenire.toString())


class Lorry  extends Car {
    constructor( classAuto, weightAuto, modelAuto,cargoCapacity){
     super( classAuto, weightAuto, modelAuto);
     this.cargoCapacity = cargoCapacity;
    }
 }

const lorry = new Lorry('вантажопідйомністю кузова 20000kg');
console.log(lorry)


class SportCar extends Car {
    constructor( classAuto, weightAuto, modelAuto, maxSpeed) {
      super(classAuto, weightAuto, modelAuto);
      this.maxSpeed = maxSpeed;
    }
}
const sportCar = new SportCar( '340km');
console.log(sportCar)