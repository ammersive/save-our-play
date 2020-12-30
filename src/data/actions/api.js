import axios from "../../axios";

export const getPlayers = () => {
  return (dispatch) => {
      axios.get("/").then(({ data }) => {
        console.log(data);
          
      });
  };
};