import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function AddCityForm(props) {
  const [cityName, setCityName] = useState('');
  async function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(cityName);
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
            defaultValue={cityName}
            onChange={(event) => setCityName(event.target.value)}
          />
        </Col>
      </Row>
    </Form>
  );
}
