import { getFiveDayForecast } from '../api/fiveDayForcaset';
import { useState, useEffect } from 'react';

export default function FiveDayForecast() {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      async function getData() {
        const res = await getFiveDayForecast();
        setData(res.data.list);
      }
      getData();
    } catch (err) {
      console.log(err.response);
    }
  }, []);
  console.log(data);
  return (
    <>
      <h2>5 day forecast</h2>
      {data && (
        <ul>
          {data.map((d) => (
            <li>{d.weather[0].description}</li>
          ))}
        </ul>
      )}
    </>
  );
}
