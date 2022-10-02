/*  data types in javascript
a.premitive b.non-premitive

1.number
2.string
3.boolean
4.undefined
5.null
6.object(non-premitive)
7.symbol */

let a = 'hello';
let b = a;
// console.log(a, b);
a = 'gello'
// console.log(a, b);

const x = { job: 'web developer' };
const y = x;
// console.log(x, y);
// x.job = 'font end developer';
// console.log(x, y);
y.job = 'backend developer';
console.log(x, y);

