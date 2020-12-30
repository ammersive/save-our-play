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

// storePlayers takes data that has come from the back end via a get request to the API and populates the bank in the application's state
const storePlayers = (state, { data }) => {
  console.log(data);
  return {
      ...state,
      bank: data,
  };
};


// pickPlayer allows a player from the bank to be added to the picks list, ensuring they haven't been added already.
const pickPlayer = (state, { player }) => {
  if (player.isPicked === false) {
    player.isPicked = true;
    state.players = [...state.players, player];
  };  

  return {
    ...state   
  }; 
};

// drawPlayer ensures lowest plays players are picked first, but that those with the same number of players are picked at random to avoid bias over time.
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
    // Sort highest to lowest play_counts (players with same play_counts will now not always appear at same/similar indices)
    randomisedFilter.sort(( a, b ) => a.play_count - b.play_count); 
    // Select the first (so, a player from the set of players with the lowest score, produced randomly), and add to players list
    randomisedFilter[0].isPicked = true;
    state.players = [...state.players, randomisedFilter[0]];
  };

  return {
    ...state,
  }; 
};

// addPlayer handles the addition of new players to the picks list, and includes unique name validation.
const addPlayer = (state, { player }) => {
  // trim trailing whitespace from player name
  player.name = player.name.trimLeft().trimRight();
  
  // prevent nameless players
  if (player.name === "") {
    alert("You cannot add a nameless player!");
    return state;
  // prevent non-unique player names (case insensitive)
  } else if (state.bank.some(bankPlayer => bankPlayer.name.toLowerCase() === player.name.toLowerCase())) {
    alert(`A player called ${player.name} already exists in the bank. You can either add them directly from the bank with the pick button, or choose a different name`);
    return state;
    // invite user to differentiate a name that matches a picked name, in case e.g. 2 Jens are playing
  } else if (state.players.some(playersMember => playersMember.name.toLowerCase() === player.name.toLowerCase())) {
    alert(`A player called ${player.name} has already been picked. You can add an initial to tell them apart`);
    return state;
  } else {

  player.isPicked = true;
  player.isNew = true;

  };

  return {
    ...state,
    players: [...state.players, player],    
  }; 
};

// startGame fires when the "Create Teams" button is pressed and moves the view to Teams, hiding the New Players view.
const startGame = (state) => {
  return {
    ...state,
    playersChosen: true,  
  };
}

// clearPickedPlayers clears the picked players list.
const clearPickedPlayers = (state) => {
  state.bank.forEach(player => resetIsPicked(player));

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

// generateName randomly generates a triple-barreled team name from three lists of words (see top). The formula is: (1) excessive adjective, (2) mundane/bodily/alcoholic noun, (3) noun collection.
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

// Increments the play_count of the player passed to the function parameter 
const incrementPlayCount = (player) => {
  player.play_count = player.play_count + 1;
  return player;
}

// Resets ths isPicked property of the player passed to the function parameter
const resetIsPicked = (player) => {
  player.isPicked = false;
  return player;
}

// Updates the "isNew" property of the player passed to the function parameter
const updateIsNew = (player) => {
  player.isNew = false;
  return player;
}

// save increments the scores of all players in the players list with incrementplay_count(), works out if they are new (and so need to be added to the bank), and resets their other properties with updateIsNew() and resetIsPicked()
const save = (state) => {
  // Increment the play_count of each player and reset isPicked to false
  state.players.forEach(player => incrementPlayCount(resetIsPicked(player)));
  // Push new players to the bank, reseting their isNew property to false
  // state.players.forEach(player => player.isNew ? state.bank = [...state.bank, updateIsNew(player)] : null );
  state.players.forEach(player => player.isNew ? state.bank = [updateIsNew(player), ...state.bank] : null );

  return {
    ...state,
    // Reset all state, except player bank
    players: [], 
    team1: [],
    team2: [],
    team1Name: "Team 1",
    team2Name: "Team 2",
    playersChosen: false,
  }; 
};

// Clears all records from the bank
const clearBank = (state) => {
  window.confirm("Do you want to wipe the bank? This will delete all player information.") ? state.bank = [] : state.bank = [...state.bank];
  return {
    ...state,  
  }; 
};

const reducer = (state, action) => {
  switch (action.type) {
    case "STORE_PLAYERS": return storePlayers(state, action);;
    case "CLEAR_BANK": return clearBank(state);;
    case "PICK_PLAYER": return pickPlayer(state, action);
    case "DRAW_PLAYER": return drawPlayer(state);
    case "ADD_PLAYER": return addPlayer(state, action);
    case "CREATE_TEAMS": return startGame(randomiseTeams(state));
    case "CLEAR_CLICKED_PLAYERS": return clearPickedPlayers(state);;
    case "RANDOMISE_TEAMS": return randomiseTeams(state);
    case "GENERATE_NAME1": return generateName1(state);
    case "GENERATE_NAME2": return generateName2(state);
    case "SAVE": return save(state);
    default: return state;
  }
};

export default reducer;