import { createContext } from 'react';

const CityContext = createContext();

function CityProvider({ children, cities, dispatch }) {
  return <CityContext.Provider value={{ cities, dispatch }}>{children}</CityContext.Provider>;
}

export { CityContext, CityProvider };
