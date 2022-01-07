import { Outlet, Link } from "react-router-dom";

const CoachControl = () => {
  return (
    <div>
      <Outlet />
      <p className="absolute text-white right-96">Hi Im CoachControl</p>
    </div>
  );
};
export default CoachControl;
