import { Component } from "react";
import BankPickButton from "../BankPickButton/";
import BankClearButton from "../BankClearButton/";

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
          <h4>Number of previous plays</h4> 
          <ul>
            
            { bank.map((player, index) => (
              <li className={ players.some(pickedPlayer => pickedPlayer.id === player.id) ? "picked" : null }>
                <div className="bank-add-wrap">
                  <BankClearButton />
                </div>                
                <div className="player-cell">
                  { player.name }
                </div>  
                <div className="play-count-cell">
                  { player.play_count }
                </div> 
                <div className="bank-add-wrap">
                  <BankPickButton index={ index } player={ player }/>
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




// const Bank = ({ bank }) => {
  
//   return (    
//     <div className="bank">
//       <h3>Player bank</h3> 
//       {bank.length > 0 ? 
//       <> 
//         <h4>Number of previous plays</h4> 
//         <ul>
//           { bank.map((player, index) => (
//             <li className={ player.isPicked === true ? "picked" : null }>
//               <div className="player-cell">
//                 { player.name }
//               </div>  
//               <div className="play-count-cell">
//                 { player.playCount }
//               </div> 
//               <div className="bank-add-wrap">
//                 <BankPickButton index={ index } player={ player }/>
//               </div>
//             </li>   
//           )) }
//         </ul>
//         <BankClearButton buttonText={ "Clear the bank" }/>
//       </>
//       : <p className="no-players">Bank is empty</p> }      
//     </div>    
//   );
// };

// export default Bank;