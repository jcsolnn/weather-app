import './App.css';
import { useEffect, useState, useReducer } from 'react';
import Header from './components/Header';
import { getCityWeather } from './api/cityWeather';
import { Container, Row } from 'react-bootstrap';
import WeatherDetails from './components/WeatherDetails';
import Cities from './components/Cities';
import { CityProvider } from './context/CityContext';
import cityReducer from './cityReducer';

function App() {
  //const [cityList, setCityList] = useState([]);
  const [cityList, dispatch] = useReducer(cityReducer, []);
  const [selectedCity, setSelectedCity] = useState(null);
  const defaultCities = ['San Francisco', 'Sacramento', 'San Jose'];

  useEffect(() => {
    const loadDefaultCities = async () => {
      const data1 = await getCityWeather(defaultCities[0]);
      const data2 = await getCityWeather(defaultCities[1]);
      const data3 = await getCityWeather(defaultCities[2]);
      // const dataList = [data1, data2, data3];
      dispatch({ type: 'fetch', payload: [data1, data2, data3] });
      // setCityList(dataList);
      // setSelectedCity(dataList[0]);
    };
    loadDefaultCities();
    // eslint-disable-next-line
  }, []);
  /*
  async function addNewCity(cityName) {
    const data = await getCityWeather(cityName);
    console.log(data.cod);
    if (data.cod !== 200) {
      //TODO:
      console.log('trigger alert/warning ...');
    } else {
      setCityList([...cityList, data]);
    }
  }
*/
  function selectCity(cityName) {
    console.log('in app: ' + cityName + ' was clicked');
    setSelectedCity(cityName);
  }

  return (
    <CityProvider cities={cityList} dispatch={dispatch}>
      <Container>
        <Row>
          <Header />
        </Row>
        <Row className='py-lg-4' style={{ backgroundColor: '#fff8f0' }}>
          {selectedCity ? <WeatherDetails city={selectedCity} /> : <p>No details to show ...</p>}
        </Row>
        <Row className='py-lg-2'>
          <Cities />
        </Row>
      </Container>
    </CityProvider>
  );
}

export default App;
