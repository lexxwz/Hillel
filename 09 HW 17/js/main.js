// 1 створення глобального лексичного оточення
// Global env
//   Record: {}
//   Parent: null

// 2 об'явлення функції, запис у скриту властивість записується батьківське оточення
// [[environmant]] = Global env

function addNewToOld() {
    // 4 створення лексичного оточення функції addNewToOld
    // addNewToOld env
    //   Record: {}
    //   Parent: Global env

    let total = 0;
    // 5 запис у лексичне оточення функції addNewToOld нової змінної
    // addNewToOld env
    //   Record: {total: 0}
    //   Parent: Global env

    // 6 2 об'явлення функції, запис у скриту властивість записується батьківське оточення
    // [[environmant]] = addNewToOld env
    return function(nextValue) {
        // 9 створення лексичного оточення функції withoutName
        // withoutName env
        //   Record: {nextValue: 20}
        //   Parent: addNewToOld env
        total += nextValue;
        // 10 пошук змінної total у своєму оточенні, потім у батьківському (addNewToOld env)
        // total = 0 + 20 = 20

        // 11 запис у лексичне оточення функції withoutName
        // withoutName env
        //   Record: {total: 20}
        //   Parent: addNewToOld env
        console.log('totalFromWithoutName', total);
        // 12 видедення у консоль змінної total зі свого лексичного оточення
        return total;
        // 13 повертання змінної total зі свого лексичного оточення (withoutName) у точку виклику
    };
};

// 3 виклик функції
const smartSum = addNewToOld();
// 7 запис у глобальне лексичне оточення нової константи
// Global env
//   Record: {smartSum: <function>}
//   Parent: null

// 8 виклик функції з параметром 20
const smartSum20 = smartSum(20);
// 14 запис у глобальне лексичне оточення нової константи
// Global env
//   Record: {smartSum: <function>, smartSum20: 20}
//   Parent: null
console.log('smartSum20', smartSum20);
// 15 видедення у консоль змінної smartSum20 зі свого лексичного оточення (Global env)

// 16 виклик функції з параметром 30
// повторення кроків 9 - 13 але вже без створення withoutName env, тільки з редагуванням
// у кроці 10 змінна total береться вже з withoutName env та початково дорівнює 20
// total = 20 + 30 = 50
// у кроці 11 змінна total записується як 50
const smartSum30 = smartSum(30);
// 17 запис у глобальне лексичне оточення нової константи
// Global env
//   Record: {smartSum: <function>, smartSum20: 20, smartSum30: 50}
//   Parent: null
console.log('smartSum30', smartSum30);
// 18 видедення у консоль змінної smartSum30 зі свого лексичного оточення (Global env)

// тощо)
const smartSum40 = smartSum(40);
console.log('smartSum40', smartSum40);