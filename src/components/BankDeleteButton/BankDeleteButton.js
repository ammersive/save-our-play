import { Component } from "react";
class BankDeleteButton extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if(window.confirm("Do you want to delete this player?")){
      // Pass up the player data (that was passed into this component) to the delete action so it knows which player to delete
      this.props.selectPlayer(this.props.player);
    }; 
  }

  render() {
    return(
      <button aria-label="delete" className="bank-clear" onClick={ this.handleClick }><i className="far fa-trash-alt"></i></button>
    );
  }
}

export default BankDeleteButton;