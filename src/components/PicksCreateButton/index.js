import { connect } from "react-redux";
import PicksCreateButton from "./PicksCreateButton";
import { createTeams } from "../../data/actions/actions";

const mapDispatchToProps = (dispatch) => { 
  return {    
    createClick: () => dispatch(createTeams())    
  };
};

export default connect(null, mapDispatchToProps)(PicksCreateButton);

