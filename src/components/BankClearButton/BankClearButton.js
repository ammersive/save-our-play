import { Component } from "react";
class BankClearButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: props.player,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.selectPlayer({ ...this.state });
  }

  render() {
    return(
      <button className="bank-clear" onClick={ this.handleClick }>x</button>
    );
  }
}

export default BankClearButton;


// const BankClearButton = ({ clickClearBank }) => (
//   <button  onClick={ clickClearBank }>
//     x
//   </button>
// );
// export default BankClearButton;