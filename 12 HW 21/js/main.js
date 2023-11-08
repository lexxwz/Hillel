class Student {
    attendance = new Array(25);
    constructor(name, surname, birthYear, grades) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.grades = grades;
    };
    getAge() {
        const date = new Date();
        const age = date.getFullYear() - this.birthYear;
        console.log(age);
        return age;
    };
    getAvgGrades() {
        const avgGrades = this.grades.reduce((sum, value) => sum + value, 0) / this.grades.length;
        console.log(avgGrades);
        return avgGrades;
    }
    present() {
        const currentIndex = this.attendance.findIndex(value => value === undefined);
        if (currentIndex !== -1) {
            this.attendance[currentIndex] = true;
        };
    };
    absent() {
        const currentIndex = this.attendance.findIndex(value => value === undefined);
        if (currentIndex !== -1) {
            this.attendance[currentIndex] = false;
        };
    };
    summary() {
        let currentIndex = this.attendance.findIndex(value => value === undefined);
        if (currentIndex === -1) {currentIndex = 25}; 
        const avgAttendance = this.attendance.reduce((sum, value) => sum + value, 0) / currentIndex;
        let status = '';
        if (this.getAvgGrades() > 90 && avgAttendance > 0.9) {
            status = 'Молодець!';
        } else if (this.getAvgGrades() > 90 || avgAttendance > 0.9) {
            status = 'Добре, але можна краще';
        } else {
            status = 'Редиска!';
        }
        console.log(status);
        return status;
    };
};

const st1 = new Student('Ann', 'Sajdova', 1983, [85,90,80,90,90,90,75,80]);
const st2 = new Student('Eugen', 'Bondar', 1982, [100,90,80,99,100,90,95,100]);
const st3 = new Student('Serg', 'Semenov', 1990, [98,90,95,99,100,92,95,92]);

console.log(st1);
console.log(st2);
console.log(st3);

st1.getAge();
st1.getAvgGrades();
st1.present();
st1.present();
st1.absent();
st1.absent();
st1.summary();

st2.getAge();
st2.getAvgGrades();
st2.present();
st2.present();
st2.present();
st2.present();
st2.summary();

st3.getAge();
st3.getAvgGrades();
st3.present();
st3.absent();
st3.absent();
st3.summary();