import { createContext } from 'react';

const CityContext = createContext();

function CityProvider({ children, cities }) {
  return <CityContext.Provider value={{ cities }}>{children}</CityContext.Provider>;
}

export { CityContext, CityProvider };
