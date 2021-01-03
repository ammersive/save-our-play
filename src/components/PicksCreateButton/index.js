import { connect } from "react-redux";
import PicksCreateButton from "./PicksCreateButton";
import { createTeams } from "../../data/actions/actions";

// Dispatch an action to the store, to trigger a change in state
const mapDispatchToProps = (dispatch) => { 
  return {    
    createClick: () => dispatch(createTeams())    
  };
};

export default connect(null, mapDispatchToProps)(PicksCreateButton);

