import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TestResponse() {
  const [coordinates, setCoordinates] = useState({ lat: 0, lon: 0 });
  const API_KEY = process.env.REACT_APP_API_KEY;
  const cityName = 'San Antonio';

  useEffect(() => {
    const getCoordinates = async () => {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
      );
      //setData(response.data);
      setCoordinates({ lat: response.data[0].lat, lon: response.data[0].lon });
    };
    getCoordinates();
  }, []);
  console.log(`Latitude: ${coordinates.lat} | Longitude: ${coordinates.lon}`);
}
