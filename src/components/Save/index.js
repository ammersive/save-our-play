import { connect } from "react-redux";
import Save from "./Save";
import { updatePlayCounts } from "../../data/actions/api";

// Subscribe to values (and updates in those the values) in the application state
const mapStateToProps = (state) => {
  return {
    players: state.players,
  };
};

// Dispatch an action to the store, to trigger a change in state
// data is a list of players who were just selected to be passed to the API action creator updatePlayCounts
const mapDispatchToProps = (dispatch) => { 
  return {       
    handleSave: data => dispatch(updatePlayCounts(data))       
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Save);