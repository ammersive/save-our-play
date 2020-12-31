import About from "./About";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    aboutDisplayed: state.aboutDisplayed,
  };
};

export default connect(mapStateToProps)(About);