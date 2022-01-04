import React, { useState } from "react";
import { connect } from "react-redux";
import { coachsearch, coachteamsearch } from "../Redux/CoachSearchActions";

const mapStateToProps = ({ database }) => ({ database });

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (coachSearchQuery) => dispatch(coachsearch(coachSearchQuery)),
    oncoachTeamSearchChange: (coachTeamSearch) =>
      dispatch(coachteamsearch(coachTeamSearch)),
  };
};

const CoachFilterSideBar = (props) => {
  return (
    <div className="bg-[rgb(0,94,186)] opacity-90 absolute right-0 h-5/6 w-1/4">
      <h1>Filter</h1>
      <label htmlFor="filter">Search Name </label>
      <input
        value={props.coachSearchQuery}
        onChange={(e) => props.onChange(e.target.value)}
        id="filter"
        type="text"
      />
      <label htmlFor="filterTeam">Search Current Team </label>
      <input
        value={props.coachTeamSearch}
        onChange={(e) => props.oncoachTeamSearchChange(e.target.value)}
        id="filterTeam"
        type="text"
      />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(CoachFilterSideBar);
