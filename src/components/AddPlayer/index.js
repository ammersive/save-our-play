import { connect } from "react-redux";
import AddPlayer from "./AddPlayer";
import { addPlayer } from "../../data/actions/actions";

const mapStateToProps = state => {
  return {
    player: state.player
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSave: data => dispatch(addPlayer(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);