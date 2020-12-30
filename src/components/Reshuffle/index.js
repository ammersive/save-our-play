import { connect } from "react-redux";
import Reshuffle from "./Reshuffle";
import { shuffleTeams } from "../../data/actions/actions";

const mapDispatchToProps = (dispatch) => {
  return {    
    shuffleClick: () => dispatch(shuffleTeams())    
  };
};

export default connect(null, mapDispatchToProps)(Reshuffle);