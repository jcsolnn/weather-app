import CityWeather from './CityWeather';

export default function CityList(props) {
  return (
    <div>
      <p>List of Cities: </p>
      {props.cities.map((city) => (
        <CityWeather {...city} />
      ))}
    </div>
  );
}
