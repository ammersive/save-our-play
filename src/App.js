import Header from "./components/Header";
import About from "./components/About/";
import NewPlayers from "./components/NewPlayers";
import Teams from "./components/Teams";

const App = ({ aboutDisplayed }) => (
  <>
    <Header />
    <About aboutDisplayed={ aboutDisplayed }/>
    <NewPlayers />
    <Teams />
  </>
);

export default App;
