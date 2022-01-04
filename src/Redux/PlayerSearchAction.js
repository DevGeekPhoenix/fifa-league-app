import { PLAYER_SEARCH, PLAYER_POSITION_SEARCH } from "./constants";

export const playersearch = (playerSearchQuery) => {
  return {
    type: PLAYER_SEARCH,
    payload: playerSearchQuery,
  };
};
export const playerpositionsearch = (playerPositionSearch) => {
  return {
    type: PLAYER_POSITION_SEARCH,
    payload: playerPositionSearch,
  };
};
