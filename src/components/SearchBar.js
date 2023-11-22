import { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export default function SearchBar({ onSubmit }) {
  const [cityName, setCityName] = useState('');
  async function handleSubmit(event) {
    event.preventDefault();
    onSubmit(cityName);
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
