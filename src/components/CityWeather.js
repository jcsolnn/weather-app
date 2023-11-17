import { Card, ListGroup } from 'react-bootstrap';

export default function CityWeather(city, { onClick }) {
  const IMG_URL = process.env.REACT_APP_API_ICON_URL;
  let weather_icon = IMG_URL + city.weather[0].icon + '@2x.png';

  const formatValue = (x) => {
    return Number.parseFloat(x).toFixed(0);
  };

  function handleClick() {
    console.log('in city weather: clicked ' + city.name); //gtg
    onClick(city.name); //not a func
  }
  return (
    <Card onClick={handleClick} style={{ width: '320px', borderColor: '#f4d06f' }}>
      <Card.Body>
        <ListGroup horizontal>
          <ListGroup.Item style={{ border: 'none' }}>
            <Card.Title style={{ fontSize: '2rem' }}>{formatValue(city.main.temp)}&deg; </Card.Title>
            <Card.Subtitle>{city.name}</Card.Subtitle>
          </ListGroup.Item>
          <ListGroup.Item style={{ border: 'none' }}>
            <Card.Img src={weather_icon} />
          </ListGroup.Item>
        </ListGroup>
        <Card.Text>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              {formatValue(city.main.temp_min)}&deg; | {formatValue(city.main.temp_max)}&deg; feels like{' '}
              {formatValue(city.main.feels_like)}&deg;
            </ListGroup.Item>
            <ListGroup.Item>
              <b>{city.weather[0].main}</b> - {city.weather[0].description}
            </ListGroup.Item>
          </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
