class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    showInfo(){
        console.log(`This is ${this.name}. ${this.age} years old`);
    };
};

class Car {
    owner = {};
    constructor(make, model, manufactureYear, licensePlate) {
        this.make = make;
        this.model = model;
        this.manufactureYear = manufactureYear;
        this.licensePlate = licensePlate;
    };
    addOwner(human) {
        if (human.age >= 18) {
            this.owner = human;
        } else {
            console.log(`${human.name} can't have a car, somebody is too young`);
        };
    };
    showCarInfo() {
        console.log(`This is ${this.make} ${this.model}, ${this.manufactureYear} year, license plate is ${this.licensePlate}`);
        this.owner.showInfo();
    };
};



const mary = new Human('Mary', 17);
const tom = new Human('Tom', 23);
const ann = new Human('Ann', 18);
const andreas = new Human('Andreas', 25);
const eugen = new Human('Eugen', 15);

const car1 = new Car('Ford', 'Focus', 2012, 'AE4567DC');
const car2 = new Car('Ford', 'Fusion', 2015, 'AE1234DC');
const car3 = new Car('Audi', 'A4', 2020, 'AE0789DC');

mary.showInfo();
tom.showInfo();
ann.showInfo();

car1.addOwner(mary);
car1.addOwner(tom);
car1.showCarInfo();

car2.addOwner(eugen);
car2.addOwner(ann);
car2.showCarInfo();

car3.addOwner(andreas);
car3.showCarInfo();