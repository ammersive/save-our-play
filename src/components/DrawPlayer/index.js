import { connect } from "react-redux";
import DrawPlayer from "./DrawPlayer";
import { drawPlayer } from "../../data/actions/actions";

const mapStateToProps = (state) => {
  return {
    bank: state.bank,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickDraw: () => dispatch(drawPlayer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawPlayer);