import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.png";

const Navbar = () => {
  return (
    <div className="flex shadow-2xl	 bg-[#e8e9e4c5]">
      <div className="flex flex-wrap">
        <Link to={"/"}>
          <li className="list-none drop-shadow absolute">
            <img className="h-16  py-1 px-6" src={Logo} />
          </li>
        </Link>
      </div>
      <div className="flex m-auto drop-shadow ">
        <Link to={"/teams"}>
          <li className="list-none  px-4 flex  py-2">
            <p className=" text-[#494949] bg-[#c9c9c9] hover:bg-[#9e9e9e] shadow-xl rounded-xl px-5 py-3">
              Teams
            </p>
          </li>
        </Link>
        <Link to={"/players"}>
          <li className="list-none  py-2	">
            <p className="text-[#494949] bg-[#c9c9c9] hover:bg-[#9e9e9e] shadow-xl rounded-xl px-5 py-3">
              Players
            </p>
          </li>
        </Link>
        <Link to={"/coaches"}>
          <li className="list-none px-4 py-2	">
            <p className="text-[#494949] bg-[#c9c9c9] hover:bg-[#9e9e9e] shadow-xl rounded-xl px-5 py-3">
              Coaches
            </p>
          </li>
        </Link>
      </div>
      <div>
        <Link to={"/dashboard/login"}>
          <li className="list-none px-4 py-2	">
            <p className="text-[#494949] bg-[#c9c9c9] hover:bg-[#9e9e9e] shadow-xl rounded-xl px-5 py-3">
              DashBoard
            </p>
          </li>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
