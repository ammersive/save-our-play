import { connect } from "react-redux";
import Team1 from "./Team";
import { generateName1 } from "../../data/actions/actions";

// Subscribe to values (and updates in those the values) in the application state
const mapStateToProps = (state) => { 
  return {
    teamName: state.team1Name,
    team: state.team1        
  };
};

// Dispatch an action to the store, to trigger a change in state
const mapDispatchToProps = (dispatch) => {
  return {    
    generateClick: () => dispatch(generateName1())    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team1);