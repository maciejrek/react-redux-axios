const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, popular: action.payload.popular };
    default:
      return { ...state };
  }
};

//ACTION CREATOR
const fetchGames = (userData) => {
  return {
    type: "FETCH_GAMES",
    payload: userData,
  };
};

export default gamesReducer;
