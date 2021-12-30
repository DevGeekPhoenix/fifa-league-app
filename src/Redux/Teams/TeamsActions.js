import { ADD_TEAM } from "./constants";

export const addTeam = (team) => {
  return {
    type: ADD_TEAM,
    payload: team,
  };
};
