import { Component } from "react";
class BankPickButton extends Component {

  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.selectPlayer(this.props.player);
  }

  render() {
    return(
      <button onClick={ this.handleClick }>Pick</button>
    );
  }
}

export default BankPickButton;
