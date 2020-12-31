import axios from "../../axios";

import {
  storePlayers,
  save
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
  console.log("data for put request: ", data);
  return (dispatch) => {
    axios.put("/", data ).then(( ) => {
      dispatch(save());
    });
  };
};