import { connect } from "react-redux";
import CoachModal from "./CoachModal";
import React, { useState } from "react";

const mapStateToProps = ({ database }) => ({ database });

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

  return (
    <>
      <div className="overflow-y-scroll h-96 mt-4 w-72">
        {props.database.coaches.map((coach, i) => {
          return (
            <div
              key={i}
              onClick={() =>
                setmodalState({ isDisplayModal: true, selectCoach: coach })
              }
              onClickCapture={() => setmodalState({ isDisplayModal: false })}
              className="flex flex-wrap min-w-fit	cursor-pointer text-[#ffff8d] bg-[#0d9fa7] h-28 w-64 rounded m-2"
            >
              <div className="p-2">
                <p className="">{`${coach.name} `}</p>
                <p>{`${coach.coachNationality} `}</p>
                <p>{`${coach.coachCurrentTeam} `}</p>
                <p>{`${coach.dateOfBirth} `}</p>
              </div>
              <div>
                <img
                  className="rounded-full h-24 mt-2 min-w-fit	 "
                  src={`${coach.coachImg} `}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute top-40 left-80">
        {modalState.isDisplayModal && modalState.selectCoach && (
          <CoachModal coach={modalState.selectCoach} />
        )}
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CoachesCard);
