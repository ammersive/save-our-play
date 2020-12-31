import axios from "../../axios";

import {
  storePlayers
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
  return () => {
    axios.put("/", data ).then(( ) => {
      console.log("hello");
    });
  };
};