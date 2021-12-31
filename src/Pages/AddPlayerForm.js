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
      dateOfBirth: new Date(startDate).toISOString(),
      playerPosition: playerPositionInputValue,
      playerCurrentTeam: playerCurrentTeamInputValue,
      playerImg: playerImgInputValue,
    });
    navigate("/players");
  };
  return (
    <div className="">
      <Navbar />
      <form className="flex flex-col p-5 absolute left-1/4 w-1/2 mt-2 bg-[#0d9fa7]">
        <div className="flex flex-wrap p-1">
          <label htmlFor="PlayerName" className="mr-4">
            Player Full Name
          </label>
          <input
            value={playerNameInputValue}
            onChange={(e) => setplayerNameInputValue(e.target.value)}
            id="PlayerName"
            type="text"
            className="w-6/12 absolute right-2"
            placeholder="Write Player Full Name"
          />
        </div>
        <div className=" flex flex-wrap p-1">
          <label htmlFor="datepicker">Choose Player's BirthDay</label>
          <span>
            <DatePicker
              id="datepicker"
              className="ml-56"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </span>
        </div>
        <div className=" flex flex-wrap p-1">
          <label htmlFor="Position" className="">
            Position
          </label>
          <input
            value={playerPositionInputValue}
            onChange={(e) => setplayerPositionInputValue(e.target.value)}
            id="Position"
            type="text"
            className="w-6/12 absolute right-2"
            placeholder="Write Teams Country"
          />
        </div>
        <div className=" flex flex-wrap p-1">
          <label htmlFor="Currentteam" className="">
            Current Team
          </label>
          <input
            value={playerCurrentTeamInputValue}
            onChange={(e) => setplayerCurrentTeamInputValue(e.target.value)}
            id="Currentteam"
            type="text"
            className="w-6/12 absolute right-2"
            placeholder="Write Player Current Team"
          />
        </div>
        <div className="  p-1">
          <input
            className="w-full mb-2"
            placeholder="Input Player Image URL"
            type="text"
            value={playerImgInputValue}
            onChange={(e) => setplayerImgInputValue(e.target.value)}
          />
          <img className="h-40 m-auto" src={playerImgInputValue} />
          <button
            onClick={() => onsubmit()}
            className="bg-[#d21ba4] w-full text-[#ffff8d] hover:bg-[#8a0e6b]   py-2"
          >
            Add Player
          </button>
        </div>
      </form>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(AddPlayerForm);
