"use strict";
// remove comma from strings
const arr = ['b', 'ang', 'la', 'des', 'h'];
const str = arr.join();
const withoutComma = str.split(',').join('');
console.log(withoutComma);
