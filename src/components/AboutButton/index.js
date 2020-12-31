import AboutButton from "./AboutButton";
import { connect } from "react-redux";
import { aboutClicked } from "../../data/actions/actions";

const mapStateToProps = state => {
  return {
    aboutDisplayed: state.aboutDisplayed,
  };
};

const mapDispatchToProps = (dispatch) => {  
  return {
    clickAbout: () => dispatch(aboutClicked()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutButton);
