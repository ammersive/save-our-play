const AboutButton = ({ clickAbout, aboutDisplayed }) => ( 
    <button className="draw-button" onClick={ clickAbout }>
        {aboutDisplayed ? "Hide info" : "More info" }
    </button>
);
export default AboutButton;