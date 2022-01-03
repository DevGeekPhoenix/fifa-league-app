import Navbar from "../Components/NavBar";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { addCoach } from "../Redux/Coaches/CoachesActions";
import "react-dropdown/style.css";

const mapStateToProps = ({ database }) => ({ database });

const mapDispatchToProps = (dispatch) => {
  return {
    submitCoach: (obj) => dispatch(addCoach(obj)),
  };
};
const AddCoachForm = ({ submitCoach }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [coachImgInputValue, setcoachImgInputValue] = useState("");
  const [coachNameInputValue, setcoachNameInputValue] = useState("");
  const [coachNationalityInputValue, setcoachNationalityInputValue] =
    useState("");
  const [coachCurrentTeamInputValue, setcoachCurrentTeamInputValue] =
    useState("");
  const onsubmit = () => {
    submitCoach({
      name: coachNameInputValue,
      dateOfBirth: new Date(startDate).toISOString().substring(0, 10),
      coachNationality: coachNationalityInputValue,
      coachCurrentTeam: coachCurrentTeamInputValue,
      coachImg: coachImgInputValue,
      coachExperience: Math.floor(Math.random() * (95 - 65 + 1) + 65),
      coachLeadershipSkills: Math.floor(Math.random() * (95 - 65 + 1) + 65),
      coachCoachingHistory: Math.floor(Math.random() * (95 - 65 + 1) + 65),
    });
    navigate("/coaches");
  };
  return (
    <div className="">
      <Navbar />
      <form className="flex flex-col p-5 absolute left-1/4 w-1/2 mt-2 bg-[#0d9fa7]">
        <div className="flex flex-wrap p-1">
          <label htmlFor="PlayerName" className="mr-4">
            Coach Full Name
          </label>
          <input
            value={coachNameInputValue}
            onChange={(e) => setcoachNameInputValue(e.target.value)}
            id="PlayerName"
            type="text"
            className="w-6/12 absolute right-2"
            placeholder="Write Coach Full Name"
          />
        </div>
        <div className=" flex flex-wrap p-1">
          <label htmlFor="datepicker">Choose Coach's BirthDay</label>
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
          <label htmlFor="Nationality" className="">
            Nationality
          </label>
          <input
            value={coachNationalityInputValue}
            onChange={(e) => setcoachNationalityInputValue(e.target.value)}
            id="Nationality"
            type="text"
            className="w-6/12 absolute right-2"
            placeholder="Write His Nationality"
          />
        </div>
        <div className=" flex flex-wrap p-1">
          <label htmlFor="Currentteam" className="">
            Current Team
          </label>
          <input
            value={coachCurrentTeamInputValue}
            onChange={(e) => setcoachCurrentTeamInputValue(e.target.value)}
            id="Currentteam"
            type="text"
            className="w-6/12 absolute right-2"
            placeholder="Write Coach Current Team"
          />
        </div>
        <div className="  p-1">
          <input
            className="w-full mb-2"
            placeholder="Input Coach Image URL"
            type="text"
            value={coachImgInputValue}
            onChange={(e) => setcoachImgInputValue(e.target.value)}
          />
          <img className="h-40 m-auto" src={coachImgInputValue} />
          <button
            onClick={() => onsubmit()}
            className="bg-[#d21ba4] w-full text-[#ffff8d] hover:bg-[#8a0e6b]   py-2"
          >
            Add Coach
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCoachForm);
