import { connect } from "react-redux";
import React, { useState } from "react";
import { Outlet, Link, useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { editplayer } from "../Redux/PlayerSearchAction";

const mapStateToProps = ({ database }) => ({
  database,
});

const mapDispatchToProps = (dispatch) => {
  return {
    submitEditedPlayer: (obj) => dispatch(editplayer(obj)),
  };
};

const EditPlayer = ({ database, submitEditedPlayer }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const player = database.players.find((player) => player.playerID === id);
  const [startDate, setStartDate] = useState();
  const [playerImgInputValue, setplayerImgInputValue] = useState(
    player.playerImg
  );
  const [playerNameInputValue, setplayerNameInputValue] = useState(player.name);
  const [playerPositionInputValue, setplayerPositionInputValue] = useState(
    player.playerPosition
  );
  const [playerCurrentTeamInputValue, setplayerCurrentTeamInputValue] =
    useState(player.playerCurrentTeam);
  const onsubmit = () => {
    submitEditedPlayer({
      name: playerNameInputValue,
      playerID: player.playerID,
      dateOfBirth: new Date(startDate).toISOString().substring(0, 10),
      playerPosition: playerPositionInputValue,
      playerCurrentTeam: playerCurrentTeamInputValue,
      playerImg: playerImgInputValue,
    });
    navigate("/dashboard/playercontrol");
  };
  return (
    <div className="absolute h-full w-4/5 right-0 bg-gray-800">
      <Link to={"/dashboard/playercontrol"}>
        <button className=" text-[#494949] bg-[#9e9e9e] hover:bg-[#c9c9c9] rounded-br-xl shadow-xl text-center w-40 py-2">
          Back
        </button>
      </Link>
      <div className="flex flex-col p-2 absolute font-bold rounded w-5/12 mt-8 h-5/6 justify-center left-5 top-8 text-[#c9c9c9] bg-gray-800">
        <div className="flex flex-wrap flex-col p-1">
          <label htmlFor="PlayerName" className="m-auto pb-2">
            Edit Player Full Name
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
            Edit Position
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
            Edit Current Team
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
            Edit Player's BirthDay
          </label>
          <span>
            <DatePicker
              id="datepicker"
              className="text-[#494949] text-center flex flex-wrap m-auto bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-1/2 py-1"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </span>
        </div>
      </div>
      <div className="flex flex-col p-5 absolute font-bold rounded w-5/12	mt-8 h-5/6  justify-center right-5 top-8 text-[#c9c9c9] bg-gray-800">
        <div className=" flex flex-wrap flex-col p-1">
          <label htmlFor="Imageu" className="m-auto pb-2">
            Edit Player Image URL
          </label>
          <input
            id="Imageu"
            className="text-[#494949] placeholder-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl mt-3 w-full py-1"
            placeholder="Edit  Player Image URL"
            type="text"
            value={playerImgInputValue}
            onChange={(e) => setplayerImgInputValue(e.target.value)}
          />
          <img className="h-40 mt-20 m-auto" src={playerImgInputValue} />
          <button
            onClick={() =>
              !startDate ||
              !playerImgInputValue ||
              !playerNameInputValue ||
              !playerPositionInputValue ||
              !playerCurrentTeamInputValue
                ? alert("Please Fill All Fields")
                : onsubmit()
            }
            className="bg-[#ffffff] text-[#494949] mt-28 hover:bg-[#c9c9c9] shadow-xl w-full rounded-xl pr-24 pl-24 py-1"
          >
            Edit Player
          </button>
        </div>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(EditPlayer);
