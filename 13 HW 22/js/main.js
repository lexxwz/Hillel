class Component {
    constructor (solution, price, calories) {
        this.solution = solution;
        this.price = price;
        this.calories = calories;
    };
};

class Hamburger {
    static smallSize = new Component('маленький', 50, 20);
    static bigSize = new Component('великий', 100, 40);
    static withCheese = new Component('з сиром', 10, 20);
    static withSalad = new Component('з салатом', 20, 5);
    static withPotato = new Component('з картоплею', 15, 10);
    static withSauce = new Component('зі спеціями', 15, 0);
    static withMayo = new Component('з майонезом', 20, 5);
    constructor(size = smallSize, stuffing, topping) {
        this.size = size;
        this.stuffing = [stuffing];
        this.topping = [topping];
    }
    addStuffing(stuffing) {
        if (!this.checkType(stuffing)) {
            console.log('Wrong imput');
            return;
        };
        if (this.stuffing[0] === undefined) {
            this.stuffing[0] = stuffing;
        } else {
            this.stuffing.push(stuffing);
        };
    };
    addTopping(topping) {
        if (!this.checkType(topping)) {
            console.log('Wrong imput');
            return;
        };
        if (this.topping[0] === undefined) {
            this.topping[0] = topping;
        } else {
            this.topping.push(topping);
        };
    };
    remStuffing(stuffing) {
        const indexForDel = this.stuffing.indexOf(stuffing);
        (indexForDel !== -1) ? this.stuffing.splice(this.stuffing.indexOf(stuffing), 1) : this.stuffing;
    };
    remTopping(topping) {
        const indexForDel = this.topping.indexOf(topping);
        (indexForDel !== -1) ? this.topping.splice(this.topping.indexOf(topping), 1) : this.topping;
    };
    calculate(index) {
        let price = this.size[index];
        (this.stuffing[0] === undefined) ? price : this.stuffing.forEach((value) => price += value[index]);
        (this.topping[0] === undefined) ? price : this.topping.forEach((value) => price += value[index]);
        return price;
    };
    calculateCalories() {
        return this.calculate('calories');
    };
    calculatePrice() {
        return this.calculate('price');
    }
    checkType(object) {
        if (typeof object === 'object' && !Array.isArray(object)) {
            return true;
        };
    };
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.smallSize, Hamburger.withCheese);
console.log(hamburger);

// добавка з майонезу
hamburger.addTopping(Hamburger.withMayo);

// запитаємо скільки там калорій
console.log(hamburger.calculateCalories());

// скільки коштує
console.log(hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.withSauce);

// А скільки тепер коштує?
console.log(hamburger.calculatePrice());

// Ще одна добавка з майонезу та додаткову картоплю
hamburger.addStuffing(Hamburger.withPotato);
hamburger.addTopping(Hamburger);
hamburger.addTopping([1]);
hamburger.addTopping(Hamburger.withMayo);

// А скільки тепер коштує?
console.log(hamburger.calculatePrice());