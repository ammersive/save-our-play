import { Component } from "react";
import BankPickButton from "../BankPickButton/";
import BankDeleteButton from "../BankDeleteButton/";

class Bank extends Component {

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