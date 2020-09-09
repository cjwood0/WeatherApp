const WEATHER_API_KEY = '161f9fdd93be500057046233737b9d9a';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

const zipUrl = (zip) => `${API_STEM}zip=${zip},us&units=imperial&appid=${WEATHER_API_KEY}`;

export function fetchForecast(zip) {
  return fetch(zipUrl(zip))
    .then(response => response.json())
    .then(responseJSON => {
      return {
        main: responseJSON.weather[0].main,
        description: responseJSON.weather[0].description,
        temp: responseJSON.main.temp,
        name: responseJSON.name
      };
    }).catch(e => console.log(e))
}