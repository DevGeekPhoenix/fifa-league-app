import { ADD_COACH } from "../constants";

export const addCoach = (coach) => {
  return {
    type: ADD_COACH,
    payload: coach,
  };
};
