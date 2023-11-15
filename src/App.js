import './App.css';
import { useState } from 'react';
import { CityList } from './components/CityWeather';
import AddCityForm from './components/AddCityForm';
import Header from './components/Header';
import DetailPage from './components/DetailPage';

const cityData = [
  { name: 'New York', temperature: 82, low: 78, high: 87, humidity: '48%' },
  { name: 'San Francisco', temperature: 73, low: 70, high: 78, humidity: '43%' },
  { name: 'Austin', temperature: 84, low: 80, high: 88, humidity: '70%' },
];

function App() {
  const [cities, setCities] = useState(cityData);
  function addNewCity(cityName) {
    console.log(`the city to add: ${cityName}`);
    //dummy data
    let newCity = { name: cityName, temperature: 75, low: 70, high: 80, humidity: '50%' };
    console.log({ newCity });
    //add to list
    //create new array using spread then appending new data
    setCities([...cities, newCity]);
  }
  return (
    <div className='App'>
      <Header />
      <AddCityForm onSubmit={addNewCity} />
      <CityList cities={cities} />
      <p>Details to be route ....</p>
      <DetailPage city={cities[1]} />
    </div>
  );
}

export default App;
