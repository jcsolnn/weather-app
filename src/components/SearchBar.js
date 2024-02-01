import { useContext, useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { CityContext } from '../context/CityContext';
import { getCityWeather } from '../api/cityWeather';

export default function SearchBar() {
  const [cityName, setCityName] = useState('');
  const { dispatch } = useContext(CityContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await getCityWeather(cityName);
    if (response.statusCode === 200) {
      dispatch({ type: 'add', city: response.content });
    } else {
      dispatch({ type: 'error', error: response.content });
    }
    setCityName('');
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
