import axios from "../../axios";

import {
  storePlayers,
  deleteLocalPlayer,
  save,
} from "./actions";

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

export const deletePlayer = (player) => {
  let playerId = player.id;
  return (dispatch) => {
    axios.delete(`/${playerId}`)
    .then(() => {
      dispatch(deleteLocalPlayer(playerId));
    });
  };
};