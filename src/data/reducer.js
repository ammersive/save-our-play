// import initial from "./initial"; // use initial state for reset


// Take values set in the ADD_PLAYER action and update the state with these new values
// Second arg in curlies are properties of the action, necessary here
const addPlayer = (state, { player }) => {
  return {
    ...state,
    players: [...state.players, player],    
  }; // Following this, the above are now part of state, so we don't pass them in as actions below
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER": return addPlayer(state, action);
    default: return state;
  }
};

export default reducer;