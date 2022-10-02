//Double equal compares only value.
const a = '1';
const b = true;
if (a == b) {
    console.log('they are equal');
} else {
    console.log('they are not equal');
}
//Triple equal compairs both value and type
const x = 0;
const y = false;
if (x === y) {
    console.log('they are equal');
} else {
    console.log('they are not equal');
}
//array and objects are not compared by double or triple equal
const m = [];
const n = [];
if (m === n) {
    console.log('they are equal');
} else {
    console.log("they aren't equal");
}

const obj1 = {};
const obj2 = {};
if (obj1 === obj2) {
    console.log('they are equal');
} else {
    console.log("they aren't equal");
}