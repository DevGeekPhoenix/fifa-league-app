import {
  PLAYER_SEARCH,
  PLAYER_POSITION_SEARCH,
  EDIT_PLAYER,
} from "./constants";

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
export const editplayer = (player) => {
  return {
    type: EDIT_PLAYER,
    payload: player,
  };
};
