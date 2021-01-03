import { connect } from "react-redux";
import PicksClearButton from "./PicksClearButton";
import { clearPickedPlayers } from "../../data/actions/actions";

// Dispatch an action to the store, to trigger a change in state
const mapDispatchToProps = (dispatch) => { 
  return {
    clickClearPickedPlayers: () => dispatch(clearPickedPlayers())       
  };
};

export default connect(null, mapDispatchToProps)(PicksClearButton);