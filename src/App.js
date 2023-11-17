import './App.css';
import { useEffect, useState } from 'react';
import CityList from './components/CityList';
import Header from './components/Header';
import { getCityWeather } from './api/cityWeather';
import { Container, Row, Col } from 'react-bootstrap';
import WeatherDetails from './components/WeatherDetails';

function App() {
  const [cityList, setCityList] = useState([]);
  const defaultCity = 'San Francisco';

  useEffect(() => {
    const loadDefaultCity = async () => {
      const defaultData = await getCityWeather(defaultCity);
      //todo prevent duplicates
      setCityList([...cityList, defaultData]);
    };
    loadDefaultCity();
  }, []);

  async function addNewCity(cityName) {
    const newCityData = await getCityWeather(cityName);
    setCityList([...cityList, newCityData]);
  }

  return (
    <Container fluid>
      <Header formSubmit={addNewCity} />
      <Row className='py-lg-5' style={{ backgroundColor: '#fff8f0' }}>
        <Col className='col-lg-6 col-md-8 mx-auto'>
          {cityList.length === 0 ? <p>No details to show ...</p> : <WeatherDetails city={cityList[0]} />}
        </Col>
      </Row>
      <Row className='py-lg-5'>
        <Col>
          <CityList cities={cityList} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
