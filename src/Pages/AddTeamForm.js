import { Outlet, Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { addTeam } from "../Redux/Teams/TeamsActions";
import Dropdown from "react-dropdown";

const mapStateToProps = ({ database }) => ({ database });

const mapDispatchToProps = (dispatch) => {
  return {
    submitTeam: (obj) => dispatch(addTeam(obj)),
  };
};

const AddTeamForm = ({ submitTeam }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [teamImgInputValue, setteamImgInputValue] = useState("");
  const [teamNameInputValue, setteamNameInputValue] = useState("");
  const [teamCountryInputValue, setteamCountryInputValue] = useState("");
  const [teamStadiumInputValue, setteamStadiumInputValue] = useState("");
  const [teamTypeInputValue, setteamTypeInputValue] = useState("");
  const onsubmit = () => {
    submitTeam({
      name: teamNameInputValue,
      players: [],
      teamID:
        "T-" + Date.now().toString(36) + Math.random().toString(36).substr(2),
      dateOfFoundation: new Date(startDate).toISOString().substring(0, 10),
      teamCountry: teamCountryInputValue,
      teamStadium: teamStadiumInputValue,
      teamImg: teamImgInputValue,
      teamType: teamTypeInputValue,
      teamAttackNumber: Math.floor(Math.random() * (95 - 80 + 1) + 80),
      teamMIDFIELDNumber: Math.floor(Math.random() * (90 - 70 + 1) + 70),
      teamDEFENSENumber: Math.floor(Math.random() * (90 - 70 + 1) + 70),
    });
    navigate("/dashboard/teamcontrol");
  };
  const options = ["Club Teams", "National Teams"];
  return (
    <div className="absolute h-full w-4/5 right-0 bg-gray-800">
      <Link to={"/dashboard/teamcontrol"}>
        <button className=" text-[#494949] bg-[#9e9e9e] hover:bg-[#c9c9c9] rounded-br-xl shadow-xl text-center w-40 py-2">
          Back
        </button>
      </Link>
      <div className="flex flex-col p-2 absolute font-bold rounded w-5/12 mt-2 h-5/6 justify-center left-5 top-8 text-[#c9c9c9] bg-gray-800">
        <div className="flex flex-wrap flex-col p-1">
          <label htmlFor="teamName" className="m-auto pb-2">
            Team Name
          </label>
          <div className="">
            <input
              value={teamNameInputValue}
              onChange={(e) => setteamNameInputValue(e.target.value)}
              id="teamName"
              type="text"
              className="placeholder-[#494949] text-center text-[#494949]  bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-full py-1"
              placeholder="Write Teams Names"
            />
          </div>
        </div>
        <div className=" flex flex-wrap flex-col p-1">
          <label htmlFor="teamcountry" className="m-auto pb-2">
            Team Country:
          </label>
          <div className=" 	">
            <input
              value={teamCountryInputValue}
              onChange={(e) => setteamCountryInputValue(e.target.value)}
              id="teamcountry"
              type="text"
              className="placeholder-[#494949] text-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-full py-1"
              placeholder="Write Teams Country"
            />
          </div>
        </div>
        <div className=" flex flex-wrap flex-col p-1">
          <label htmlFor="teamstadium" className="m-auto pb-2">
            Team Stadium
          </label>
          <input
            value={teamStadiumInputValue}
            onChange={(e) => setteamStadiumInputValue(e.target.value)}
            id="teamstadium"
            type="text"
            className="placeholder-[#494949] text-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-full py-1"
            placeholder="Write Teams Stadium"
          />
        </div>
        <div className=" flex flex-wrap flex-col mt-40 p-1">
          <label className="m-auto pb-2" htmlFor="datepicker">
            Choose Date Of Foundation
          </label>
          <span>
            <DatePicker
              style={{ display: "block" }}
              id="datepicker"
              className="text-[#494949] text-center flex flex-wrap m-auto bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-1/2 py-1"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </span>
        </div>
      </div>
      <div className="flex flex-col p-5 absolute font-bold rounded w-5/12	 h-5/6  justify-center right-5 top-8 text-[#c9c9c9] bg-gray-800">
        <div className=" flex flex-wrap flex-col p-1">
          <label className="m-auto pb-2" htmlFor="datepicker">
            Choose Team Type
          </label>
          <span>
            <Dropdown
              options={options}
              onChange={setteamTypeInputValue}
              value={teamTypeInputValue}
              placeholder="Select Team Type"
            />
          </span>
        </div>
        <div className="  p-1">
          <label htmlFor="Imageu" className="m-auto pb-2">
            Input Team Logo URL
          </label>
          <input
            className="placeholder-[#494949] text-center	 text-[#494949]  bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl mt-3 w-full py-1"
            placeholder="Input Team Logo URL"
            type="text"
            id="image"
            value={teamImgInputValue}
            onChange={(e) => setteamImgInputValue(e.target.value)}
          />
          <img className="h-40 my-10 mx-auto" src={teamImgInputValue} />
        </div>
        <button
          onClick={() =>
            !teamTypeInputValue ||
            !teamImgInputValue ||
            !teamNameInputValue ||
            !teamCountryInputValue ||
            !teamStadiumInputValue
              ? alert("Please Fill All Fields")
              : onsubmit()
          }
          className="bg-[#ffffff] text-[#494949]  hover:bg-[#c9c9c9] shadow-xl w-full rounded-xl pr-24 pl-24 py-1"
        >
          Add Team
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamForm);
