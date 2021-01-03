import { connect } from "react-redux";
import Bank from "./Bank";
import { getPlayers } from "../../data/actions/api";

// Subscribe to values (and updates in those the values) in the application state
const mapStateToProps = state => {
  return {
    bank: state.bank,
    players: state.players,
  };
};

// Dispatch an action to the store, to trigger a change in state
const mapDispatchToProps = (dispatch) => {
  return {
      handleLoad: () => dispatch(getPlayers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bank);