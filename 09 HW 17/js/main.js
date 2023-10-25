// 1 створення глобального лексичного оточення
// Global env
//   Record: {}
//   Parent: null

// 2 об'явлення функції, запис у скриту властивість записується батьківське оточення
// [[environmant]] = Global env

function addNewToOld() {
    // 5 створення лексичного оточення функції addNewToOld
    // addNewToOld env
    //   Record: {}
    //   Parent: Global env

    let total = 0;
    // 6 запис у лексичне оточення функції addNewToOld нової змінної
    // addNewToOld env
    //   Record: {total: 0}
    //   Parent: Global env

    // 7 об'явлення функції, запис у скриту властивість записується батьківське оточення
    // [[environmant]] = addNewToOld env
    return function(nextValue) {
        // 10 створення лексичного оточення функції withoutName
        // withoutName env
        //   Record: {nextValue: 20}
        //   Parent: addNewToOld env
        total += nextValue;
        // 11 пошук змінної total у своєму оточенні, потім у батьківському (addNewToOld env)
        // total = 0 + 20 = 20

        // 12 зміна змінної total (у її лескичному отченні, у addNewToOld)
        // addNewToOld env
        //   Record: {total: 20}
        //   Parent: Global env
        console.log('totalFromWithoutName', total);
        // 13 видедення у консоль змінної total з лексичного оточення addNewToOld
        return total;
        // 14 повертання змінної total у точку виклику
    };
};
// 3 запис у глобальне лексичне оточення нової функції
// Global env
//   Record: {addNewToOld: <function>}
//   Parent: null

// 4 виклик функції
const smartSum = addNewToOld();
// 8 запис у глобальне лексичне оточення нової константи
// Global env
//   Record: {addNewToOld: <function>, smartSum: <function>}
//   Parent: null

// 9 виклик функції з параметром 20
const smartSum20 = smartSum(20);
// 15 запис у глобальне лексичне оточення нової константи
// Global env
//   Record: {addNewToOld: <function>, smartSum: <function>, smartSum20: 20}
//   Parent: null
console.log('smartSum20', smartSum20);
// 16 видедення у консоль змінної smartSum20 зі свого лексичного оточення (Global env)

// 17 виклик функції з параметром 30
// повторення кроків 10 - 14
// у кроці 11 змінна total береться з addNewToOld env та дорівнює 20
// total = 20 + 30 = 50
// у кроці 12 змінна total записується в addNewToOld env як 50
const smartSum30 = smartSum(30);
// 18 запис у глобальне лексичне оточення нової константи
// Global env
//   Record: {addNewToOld: <function>, smartSum: <function>, smartSum20: 20, smartSum30: 50}
//   Parent: null
console.log('smartSum30', smartSum30);
// 19 видедення у консоль змінної smartSum30 зі свого лексичного оточення (Global env)

// тощо)
const smartSum40 = smartSum(40);
console.log('smartSum40', smartSum40);