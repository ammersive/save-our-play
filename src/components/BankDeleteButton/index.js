import { connect } from "react-redux";
import BankDeleteButton from "../BankDeleteButton/BankDeleteButton";
import { deletePlayer } from "../../data/actions/api";

// Subscribe to values (and updates in those the values) in the application state
const mapStateToProps = (state) => {
  return {
    bank: state.bank,
  };
};

// Dispatch an action to the store, to trigger a change in state
// The player must be passed in - even though there is only one BankDeleteButton component, it is rendered as many times are there are players in the bank, and so the action must carry information about which particular player to delete
const mapDispatchToProps = (dispatch) => { 
  return {
    selectPlayer: (player) => dispatch(deletePlayer(player))       
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BankDeleteButton);