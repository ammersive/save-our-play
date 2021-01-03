// Action creator functions, for actions which trigger changes in the application state

// Dispatched by the index.js files in the component folders
// Actions carry at minimum an action type which are utilised in the reducer to enable particular reducer functions to be called.
// They may also carry data passed into the function parameter (e.g. that of the particular player associated with a button)

export const aboutClicked = () => {
  return {
    type: "ABOUT_CLICKED"
  };
};

export const storePlayers = (data) => ({
  type: "STORE_PLAYERS",
  data: data,
});

export const addPlayer = ({ player }) => {  
  return {
    type: "ADD_PLAYER",
    player: player,
  };
};

export const pickPlayer = ( player ) => {  
  return {
    type: "PICK_PLAYER",
    player: player,
  };
};

export const drawPlayer = () => {
  return {
    type: "DRAW_PLAYER"
  };
};

export const deleteLocalPlayer = (playerId) => ({
  type: "DELETE_PLAYER",
  playerId: playerId,
});

export const createTeams = () => {
  return {
    type: "CREATE_TEAMS",
  };
};

export const clearPickedPlayers = () => {
  return {
    type: "CLEAR_CLICKED_PLAYERS",
  };
};

export const generateName1 = () => {
  return {
    type: "GENERATE_NAME1",
  };
};

export const generateName2 = () => {
  return {
    type: "GENERATE_NAME2",
  };
};

export const shuffleTeams = () => {
  return {
    type: "RANDOMISE_TEAMS",
  };
};

export const save = () => {
  return {
    type: "SAVE",
  };
};