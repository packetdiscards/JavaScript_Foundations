/*
Example of javaScript loop operations
*/

// For loop
console.log('For loop from 0 to 4:');
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
console.log('While loop from 0 to 4:');
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// For...of loop
const myArray = ['a', 'b', 'c'];
console.log('For...of loop over array:');
for (const element of myArray) {
    console.log(element);
}

// For...in loop
const myObject = {name: 'Alice', age: 25, city: 'New York'};
console.log('For...in loop over object properties:');
for (const key in myObject) {
    console.log(key + ': ' + myObject[key]);
}

// Run file in terminal using node loops.js 
console.log('Loops example completed.');