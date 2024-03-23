const apiKey = 'e35c72d7b6d177a12d1670b7d11a79f6';
// const chamberLocation = {
//     city: 'Las Vegas',
//     countryCode: 'US' // If applicable
// };

// Function to fetch weather data
async function fetchWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=36.17187151307037&lon=-115.14330849154501&units=imperial&appid=${apiKey}`);
    const data = await response.json();
    const currentTemp = data.main.temp;
    const weatherDescription = data.weather[0].description;

    document.getElementById('current-temp').textContent = `Current Temperature: ${currentTemp}°F`;
    document.getElementById('weather-description').textContent = `Weather Description: ${weatherDescription}`;

    // Fetch three-day forecast
    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=36.17187151307037&lon=-115.14330849154501&units=imperial&appid=${apiKey}`);
    const forecastData = await forecastResponse.json();
    const forecastList = document.getElementById('forecast-list');
    forecastList.innerHTML = ''; // Clear previous forecast

    for (let i = 0; i < 3; i++) {
        const forecast = forecastData.list[i];
        const forecastTemp = forecast.main.temp;
        const forecastDescription = forecast.weather[0].description;
        const forecastItem = document.createElement('p');
        forecastItem.textContent = `Day ${i + 1}: ${forecastTemp}°F, ${forecastDescription}`;
        forecastList.appendChild(forecastItem);
    }
}

// Call fetchWeather function when the page loads
window.onload = fetchWeather;