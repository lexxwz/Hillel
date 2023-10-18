const arrayNumber = [1, 2, 3, 4, 5, 6, 7];
const arraySrting = ['1', '2', '3', '4', '5', '6', '7'];
let outText = '';

const removeElement = (array, value) => {
    outText += `<br>Action - removeElement(${value}) from ${array}<br>`;
    let valueIndex = array.indexOf(value);
    outText += (valueIndex === -1) ? 'Nothing to delete<br><br>' : `${array.splice(valueIndex, 1)} was deleted<br><br>`;
};

const printArrays = (...arrays) => {
    arrays.forEach((array) => {
        outText += `[${array.join(', ')}]<br>`;
        console.log(array);
    })
}

printArrays(arrayNumber, arraySrting);

removeElement(arrayNumber, 5);
printArrays(arrayNumber, arraySrting);

removeElement(arraySrting, 5);
printArrays(arrayNumber, arraySrting);

removeElement(arraySrting, '5');
printArrays(arrayNumber, arraySrting);

document.getElementById('arr1').innerHTML = outText;