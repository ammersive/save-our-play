import { connect } from "react-redux";
import Picks from "./Picks";

// Subscribe to values (and updates in those the values) in the application state
const mapStateToProps = (state) => {
  return {
    players: state.players,
  };
};

export default connect(mapStateToProps)(Picks);