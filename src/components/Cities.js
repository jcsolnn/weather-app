import CityWeather from './CityWeather';
import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import { CityContext } from '../context/CityContext';

export default function Cities({ selectCity }) {
  //actuall array of cities is nested in arr[0] but why?
  const { cities } = useContext(CityContext);

  return (
    <Row className='g-4' md={4}>
      {cities.map((city) => (
        <CityWeather key={city.id} city={city} selectCity={selectCity} />
      ))}
    </Row>
  );
}
