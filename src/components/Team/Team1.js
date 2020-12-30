import { connect } from "react-redux";

import Team1 from "./Team";

import { generateName1 } from "../../data/actions/actions";

const mapStateToProps = (state) => { 
  return {
    teamName: state.team1Name,
    team: state.team1        
  };
};

const mapDispatchToProps = (dispatch) => {
  return {    
    generateClick: () => dispatch(generateName1())    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team1);