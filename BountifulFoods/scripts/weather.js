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
    // console.log('Weather data:', data);

    // Get the current day index
    const todayIndex = new Date().getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

    // Define an array of days of the week starting from the current day
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Filter data to include only entries for 9:00 AM for the next three days
    const filteredData = data.list.filter(entry => {
        // Convert timestamp to Date object
        const date = new Date(entry.dt * 1000);
        // Check if the entry is for 9:00 AM and skip one day
        return date.getHours() === 3 && date.getDate() !== new Date().getDate() + 1;
    });

    // console.log('Filtered data:', filteredData);

    // Extract day of the week, condition description, and icon for each filtered entry
    const forecast = filteredData.map((entry, index) => {
        // Calculate the day index based on the current day and increment it for each forecast day
        const dayIndex = (todayIndex + index + 1) % 7;
        return {
            dayOfWeek: daysOfWeek[dayIndex],
            description: entry.weather[0].description,
            icon: entry.weather[0].icon
        };
    });

    // console.log('Forecast:', forecast);

    // Display forecast on the page
    const forecastContainer = document.getElementById('weather-forecast');
    forecast.forEach(day => {
        const forecastItem = document.createElement('div');
        forecastItem.innerHTML = `<p>${day.dayOfWeek}: ${day.description}</p><img src="https://openweathermap.org/img/wn/${day.icon}.png" alt="${day.description} icon">`;
        forecastContainer.appendChild(forecastItem);
    });
})
.catch((error) => {
    // console.log('An error occurred while fetching weather forecast data:', error);
});


// this part was to try and get the css to be attached but it took too long rip

// fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=117.35&appid=97ce948849db0b090867d857dcdb694c&cnt=30&units=imperial`)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log('Weather data:', data);

//         // Get the current day index
//         const todayIndex = new Date().getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday

//         // Define an array of days of the week starting from the current day
//         const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//         // Filter data to include only entries for 9:00 AM for the next three days
//         const filteredData = data.list.filter(entry => {
//             // Convert timestamp to Date object
//             const date = new Date(entry.dt * 1000);
//             // Check if the entry is for 9:00 AM and skip one day
//             return date.getHours() === 9 && date.getDate() !== new Date().getDate() + 1;
//         });

//         console.log('Filtered data:', filteredData);

//         // Extract day of the week, condition description, and icon for each filtered entry
//         const forecast = filteredData.map((entry, index) => {
//             // Calculate the day index based on the current day and increment it for each forecast day
//             const dayIndex = (todayIndex + index + 1) % 7;
//             return {
//                 dayOfWeek: daysOfWeek[dayIndex],
//                 description: entry.weather[0].description,
//                 icon: entry.weather[0].icon
//             };
//         });

//         console.log('Forecast:', forecast);

//         // Display forecast on the page
//         forecast.forEach((day, index) => {
//           // Construct IDs for HTML elements
//           const dayOfWeekId = `day${index + 1}-of-week`;
//           const descriptionId = `day${index + 1}-description`;
//           const iconId = `day${index + 1}-icon`;

//           console.log('Icon:', day.icon); // Debugging log to check icon ID

//           // Fill in HTML elements with forecast data
//           document.getElementById(dayOfWeekId).textContent = day.dayOfWeek;
//           document.getElementById(descriptionId).textContent = day.description;
//           document.getElementById(iconId).setAttribute('src', `https://openweathermap.org/img/wn/${day.icon}.png`);
//           document.getElementById(iconId).setAttribute('alt', `${day.description} icon`); // Add alt attribute for accessibility
//         });
//     })
//     .catch((error) => {
//         console.log('An error occurred while fetching weather forecast data:', error);
//     });


// https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=117.35&appid=97ce948849db0b090867d857dcdb694c&cnt=8&units=imperial