/* 
Simple example of using an API in JavaScript.
*/

// Import https module
const https = require('https');

// Define the API endpoint
const apiUrl = 'https://api.github.com';

// Set up options for the request, including headers
const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0' // GitHub API requires a User-Agent header
    }
};

// Make a GET request to the API endpoint
https.get(apiUrl, options, (res) => {
    let data = '';

    // A chunk of data has been received.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Parse JSON and print a specific value.
    res.on('end', () => {
        console.log(`Status Code: ${res.statusCode}`);
        try {
            const json = JSON.parse(data);
            // Print a particular value from the response:
            console.log('feeds_url:', json.feeds_url);
        } catch (err) {
            console.error('Failed to parse response as JSON:', err.message);
            console.log('Raw response:', data);
        }
        console.log('API example completed.');
    });

}).on('error', (err) => {
    console.error('Error fetching API:', err.message);
});