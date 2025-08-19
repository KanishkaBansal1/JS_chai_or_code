const score =400;
console.log(score); //400


const balance= new Number(100);
console.log(balance); //[Number: 100]

console.log(balance.toString()); // Converts the number to a string , output is 100
console.log(typeof(balance));
console.log(balance.toFixed(2).length); // Formats the number to 2 decimal places, output is "100.00" and length is 6
console.log(typeof(balance)); // typeof returns "object" because balance is a Number object


const othernumber =23.19;
console.log(othernumber.toFixed(3).toString().length) //we have to convert it to string first to get the length, output is 5
console.log(othernumber.toPrecision(3)) // Formats the number to 3 significant digits, output is "23.2"


const hundreds=100000;
console.log(hundreds.toLocaleString()); // Converts the number to a locale-specific string, output is "1,000,000" in US locale
console.log(hundreds.toLocaleString('en-IN')); // Converts the number to a locale-specific string in Indian locale, output is "1,00,00,000,000"



//+++++++++++++++MATHS+++++++++++++++++++
//console.log(Math);
console.log(Math.abs(-4)); // Returns the absolute value, output is 4
console.log(Math.abs(4)); // Returns the absolute value, output is 4

console.log(Math.round(4.6)); // Rounds to the nearest integer, output is 5
console.log(Math.round(4.4)); // Rounds to the nearest integer, output is 4


console.log(Math.floor(4.9)); // Rounds down to the nearest integer, output is 4
console.log(Math.ceil(4.2)); // Rounds up to the nearest integer, output is 5


console.log(Math.min(4, 2, 8, 1)); // Returns the minimum value, output is 1
console.log(Math.max(4, 2, 8, 1)); // Returns the maximum value, output is 8


console.log(Math.random()); // Returns a random number between 0 (inclusive) and 1 (exclusive), output is a random decimal number
console.log(Math.floor(Math.random()*10)+1); // // Returns a random number between 1 (inclusive) and 11 (exclusive), output is a random decimal number between 1 and 11


const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min); //