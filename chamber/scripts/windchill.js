// // Get the weather section
// const weatherSection = document.querySelector('.section3');

// // Check if the weather section exists
// if (weatherSection) {
//     // Get the paragraphs within the weather section
//     const paragraphs = weatherSection.querySelectorAll('p');

//     // Check if paragraphs exist
//     if (paragraphs.length >= 5) {
//         // Extract temperature and wind speed values
//         const temperatureStr = paragraphs[1].textContent;
//         const windSpeedStr = paragraphs[3].textContent;

//         // Extract numerical values from strings and convert to numbers
//         const temperature = parseFloat(temperatureStr.split(':')[1].trim().slice(0, -1));
//         const windSpeed = parseFloat(windSpeedStr.split(':')[1].trim().slice(0, -4));

//         // Function to calculate wind chill
//         function calculateWindChill(temperature, windSpeed) {
//             // Check if temperature and wind speed meet the specification limits
//             if (temperature <= 50 && windSpeed > 3.0) {
//                 // Calculate wind chill
//                 const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
//                 return windChill.toFixed(2); // Round to 2 decimal places
//             } else {
//                 return 'N/A';
//             }
//         }

//         // Display wind chill on the page
//         const windChillValue = calculateWindChill(temperature, windSpeed);
//         paragraphs[4].textContent += ` ${windChillValue}°`; // Update the windchill paragraph
//     } else {
//         console.error('Not enough paragraphs found in the weather section.');
//     }
// } else {
//     console.error('Weather section not found.');
// }

    // Sample current temperature and wind speed values
    const currentTemperature = 10; // in Celsius
    const windSpeed = 20; // in km/h

    // Calculate wind chill using the formula
    const windChill = 13.12 + (0.6215 * currentTemperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * currentTemperature * Math.pow(windSpeed, 0.16));

    // Update the wind chill value in the HTML
    document.getElementById('wind-chill-value').textContent = windChill.toFixed(2);
