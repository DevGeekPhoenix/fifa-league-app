import { connect } from "react-redux";

const mapStateToProps = ({ database }) => ({ database });

const mapDispatchToProps = (dispatch) => {
  return {};
};
const PlayersCard = (props) => {
  console.log(props.database);

  if (!Array.isArray(props.database.players)) return <p>Loading...</p>;

  return (
    <div className="flex flex-wrap w-3/4">
      {props.database.players.map((player, i) => {
        return (
          <div className="flex flex-wrap min-w-fit	 text-[#ffff8d] bg-[#0d9fa7] h-28 w-64 rounded m-2">
            <div className="p-2">
              <p className="">{`${player.name} `}</p>
              <p>{`${player.playerPosition} `}</p>
              <p>{`${player.playerCurrentTeam} `}</p>
              <p>{`${player.dateOfBirth} `}</p>
            </div>
            <div>
              <img
                className="rounded-full h-24 ml-3 mt-2 min-w-fit	 "
                src={`${player.playerImg} `}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersCard);
