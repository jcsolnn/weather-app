const CityList = (props) => (
  <div>
    <p>List of Cities: </p>
    {props.cities.map((city) => (
      <CityWeather {...city} />
    ))}
  </div>
);

const CityWeather = (props) => {
  const city = props;
  return (
    <>
      <h3>{city.name}</h3>
      <ul>
        <li>Temperature: {city.main.temp}</li>
        <li>Low: {city.main.temp_min}</li>
        <li>High: {city.main.temp_low}</li>
        <li>Humdity: {city.main.humidity}</li>
      </ul>
    </>
  );
};

export { CityList, CityWeather };
