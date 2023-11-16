import axios from 'axios';
import { useEffect, useState } from 'react';

export default function HandleApiRequest() {
  const [weatherData, setWeatherData] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY;
  const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const cityName = 'San Antonio';

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await axios.get(WEATHER_BASE_URL, {
          params: {
            q: cityName,
            appid: API_KEY,
          },
        });
        setWeatherData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getWeatherData();
  }, []);
  //console.log(weatherData);
}
