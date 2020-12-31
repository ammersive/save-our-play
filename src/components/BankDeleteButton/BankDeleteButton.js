import { Component } from "react";
class BankDeleteButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player: props.player,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if(window.confirm("Do you want to delete this player?")){
      this.props.selectPlayer({ ...this.state });
    }; 
  }

  render() {
    return(
      <button aria-label="delete" className="bank-clear" onClick={ this.handleClick }><i class="far fa-trash-alt"></i></button>
    );
  }
}

export default BankDeleteButton;