let ladder = {
    step: 0,
    up: function () {
        this.step++;
    },
    down: function () {
        this.step--;
    },
    showStep: function () { // показывает текущую ступеньку
        console.log(this.step);
    }
};
// ladder.up();
console.log(ladder.up()); // повертає undefined бо в методах немає return
ladder.up();
ladder.down();
ladder.showStep();


// то потрібно повертати сам об'єктб щоб використовувати на ньому методи
let ladder2 = {
    step: 0,
    up: function () {
        this.step++;
        return ladder2;
    },
    down: function () {
        this.step--;
        return ladder2;
    },
    showStep: function () { // показывает текущую ступеньку
        console.log(this.step);
        return ladder2;
    }
};
ladder2.up().up().down().showStep();


// чи повертати this для універсалізації
let ladder3 = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        console.log(this.step);
        return this;
    }
};
ladder3.up().up().down().showStep();