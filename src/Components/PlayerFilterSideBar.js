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
    <div className="sidebar flex flex-col bg-[#9e9e9e] opacity-80 absolute right-0  w-1/4">
      <h1 className="text-[#494949] text-xl font-bold pb-2 mt-2 text-center">
        Find Your Player
      </h1>
      <label
        className="text-[#494949] text-lg font-bold pb-2 text-center "
        htmlFor="filter"
      >
        Search Name{" "}
      </label>
      <input
        className=" text-[#494949] bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl mx-4 px-5 py-3"
        value={props.playerSearchQuery}
        onChange={(e) => props.onChange(e.target.value)}
        id="filter"
        type="text"
      />
      <label
        className="text-[#494949] text-lg font-bold mt-2 pb-2 text-center "
        htmlFor="Positionfilter"
      >
        Search Position
      </label>
      <input
        className=" text-[#494949] bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl mx-4 px-5 py-3"
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
