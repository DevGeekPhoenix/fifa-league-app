import { COACH_SEARCH, COACH_TEAM_SEARCH } from "./constants";

export const coachsearch = (coachSearchQuery) => {
  return {
    type: COACH_SEARCH,
    payload: coachSearchQuery,
  };
};
export const coachteamsearch = (coachTeamSearch) => {
  return {
    type: COACH_TEAM_SEARCH,
    payload: coachTeamSearch,
  };
};
