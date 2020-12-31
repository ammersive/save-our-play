const AboutButton = ({ clickAbout, aboutDisplayed }) => ( 
    <button className="about-button" onClick={ clickAbout }>
        {aboutDisplayed ? "Hide info" : "More info" }
    </button>
);
export default AboutButton;