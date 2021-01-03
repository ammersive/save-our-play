import BankPickButton from "./BankPickButton";
import { connect } from "react-redux";
import { pickPlayer } from "../../data/actions/actions";

// Subscribe to values (and updates in those the values) in the application state
const mapStateToProps = state => {
  return {
    bank: state.bank,
  };
};

// Dispatch an action to the store, to trigger a change in state
// The player must be passed in - even though there is only one BankPickButton component, it is rendered as many times are there are players in the bank, and so the action must carry information about which particular player to pick
const mapDispatchToProps = (dispatch) => {  
  return {
    selectPlayer: ( player ) => dispatch(pickPlayer(player)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BankPickButton);
