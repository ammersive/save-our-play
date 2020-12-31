import { connect } from "react-redux";
import Save from "./Save";
import { updatePlayCounts } from "../../data/actions/api";

const mapStateToProps = (state) => {
  return {
    players: state.players,
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {       
    handleSave: data => dispatch(updatePlayCounts(data))       
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Save);