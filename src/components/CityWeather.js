export default function CityWeather(city) {
  const IMG_URL = process.env.REACT_APP_API_ICON_URL;
  let weather_icon = IMG_URL + city.weather[0].icon + '.png';
  //todo: route to details
  return (
    <div>
      <h3>{city.name}</h3>
      <img src={weather_icon} alt='weather icon' />
      <ul>
        <li>Temperature: {city.main.temp}</li>
        <li>Low: {city.main.temp_min}</li>
        <li>High: {city.main.temp_max}</li>
        <li>Feels like: {city.main.feels_like}</li>
      </ul>
    </div>
  );
}
