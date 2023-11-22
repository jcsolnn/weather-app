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
    if (err.response) {
      if (err.response.status === 404) {
        return err.response.data;
      }
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(err.response.data); //{cod:404,message:'city not fount'}
      console.log(err.response.status); //404
      //console.log(err.response.headers);
    } else if (err.request) {
      // The request was made but no response was received
      // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(err.request);
    } else {
      // Something happened in setting up the request that triggered an err
      console.log('err', err.message);
    }
  }
}
