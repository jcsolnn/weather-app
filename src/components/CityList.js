import { Container } from 'react-bootstrap';
import CityWeather from './CityWeather';

export default function CityList(props) {
  return (
    <Container>
      {props.cities.map((city) => (
        <CityWeather {...city} key={city.id} />
      ))}
    </Container>
  );
}
