/* 

===========================================

I want to tell you a story. Shahin & Harun are friends. Shahin has 525 taka and Harun has 600 taka. They go to International Trade Fare to pay a visit.
They play a game that , if Shahin goes to trade fare before Harun, then they will exchange the money between each other. Harun goes late than Shahin. 
Implement the JavaScript code, where you can show that, The money of Shahin & Harun has been exchanged between each other.

===========================================

*/

let shahin = 525;
let harun = 600;
console.log(`shahin have ${shahin} TK before Swapping. harun have ${harun} TK before Swapping`);

harun = harun + shahin;
shahin = harun - shahin;
harun = harun - shahin;
console.log(`shahin have ${shahin} TK after Swapping. harun have ${harun} TK after Swapping`);
