  // select HTML elements in the document
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');

    const url = 'https://api.openweathermap.org/data/2.5/weather';

    // Define an asynchronous function named "apiFetch()"
    async function apiFetch() {
      try {
        const response = await fetch(`${url}?lat=49.7561&lon=6.6415&units=imperial&appid=e35c72d7b6d177a12d1670b7d11a79f6`);
        if (response.ok) {
          const data = await response.json();
          console.log(data); // testing only
          displayResults(data); // uncomment when ready
        } else {
          throw Error(await response.text());
        }
      } catch (error) {
        console.log(error);
      }
    }

    // Invoke the apiFetch() function
    apiFetch();

    // Function to display results to the HTML document
    function displayResults(data) {
      currentTemp.innerHTML = `${data.main.temp}&deg;F`;
      const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      let desc = data.weather[0].description;
      weatherIcon.setAttribute('src', iconsrc);
      weatherIcon.setAttribute('alt', desc);
      captionDesc.textContent = `${desc}`;
    }