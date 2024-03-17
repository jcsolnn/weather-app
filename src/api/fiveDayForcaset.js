import axios from 'axios';
//TODO: CALCULATE DAILY AVERAGE, 16 DAILY API NOT FREE
/**
 * Gets the 5 day / 3 hr weather forecast for specified city
 * Data is at 3 hr intervals, so 8 objs/day, therefore 40 objects expected in res.data.list
 * @returns on success, returns a 5 days worth of weather data at 3 hr intervals
 */
export async function getFiveDayForecast() {
  // const API_KEY_5DAY = process.env.REACT_APP_API_KEY_5DAY;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const FORCAST_BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
  const UNIT = 'imperial';
  const CITY = 'San Francisco';

  const response = await axios.get(FORCAST_BASE_URL, {
    params: {
      q: CITY,
      units: UNIT, //optional
      appid: API_KEY,
    },
  });
  console.log(response);
  return response;
}
