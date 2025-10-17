/*
Open json object example in JavaScript.
*/

// Open JSON file
const fs = require('fs');

// Read JSON file
fs.readFile('../Test_Content/json_content.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }
    // Parse JSON data
    const jsonObject = JSON.parse(data);
    
    // Access and print values from JSON object
    console.log('Name:', jsonObject.firstName + ' ' + jsonObject.lastName);
    console.log('Age:', jsonObject.age);
});

// Run file in terminal using node json_objects.js 
console.log('JSON object example completed.');  