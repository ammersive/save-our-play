import BankPickButton from "./BankPickButton";
import { connect } from "react-redux";
import { pickPlayer } from "../../data/actions/actions";

const mapStateToProps = state => {
  return {
    bank: state.bank,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      selectPlayer: ( player ) => dispatch(pickPlayer(player)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BankPickButton);
