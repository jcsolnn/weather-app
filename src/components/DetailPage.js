import CityWeather from './CityWeather';

export default function DetailPage(props) {
  const city = props.city;
  return (
    <>
      <h1>{city.name} Weather Details</h1>
      <CityWeather {...city} />
      <br />
      <ul>
        <li>
          Currently: {city.weather[0].main} - {city.weather[0].description}
        </li>
        <li>Humidity: {city.main.humidity}</li>
        <li>Wind: {city.wind.speed}</li>
        <li>Clouds: {city.clouds.all}</li>
        <br />
      </ul>
    </>
  );
}
