import { Outlet, Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = ({ database }) => ({
  database,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};
const TeamControl = (props) => {
  return (
    <div>
      <div className="absolute left-64">
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-hidden my-8">
            <table className="border-collapse table-fixed w-full text-sm">
              <thead className="bg-white text-[#1f2937] opacity-50">
                <tr>
                  <th className="border-r border-gray-700 font-medium p-4 pl-8  py-3   text-left">
                    Team ID
                  </th>
                  <th className="border-r border-gray-700 font-medium p-4 pl-8  py-3   text-left">
                    Team Name
                  </th>
                  <th className="border-r border-gray-700 font-medium p-4  py-3   text-left">
                    Team Country
                  </th>
                  <th className="border-r border-gray-700 font-medium p-4 pr-8  py-3   text-left">
                    Team Stadium
                  </th>
                  <th className="border-r border-gray-700 font-medium p-4 pr-8  py-3   text-left">
                    Date of Foundation
                  </th>
                  <th className="border-r border-gray-700 font-medium p-4 pr-8  py-3   text-left">
                    Team Type
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white dark:bg-gray-800">
                {props.database.teams.map((team, i) => {
                  return (
                    <tr key={team.teamID}>
                      <td className="border-b border-r  border-gray-700 p-3 text-xs text-gray-400">
                        {team.teamID}
                      </td>
                      <td className="border-b border-r border-gray-700   text-gray-400">
                        <span className="flex flex-row pl-2">
                          <img
                            className="h-10 rounded-full"
                            src={team.teamImg}
                          />
                          <p className="pt-2.5 pl-1">{team.name}</p>
                        </span>
                      </td>
                      <td className="border-b border-r  border-gray-700 p-4  text-gray-400">
                        {team.teamCountry}
                      </td>
                      <td className="border-b border-r  border-gray-700 p-4 pr-8  text-gray-400">
                        {team.teamStadium}
                      </td>
                      <td className="border-b border-r  border-gray-700 p-4 pr-8  text-gray-400">
                        {team.dateOfFoundation}
                      </td>
                      <td className="border-b border-r  border-gray-700 p-4   text-gray-400">
                        <span className="flex flex-row justify-between">
                          {team.teamType.value}
                          <Link to={`edit/${team.teamID}`}>
                            <button className="text-xs rounded-lg p-1 text-gray-700 bg-[#8d9db9]">
                              Edit
                            </button>
                          </Link>
                        </span>
                      </td>
                    </tr>
                  );
                })}
                <td
                  colSpan="6"
                  className=" w-full border-gray-700 p-4 pr-8 hover:bg-[#8d9db9] text-gray-400"
                >
                  <Link to={"add"}>
                    <button className=" text-[#ffffff]  m-auto ">
                      <span className="text-xl font-bold">+</span> Add Team
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

export default connect(mapStateToProps, mapDispatchToProps)(TeamControl);
