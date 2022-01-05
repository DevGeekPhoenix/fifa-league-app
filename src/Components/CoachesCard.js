import { connect } from "react-redux";
import CoachModal from "./CoachModal";
import React, { useState } from "react";
import "./ScrollBar.css";

const mapStateToProps = ({ database, coachSearchQuery, coachTeamSearch }) => ({
  database,
  coachSearchQuery,
  coachTeamSearch,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

const CoachesCard = (props) => {
  const [modalState, setmodalState] = useState({
    isDisplayModal: false,
    selectCoach: null,
  });

  console.log(props.database);

  if (!Array.isArray(props.database.coaches)) return <p>Loading...</p>;

  const displayedCoaches =
    props.coachSearchQuery === "" && props.coachTeamSearch === ""
      ? props.database.coaches
      : props.database.coaches
          .filter((coach) => {
            return coach.name
              .toLowerCase()
              .includes(props.coachSearchQuery.toLowerCase());
          })
          .filter((coach) => {
            return coach.coachCurrentTeam
              .toLowerCase()
              .includes(props.coachTeamSearch.toLowerCase());
          });

  return (
    <>
      <div
        id="scrollbarstyle"
        className="scrollbar  overflow-y-scroll   mt-2 w-72"
      >
        {displayedCoaches.map((coach, i) => {
          return (
            <div
              key={i}
              onClick={() =>
                setmodalState({ isDisplayModal: true, selectCoach: coach })
              }
              onClickCapture={() => setmodalState({ isDisplayModal: false })}
              className="flex flex-wrap min-w-fit text-sm	cursor-pointer 	 rounded-l-full shadow-inner	 text-[#494949] bg-[#b8bec5] h-28 w-64 rounded m-2"
            >
              <div>
                <img
                  className="rounded-full shadow-xl border -z-10 h-28"
                  src={`${coach.coachImg} `}
                />
              </div>
              <div className="font-bold	 px-1 py-3.5">
                <p className="">{`${coach.name} `}</p>
                <p>{`${coach.coachNationality} `}</p>
                <p>{`${coach.coachCurrentTeam} `}</p>
                <p>{`${coach.dateOfBirth} `}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute top-20 left-80">
        {modalState.isDisplayModal && modalState.selectCoach && (
          <CoachModal coach={modalState.selectCoach} />
        )}
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CoachesCard);
