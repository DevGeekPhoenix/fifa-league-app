import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Players from "./Pages/Players";
import Teams from "./Pages/Teams";
import Coaches from "./Pages/Coaches";
import Background from "./BackGround.png";
import AddPlayerForm from "./Pages/AddPlayerForm";
import AddTeamForm from "./Pages/AddTeamForm";
import AddCoachForm from "./Pages/AddCoachForm";
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
      </Routes>
    </div>
  );
}

export default App;
