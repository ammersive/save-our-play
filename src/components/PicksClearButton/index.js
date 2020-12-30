import { connect } from "react-redux";
import PicksClearButton from "./PicksClearButton";
import { clearPickedPlayers } from "../../data/actions/actions";

const mapDispatchToProps = (dispatch) => { 
  return {
    clickClearPickedPlayers: () => dispatch(clearPickedPlayers())       
  };
};

export default connect(null, mapDispatchToProps)(PicksClearButton);