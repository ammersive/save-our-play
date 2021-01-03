import { Component } from "react";
import BankPickButton from "../BankPickButton/";
import BankDeleteButton from "../BankDeleteButton/";

class Bank extends Component {

  // This will dispatch and action to send a GET request to get all players from the database
  // This action will populate the bank list in state with data from the database
  // Because the bank list is passed into this component as a prop, when it changes, this bank component will re-render with updated information
  componentDidMount() {
    this.props.handleLoad();
  }
  
  render() {
    const { bank, players } = this.props;

    return (    
      <div className="bank">
        <h3>Player bank</h3> 
        {bank.length > 0 ? 
        <> 
          <h4>Number of plays</h4> 
          <ul>
            
            { bank.map((player) => (
              <li className={ players.some(pickedPlayer => pickedPlayer.id === player.id) ? "picked" : null }>
                <div className="bank-button-wrap">
                  <BankDeleteButton player={ player }/>
                </div>                
                <div className="player-cell">
                  { player.name }
                </div>  
                <div className="play-count-cell">
                  { player.play_count }
                </div> 
                <div className="bank-button-wrap">
                  <BankPickButton player={ player }/>
                </div>
              </li>   
            )) }
          </ul>
        </>
        : <p className="no-players">Bank is empty</p> }      
      </div>    
    );
  }  
};

export default Bank;