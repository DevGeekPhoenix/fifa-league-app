import { connect } from "react-redux";
import PlayerModal from "./PlayerModal";
import React, { useState } from "react";
import "./ScrollBar.css";

const mapStateToProps = ({
  database,
  playerSearchQuery,
  playerPositionSearch,
}) => ({
  database,
  playerSearchQuery,
  playerPositionSearch,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

const PlayersCard = (props) => {
  const [modalState, setmodalState] = useState({
    isDisplayModal: false,
    selectPlayer: null,
  });

  console.log(props.database);

  if (!Array.isArray(props.database.players)) return <p>Loading...</p>;

  const displayedPlayers =
    props.playerSearchQuery === "" && props.playerPositionSearch === ""
      ? props.database.players
      : props.database.players
          .filter((player) => {
            return player.name
              .toLowerCase()
              .includes(props.playerSearchQuery.toLowerCase());
          })
          .filter((player) => {
            return player.playerPosition
              .toLowerCase()
              .includes(props.playerPositionSearch.toLowerCase());
          });

  return (
    <>
      <div
        id="scrollbarstyle"
        className="scrollbar  overflow-y-scroll   mt-2 w-72"
      >
        {displayedPlayers.map((player, i) => {
          return (
            <div
              key={i}
              onClick={() =>
                setmodalState({ isDisplayModal: true, selectPlayer: player })
              }
              onClickCapture={() => setmodalState({ isDisplayModal: false })}
              className="flex flex-wrap min-w-fit text-sm	cursor-pointer 	 rounded-l-full shadow-inner	 text-[#494949] bg-[#b8bec5] h-28 w-64 rounded m-2"
            >
              <div className="">
                <img
                  className="rounded-full shadow-xl border -z-10 h-28 w-28"
                  src={`${player.playerImg} `}
                />
              </div>
              <div className="font-bold px-1 py-3.5">
                <p className="max-w-fit">{`${player.name} `}</p>
                <p>{`${player.playerPosition} `}</p>
                <p>{`${player.playerCurrentTeam} `}</p>
                <p>{`${player.dateOfBirth} `}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute top-20 left-80">
        {modalState.isDisplayModal && modalState.selectPlayer && (
          <PlayerModal player={modalState.selectPlayer} />
        )}
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersCard);
