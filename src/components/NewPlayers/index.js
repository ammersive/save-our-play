import { connect } from "react-redux";
import NewPlayers from "./NewPlayers";

// Subscribe to values (and updates in those the values) in the application state
const mapStateToProps = (state) => {
  return {
    bank: state.bank,
    players: state.players,
    playersChosen: state.playersChosen,
  };
};

export default connect(mapStateToProps)(NewPlayers);