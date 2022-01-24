// problem 1-5
const checkCondition = (condition, problemName) => (condition === true ? `${problemName} is true` : `${problemName} is false.`);

const problem1 = 123 % 7 < 10;
const problem2 = 4 % 2 === 0;
const problem3 = 7 % 2 !== 0;
const problem4 = 10 % 2 !== 1;
const problem5 = 15 % 2 === 1;

console.log(checkCondition(problem1, 'problem1'));
console.log(checkCondition(problem2, 'problem2'));
console.log(checkCondition(problem3, 'problem3'));
console.log(checkCondition(problem4, 'problem4'));
console.log(checkCondition(problem5, 'problem5'));

// problem 6
const problem6 = (myAge) => (myAge >= 18 ? 'Yes I am 18+' : 'No I am not 18 years old');
console.log(`problem6 : ${problem6(20)}`);

// problem 7
const problem7 = (mobile, treat, headphone) => (mobile && (treat || headphone) ? 'condition is true' : 'condition is false');

const buyMobile = true;
const treatMyFriend = false;
const buyHeadphone = false;
console.log(`problem7 : ${problem7(buyMobile, treatMyFriend, buyHeadphone)}`);

// problem8
const country = 'Bangladesh';
country[2] === 'g' ? console.log('Yes the 3rd character is g') : console.log('No the 3rd character is not g');

// problem9
console.log(`${country[7]} is the character at position 8`);

// problem10
country.length > 10 ? console.log(`yes ${country} have 10 or grater then 10 character`) : console.log(`No ${country} does not have more then 10 character`);
