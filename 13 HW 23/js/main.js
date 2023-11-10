class SuperMath {
    check({X, Y, znak} = obj) {
        if (Y === 0) {
            if (znak === '/' || znak === '%') {
                alert('На нуль ділити неможна');
                this.input();
                return;
            };
        };
        const agree = confirm(`Ви дійсно хочете порахувати вираз ${X} ${znak} ${Y}?`);
        if (agree) {
            this.count(obj);
            return;
        } else {
            this.input();
            return;
        };
    };
    count({X, Y, znak} = obj) {
        let result = 0;
        switch (znak) {
            case '+':
                result = X + Y;
                break;
            case '-':
                result = X - Y;
                break;
            case '/':
                result = X / Y;
                break;
            case '*':
                result = X * Y;
                break;
            case '%':
                result = X % Y;
                break;
            default:
                alert('Ви вказали невірний знак');
                this.input();
                return;
        };
        alert(`Вираз ${X} ${znak} ${Y} дорівнює ${result}`);
    };
    enterNumber(key) {
        obj[key] = undefined;
        do {
            const input = prompt(`Введіть ${key}`);
            if (Number(input) || input === '0') {
                obj[key] = Number(input);
            };
        } while (obj[key] === undefined);
    };
    input() {
        this.enterNumber('X');
        this.enterNumber('Y');
        obj.znak = prompt('Введіть znak');
        superMath.check(obj);
    };
};

const superMath = new SuperMath();
const obj = {X:12, Y:3, znak:'/'};
superMath.check(obj);