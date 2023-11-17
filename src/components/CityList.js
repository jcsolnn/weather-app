import { CardGroup, Container } from 'react-bootstrap';
import CityWeather from './CityWeather';

export default function CityList(props) {
  return (
    <CardGroup>
      {props.cities.map((city) => (
        <CityWeather {...city} key={city.id} />
      ))}
    </CardGroup>
  );
}
