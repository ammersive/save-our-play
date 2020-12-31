import BankAtoZSort from "./BankAtoZSort";
import { connect } from "react-redux";
import { sortBankAZ } from "../../data/actions/actions";

const mapStateToProps = state => {
  return {
    bank: state.bank,
  };
};

const mapDispatchToProps = (dispatch) => {  
  return {
      clickSort: () => dispatch(sortBankAZ()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BankAtoZSort);
