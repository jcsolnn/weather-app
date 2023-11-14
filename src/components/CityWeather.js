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
        <li>Temperature: {city.temperature}</li>
        <li>Low: {city.low}</li>
        <li>High: {city.high}</li>
        <li>Humdity: {city.humidity}</li>
      </ul>
    </>
  );
};

export default CityList;
