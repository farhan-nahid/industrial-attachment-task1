'use strict';

/*

============================================================

 I have two equations bellow:

 a2 + 2ab + b2
 a3 + 3a2b + 3ab2 + b3

Implement This using Javascript with any value of a , b

============================================================

*/

const problem1 = (a, b) => Math.pow(a, 2) + 2 * a * b + Math.pow(b, 2);
const problem2 = (a, b) => Math.pow(a, 3) + 3 * Math.pow(a, 2) * b + 3 * a * Math.pow(b, 2) + Math.pow(b, 3);

console.log(`problem1 result is : ${problem1(8, 9)}`);
console.log(`problem2 result is : ${problem2(8, 9)}`);
