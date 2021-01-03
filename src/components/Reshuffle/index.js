import { connect } from "react-redux";
import Reshuffle from "./Reshuffle";
import { shuffleTeams } from "../../data/actions/actions";

// Dispatch an action to the store, to trigger a change in state
const mapDispatchToProps = (dispatch) => {
  return {    
    shuffleClick: () => dispatch(shuffleTeams())    
  };
};

export default connect(null, mapDispatchToProps)(Reshuffle);