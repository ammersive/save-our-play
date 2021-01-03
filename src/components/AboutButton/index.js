import AboutButton from "./AboutButton";
import { connect } from "react-redux";
import { aboutClicked } from "../../data/actions/actions";

// Subscribe to values (and updates in those the values) in the application state
const mapStateToProps = state => {
  return {
    aboutDisplayed: state.aboutDisplayed,
  };
};

// Dispatch an action to the store, to trigger a change in state
const mapDispatchToProps = (dispatch) => {  
  return {
    clickAbout: () => dispatch(aboutClicked()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutButton);
