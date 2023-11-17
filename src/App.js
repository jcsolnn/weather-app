import './App.css';
import { useEffect, useState } from 'react';
import CityList from './components/CityList';
import Header from './components/Header';
import { getCityWeather } from './api/cityWeather';
import { Container, Row, Col } from 'react-bootstrap';
import WeatherDetails from './components/WeatherDetails';

function App() {
  const [cityList, setCityList] = useState([]);
  const defaultCities = ['San Francisco', 'Sacramento', 'San Jose'];

  useEffect(() => {
    const loadDefaultCities = async () => {
      const data1 = await getCityWeather(defaultCities[0]);
      const data2 = await getCityWeather(defaultCities[1]);
      const data3 = await getCityWeather(defaultCities[2]);
      setCityList([...cityList, data1, data2, data3]);
    };
    loadDefaultCities();
  }, []);

  async function addNewCity(cityName) {
    const newCityData = await getCityWeather(cityName);
    setCityList([...cityList, newCityData]);
  }

  function selectedCity(city) {
    console.log('in app: city ' + city.name + 'was clicked');
  }
  return (
    <Container fluid>
      <Header formSubmit={addNewCity} />
      <Row className='py-lg-5' style={{ backgroundColor: '#fff8f0' }}>
        <Col className='col-lg-6 col-md-8 mx-auto'>
          {cityList.length === 0 ? <p>No details to show ...</p> : <WeatherDetails city={cityList[0]} />}
        </Col>
      </Row>
      <Row className='py-lg-5 justify-content-center'>
        <Col>
          <CityList cities={cityList} onCityClick={selectedCity} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
