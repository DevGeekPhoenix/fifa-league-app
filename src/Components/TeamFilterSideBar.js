import "../App.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { teamsearch, teamtypefilter } from "../Redux/TeamSearchActions";
import Dropdown from "react-dropdown";
import "./InputStyle.css";

const options = ["All", "Club Teams", "National Teams"];

const mapStateToProps = ({ database }) => ({ database });

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (teamSearchQuery) => dispatch(teamsearch(teamSearchQuery)),
    onTypeChange: (teamTypeFilter) => dispatch(teamtypefilter(teamTypeFilter)),
  };
};

const FilterSideBar = (props) => {
  return (
    <div className="sidebar flex flex-col bg-[#9e9e9e] opacity-80 absolute right-0  w-1/4">
      <h1 className="text-[#494949] text-xl font-bold pb-2 mt-2 text-center">
        Find Your Team
      </h1>
      <label
        className="text-[#494949] text-lg font-bold pb-2 text-center "
        htmlFor="filter"
      >
        Search Name
      </label>

      <input
        className=" text-[#494949] bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl mx-4 px-5 py-3"
        value={props.teamSearchQuery}
        onChange={(e) => props.onChange(e.target.value)}
        id="filter"
        type="text"
      />
      <p className="text-[#494949] text-lg font-bold pb-2 mt-5 text-center">
        Choose Team Type
      </p>
      <div>
        <Dropdown
          options={options}
          onChange={(options) => props.onTypeChange(options.value)}
          value={props.teamTypeFilter}
          placeholder="Select Team Type"
        />
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterSideBar);
