import { Component } from "react";
class BankPickButton extends Component {

  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    // Pass up the player data (that was passed into this component) to the pick action so it knows which player to pick
    this.props.selectPlayer(this.props.player);
  }

  render() {
    return(
      <button onClick={ this.handleClick }>Pick</button>
    );
  }
}

export default BankPickButton;
