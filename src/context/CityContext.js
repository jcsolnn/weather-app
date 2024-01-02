import { createContext, useEffect, useReducer } from 'react';
import cityReducer from '../cityReducer';
import { getCityWeather } from '../api/cityWeather';

const CityContext = createContext();

const initialState = {
  cities: [],
  selectedCity: null,
};

function CityProvider({ children }) {
  const [appState, dispatch] = useReducer(cityReducer, initialState);

  const defaultCities = ['San Francisco', 'Sacramento', 'San Jose'];

  useEffect(() => {
    const loadDefaultCities = async () => {
      const data1 = await getCityWeather(defaultCities[0]);
      const data2 = await getCityWeather(defaultCities[1]);
      const data3 = await getCityWeather(defaultCities[2]);
      dispatch({ type: 'fetch', cities: [data1, data2, data3] });
    };
    loadDefaultCities();
    // eslint-disable-next-line
  }, []);

  const { cities, selectedCity } = appState;

  return <CityContext.Provider value={{ cities, selectedCity, dispatch }}>{children}</CityContext.Provider>;
}

export { CityContext, CityProvider };
