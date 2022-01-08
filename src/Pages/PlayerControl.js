import { Outlet, Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = ({ database }) => ({
  database,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};
const PlayerControl = (props) => {
  return (
    <div>
      <div className="absolute left-64">
        <div className="relative rounded-xl overflow-auto">
          <div className="shadow-sm overflow-hidden my-8">
            <table className="border-collapse table-fixed w-full text-sm">
              <thead className="bg-white text-[#1f2937] opacity-50">
                <tr>
                  <th className="border-r border-gray-700 font-medium p-4 pl-8  py-3   text-left">
                    Player ID
                  </th>
                  <th className="border-r border-gray-700 font-medium p-4 pl-8  py-3   text-left">
                    Player Name
                  </th>
                  <th className="border-r border-gray-700 font-medium p-4  py-3   text-left">
                    Player Current Team
                  </th>
                  <th className="border-r border-gray-700 font-medium p-4 pr-8  py-3   text-left">
                    Player Position
                  </th>
                  <th className="border-r border-gray-700 font-medium p-4 pr-8  py-3   text-left">
                    Date of Birth
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white dark:bg-gray-800">
                {props.database.players.map((player, i) => {
                  return (
                    <tr key={player.playerID}>
                      <td className="border-b border-r  border-gray-700 p-3 text-xs text-gray-400">
                        {player.playerID}
                      </td>
                      <td className="border-b border-r border-gray-700   text-gray-400">
                        <span className="flex flex-row pl-2">
                          <img
                            className="h-10 rounded-full"
                            src={player.playerImg}
                          />
                          <p className="pt-2.5 pl-1">{player.name}</p>
                        </span>
                      </td>
                      <td className="border-b border-r  border-gray-700 p-4  text-gray-400">
                        {player.playerCurrentTeam}
                      </td>
                      <td className="border-b border-r  border-gray-700 p-4 pr-8  text-gray-400">
                        {player.playerPosition}
                      </td>
                      <td className="border-b border-r  border-gray-700 p-4   text-gray-400">
                        <span className="flex flex-row justify-between">
                          {player.dateOfBirth}
                          <Link to={`edit/${player.playerID}`}>
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
                  colSpan="5"
                  className=" w-full border-gray-700 p-4 pr-8 hover:bg-[#8d9db9] text-gray-400"
                >
                  <Link to={"add"}>
                    <button className=" text-[#ffffff]  m-auto ">
                      <span className="text-xl font-bold">+</span> Add Player
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerControl);
