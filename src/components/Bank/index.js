import { connect } from "react-redux";
import Bank from "./Bank";
import { getPlayers } from "../../data/actions/api";

const mapStateToProps = state => {
  return {
    bank: state.bank,
    players: state.players,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      handleLoad: () => dispatch(getPlayers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bank);