import './App.css';
import { useEffect, useState } from 'react';
import CityList from './components/CityList';
import AddCityForm from './components/AddCityForm';
import Header from './components/Header';
import DetailPage from './components/DetailPage';
import { getCityWeather } from './api/cityWeather';

function App() {
  const [cityList, setCityList] = useState([]);
  const defaultCity = 'San Francisco';

  useEffect(() => {
    const loadDefaultCity = async () => {
      const defaultData = await getCityWeather(defaultCity);
      setCityList([...cityList, defaultData]);
    };
    loadDefaultCity();
  }, []);

  async function addNewCity(cityName) {
    const newCityData = await getCityWeather(cityName);
    setCityList([...cityList, newCityData]);
  }

  return (
    <div className='App'>
      <Header />
      <AddCityForm onSubmit={addNewCity} />
      <CityList cities={cityList} />
      <br />
      {cityList.length === 0 ? <p>No details to show ...</p> : <DetailPage city={cityList[0]} />}
    </div>
  );
}

export default App;
