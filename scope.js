/* 
There are three scope local,global and block scope.
*/
//Here result is in local scope of add function ad age is in global scope
const age = 32;
function add(num1, num2) {
    const result = num1 + num2;
    console.log(result);
}
// add(2, 33);
// console.log(result);


function add1(num1, num2) {
    const result = num1 + num2;
    if (result > 9) {

        //here mood is in block scope, but if we use var then mood will be in local scope by hoisting.
        const mood = 'happy';

        // if we use var then mood will be in local scope by hoisting.
        // var  mood = 'happy';

        //if we declear mood without anything then it will go to global scope.it is called global leaking
        // mood = 'happy';
        console.log(mood);
    }
    return result;
}
console.log(add1(2, 33));
