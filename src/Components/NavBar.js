import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-wrap bg-[#1af5ff] justify-start drop-shadow opacity-80">
      <Link to={"/"}>
        <li className="list-none">
          <img className="h-24 px-6" src={Logo} />
        </li>
      </Link>
      <Link to={"/teams"}>
        <li className="list-none px-4  py-4">
          <p className="bg-[#005eba] text-[#e8e9e4] hover:bg-[#d21ba4] rounded-3xl px-10 py-5">
            Teams
          </p>
        </li>
      </Link>
      <Link to={"/players"}>
        <li className="list-none  py-4	">
          <p className="bg-[#005eba] text-[#e8e9e4] hover:bg-[#d21ba4] rounded-3xl px-10 py-5">
            Players
          </p>
        </li>
      </Link>
      <Link to={"/coaches"}>
        <li className="list-none px-4 py-4	">
          <p className="bg-[#005eba] text-[#e8e9e4] hover:bg-[#d21ba4] rounded-3xl px-10 py-5">
            Coaches
          </p>
        </li>
      </Link>
    </div>
  );
};

export default Navbar;
