import Navbar from "../Components/NavBar";
import CoachFilterSideBar from "../Components/CoachFilterSideBar";
import { Link } from "react-router-dom";
import CoachesCard from "../Components/CoachesCard";

const Coaches = () => {
  return (
    <div className="">
      <Navbar />
      <CoachFilterSideBar />
      <Link to={"/coaches/add"}>
        <button className="bg-[#d21ba4] w-9/12 text-[#ffff8d] hover:bg-[#0d9fa7]  px-10 py-2">
          Add Coaches
        </button>
      </Link>
      <CoachesCard />
    </div>
  );
};

export default Coaches;
