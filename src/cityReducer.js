//Handle App state
export default function cityReducer(state, action) {
  switch (action.type) {
    case 'add':
      const cityInList = state.find((i) => i.id === id);
      if (!cityInList) {
        return [...state, action];
      }
    default:
      throw new Error('Unhandled action' + action.type);
  }
}
