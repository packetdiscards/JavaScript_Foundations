/*
Simple example of getting the status of TGL tube lines using an API in JavaScript.
*/

// Import https module
const https = require('https');

// Define the API endpoint for TGL tube status
const apiUrl = 'https://api.tfl.gov.uk/Line/Mode/tube/Status';

// Make a GET request to the API endpoint
https.get(apiUrl, (res) => {
    let data = '';

    // A chunk of data has been received.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Parse JSON and print tube line statuses.
    res.on('end', () => {
        console.log(`Status Code: ${res.statusCode}`);
        try {
            const json = JSON.parse(data);
            // Print the status of each tube line
            json.forEach(line => {
                console.log(`${line.name}: ${line.lineStatuses[0].statusSeverityDescription}`);
            });
        } catch (err) {
            console.error('Failed to parse response as JSON:', err.message);
            console.log('Raw response:', data);
        }
        console.log('Tube status example completed.');
    });

}).on('error', (err) => {
    console.error('Error fetching tube status:', err.message);
});

// Run file in terminal using node tube_status.js 
console.log('Fetching tube status example...');
