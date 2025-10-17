/*
Simple example of fetching stock price data from a public API in JavaScript.
*/

// Get finnhub.io API key from environment variable
// Make sure to set your API key in the environment variable before running the script
// Example: export FINNHUB_API_KEY='your_api_key_here'  

// import api key from environment variable
const apiKey = process.env.FINNHUB_API_KEY;
if (!apiKey) {
    console.error('Please set the FINNHUB_API_KEY environment variable.');
    process.exit(1);
}       

// Import https module
const https = require('https');

// Define the stock symbol and API endpoint
const stockSymbol = 'NET';
const apiUrl = `https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=${apiKey}`;

// Make a GET request to the API endpoint
https.get(apiUrl, (res) => {
    let data = '';

    // A chunk of data has been received.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Parse JSON and print stock price.
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            console.log(`Current price of ${stockSymbol}: $${json.c} ${json.dp} `); // 'c' is current price, 'dp' is daily percent change
        } catch (err) {
            console.error('Failed to parse response as JSON:', err.message);
            console.log('Raw response:', data);
        }
        console.log('Stock price example completed.');
    });

}).on('error', (err) => {
    console.error('Error fetching stock price:', err.message);
});

// Run file in terminal using node stcok_price_example.js 
console.log('Fetching stock price example...');