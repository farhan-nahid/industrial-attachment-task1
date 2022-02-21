/* 

*****
****
***
**
*


*/

const num = 10;
let string = '';

for (let i = 1; i <= num; i++) {
  for (let j = 0; j < num - i + 1; j++) {
    string += '*';
  }
  string += '\n';
}

console.log(string);
