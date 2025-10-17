/*
Example JavaScript file for date manipulation and formatting.
*/

// Create a new date object for the current date and time
const currentDate = new Date();
console.log('Current Date and Time:', currentDate.toString());

// Create a specific date object (e.g., January 1, 2023)
const specificDate = new Date('2023-01-01T00:00:00');
console.log('Specific Date:', specificDate.toString());

// Get individual components of the date
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based
const day = currentDate.getDate();
console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);

// Format date to a readable string
const options = { year: 'numeric', month: 'short', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString(undefined, options); // undefined uses the system's locale
console.log('Formatted Date:', formattedDate);

// Calculate the difference in days between two dates
const pastDate = new Date('2022-01-01T00:00:00');
const diffTime = Math.abs(currentDate - pastDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(`Difference between ${currentDate.toDateString()} and ${pastDate.toDateString()} is ${diffDays} days.`);

// Run file in terminal using node dates.js 
console.log('Date manipulation example completed.');