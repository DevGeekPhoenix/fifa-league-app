import { connect } from "react-redux";
import React, { useState } from "react";
import { Outlet, Link, useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { editcoach } from "../Redux/CoachSearchActions";

const mapStateToProps = ({ database }) => ({
  database,
});

const mapDispatchToProps = (dispatch) => {
  return {
    submitEditedCoach: (obj) => dispatch(editcoach(obj)),
  };
};

const EditCoach = ({ database, submitEditedCoach }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const coach = database.coaches.find((coach) => coach.coachID === id);
  const [startDate, setStartDate] = useState();
  const [coachImgInputValue, setcoachImgInputValue] = useState(coach.coachImg);
  const [coachNameInputValue, setcoachNameInputValue] = useState(coach.name);
  const [coachNationalityInputValue, setcoachNationalityInputValue] = useState(
    coach.coachNationality
  );
  const [coachCurrentTeamInputValue, setcoachCurrentTeamInputValue] = useState(
    coach.coachCurrentTeam
  );
  const onsubmit = () => {
    submitEditedCoach({
      name: coachNameInputValue,
      coachID: coach.coachID,
      dateOfBirth: new Date(startDate).toISOString().substring(0, 10),
      coachNationality: coachNationalityInputValue,
      coachCurrentTeam: coachCurrentTeamInputValue,
      coachImg: coachImgInputValue,
    });
    navigate("/dashboard/coachcontrol");
  };
  return (
    <div className="absolute h-full w-4/5 right-0 bg-gray-800">
      <Link to={"/dashboard/coachcontrol"}>
        <button className=" text-[#494949] bg-[#9e9e9e] hover:bg-[#c9c9c9] rounded-br-xl shadow-xl text-center w-40 py-2">
          Back
        </button>
      </Link>
      <div className="flex flex-col p-2 absolute font-bold rounded w-5/12 mt-8 h-5/6 justify-center left-5 top-8 text-[#c9c9c9] bg-gray-800">
        <div className="flex flex-wrap flex-col my-5 p-1">
          <label htmlFor="PlayerName" className="m-auto pb-2">
            Edit Coach Full Name
          </label>
          <input
            value={coachNameInputValue}
            onChange={(e) => setcoachNameInputValue(e.target.value)}
            id="PlayerName"
            type="text"
            className="text-[#494949] placeholder-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-full py-1"
            placeholder="Write Coach Full Name"
          />
        </div>
        <div className=" flex flex-wrap flex-col my-5 p-1">
          <label htmlFor="Nationality" className="m-auto pb-2">
            Edit Coach Nationality
          </label>
          <input
            value={coachNationalityInputValue}
            onChange={(e) => setcoachNationalityInputValue(e.target.value)}
            id="Nationality"
            type="text"
            className="text-[#494949] placeholder-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-full py-1"
            placeholder="Write His Nationality"
          />
        </div>
        <div className=" flex flex-wrap flex-col my-5 p-1">
          <label htmlFor="Currentteam" className="m-auto pb-2">
            Edit Coach Current Team
          </label>
          <input
            value={coachCurrentTeamInputValue}
            onChange={(e) => setcoachCurrentTeamInputValue(e.target.value)}
            id="Currentteam"
            type="text"
            className="text-[#494949]  placeholder-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-full py-1"
            placeholder="Write Coach Current Team"
          />
        </div>
        <div className=" flex flex-wrap flex-col my-5 p-1">
          <label className="m-auto pb-2" htmlFor="datepicker">
            Edit Coach's BirthDay
          </label>
          <span>
            <DatePicker
              id="datepicker"
              className="ml-56"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="text-[#494949] text-center flex flex-wrap m-auto bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl w-1/2 py-1"
            />
          </span>
        </div>
      </div>

      <div className="flex flex-col p-5 absolute font-bold rounded w-5/12	mt-8 h-5/6  justify-center right-5 top-8 text-[#c9c9c9] bg-gray-800">
        <div className="flex flex-col p-1">
          <label htmlFor="Imageu" className="m-auto">
            Edit Coach Image URL{" "}
          </label>
          <input
            className="text-[#494949] placeholder-[#494949] text-center bg-[#c9c9c9] hover:bg-[#ffffff] shadow-xl rounded-xl mt-3 w-full py-1"
            placeholder="Edit  Coach Image URL"
            id="Imageu"
            type="text"
            value={coachImgInputValue}
            onChange={(e) => setcoachImgInputValue(e.target.value)}
          />
          <img className="h-40 my-20 mx-auto" src={coachImgInputValue} />
          <button
            onClick={() =>
              !startDate ||
              !coachImgInputValue ||
              !coachNameInputValue ||
              !coachNationalityInputValue ||
              !coachCurrentTeamInputValue
                ? alert("Please Fill All Fields")
                : onsubmit()
            }
            className="bg-[#ffffff] text-[#494949] mt-4 hover:bg-[#c9c9c9] shadow-xl w-full rounded-xl pr-24 pl-24 py-1"
          >
            Edit Coach
          </button>
        </div>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(EditCoach);
