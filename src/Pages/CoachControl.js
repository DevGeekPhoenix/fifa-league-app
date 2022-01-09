import { Outlet, Link } from "react-router-dom";
import { connect } from "react-redux";
const mapStateToProps = ({ database }) => ({
  database,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};
const CoachControl = (props) => {
  return (
    <div>
      <div className="absolute left-64">
        <div className="relative rounded-xl overflow-auto">
          <div
            style={{ height: "500px" }}
            className="overflow-y-scroll bg-[#374151cb] shadow-sm overflow-hidden my-8"
          >
            <table className="border-collapse table-fixed  w-full text-sm">
              <thead className="bg-white text-[#1f2937] opacity-50">
                <tr>
                  <th className="border-r border-gray-700 font-medium p-4 pl-8  py-3   text-left">
                    Coach ID
                  </th>
                  <th className="border-r border-gray-700 font-medium p-4 pl-8  py-3   text-left">
                    Coach Name
                  </th>
                  <th className="border-r border-gray-700 font-medium p-4  py-3   text-left">
                    Coach Current Team
                  </th>
                  <th className="border-r border-gray-700 font-medium p-4 pr-8  py-3   text-left">
                    Coach Nationality
                  </th>
                  <th className="border-r border-gray-700 font-medium p-4 pr-8  py-3   text-left">
                    Date of Birth
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white dark:bg-gray-800">
                {props.database.coaches.map((coach, i) => {
                  return (
                    <tr key={coach.coachID}>
                      <td className="border-b border-r  border-gray-700 p-3 text-xs text-gray-400">
                        {coach.coachID}
                      </td>
                      <td className="border-b border-r border-gray-700   text-gray-400">
                        <span className="flex flex-row pl-2">
                          <img
                            className="h-10 rounded-full"
                            src={coach.coachImg}
                          />
                          <p className="pt-2.5 pl-1">{coach.name}</p>
                        </span>
                      </td>
                      <td className="border-b border-r  border-gray-700 p-4  text-gray-400">
                        {coach.coachCurrentTeam}
                      </td>
                      <td className="border-b border-r  border-gray-700 p-4 pr-8  text-gray-400">
                        {coach.coachNationality}
                      </td>
                      <td className="border-b border-r  border-gray-700 p-4   text-gray-400">
                        <span className="flex flex-row justify-between">
                          {coach.dateOfBirth}
                          <Link to={`edit/${coach.coachID}`}>
                            <button className="animate-bounce text-xs rounded-lg p-1 text-gray-700 bg-[#8d9db9]">
                              Edit
                            </button>
                          </Link>
                        </span>
                      </td>
                    </tr>
                  );
                })}
                <td
                  colSpan="5"
                  className="absolute bottom-0 bg-[#8d9db9] text-[#1f2937] w-full border-t border-gray-700 p-1 px-8 hover:bg-[#6e7b91] "
                >
                  <Link to={"add"}>
                    <button className="   m-auto ">
                      <span className="text-xl font-bold">+</span> Add Coach
                    </button>
                  </Link>
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(CoachControl);
