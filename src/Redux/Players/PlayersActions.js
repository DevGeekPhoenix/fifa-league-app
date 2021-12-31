import { ADD_PLAYER } from "../constants";

export const addPlayer = (player) => {
  return {
    type: ADD_PLAYER,
    payload: player,
  };
};
