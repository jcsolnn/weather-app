import './App.css';
import { useState } from 'react';
import CityList from './components/CityWeather';
import AddCityForm from './components/AddCityForm';

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
      <AddCityForm onSubmit={addNewCity} />
      <CityList cities={cities} />
    </div>
  );
}

export default App;
