/* 
Javascript shows undefined in the following situations:

1.If we don't assign value to any variable.
2.Writing function without return or just write return but don't return anything.
3.If we find any item in the array which is out of range.
4.If we delete any item from the array and find that item.
5. If we find any property value from an object which does not exist.
6.If any function don't find parameter value.
7.Explicitly seting value to undefined
--------------------------------------------------------------------
Null: Null is a value which we set to any variable when we don't find its value .
var name = null;
*/

//1.If we don't assign value to any variable.
let x;
// console.log(x);

//2.Writing function without return or just write return but don't return anything. 
function add(x, y) {
    // console.log(x + y);
    // return;
}
const result = add(2, 2);
// console.log(result);

//3.If we find any item in the array which is out of range
const array1 = [0, 1, 2, 3, 4, 5];
const sixItem = array1[6];
// console.log(sixItem);

//4.If we delete any item from the array and find that item.
const array2 = ['rahim', 'karim', 'jolil', 'mujib'];
delete array2[1];
// console.log(spliceItems);
const secondItem = array2[1];
// console.log(array2);
// console.log(secondItem);

//5. If we find any property value from an object which does not exist.
const car = {
    name: 'toyota',
    mileage: 2300,
    convertible: false
};
// console.log(car.color);

//6.If any function don't find parameter value.
const multiply = (x, y) => {
    // console.log(y);
    // console.log(x * y);
};
multiply(2);

//7. Explicitly seting value to undefined
const show = undefined;
// console.log(show);

