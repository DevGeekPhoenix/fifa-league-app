import { connect } from "react-redux";

const mapStateToProps = ({ database }) => ({ database });

const mapDispatchToProps = (dispatch) => {
  return {};
};

const TeamsCard = (props) => {
  console.log(props.database);

  if (!Array.isArray(props.database.teams)) return <p>Loading...</p>;

  return (
    <div className="flex flex-wrap w-3/4">
      {props.database.teams.map((team, i) => {
        return (
          <div className="flex flex-wrap min-w-fit	 text-[#ffff8d] bg-[#0d9fa7] h-28 w-64 rounded m-2">
            <div className="p-2">
              <p className="">{`${team.name} `}</p>
              <p>{`${team.teamCountry} `}</p>
              <p>{`${team.teamStadium} `}</p>
              <p>{`${team.dateOfFoundation} `}</p>
            </div>
            <div>
              <img
                className="rounded-full h-24 ml-3 mt-2 min-w-fit	 "
                src={`${team.teamImg} `}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsCard);
