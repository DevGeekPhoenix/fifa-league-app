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
    <div className="sidebar flex flex-col bg-[#9e9e9e] opacity-80 absolute right-0  w-1/4">
      <h1 className="text-[#494949] text-xl font-bold pb-2 mt-2 text-center">
        Find Your Coach
      </h1>
      <label
        className="text-[#494949] text-lg font-bold pb-2 text-center "
        htmlFor="filter"
      >
        Search Name
      </label>
      <input
        className=" text-[#494949] bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl mx-4 px-5 py-3"
        value={props.coachSearchQuery}
        onChange={(e) => props.onChange(e.target.value)}
        id="filter"
        type="text"
      />
      <label
        className="text-[#494949] text-lg font-bold mt-2 pb-2 text-center "
        htmlFor="filterTeam"
      >
        Search Coach Current Team{" "}
      </label>
      <input
        className=" text-[#494949] bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl mx-4 px-5 py-3"
        value={props.coachTeamSearch}
        onChange={(e) => props.oncoachTeamSearchChange(e.target.value)}
        id="filterTeam"
        type="text"
      />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(CoachFilterSideBar);
