import CityWeather from './CityWeather';
import { ListGroup, Container } from 'react-bootstrap';

export default function WeatherDetails(props) {
  const city = props.city;
  return (
    <Container>
      <ListGroup horizontal>
        <ListGroup.Item style={{ border: 'none' }}>
          <CityWeather {...city} />
        </ListGroup.Item>
        <ListGroup.Item style={{ border: 'none' }}>
          <ListGroup variant='flush'>
            <ListGroup.Item>Low: {city.main.temp_min}&deg;</ListGroup.Item>
            <ListGroup.Item>High: {city.main.temp_max}&deg;</ListGroup.Item>
            <ListGroup.Item>Humidity: {city.main.humidity}%</ListGroup.Item>
            <ListGroup.Item>Wind: {city.wind.speed} mph</ListGroup.Item>
            <ListGroup.Item>Clouds: {city.clouds.all} %</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
