/* 

        A
        AB
        ABC
        ABCD
        ABCDE


*/

const num: number = 5;
let string: string = '';

for (let i: number = 1; i <= num; i++) {
  for (let j: number = 0; j < i; j++) {
    string += String.fromCharCode(65 + j);
  }
  string += '\n';
}

console.log(string);
