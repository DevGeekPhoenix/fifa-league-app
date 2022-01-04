import Navbar from "../Components/NavBar";
import TeamFilterSideBar from "../Components/TeamFilterSideBar";
import { Link } from "react-router-dom";
import TeamsCard from "../Components/TeamsCard";

const Teams = () => {
  return (
    <div className="">
      <Navbar />
      <TeamFilterSideBar />
      <Link to={"/teams/add"}>
        <button className="bg-[#d21ba4] w-9/12 text-[#ffff8d] hover:bg-[#0d9fa7]  px-10 py-2">
          Add Team
        </button>
      </Link>
      <TeamsCard />
    </div>
  );
};

export default Teams;
