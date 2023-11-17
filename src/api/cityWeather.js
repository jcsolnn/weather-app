import axios from 'axios';

export async function getCityWeather(cityName) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const WEATHER_BASE_URL = process.env.REACT_APP_API_URL;
  const UNIT = 'imperial';
  try {
    const response = await axios.get(WEATHER_BASE_URL, {
      params: {
        q: cityName,
        units: UNIT,
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
