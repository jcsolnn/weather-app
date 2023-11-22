import CityWeather from './CityWeather';
import { ListGroup, Col } from 'react-bootstrap';
import { formatFloatValue } from '../utils/utils';

export default function WeatherDetails({ city }) {
  return (
    <>
      {city && (
        <Col className='d-flex justify-content-center'>
          <ListGroup horizontal>
            <ListGroup.Item style={{ border: 'none' }}>
              <CityWeather city={city} />
            </ListGroup.Item>
            <ListGroup.Item style={{ border: 'none' }}>
              <ListGroup variant='flush'>
                <ListGroup.Item>Low: {formatFloatValue(city.main.temp_min)}&deg;</ListGroup.Item>
                <ListGroup.Item>High: {formatFloatValue(city.main.temp_max)}&deg;</ListGroup.Item>
                <ListGroup.Item>Humidity: {formatFloatValue(city.main.humidity)}%</ListGroup.Item>
                <ListGroup.Item>Wind: {formatFloatValue(city.wind.speed)} mph</ListGroup.Item>
                <ListGroup.Item>Clouds: {formatFloatValue(city.clouds.all)} %</ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      )}
    </>
  );
}
