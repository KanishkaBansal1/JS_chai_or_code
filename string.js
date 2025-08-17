let name="kanishka";
let surname="bansal";
console.log(name+" "+surname);
console.log(`my name is ${name} ${surname}`); //template literals with interpolation
console.log(`5+3 = ${5+3}`)


const name1= new String("kanishka");  //this wraps the primitive string inside a String object 
console.log(name1); // String object
console.log(name1[4]); // Accessing character at index 4
console.log(name1.__proto__); // Accessing the prototype of the String object It links to the object from which it inherits methods and properties.

console.log(name1.length); // Length of the string
console.log(name1.toUpperCase()); // Converts the string to uppercase
console.log(name1)  //original string remains unchanged because strings are immutable in JavaScript and stored in stack memory
console.log(name1.charAt(2)); // Accessing character at index 2
console.log(name1.indexOf("k")); // Finding the index of the first occurrence of 'k'
console.log(name1.lastIndexOf("k")); // Finding the index of the last occurrence of 'k'
console.log(name1.substring(0,3)) // Extracting a substring from index 0 to 3(not included)
console.log(name1.slice(-7,6)); // Extracting a slice from index -7 to 6 (negative index counts from the end)



const name2 = "  kanishka  ";
console.log(name2);
console.log(name2.trim()); // Removes whitespace from both ends of the string


const name3 = "kanishka";
console.log(name3.replace("k","K")); // Replaces the first occurrence of 'k' with 'K'
console.log(name3.includes('z')); // Checks if 'z' is present in the string
console.log(name3.split("a")); // Splits the string into an array using 'a' as the delimiter
