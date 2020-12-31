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

  let postList = [];
  let putList = [];
  
  data.forEach(element => element.id === null ? postList.push(element) : putList.push(element.id));
  postList.forEach(element => delete element.id);

  return (dispatch) => {
    axios.post("/", data )
    axios.put("/", putList ).then(( ) => {
      dispatch(save());
    });
  };
};