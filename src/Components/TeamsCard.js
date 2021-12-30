import { connect } from "react-redux";

const mapStateToProps = ({ database }) => ({ database });

const mapDispatchToProps = (dispatch) => {
  return {};
};

const TeamsCard = (props) => {
  console.log(props.database);

  if (!Array.isArray(props.database.teams)) return <p>Loading...</p>;

  return (
    <div className="">
      {props.database.teams.map((team, i) => {
        return (
          <div>
            <p>{`${team.name} `}</p>
            <p>{`${team.teamCountry} `}</p>
            <p>{`${team.teamStadium} `}</p>
            <p>{`${team.dateOfFoundation} `}</p>
            <img src={`${team.teamImg} `} />
          </div>
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsCard);
