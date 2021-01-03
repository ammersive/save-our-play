import { connect } from "react-redux";
import AddPlayer from "./AddPlayer";
import { addPlayer } from "../../data/actions/actions";

// Subscribe to values (and updates in those the values) in the application state
const mapStateToProps = state => {
  return {
    player: state.player
  };
};

// Dispatch an action to the store, to trigger a change in state
const mapDispatchToProps = dispatch => {
  return {
    handleSave: data => dispatch(addPlayer(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);