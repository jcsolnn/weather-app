import './App.css';
import { useState } from 'react';
import CityList from './components/CityList';
import AddCityForm from './components/AddCityForm';
import Header from './components/Header';
import DetailPage from './components/DetailPage';
import handleApiRequest from './utils/handleApiRequest';

function App() {
  const [cityList, setCityList] = useState([]);

  async function addNewCity(cityName) {
    const newCityData = await handleApiRequest(cityName);
    // console.log('Data returned from api: ' + JSON.stringify(newCityData));
    //add to list:create new array using spread then appending new data
    setCityList([...cityList, newCityData]);
  }
  //console.log('Current list of cities: ' + JSON.stringify(cityList));

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
