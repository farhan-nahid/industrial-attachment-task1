/* 

1) If we divide 123 with 7, then the remainder is less than 10 
2) If we divide 4 with 2, then the remainder is equal to 0 
3) If we divide 7 with 2, then the remainder is not equal to 0 
4) If we divide 10 with 2, then the remainder is not equal to 1 
5) If we divide 15 with 2, then the remainder is equal to 1 
6) Your age is greater than or equal to 18? 
7) I will but mobile then treat my friend or buy a headphone 
var country = “Bangladesh”; 
8) The third character of the variable county is g? 
9) What is the character at position 8? 
10) The length of this variable is greater than 10

*/

// problem 1-5
const checkCondition = (condition: boolean, problemName: string): string => {
  return condition === true ? `${problemName} is true` : `${problemName} is false.`;
};

const problem1: boolean = 123 % 7 < 10;
const problem2: boolean = 4 % 2 === 0;
const problem3: boolean = 7 % 2 !== 0;
const problem4: boolean = 10 % 2 !== 1;
const problem5: boolean = 15 % 2 === 1;

console.log(checkCondition(problem1, 'problem1'));
console.log(checkCondition(problem2, 'problem2'));
console.log(checkCondition(problem3, 'problem3'));
console.log(checkCondition(problem4, 'problem4'));
console.log(checkCondition(problem5, 'problem5'));

// problem 6
const problem6 = (myAge: number): string => (myAge >= 18 ? 'Yes I am 18+' : 'No I am not 18 years old');
console.log(`problem6 : ${problem6(20)}`);

// problem 7
const problem7 = (mobile: boolean, treat: boolean, headphone: boolean): string => (mobile && (treat || headphone) ? 'condition is true' : 'condition is false');
const buyMobile: boolean = true;
const treatMyFriend: boolean = false;
const buyHeadphone: boolean = true;
console.log(`problem7 : ${problem7(buyMobile, treatMyFriend, buyHeadphone)}`);

// problem8
const country: string = 'Bangladesh';
country[2] === 'g' ? console.log('Yes the 3rd character is g') : console.log('No the 3rd character is not g');

// problem9
console.log(`${country[7]} is the character at position 8`);

// problem10
country.length > 10 ? console.log(`yes ${country} have 10 or lower then 10 character`) : console.log(`No ${country} does not have more then 10 character`);
