import axios from 'axios';

const handleApiRequest = async (cityName) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  try {
    const response = await axios.get(WEATHER_BASE_URL, {
      params: {
        q: cityName,
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default handleApiRequest;
