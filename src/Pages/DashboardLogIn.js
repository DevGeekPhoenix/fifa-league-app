import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const DashboardLogIn = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [userNameInputValue, setuserNameInputValue] = useState("");
  const [passwordInputValue, setpasswordInputValue] = useState("");
  const admin = {
    username: "admin",
    password: "admin",
  };
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="flex shadow-2xl flex-col rounded-2xl my-40 mx-auto w-1/5 h-1/2 bg-[#e8e9e4c5]">
      <Link className="pt-2 px-3" to={"/"}>
        <span className="font-bold text-sm text-[#494949] ">Back</span>
      </Link>
      <p className="p- text-[#494949] font-bold text-2xl mb-2 mx-auto">
        Log In
      </p>
      <label
        htmlFor="username"
        className="text-center mt-4 font-semibold	text-[#494949] text-base"
      >
        User Name
      </label>
      <input
        value={userNameInputValue}
        onChange={(e) => {
          e.preventDefault();
          setuserNameInputValue(e.target.value);
        }}
        id="username"
        placeholder="Enter Your Username"
        className="mx-4 my-2 text-[#494949] outline-none placeholder:text-xs placeholder-[#868686] text-center bg-[#eeeeee] focus:bg-[#ffffff] shadow-xl rounded-xl  py-1"
        type="text"
        Required
      />
      <label
        htmlFor="password"
        className="text-center font-semibold text-[#494949]	mt-4 text-base"
      >
        Password
      </label>
      <button
        className="rotate-90 relative left-24 top-7 text-sm"
        onClick={togglePassword}
      >
        (o)
      </button>
      <input
        value={passwordInputValue}
        onChange={(e) => {
          e.preventDefault();
          setpasswordInputValue(e.target.value);
        }}
        id="password"
        placeholder="Enter Your Password"
        className="mx-4 my- text-[#494949] outline-none placeholder-[#868686] placeholder:text-xs text-center bg-[#eeeeee] focus:bg-[#ffffff] shadow-xl rounded-xl  py-1"
        type={passwordShown ? "text" : "password"}
        Required
      />

      <button
        className="relative -bottom-5 font-semibold	 text-base text-[#eeeeee] placeholder-[#eeeeee] text-center bg-[#494949] hover:bg-[#727272] shadow-xl rounded-b-xl  py-1"
        onClick={() => {
          userNameInputValue === admin.username &&
          passwordInputValue === admin.password
            ? navigate("/dashboard")
            : alert("Wrong Username Or Password");
        }}
      >
        Log In
      </button>
    </div>
  );
};
export default DashboardLogIn;
