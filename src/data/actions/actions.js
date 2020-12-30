// Action creators:
// Functions which return an action when called (from a component wrapper)

export const clearBank = () => {  
  return { 
    type: "CLEAR_BANK",
  };
};

export const addPlayer = ({ player }) => {
  return {
    type: "ADD_PLAYER",
    player: player,
  };
};

export const pickPlayer = ({ player }) => {
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