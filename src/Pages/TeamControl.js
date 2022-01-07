import { Outlet, Link } from "react-router-dom";

const TeamControl = () => {
  return (
    <div>
      <Outlet />
      <p className="absolute text-white right-96">Hi Im TeamControl</p>
    </div>
  );
};
export default TeamControl;
