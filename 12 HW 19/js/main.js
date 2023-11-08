class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    };
};

class Apartment {
    residents = new Array();
    addResidents(human) {
        this.residents.push(human);
    };
};

class Building {
    apartments = new Array();
    constructor(maxApartment) {
        this.maxApartment = maxApartment;
    };
    addApartment(apartment) {
        if (this.apartments.length < this.maxApartment) {
            this.apartments.push(apartment);
        } else {
            console.log('Кількість квартир у будинку вже максимальна');
        };
    };
};


const mary = new Human('Mary', 'female');
const tom = new Human('Tom', 'male');
const ann = new Human('Ann', 'female');
const andreas = new Human('Andreas', 'male');
const eugen = new Human('Eugen', 'male');

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

console.log(apartment1);
console.log(apartment2);
console.log(apartment3);

const building1 = new Building(2);
const building2 = new Building(4);

apartment1.addResidents(mary);
apartment1.addResidents(tom);
apartment2.addResidents(ann);
apartment2.addResidents(andreas);
apartment3.addResidents(eugen);

building1.addApartment(apartment1);
building1.addApartment(apartment2);
building1.addApartment(apartment3); // "переповнення" будинку 1

building2.addApartment(apartment1);
building2.addApartment(apartment2);
building2.addApartment(apartment3);

console.log(building1);
console.log(building2);
