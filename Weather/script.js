const API_KEY = '62ad6e880a4d2b277eede0ec17f3dc2e';
const API_URL =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
  var data = await response.json();

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML =
    Math.round(data.main.temp) + ' °c';
  document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
  document.querySelector('.wind').innerHTML = data.wind.speed + ' Km/h';

  if (data.weather[0].main == 'Clouds') {
    weatherIcon.src = 'images/clouds.png';
  } else if (data.weather[0].main == 'Clear') {
    weatherIcon.src = 'images/clear.png';
  } else if (data.weather[0].main == 'Rain') {
    weatherIcon.src = 'images/rain.png';
  } else if (data.weather[0].main == 'Drizzle') {
    weatherIcon.src = 'images/drizzle.png';
  } else if (data.weather[0].main == 'Mist') {
    weatherIcon.src = 'images/mist.png';
  }

  document.querySelector('.weather').style.display = 'block';
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});