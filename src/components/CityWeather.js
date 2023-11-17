import { Card, ListGroup } from 'react-bootstrap';

export default function CityWeather(city) {
  const IMG_URL = process.env.REACT_APP_API_ICON_URL;
  let weather_icon = IMG_URL + city.weather[0].icon + '@2x.png';
  //todo: route to details
  return (
    <Card style={{ width: '320px', borderColor: '#f4d06f' }}>
      <Card.Body>
        <ListGroup horizontal>
          <ListGroup.Item style={{ border: 'none' }}>
            <Card.Title style={{ fontSize: '2rem' }}>{city.main.temp}&deg; </Card.Title>
            <Card.Subtitle>{city.name}</Card.Subtitle>
          </ListGroup.Item>
          <ListGroup.Item style={{ border: 'none' }}>
            <Card.Img src={weather_icon} />
          </ListGroup.Item>
        </ListGroup>
        <Card.Text>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              {city.main.temp_min}&deg; | {city.main.temp_max}&deg; feels like {city.main.feels_like}&deg;
            </ListGroup.Item>
            <ListGroup.Item>
              {city.weather[0].main} - {city.weather[0].description}
            </ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
