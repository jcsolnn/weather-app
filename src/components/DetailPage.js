import { CityWeather } from './CityWeather';

export default function DetailPage(props) {
  return (
    <>
      <h1> Weather Details</h1>
      <CityWeather {...props.city} />
      <p>Time/Event/Precip/Wind</p>
      <p>Hour Details</p>
    </>
  );
}
