import React, { useState } from "react";
import { connect } from "react-redux";
import {
  playersearch,
  playerpositionsearch,
} from "../Redux/PlayerSearchAction";

const mapStateToProps = ({ database }) => ({ database });

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (playerSearchQuery) => dispatch(playersearch(playerSearchQuery)),
    onPositionChange: (playerPositionSearch) =>
      dispatch(playerpositionsearch(playerPositionSearch)),
  };
};

const PlayerFilterSideBar = (props) => {
  return (
    <div className="bg-[rgb(0,94,186)] opacity-90 absolute right-0 h-5/6 w-1/4">
      <h1>Filter</h1>
      <label htmlFor="filter">Search Name </label>
      <input
        value={props.playerSearchQuery}
        onChange={(e) => props.onChange(e.target.value)}
        id="filter"
        type="text"
      />
      <label htmlFor="Positionfilter">Search Position </label>
      <input
        value={props.playerPositionSearch}
        onChange={(e) => props.onPositionChange(e.target.value)}
        id="Positionfilter"
        type="text"
      />
    </div>
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerFilterSideBar);
