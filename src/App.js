import './App.css';
import { useState } from 'react';
import CityList from './components/CityWeather';

const cityData = [
  { name: 'New York', temperature: 82, low: 78, high: 87, humidity: '48%' },
  { name: 'San Francisco', temperature: 73, low: 70, high: 78, humidity: '43%' },
  { name: 'Austin', temperature: 84, low: 80, high: 88, humidity: '70%' },
];

function App() {
  const [cities, setCities] = useState(cityData);
  return (
    <div className='App'>
      <CityList cities={cities} />
    </div>
  );
}

export default App;
