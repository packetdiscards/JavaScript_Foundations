/*
Simple example of reading and parsing a CSV file in JavaScript.
*/

// Import the 'fs' module to read files
const fs = require('fs');

// Function to read and parse CSV file
function readCSVFile(filePath) {
    // Read the CSV file asynchronously
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading CSV file:', err);
            return;
        }
        
        // Split the file content by lines
        const lines = data.split('\n');
        
        // Parse each line and print the values
        lines.forEach((line, index) => {
            const values = line.split(',');
            console.log(`Line ${index + 1}:`, values);
        });
    });
}

// Specify the path to the CSV file
const csvFilePath = '../Test_Content/MOCK_DATA.csv';

// Call the function to read and parse the CSV file
readCSVFile(csvFilePath);

// Run file in terminal using node csv_example.js 
console.log('CSV example completed.');