fetch(`https://api.openweathermap.org/data/2.5/weather?lat=33.15&lon=117.35&appid=97ce948849db0b090867d857dcdb694c&units=imperial`)
    .then((response) => response.json())
    .then((data) => {
        const temperature = Math.round(data.main.temp);
        const weatherConditionData = data.weather[0].description;
        const weatherIcon = data.weather[0].icon;
        const humidity = data.main.humidity;

        document.getElementById('current-temp').textContent = temperature + ' °F';
        document.getElementById('weather-description').textContent = weatherConditionData;
        document.getElementById('current-weather-icon').setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
        document.getElementById('humidity').textContent = humidity + '%';
    })
    .catch((error) => {
        console.log('An error occurred while fetching current weather data:', error);
        document.getElementById('current-weather').textContent = 'Failed to fetch current weather data';
    });

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=117.35&appid=97ce948849db0b090867d857dcdb694c&cnt=30&units=imperial`)
    .then((response) => response.json())
    .then((data) => {
        
        // Get the current day index
        const todayIndex = new Date().getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
        
        // Define an array of days of the week starting from the current day
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        // Filter data to include only entries for 9:00 AM for the next three days
        const filteredData = data.list.filter(entry => {
            const date = new Date(entry.dt * 1000);
            // Check if the entry is for 9:00 AM and skip one day
            return date.getHours() === 3 && date.getDate() !== new Date().getDate() + 1;
        });



        // Extract day of the week, temperature, and icon for each filtered entry
        const forecast = filteredData.map((entry, index) => {
            // Calculate the day index based on the current day and increment it for each forecast day
            const dayIndex = (todayIndex + index + 1) % 7;
            return {
                dayOfWeek: daysOfWeek[dayIndex],
                temperature: Math.round(entry.main.temp) + ' °F',
                icon: entry.weather[0].icon
            };
        });

        // Display forecast on the page
        const forecastContainer = document.getElementById('weather-forecast');
        forecast.forEach(day => {
            const forecastItem = document.createElement('div');
            forecastItem.innerHTML = `<p>${day.dayOfWeek}: ${day.temperature}</p><img src="https://openweathermap.org/img/wn/${day.icon}.png" alt="${day.dayOfWeek} icon">`;
            forecastContainer.appendChild(forecastItem);
        });
    })
    .catch((error) => {
        console.error('An error occurred while fetching weather forecast:', error);
    });