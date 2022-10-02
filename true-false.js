/* 
falsy:
false
0
empty string ('')
undefined
null
NaN
--------------------
truthy:
true
any number positive or negative not zero
any string including whitespace(' '), zero('0'), 'false'. 
[]
{}
anything else that is not falsey is truthy
*/
let x = parseFloat('hello');
console.log('this variableis', x);
if (x) {
    console.log('this variable is truthy');
} else {
    console.log('this variable is falsey');
}