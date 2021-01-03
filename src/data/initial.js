// initial application state

const initial = {
  // When the Bank component mounts, a GET request is sent to the database.
  // When it returns, this list is populated with all player objects in the database
  // As the Bank component is subscribed to this list via the Redux store, that causes it to re-render displaying all players in the database
  bank: [], 
  // Player objects are passed into this list when the user makes player selections on the "Select Players" screen.
  // It is this list which populates the Picks component on that screen
  players: [], 
  // The below 2 lists are populated via the randomiseTeams reducer in reducer.js, which is passed data from the picked players list above
  // This happens when the user presses either the "Create Teams" or "Reshuffle" buttons
  team1: [],
  team2: [],
  // The values of the below two variables are updated by the generateName reducer in reducer.js when the user presses the "Generate team name" buttons
  team1Name: "Team 1",
  team2Name: "Team 2",
  // The NewPlayers and Teams components track the below value. 
  // It changes to true on click of the "Create teams" button.
  // The child components of NewPlayers are hidden from view, whilst the child components of Teams are displayed
  playersChosen: false,
  // The About component tracks the below value, to either display or hide information about the application
  aboutDisplayed: false,
};

export default initial;