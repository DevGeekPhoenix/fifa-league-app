import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Players from "./Pages/Players";
import Teams from "./Pages/Teams";
import Coaches from "./Pages/Coaches";
import Background from "./BackGround.png";
import AddPlayerForm from "./Pages/AddPlayerForm";
import AddTeamForm from "./Pages/AddTeamForm";
import AddCoachForm from "./Pages/AddCoachForm";
import Dashboard from "./Pages/Dashboard";
import DashboardLogIn from "./Pages/DashboardLogIn";
import TeamControl from "./Pages/TeamControl";
import PlayerControl from "./Pages/PlayerControl";
import CoachControl from "./Pages/CoachControl";

function App() {
  return (
    <div
      style={{
        background: `url(${Background})`,
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        height: "36rem",
        width: "78.9rem",
        zIndex: "-1",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/players/add" element={<AddPlayerForm />} />
        <Route path="/teams/add" element={<AddTeamForm />} />
        <Route path="/coaches/add" element={<AddCoachForm />} />
        <Route path="dashboard/login" element={<DashboardLogIn />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="teamcontrol" element={<TeamControl />} />
          <Route path="playercontrol" element={<PlayerControl />} />
          <Route path="coachcontrol" element={<CoachControl />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
