// problem 1
const firstProblem = (a, b) => 3 * a + 5 * b;
console.log(`Problem 1 result is : ${firstProblem(10, 20)}`);

// problem 2
const institution = 'European IT';
console.log(`Problem 2 Method 1 : ${institution[0]}`);
console.log(`Problem 2 Method 2 : ${institution.substring(0, 1)}`);

// problem 3
console.log(`Problem 3 Method 1 : ${institution[institution.length - 1]}`);
console.log(`Problem 3 Method 2 : ${institution.substr(-1, 1)}`);

// problem 4
console.log(`From above string, print IT : ${institution.slice(-2)}`);

// problem 5
const rope = institution.slice(2, 6);
console.log(`Get the specific string rope : ${rope}`);
console.log(`The length of that  string is : ${rope.length}`);

// problem 6
console.log(`Replace the above variable to : ${institution.replace(institution, 'American it')}`);
