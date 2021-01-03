// Action creator functions, which make API calls, and which also dispatch state action creators from the actions.js file

// import the axios configuration file with further details on the API endpoint URL and data formatting
import axios from "../../axios";

import {
  storePlayers,
  deleteLocalPlayer,
  save,
} from "./actions";

// GET request to the database to return all player information
export const getPlayers = () => {
  return (dispatch) => {
    axios.get("/").then(({ data }) => {
      let playersData = data.data;
      dispatch(storePlayers(playersData));  
    });
  };
};

export const updatePlayCounts = (data) => {

  let postList = [];
  let putList = [];

  // If a player's id is null, they are a new player, and their data will be sent to the DB in a POST request
  // Remaining players already exist in the database, so their id is sent in a PUT request. 
  // (On the back end, an increment method updates the scores of the players whose ids are recieved through the PUT request)
  data.forEach(element => element.id === null ? postList.push(element) : putList.push(element.id));
  postList.forEach(element => delete element.id);

  return (dispatch) => {
    axios.post("/", postList )
    axios.put("/", putList ).then(( ) => {
      dispatch(save());
    });
  };
};

// Delete a player from the database and on success, delete them locally
// We have to do this second local deletion because the Bank component isn’t hooked up directly to the database, it only has access to the local application state. Once that updates, it will re-render, with the deleted player no-longer showing
export const deletePlayer = (player) => {
  let playerId = player.id;
  return (dispatch) => {
    axios.delete(`/${playerId}`)
    .then(() => {
      dispatch(deleteLocalPlayer(playerId));
    });
  };
};