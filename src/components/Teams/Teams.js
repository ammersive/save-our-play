// import GenerateName from "../GenerateName";
import Team1 from "../Team/Team1";
import Team2 from "../Team/Team2";
import Reshuffle from "../Reshuffle/";
import Save from "../Save/";

const Teams = ({ playersChosen, players }) => (
  playersChosen ?
  <section className="section-wrapper game-wrapper">
    <header className="section-header">
      <h2><i className="fas fa-futbol"></i> Teams</h2>
    </header>
    <div className="shuffle">
      <Reshuffle />
    </div>
    <div className="teams">
      <div className="team">
        <Team1 />
      </div>    
      <div className="team">
        <Team2 />
      </div>
    </div>
    <div className="save">
      <Save players={ players }/>
    </div>      
  </section> 
  : null
);

export default Teams;