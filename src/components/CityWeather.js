export default function CityWeather(city) {
  //todo: route to details
  return (
    <div>
      <h3>{city.name}</h3>
      <ul>
        <li>Temperature: {city.main.temp}</li>
        <li>Low: {city.main.temp_min}</li>
        <li>High: {city.main.temp_low}</li>
        <li>Feels like: {city.main.feels_like}</li>
      </ul>
    </div>
  );
}
