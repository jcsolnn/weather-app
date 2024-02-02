import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import { CityContext } from '../context/CityContext';
import CurrentWeather from './CurrentWeather';

export default function Cities() {
  const { cities } = useContext(CityContext);

  return (
    <Row className='g-4' md={4}>
      {cities.map((city) => (
        <CurrentWeather key={city.id} city={city} />
      ))}
    </Row>
  );
}
