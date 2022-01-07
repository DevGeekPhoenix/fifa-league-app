import { Link } from "react-router-dom";

const DashboardLogIn = () => {
  return (
    <div className="flex shadow-2xl flex-col rounded-2xl my-40 mx-auto w-1/5 h-1/2 bg-[#e8e9e4c5]">
      <p className="p-4 text-[#494949] font-bold text-2xl mt-2 mx-auto">
        Log In
      </p>
      <label
        htmlFor="username"
        className="text-center mt-2 font-semibold	text-[#494949] text-base"
      >
        User Name
      </label>
      <input
        id="username"
        placeholder="Enter Your Username"
        className="mx-4 my-2 text-[#494949] placeholder:text-xs placeholder-[#868686] text-center bg-[#eeeeee] hover:bg-[#ffffff] shadow-xl rounded-xl  py-1"
        type="text"
      />
      <label
        htmlFor="password"
        className="text-center font-semibold text-[#494949]	mt-3 text-base"
      >
        Password
      </label>
      <input
        id="password"
        placeholder="Enter Your Password"
        className="mx-4 my-2 text-[#494949] placeholder-[#868686] placeholder:text-xs text-center bg-[#eeeeee] hover:bg-[#ffffff] shadow-xl rounded-xl  py-1"
        type="password"
      />
      <Link
        className="relative -bottom-5 font-semibold	 text-base text-[#eeeeee] placeholder-[#eeeeee] text-center bg-[#494949] hover:bg-[#727272] shadow-xl rounded-b-xl  py-1"
        to="/dashboard"
      >
        <button>Log In</button>
      </Link>
    </div>
  );
};
export default DashboardLogIn;
