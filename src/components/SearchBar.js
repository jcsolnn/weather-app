import { useContext, useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { CityContext } from '../context/CityContext';
import { getCityWeather } from '../api/cityWeather';

export default function SearchBar() {
  const [cityName, setCityName] = useState('');
  const { dispatch } = useContext(CityContext);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const city = await getCityWeather(cityName);
      dispatch({ type: 'add', payload: city });
      setCityName('');
    } catch (err) {
      //TODO: handle 404 if city not found
      //if(city.cod === 404)
      console.log(err);
    }
  }
  return (
    <Form className='d-flex' onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Control
            name='cityName'
            type='search'
            placeholder='Enter City'
            value={cityName}
            onChange={(event) => setCityName(event.target.value)}
          />
        </Col>
      </Row>
    </Form>
  );
}
