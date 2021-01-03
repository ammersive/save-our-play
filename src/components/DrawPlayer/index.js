import { connect } from "react-redux";
import DrawPlayer from "./DrawPlayer";
import { drawPlayer } from "../../data/actions/actions";

// Subscribe to values (and updates in those the values) in the application state
const mapStateToProps = (state) => {
  return {
    bank: state.bank,
  };
};

// Dispatch an action to the store, to trigger a change in state
const mapDispatchToProps = dispatch => {
  return {
    clickDraw: () => dispatch(drawPlayer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawPlayer);