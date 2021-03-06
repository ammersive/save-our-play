import initial from "./initial";

// Shows/hides app information section
const toggleAbout = (state) => {
  return {
    ...state,
    aboutDisplayed: !state.aboutDisplayed,  
  };
}

// storePlayers takes data that has come from the back end via a get request to the API and populates the bank in the application's state
// This causes the Bank component (which is subscribed to the bank list in state via the Redux store) to re-render populated with all players from the database
const storePlayers = (state, { data }) => {
  let bank = data;

  // Give each banked player a property of isPicked: this is for late data handling in drawPlayer()
  bank.forEach(player => player.isPicked = false);

  // Sort bank by id
  // This is because new players will then be displayed at top of list, so user can see their changes more easily
  bank.sort(( a, b ) => b.id - a.id);

  return {
      ...state,
      bank: bank,
  };
};

// pickPlayer fires when a "Pick" player button on the bank is clicked. 
// If the incoming player's id doesn't match a player already in the picked players list, it adds the incoming player to that list.
const pickPlayer = (state, { player }) => {
  
  if (player.isPicked === false) {
    player.isPicked = true;
    state.players = [...state.players, player];
  };    

  return {
    ...state   
  }; 
};

// drawPlayer ensures players with the lowest play count are drawn first.
// If multiple players share the lowest play count, they are picked at random - this is to avoid bias over multiple games.
const drawPlayer = (state) => {       
  // If at least one player in the bank remains unpicked:
    if (state.bank.some(player => player.isPicked === false)) {

      // Filter players who have already been selected
      let filteredBank = state.bank.filter( player => player.isPicked === false);

      // Build a new randomised list from the filtered bank
      let randomisedFilter = [];
      for (let i = filteredBank.length; i > 0; i -= 1) {
        let pick = filteredBank.splice(Math.floor(Math.random() * i), 1);
        randomisedFilter.push(pick[0]);
      };

      // Sort highest to lowest play counts (players with same play counts will now not always appear at same/similar indices)
      randomisedFilter.sort(( a, b ) => a.play_count - b.play_count); 

      // Select the first player (so, a player from the set of players with the lowest score, produced randomly), and add to players list
      randomisedFilter[0].isPicked = true;
      state.players = [...state.players, randomisedFilter[0]];
    };

  return {
    ...state,
  }; 
};

// addPlayer handles the addition of new players to the picks list, and includes unique name validation so we don't have multiple players with the same name.
const addPlayer = (state, { player }) => {
  // trim trailing whitespace from player name
  player.name = player.name.trimLeft().trimRight();
  
  // prevent nameless players being added
  if (player.name === "") {
    alert("You cannot add a nameless player!");
    return state;
  }
  // prevent player names longer than the database allows
  else if (player.name.length >= 50) {
    alert("Player names must less than 50 characters long");
    return state;  
  }  
  // prevent non-unique player names (a case insensitive check to catch all potential matches)
  else if (state.bank.some(bankPlayer => bankPlayer.name.toLowerCase() === player.name.toLowerCase())) {
    alert(`A player called ${player.name} already exists in the bank. You can either add them directly from the bank with the pick button, or choose a different name`);
    return state;
  }
    // invite the user to differentiate a name that matches a picked name, in case e.g. 2 Jens are playing
  else if (state.players.some(playersMember => playersMember.name.toLowerCase() === player.name.toLowerCase())) {
    alert(`A player called ${player.name} has already been picked. You can add an initial to tell them apart`);
    return state;
  } 

  return {
    ...state,
    players: [...state.players, player],    
  }; 
};

// deletePlayer fires after an API call to detele a player from the database.
// It returns a new version of the local Bank with the delete player removed.
const deletePlayer = (state, { playerId }) => {
  let checkedPlayers = state.players;

  // Ensure that if the player has been added to the picked list, they are deleted from there
  if (checkedPlayers.some(playersMember => playersMember.id === playerId)) {
    checkedPlayers = checkedPlayers.filter((player) => player.id !== playerId);
  }
  // Filter the bank to remove the deleted player
  let updatedBank = state.bank.filter((player) => player.id !== playerId);

  return {
    ...state, 
    bank: [...updatedBank],
    players: [...checkedPlayers],
  };
}

// startGame fires when the "Create Teams" button is pressed and moves the view to Teams, hiding the New Players view.
const startGame = (state) => {
  return {
    ...state,
    playersChosen: true,  
  };
}

// clearPickedPlayers clears the picked players list.
const clearPickedPlayers = (state) => {
  state.bank.forEach(player => player.isPicked = false);
 
  return {
    ...state,
    players: [],
  }; 
};

// randomiseTeams randomises the picked players list and pushes players to each team list.
const randomiseTeams = (state) => {
  let players = [...state.players];
  let shuffledPlayers = [];

  // For genuine (pseudo!)randomness, players are first pulled at random from the players list, and then pushed to the front of a new list.
  // This avoids biasing effects: should players be pushed at random into an empty list, those players pushed first will cluster together before the list grows.
  // This matters because the draw feature always adds players in a predictable order (according to their play-counts). 
  for (let i = players.length; i > 0; i -= 1) {
    let pick = players.splice(Math.floor(Math.random() * i), 1);
    shuffledPlayers.push(pick[0]);
  };

  return {
    ...state,
    team1: shuffledPlayers.slice(0, (shuffledPlayers.length / 2)),    
    team2: shuffledPlayers.slice(shuffledPlayers.length / 2),    
  };
};

// generateName randomly generates a triple-barreled team name by picking words at random from three lists (see bottom).
const generateName = () => {
  let adjective = adjectives[(Math.floor(Math.random() * adjectives.length))];  
  let everyday = everydayWords[(Math.floor(Math.random() * everydayWords.length))]; 
  let noun = nouns[(Math.floor(Math.random() * nouns.length))]; 
  
  let teamName = `${adjective} ${everyday} ${noun}`;

  return {
    teamName,
  }
}

// Calls generateName() to assign team 1's name
const generateName1 = (state) => {
  let name = generateName().teamName;
  return {
    ...state,
    team1Name: name,
  }; 
};

// Calls generateName() to assign team 2's name
const generateName2 = (state) => {
  let name = generateName().teamName;
  return {
    ...state,
    team2Name: name,
  }; 
};

// save returns the initial application state, and is dispatched after the api receives player data from the current game
const save = () => {
    return initial
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ABOUT_CLICKED": return toggleAbout(state);
    case "STORE_PLAYERS": return storePlayers(state, action);
    case "PICK_PLAYER": return pickPlayer(state, action);
    case "DRAW_PLAYER": return drawPlayer(state);
    case "ADD_PLAYER": return addPlayer(state, action);
    case "DELETE_PLAYER": return deletePlayer(state, action);    
    case "CREATE_TEAMS": return startGame(randomiseTeams(state));
    case "CLEAR_CLICKED_PLAYERS": return clearPickedPlayers(state);
    case "RANDOMISE_TEAMS": return randomiseTeams(state);
    case "GENERATE_NAME1": return generateName1(state);
    case "GENERATE_NAME2": return generateName2(state);
    case "SAVE": return save(state);
    default: return state;
  }
};

// Word banks for name generator

const adjectives = [
  "Flying",
  "Tremendous",
  "Furious",
  "Surging",
  "Majestic",
  "Dazzling",
  "Mighty",
  "Dribbling",
  "Tottering",
  "Shambling",
  "Staggering",
  "Stumbling",
  "Doddering",
  "Shambolic",
  "Drunken",
  "Glorious",
  "Magnificent",
  "Torrential",
  "Lightning"
];

const everydayWords = [
  "Foot",
  "Toe",
  "Big Toe",
  "Heel",
  "Hamstrung",
  "Knee",
  "Tootsie",
  "Boot",
  "Trainer",
  "ArmChair",
  "Deckchair",
  "Couch",
  "Sofa",
  "Beer",
  "Lager",
  "Booze"
];

const nouns = [
  "Colonels",
  "Crushers",
  "Divas",
  "Amigos",
  "Stars",
  "Typhoons",
  "Ladies",
  "Boys",
  "Squirrels",
  "Brigade",
  "Foxes",
  "Heroes",
  "Wolves",
  "Mob",
  "Troop",
  "Legion",
  "Blokes",
  "Lassies",
  "Lads"
];

export default reducer;