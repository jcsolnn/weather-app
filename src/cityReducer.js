//Handle App state
//actions are objects passed to dispatch

/* for ref:
const initialState = {
  cities: [],
  selectedCity: null,
};
*/

export default function cityReducer(state, action) {
  switch (action.type) {
    case 'fetch': {
      // return [...state, action.payload]; //this nests payload within state if just an []
      // return [...state.cities, ...action.cities]; //replaces state if just an arr
      //since state is an obj, need to shallow copy cities
      return { ...state, cities: [...state.cities, ...action.cities] };
    }
    case 'add': {
      const cityInList = state.cities.find((i) => i.id === action.city.id);
      if (!cityInList) {
        return { state, cities: [...state.cities, action.city] }; //add new city
      }
    }
    case 'selectedCity': {
      return { ...state, selectedCity: action.selectedCity };
    }

    default:
      throw new Error('Unhandled action' + action.type);
  }
}
