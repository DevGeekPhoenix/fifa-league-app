import React, { useState } from "react";
import { connect } from "react-redux";
import { teamsearch, teamtypefilter } from "../Redux/TeamSearchActions";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
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
    <div className="bg-[rgb(0,94,186)] opacity-90 absolute right-0 h-5/6 w-1/4">
      <h1>Filter</h1>
      <label htmlFor="filter">Search Name </label>
      <input
        value={props.teamSearchQuery}
        onChange={(e) => props.onChange(e.target.value)}
        id="filter"
        type="text"
      />
      <label htmlFor="datepicker">Choose Team Type</label>
      <span>
        <Dropdown
          className=""
          options={options}
          onChange={(options) => props.onTypeChange(options.value)}
          value={props.teamTypeFilter}
          placeholder="Select Team Type"
        />
      </span>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(FilterSideBar);
