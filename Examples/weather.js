/*
Simple example to get the current weather for a location using Open-Meteo API.
*/

// Import https module
const https = require('https');

// Mapping of Open-Meteo weather codes to descriptions
const weatherCodeDescriptions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    56: 'Light freezing drizzle',
    57: 'Dense freezing drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Light freezing rain',
    67: 'Heavy freezing rain',
    71: 'Slight snow fall',
    73: 'Moderate snow fall',
    75: 'Heavy snow fall',
    77: 'Snow grains',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    85: 'Slight snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm: slight or moderate',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail'
};

function getWeatherDescription(code) {
    if (code === undefined || code === null) return '(no weather code)';
    return weatherCodeDescriptions[code] || 'Unknown weather code';
}

// Define the latitude and longitude for the location (e.g., Coln St. Aldwyns, UK)
const latitude = 51.7333;
const longitude = -1.7833;

// Define the API endpoint for current weather data
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

// Make a GET request to the API endpoint
https.get(apiUrl, (res) => {
    res.setEncoding('utf8'); // get strings rather than Buffers
    let data = '';

    // A chunk of data has been received.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Parse JSON and print current weather.
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            const currentWeather = json.current_weather;
            if (!currentWeather) {
                console.log('No current_weather field in response.');
            } else {
                console.log(`Current temperature: ${currentWeather.temperature}°C`);
                console.log(`Wind speed: ${currentWeather.windspeed} km/h`);
                const code = currentWeather.weathercode;
                console.log(`Weather code: ${code} — ${getWeatherDescription(code)}`);
            }
        } catch (err) {
            console.error('Failed to parse response as JSON:', err.message);
            console.log('Raw response:', data);
        }
        console.log('Weather example completed.');
    });

}).on('error', (err) => {
    console.error('Error fetching weather data:', err.message);
});

// Run file in terminal using node weather.js 
console.log('Fetching current weather example...');