import { Outlet, Link } from "react-router-dom";

const PlayerControl = () => {
  return (
    <div>
      <Outlet />
      <p className="absolute text-white right-96">Hi Im PlayerControl</p>
    </div>
  );
};
export default PlayerControl;
