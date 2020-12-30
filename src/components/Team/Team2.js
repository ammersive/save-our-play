import { connect } from "react-redux";

import Team2 from "./Team";

import { generateName2 } from "../../data/actions/actions";

const mapStateToProps = (state) => { 
  return {
    teamName: state.team2Name,
    team: state.team2        
  };
};

const mapDispatchToProps = (dispatch) => {
  return {    
    generateClick: () => dispatch(generateName2())    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team2);