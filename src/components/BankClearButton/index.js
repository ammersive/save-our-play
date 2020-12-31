import { connect } from "react-redux";
import BankClearButton from "../BankClearButton/BankClearButton";
import { clearBank } from "../../data/actions/actions";

const mapStateToProps = (state) => {
  return {
    bank: state.bank,
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
    selectPlayer: () => dispatch(clearBank())       
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BankClearButton);