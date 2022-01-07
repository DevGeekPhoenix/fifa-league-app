import { Outlet, Link } from "react-router-dom";
import Admin from "../admin.png";

const Dashboard = () => {
  return (
    <div>
      <div className="flex  shadow-2xl flex-col	absolute w-1/5 h-screen bg-[#e8e9e4c5]">
        <div className="mx-auto mt-2   ">
          <img className="rounded-full h-32 shadow-xl" src={Admin} />
          <p className="font-bold text-2xl mt-2 text-[#494949] mx-6">Admin</p>
        </div>
        <div className="flex flex-col m-auto absolute top-48 left-12 drop-shadow ">
          <Link to={"teamcontrol"}>
            <li className="list-none flex py-2">
              <p className=" text-[#494949] bg-[#c9c9c9] hover:bg-[#9e9e9e] shadow-xl rounded-xl text-center w-40 py-3">
                Team Control
              </p>
            </li>
          </Link>
          <Link to={"playercontrol"}>
            <li className="list-none   flex  py-2">
              <p className=" text-[#494949] bg-[#c9c9c9] hover:bg-[#9e9e9e] shadow-xl rounded-xl w-40 text-center py-3">
                Player Control
              </p>
            </li>
          </Link>
          <Link to={"coachcontrol"}>
            <li className="list-none flex  py-2	">
              <p className="text-[#494949] bg-[#c9c9c9] hover:bg-[#9e9e9e] shadow-xl rounded-xl w-40 text-center py-3">
                Coach Control
              </p>
            </li>
          </Link>
          <Link to={"/dashboard"}>
            <li className="list-none flex  py-2	">
              <p className="text-[#494949] bg-[#c9c9c9] hover:bg-[#9e9e9e] shadow-xl rounded-xl w-40 text-center py-3">
                Main Dashboard
              </p>
            </li>
          </Link>
        </div>
        <div className="absolute  bottom-0 left-12">
          <Link to={"/"}>
            <li className="list-none py-6	">
              <p className="text-[#494949] bg-[#9e9e9e] hover:bg-[#7a7a7a] border border-[#494949] shadow-xl rounded-xl w-40 text-center py-3">
                Back To Home
              </p>
            </li>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Dashboard;
