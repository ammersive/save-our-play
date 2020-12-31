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