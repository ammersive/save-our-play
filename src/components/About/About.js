import AboutButton from "../AboutButton";

const About = ({ aboutDisplayed }) => (
  <section>
    <div className="overview-wrapper">
      <div className="about-box overview">
        <h3 className="about-subheading">Pick teams fairly, and plan a series of friendly games where everyone gets their turn.</h3>
        <h3 className="about-subheading"><i className="fas fa-futbol"></i></h3>                      
        <AboutButton aboutDisplayed={ aboutDisplayed }/>
        { aboutDisplayed ? 
        <>
          <p className="about-text">Save Our Play is for groups who play a regular series of games, considering:</p>
          <ul>
            <li>Not everyone is available to play in each game.</li>  
            <li>More people may want to play than the team size - particularly with current COVID restrictions on the numbers in which teams can safely meet and practice.</li>  
          </ul> 
        </>
        :
        null }          
      </div>
    </div>
    { aboutDisplayed ? 
    <div className="about-boxes">
      <div className="about-box">
        <h3 className="about-subheading"><i className="fas fa-volleyball-ball"></i> Player bank</h3>
        <p className="about-text">To help adjudicate who’s due the next game when there are more people who want to play than spaces available, the player bank keeps track of the games assigned to each player on <span className="button-span">Save</span>. You can <span className="button-span">Pick</span> available players directly from the bank when you plan games.</p>
      </div>      
      <div className="about-box">
        <h3 className="about-subheading"><i className="fas fa-basketball-ball"></i> Draw by play-count</h3>
        <p className="about-text">The <span className="button-span">Draw</span> feature automatically picks players with the lowest play-counts. If multiple players have the lowest count, the selection is randomised within this set. Any team size is supported, respecting variation in restrictions.</p>
        
      </div>      
      <div className="about-box">
        <h3 className="about-subheading"><i className="far fa-futbol"></i> Randomise Teams</h3>
        <p className="about-text">Once happy with player selection, sort players into teams randomly with <span className="button-span">Create teams</span>. Randomise arrangements again with<span className="button-span">Reshuffle teams</span>.</p>
      </div>
      <div className="about-box">
        <h3 className="about-subheading"><i className="fas fa-futbol"></i> Team name generator</h3>
        <p className="about-text">Don’t take play too seriously? The <span className="button-span">Generate team name</span>feature will give you a (near) endless supply of tongue-in-cheek triple-barrel names for each side.</p>
      </div>
      <div className="about-box">
        <h3 className="about-subheading">Version 2 information:</h3>
        <p className="about-text">Powered by <a href="https://github.com/ammersive/tp-back/" target="_blank" rel="noreferrer">this API</a>.</p>
      </div>
    </div> :
    null }
  </section>
);
export default About;