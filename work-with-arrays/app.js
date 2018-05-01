// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// 1) Array.prototype.filter()
// 2) Array.prototype.map()



const people = ['Beck, Glenn', 'Becker, Carl', 'Becket, Samuel', 'Beddoes, Mick'];

const investors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    {first: 'Daniel', last: 'Düsentrieb', year: 1267, passed: 1301 },
]

// Working with Arrays

// Array.prototype.filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// 1. Filter the list of inventors for those who were born in in the 1500's

// Basic Way is a for Loop like this:
const investorsBornIn1500 = []
for (let i = 0; i < investors.length; i++) {
    if (investors[i].year >= 1500 && investors[i].year < 1600)
    investorsBornIn1500.push(investors[i])
}
console.table(investorsBornIn1500);
// The Output is a new Array that contains Galilei and Kepler.

// Same Way with the filter() function 
const investorsInFifteen = investors.filter(function(inventor) {
    return inventor.year >= 1500 && inventor.year < 1600
})
console.table(investorsInFifteen)
// the Output Array has the same Content, but i think it looks a bit cleaner.

// Lets check the ES6 (?) Way.
const fifteen = investors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
console.table(fifteen)
// the Output Array has the same Content, but in ES6 - cool :) 

// Play around with functions and Arrays
// const checkforFifteen = function(i) {
//   if(i.year >= 1500 && i.year < 1600){
//       return true
//   }
// }
// const fifteen = investors.filter(checkforFifteen);

// Array.prototype.map()




// .split() Examples
let stringToSplit = 'Alle, meine Entchen';
// console.log(stringToSplit.split(' '));
// Output: (3) ["Alle,", "meine", "Entchen"]
let stringToSplit1 = 'benny';
// console.log(stringToSplit1.split(''));
// Output: (5) ["b", "e", "n", "n", "y"]
let stringToSplit2 = '3:45';
// console.log(stringToSplit2.split(':'));
// Output: (2) ["3", "45"]