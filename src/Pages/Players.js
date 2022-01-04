import Navbar from "../Components/NavBar";
import PlayerFilterSideBar from "../Components/PlayerFilterSideBar";
import { Link } from "react-router-dom";
import PlayersCard from "../Components/PlayersCard";

const Players = () => {
  return (
    <div className="">
      <Navbar />
      <PlayerFilterSideBar />
      <Link to={"/players/add"}>
        <button className="bg-[#d21ba4] w-9/12 text-[#ffff8d] hover:bg-[#0d9fa7]  px-10 py-2">
          Add Players
        </button>
      </Link>
      <PlayersCard />
    </div>
  );
};

export default Players;
