import CityWeather from './CityWeather';

export default function DetailPage(props) {
  const city = props.city;
  return (
    <>
      <h1>{city.name} Weather Details</h1>
      <CityWeather {...city} />
      <br />
      <ol>
        <li>Current Time?</li>
        <li>
          Currently {city.weather.main}: {city.weather.description}
        </li>
        <li>Humidity: {city.main.humidty}</li>
        <li>Wind: {city.wind.speed}</li>
        <li>Clouds: {city.clouds.all}</li>
        <br />
        <p>Hour Details: TBD</p>
      </ol>
    </>
  );
}
