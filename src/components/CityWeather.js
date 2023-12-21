import { useEffect, useState } from 'react';
import { Card, ListGroup, Col } from 'react-bootstrap';
import { formatFloatValue, formatCurrentDateTime } from '../utils/utils';

export default function CityWeather({ city, selectCity }) {
  const [icon, setIcon] = useState(null);
  const IMG_URL = process.env.REACT_APP_API_ICON_URL;

  useEffect(() => {
    if (city) {
      let weather_icon = IMG_URL + city.weather[0].icon + '@2x.png';
      setIcon(weather_icon);
    }
    // eslint-disable-next-line
  }, [city]);

  function handleClick() {
    selectCity(city);
  }

  return (
    <>
      <Col>
        <Card onClick={handleClick} style={{ borderColor: '#f4d06f' }}>
          <Card.Body>
            <ListGroup horizontal>
              <ListGroup.Item style={{ border: 'none' }}>
                <Card.Title style={{ fontSize: '2rem' }}>{formatFloatValue(city.main.temp)}&deg; </Card.Title>
                <Card.Subtitle>{city.name}</Card.Subtitle>
              </ListGroup.Item>
              <ListGroup.Item style={{ border: 'none' }}>
                <Card.Img src={icon} />
              </ListGroup.Item>
            </ListGroup>
            <ListGroup variant='flush'>
              <ListGroup.Item>{formatCurrentDateTime(city.dt, city.timezone)}</ListGroup.Item>
              <ListGroup.Item>
                {formatFloatValue(city.main.temp_min)}&deg; | {formatFloatValue(city.main.temp_max)}&deg; feels like{' '}
                {formatFloatValue(city.main.feels_like)}&deg;
              </ListGroup.Item>
              <ListGroup.Item>
                <b>{city.weather[0].main}</b> - {city.weather[0].description}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
