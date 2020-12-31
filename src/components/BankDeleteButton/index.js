import { connect } from "react-redux";
import BankDeleteButton from "../BankDeleteButton/BankDeleteButton";
import { deletePlayer } from "../../data/actions/api";

const mapStateToProps = (state) => {
  return {
    bank: state.bank,
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
    selectPlayer: (player) => dispatch(deletePlayer(player))       
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BankDeleteButton);