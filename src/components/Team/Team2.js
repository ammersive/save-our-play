import { connect } from "react-redux";
import Team2 from "./Team";
import { generateName2 } from "../../data/actions/actions";

// Subscribe to values (and updates in those the values) in the application state
const mapStateToProps = (state) => { 
  return {
    teamName: state.team2Name,
    team: state.team2        
  };
};

// Dispatch an action to the store, to trigger a change in state
const mapDispatchToProps = (dispatch) => {
  return {    
    generateClick: () => dispatch(generateName2())    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team2);