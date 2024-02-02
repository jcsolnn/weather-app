import { ListGroup, Col } from 'react-bootstrap';
import { formatFloatValue } from '../utils/utils';
import { useContext } from 'react';
import { CityContext } from '../context/CityContext';
import FiveDayForecast from './FiveDayForecast';
import HourlyForecast from './HourlyForecast';
import CurrentWeather from './CurrentWeather';

export default function WeatherSummary() {
  const { selectedCity } = useContext(CityContext);
  return (
    <>
      {selectedCity && (
        <>
          <Col className='d-flex justify-content-center'>
            <ListGroup horizontal>
              <ListGroup.Item style={{ border: 'none' }}>
                <CurrentWeather city={selectedCity} />
              </ListGroup.Item>
              <ListGroup.Item style={{ border: 'none' }}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>Low: {formatFloatValue(selectedCity.main.temp_min)}&deg;</ListGroup.Item>
                  <ListGroup.Item>High: {formatFloatValue(selectedCity.main.temp_max)}&deg;</ListGroup.Item>
                  <ListGroup.Item>Humidity: {formatFloatValue(selectedCity.main.humidity)}%</ListGroup.Item>
                  <ListGroup.Item>Wind: {formatFloatValue(selectedCity.wind.speed)} mph</ListGroup.Item>
                  <ListGroup.Item>Clouds: {formatFloatValue(selectedCity.clouds.all)} %</ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <FiveDayForecast />
          </Col>
          <Col>
            <HourlyForecast />
          </Col>
        </>
      )}
    </>
  );
}
