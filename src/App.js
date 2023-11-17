import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import { getCityWeather } from './api/cityWeather';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import WeatherDetails from './components/WeatherDetails';
import CityWeather from './components/CityWeather';

function App() {
  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const defaultCities = ['San Francisco', 'Sacramento', 'San Jose'];

  useEffect(() => {
    const loadDefaultCities = async () => {
      const data1 = await getCityWeather(defaultCities[0]);
      const data2 = await getCityWeather(defaultCities[1]);
      const data3 = await getCityWeather(defaultCities[2]);
      const cityListArr = [data1, data2, data3]
      setCityList(cityListArr);
    };
    loadDefaultCities();
  }, []);


  async function addNewCity(cityName) {
    const newCityData = await getCityWeather(cityName);
    setCityList([...cityList, newCityData]);
  }

  function selectCity(cityName) {
    console.log('in app: ' + cityName + ' was clicked');
    setSelectedCity(cityName);
  }

  return (
    <Container fluid>
      <Header formSubmit={addNewCity} />
      <Row className='py-lg-5' style={{ backgroundColor: '#fff8f0' }}>
        <Col className='col-lg-6 col-md-8 mx-auto'>
          {selectedCity ?  <WeatherDetails city={selectedCity}/> : <p>No details to show ...</p>}
        </Col>
      </Row>
      <Row className='py-lg-5 justify-content-center'>
        <Col>
          <CardGroup>
            {cityList.map((city) => (
              <CityWeather key={city.id} city={city} selectCity={selectCity}  />
            ))}
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
