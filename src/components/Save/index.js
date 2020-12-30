import { connect } from "react-redux";
import Save from "./Save";
import { save } from "../../data/actions/actions";

const mapDispatchToProps = (dispatch) => { 
  return {
    clickSave: () => dispatch(save())       
  };
};

export default connect(null, mapDispatchToProps)(Save);