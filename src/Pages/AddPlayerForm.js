import Navbar from "../Components/NavBar";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { addPlayer } from "../Redux/Players/PlayersActions";
const mapStateToProps = ({ database }) => ({ database });

const mapDispatchToProps = (dispatch) => {
  return {
    submitPlayer: (obj) => dispatch(addPlayer(obj)),
  };
};

const AddPlayerForm = ({ submitPlayer }) => {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [playerImgInputValue, setplayerImgInputValue] = useState("");
  const [playerNameInputValue, setplayerNameInputValue] = useState("");
  const [playerPositionInputValue, setplayerPositionInputValue] = useState("");
  const [playerCurrentTeamInputValue, setplayerCurrentTeamInputValue] =
    useState("");

  const onsubmit = () => {
    submitPlayer({
      name: playerNameInputValue,
      dateOfBirth: new Date(startDate).toISOString().substring(0, 10),
      playerPosition: playerPositionInputValue,
      playerCurrentTeam: playerCurrentTeamInputValue,
      playerImg: playerImgInputValue,
      playerOffensiveAwareness: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerBallControl: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerDribbling: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerTightPossession: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerLowPass: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerLoftedPass: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerFinishing: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerHeading: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerSetPieceTaking: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerCurl: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerSpeed: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerAcceleration: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerKickingPower: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerJump: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerPhysicalContact: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerBalance: Math.floor(Math.random() * (95 - 55 + 1) + 55),
      playerStamina: Math.floor(Math.random() * (95 - 55 + 1) + 55),
    });
    navigate("/players");
  };
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col p-2 absolute font-bold rounded w-5/12 mt-2 h-5/6 justify-center left-16 border text-[#c9c9c9] bg-[#494949]">
        <div className="flex flex-wrap flex-col p-1">
          <label htmlFor="PlayerName" className="m-auto pb-2">
            Player Full Name
          </label>
          <input
            value={playerNameInputValue}
            onChange={(e) => setplayerNameInputValue(e.target.value)}
            id="PlayerName"
            type="text"
            className="text-[#494949] placeholder-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-full py-1"
            placeholder="Write Player Full Name"
          />
        </div>
        <div className=" flex flex-wrap flex-col p-1">
          <label htmlFor="Position" className="m-auto pb-2">
            Position
          </label>
          <input
            value={playerPositionInputValue}
            onChange={(e) => setplayerPositionInputValue(e.target.value)}
            id="Position"
            type="text"
            className="text-[#494949] placeholder-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-full py-1"
            placeholder="Write Player Position"
          />
        </div>
        <div className=" flex flex-wrap flex-col p-1">
          <label htmlFor="Currentteam" className="m-auto pb-2">
            Current Team
          </label>
          <input
            value={playerCurrentTeamInputValue}
            onChange={(e) => setplayerCurrentTeamInputValue(e.target.value)}
            id="Currentteam"
            type="text"
            className="text-[#494949] placeholder-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-full py-1"
            placeholder="Write Player Current Team"
          />
        </div>

        <div className=" flex flex-wrap flex-col mt-40 p-1">
          <label className="m-auto pb-2" htmlFor="datepicker">
            Choose Player's BirthDay
          </label>
          <span>
            <DatePicker
              id="datepicker"
              className="text-[#494949] pl-20 flex flex-wrap m-auto bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-1/2 py-1"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </span>
        </div>
      </div>
      <div className="flex flex-col p-5 absolute font-bold rounded w-5/12	 h-5/6 mt-2 justify-center right-16 border text-[#c9c9c9] bg-[#494949]">
        <div className=" flex flex-wrap flex-col p-1">
          <label htmlFor="Imageu" className="m-auto pb-2">
            Input Player Image URL{" "}
          </label>
          <input
            id="Imageu"
            className="text-[#494949] placeholder-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl mt-3 w-full py-1"
            placeholder="Input Player Image URL"
            type="text"
            value={playerImgInputValue}
            onChange={(e) => setplayerImgInputValue(e.target.value)}
          />
          <img className="h-40 mt-20 m-auto" src={playerImgInputValue} />
          <button
            onClick={() => onsubmit()}
            className="bg-[#ffffff] text-[#494949] mt-28 hover:bg-[#c9c9c9] shadow-xl w-full rounded-xl pr-24 pl-24 py-1"
          >
            Add Player
          </button>
        </div>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(AddPlayerForm);
