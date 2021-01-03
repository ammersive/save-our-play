import About from "./About";
import { connect } from "react-redux";

// Subscribe to values (and updates in those the values) in the application state
const mapStateToProps = (state) => {
  return {
    aboutDisplayed: state.aboutDisplayed,
  };
};

export default connect(mapStateToProps)(About);