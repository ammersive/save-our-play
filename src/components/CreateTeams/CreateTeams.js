import { Component } from "react";

class CreateTeams extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {    
    this.props.createClick();
  }

  render() {
    return(
      <button onClick={ this.handleClick }>Create Teams</button>
    );
  }
}

export default CreateTeams;