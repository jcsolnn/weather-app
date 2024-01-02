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
      //don't need to copy initial state since we're initilizing it
      return { cities: action.cities, selectedCity: action.cities[0] };
    }
    case 'add': {
      const cityInList = state.cities.find((i) => i.id === action.city.id);
      if (state.cities.length === 0) {
        return { cities: [action.city], selectedCity: action.city };
      }
      if (!cityInList) {
        //...state - copy other fields
        //...state.cities - copy prev then add new obj (action.city)
        return { ...state, cities: [...state.cities, action.city] };
      }
    }
    case 'selectedCity': {
      return { ...state, selectedCity: action.selectedCity };
    }
    case 'remove': {
      const newList = state.cities.filter((c) => c.id !== action.id);
      if (state.selectedCity.id === action.id) {
        return { cities: newList, selectedCity: newList[0] };
      }
      return { ...state, cities: newList };
    }

    default:
      throw new Error('Unhandled action' + action.type);
  }
}
