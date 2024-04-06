const apiKey = 'e35c72d7b6d177a12d1670b7d11a79f6';

// Function to fetch weather data
async function fetchWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=36.17187151307037&lon=-115.14330849154501&units=imperial&appid=${apiKey}`);
    const data = await response.json();
    const currentTemp = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;

    document.getElementById('current-temp').textContent = `Current Temperature: ${currentTemp}°F`;
    document.getElementById('weather-description').textContent = `Weather Description: ${weatherDescription}`;
    document.getElementById('weather-icon').setAttribute('src', `http://openweathermap.org/img/wn/${weatherIcon}.png`);
    document.getElementById('weather-icon').setAttribute('alt', `${weatherDescription} icon`);

    for (let i = 0; i < 3; i++) {
        const forecast = forecastData.list[i];
        const forecastTemp = forecast.main.temp;
        const forecastDescription = forecast.weather[0].description;
        const forecastItem = document.createElement('p');
        forecastItem.textContent = `Day ${i + 1}: ${forecastTemp}°F, ${forecastDescription}`;
        forecastList.appendChild(forecastItem);
    }
}

window.onload = fetchWeather;
