/*
Example of fetching a URL and printing the status code in JavaScript.
*/

// Import https module
const https = require('https');

// Import exit from process module
const { exit } = require('process');

// Define the URL to fetch
const url = 'https://www.google.com';
// Make a GET request to the URL
https.get(url, (res) => {
    // Print the status code of the response
    console.log(`Status Code: ${res.statusCode}`);
    exit(0);
// Handle errors
}).on('error', (errorMessage) => {
    console.error(`Error fetching URL: ${errorMessage.message}`);
});

// Run file in terminal using node geturl.js 
console.log('URL fetch example completed.');