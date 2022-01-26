/*

========================================================================================================================

Follow the equation bellow: 
3a + 5b 
 Sample Value of a & b 
Output
a = 5 , b = 3 
( 3 * 5 ) + ( 5 * 3 ) = 30
a = 10 , b = 20 
( 3 * 10 ) + ( 5 * 20 ) = 130



You can use any value of a,b. Just show me the specific output pattern. 
2. var institution = “European it”; 
• Write two different ways to get the character ‘ E ’ 
• Write two different ways to get the character ‘ t ’ 
• From the above string, print ‘ IT ’ 
• Get the specific string ‘ rope ’ from the institution variable, then print the length of that  string 
• I want to show “American it” from the above variable. 

========================================================================================================================

*/

// Problem 1

const firstProblem = (a: number, b: number): number => 3 * a + 5 * b;

console.log(`Problem 1 result is : ${firstProblem(10, 20)}`);

// Problem 2

const institution: string = 'European IT';
console.log(`Problem 2 Method 1 : ${institution[0]}`);
console.log(`Problem 2 Method 2 : ${institution[institution.length - institution.length]}`);
console.log(`Problem 2 Method 3 : ${institution.substr(0, 1)}`);
console.log(`Problem 2 Method 4 : ${institution.substring(0, 1)}`);
console.log(`Problem 2 Method 5 : ${institution.slice(0, 1)}`);

// Problem 3

console.log(`Problem 3 Method 1 : ${institution[10]}`);
console.log(`Problem 3 Method 2 : ${institution[institution.length - 1]}`);
console.log(`Problem 3 Method 3 : ${institution.substr(-1, 1)}`);
console.log(`Problem 3 Method 4 : ${institution.substring(9, 10)}`); // minus not supported
console.log(`Problem 3 Method 5 : ${institution.slice(-1)}`);

// Problem 4

const it: string = institution.slice(-2);
console.log(`From above string, print IT : ${it}`);

// Problem 5

const rope: string = institution.slice(2, 6);
console.log(`Get the specific string rope : ${rope}`);
console.log(`The length of that  string is : ${rope.length}`);

// Problem 6

console.log(`Replace the above variable to : ${institution.replace(institution, 'American it')}`);
