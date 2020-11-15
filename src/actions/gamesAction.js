import axios from "axios";
import { popularGamesURL } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
  /* 
  ANOTHER WAY OF MAKING REQUEST
  axios.get(popularGamesURL()).then(data=>{})
  */
};
