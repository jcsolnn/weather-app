//Handle App state
export default function cityReducer(state, action) {
  switch (action.type) {
    case 'fetch': {
      // return [...state, action.payload]; //this nests payload within state
      return [...state, ...action.payload]; //replaces state
    }
    case 'add': {
      const cityInList = state.find((i) => i.id === action.payload.id);
      if (!cityInList) {
        return [...state, action.payload]; //add new city
      }
    }
    default:
      throw new Error('Unhandled action' + action.type);
  }
}
