import Navbar from "../Components/NavBar";
import DatePicker from "react-datepicker";
import React, { useState } from "react";

const AddCoachForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [inputvalue, setinputvalue] = useState("");
  return (
    <div className="">
      <Navbar />
      <form className="flex flex-col p-5 absolute left-1/4 w-1/2 mt-2 bg-[#0d9fa7]">
        <div className="flex flex-wrap p-1">
          <label htmlFor="PlayerName" className="mr-4">
            Coach Full Name
          </label>
          <input
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
          <label htmlFor="Position" className="">
            Position
          </label>
          <input
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
            value={inputvalue}
            onChange={(e) => setinputvalue(e.target.value)}
          />
          <img className="h-40 m-auto" src={inputvalue} />
          <button className="bg-[#d21ba4] w-full text-[#ffff8d] hover:bg-[#8a0e6b]   py-2">
            Add Coach
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoachForm;
