import { useState } from 'react';

export default function AddCityForm(props) {
  const [cityName, setCityName] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    console.log(cityName);
    props.onSubmit(cityName);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='cityName'
        type='text'
        placeholder='Enter City'
        value={cityName}
        onChange={(event) => setCityName(event.target.value)}
      />
      <button type='submit'>+</button>
    </form>
  );
}
