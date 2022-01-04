import { TEAM_SEARCH, TEAM_TYPE_FILTER } from "./constants";

export const teamsearch = (teamSearchQuery) => {
  return {
    type: TEAM_SEARCH,
    payload: teamSearchQuery,
  };
};
export const teamtypefilter = (teamTypeFilter) => {
  return {
    type: TEAM_TYPE_FILTER,
    payload: teamTypeFilter,
  };
};
