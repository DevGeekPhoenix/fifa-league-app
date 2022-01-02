import Navbar from "../Components/NavBar";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { addTeam } from "../Redux/Teams/TeamsActions";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

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
      dateOfFoundation: new Date(startDate).toISOString(),
      teamCountry: teamCountryInputValue,
      teamStadium: teamStadiumInputValue,
      teamImg: teamImgInputValue,
      teamType: teamTypeInputValue,
      teamAttackNumber: Math.floor(Math.random() * (95 - 80 + 1) + 80),
      teamMIDFIELDNumber: Math.floor(Math.random() * (90 - 70 + 1) + 70),
      teamDEFENSENumber: Math.floor(Math.random() * (90 - 70 + 1) + 70),
    });
    navigate("/teams");
  };
  const options = ["Club Teams", "National Teams"];
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col p-5 absolute left-1/4 w-1/2 mt-2 bg-[#0d9fa7]">
        <div className="flex flex-wrap p-1">
          <label htmlFor="teamName" className="mr-4">
            Team Name
          </label>
          <input
            value={teamNameInputValue}
            onChange={(e) => setteamNameInputValue(e.target.value)}
            id="teamName"
            type="text"
            className="w-6/12 absolute right-2"
            placeholder="Write Teams Names"
          />
        </div>
        <div className=" flex flex-wrap p-1">
          <label htmlFor="teamcountry" className="">
            Team Country:
          </label>
          <input
            value={teamCountryInputValue}
            onChange={(e) => setteamCountryInputValue(e.target.value)}
            id="teamcountry"
            type="text"
            className="w-6/12 absolute right-2"
            placeholder="Write Teams Country"
          />
        </div>
        <div className=" flex flex-wrap p-1">
          <label htmlFor="teamstadium" className="">
            Team Stadium
          </label>
          <input
            value={teamStadiumInputValue}
            onChange={(e) => setteamStadiumInputValue(e.target.value)}
            id="teamstadium"
            type="text"
            className="w-6/12 absolute right-2"
            placeholder="Write Teams Stadium"
          />
        </div>
        <div className=" flex flex-wrap p-1">
          <label htmlFor="datepicker">Choose Date Of Foundation</label>
          <span>
            <DatePicker
              style={{ display: "block" }}
              id="datepicker"
              className="ml-48"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </span>
        </div>
        <div className=" flex flex-wrap p-1">
          <label htmlFor="datepicker">Choose Team Type</label>
          <span>
            <Dropdown
              className="ml-64"
              options={options}
              onChange={setteamTypeInputValue}
              value={teamTypeInputValue}
              placeholder="Select Team Type"
            />
          </span>
        </div>
        <div className="  p-1">
          <input
            className="w-full mb-2"
            placeholder="Input Team Logo URL"
            type="text"
            value={teamImgInputValue}
            onChange={(e) => setteamImgInputValue(e.target.value)}
          />
          <img className="h-40 m-auto" src={teamImgInputValue} />
          <button
            onClick={() => onsubmit()}
            className="bg-[#d21ba4] w-full text-[#ffff8d] hover:bg-[#0d9fa7]   py-2"
          >
            Add Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTeamForm);
