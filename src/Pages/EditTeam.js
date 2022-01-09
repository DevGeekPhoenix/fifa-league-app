import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import Dropdown from "react-dropdown";
import { editteam } from "../Redux/TeamSearchActions";

const mapStateToProps = ({ database }) => ({
  database,
});

const mapDispatchToProps = (dispatch) => {
  return {
    submitEditedTeam: (obj) => dispatch(editteam(obj)),
  };
};

const EditTeam = ({ database, submitEditedTeam }) => {
  const { id } = useParams();
  const team = database.teams.find((team) => team.teamID === id);
  const [selectedPlayers, setselectedPlayers] = useState(team.players);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState();
  const [teamImgInputValue, setteamImgInputValue] = useState(team.teamImg);
  const [teamNameInputValue, setteamNameInputValue] = useState(team.name);
  const [teamCountryInputValue, setteamCountryInputValue] = useState(
    team.teamCountry
  );
  const [teamStadiumInputValue, setteamStadiumInputValue] = useState(
    team.teamStadium
  );
  const [teamTypeInputValue, setteamTypeInputValue] = useState("");
  const handleSelect = (playerID) => {
    if (selectedPlayers.includes(playerID)) {
      setselectedPlayers(selectedPlayers.filter((id) => id !== playerID));
    } else {
      setselectedPlayers([...selectedPlayers, playerID]);
      console.log(playerID);
    }
  };
  const onsubmit = () => {
    submitEditedTeam({
      players: [...selectedPlayers],
      name: teamNameInputValue,
      teamID: team.teamID,
      dateOfFoundation: new Date(startDate).toISOString().substring(0, 10),
      teamCountry: teamCountryInputValue,
      teamStadium: teamStadiumInputValue,
      teamImg: teamImgInputValue,
      teamType: teamTypeInputValue,
      teamAttackNumber: team.teamAttackNumber,
      teamMIDFIELDNumber: team.teamMIDFIELDNumber,
      teamDEFENSENumber: team.teamDEFENSENumber,
    });
    navigate("/dashboard/teamcontrol");
  };
  const options = ["Club Teams", "National Teams"];
  return (
    <div>
      <div className="overflow-y-scroll absolute h-full w-4/5 right-0 bg-gray-800">
        <Link to={"/dashboard/teamcontrol"}>
          <button className=" text-[#494949] bg-[#9e9e9e] hover:bg-[#c9c9c9] rounded-br-xl shadow-xl text-center w-40 py-2">
            Back
          </button>
        </Link>
        <table
          style={{ width: "570px" }}
          className=" border-collapse z-10 table-auto absolute top-80 left-2 mt-2 text-sm"
        >
          <tbody className="bg-[#ffffff86] cursor-pointer ">
            {database.players.map((player, i) => {
              return (
                <tr
                  className={`cursor-pointer ${
                    selectedPlayers.includes(player.playerID)
                      ? "bg-[#4cf8ab]"
                      : ""
                  }`}
                  onClick={() => handleSelect(player.playerID)}
                  key={player.playerID}
                >
                  <td className="border-b border-r border-gray-700 p-1 text-xs text-gray-700">
                    {player.playerID}
                  </td>
                  <td className="border-b border-r text-xs border-gray-700 p-1  text-gray-700">
                    {player.name}
                  </td>
                  <td className="border-b border-r text-xs border-gray-700 p-  text-gray-700">
                    {player.playerCurrentTeam}
                  </td>
                  <td className="border-b border-r text-xs border-gray-700 p-1 text-gray-700">
                    {player.playerPosition}
                  </td>
                  <td className="border-b border-r text-xs border-gray-700 p-1  text-gray-700">
                    {player.dateOfBirth}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex flex-col p-2 absolute font-bold rounded w-5/12 mt-2 h-5/6 justify-center left-5 top-8 text-[#c9c9c9] bg-gray-800">
          <div className="flex flex-wrap flex-col relative -top-24 p-1">
            <label htmlFor="teamName" className="m-auto pb-2">
              Edit Team Name
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
          <div className=" flex flex-wrap flex-col relative -top-24 p-1">
            <label htmlFor="teamcountry" className="m-auto pb-2">
              Edit Team Country:
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
          <div className=" flex flex-wrap flex-col relative -top-24 p-1">
            <label htmlFor="teamstadium" className="m-auto pb-2">
              Edit Team Stadium
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
          <div className=" flex flex-wrap flex-col relative -top-24 p-1">
            <label className="m-auto pb-2" htmlFor="datepicker">
              Edit Date Of Foundation
            </label>

            <DatePicker
              id="datepicker"
              className="text-[#494949] text-center flex flex-wrap m-auto bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-1/2 py-1"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <div className="flex flex-col p-5 absolute font-bold rounded w-5/12	 h-5/6  justify-center right-5 top-8 text-[#c9c9c9] bg-gray-800">
          <div className=" flex flex-wrap flex-col p-1">
            <label className="m-auto pb-2" htmlFor="datepicker">
              Edit Team Type
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
              Edit Team Logo URL
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
              !startDate ||
              !teamImgInputValue ||
              !teamNameInputValue ||
              !teamCountryInputValue ||
              !teamStadiumInputValue
                ? alert("Please Fill All Fields")
                : onsubmit()
            }
            className="bg-[#ffffff] text-[#494949]  hover:bg-[#c9c9c9] shadow-xl w-full rounded-xl pr-24 pl-24 py-1"
          >
            Edit Team
          </button>
        </div>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(EditTeam);
