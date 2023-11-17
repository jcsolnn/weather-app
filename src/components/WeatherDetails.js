import CityWeather from './CityWeather';
import { ListGroup, Container } from 'react-bootstrap';

export default function WeatherDetails(props) {
  const city = props.city;

  const formatValue = (x) => {
    return Number.parseFloat(x).toFixed(0);
  };

  return (
    <Container>
      <ListGroup horizontal>
        <ListGroup.Item style={{ border: 'none' }}>
          <CityWeather {...city} />
        </ListGroup.Item>
        <ListGroup.Item style={{ border: 'none' }}>
          <ListGroup variant='flush'>
            <ListGroup.Item>Low: {formatValue(city.main.temp_min)}&deg;</ListGroup.Item>
            <ListGroup.Item>High: {formatValue(city.main.temp_max)}&deg;</ListGroup.Item>
            <ListGroup.Item>Humidity: {formatValue(city.main.humidity)}%</ListGroup.Item>
            <ListGroup.Item>Wind: {formatValue(city.wind.speed)} mph</ListGroup.Item>
            <ListGroup.Item>Clouds: {formatValue(city.clouds.all)} %</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
