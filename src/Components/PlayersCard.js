import { connect } from "react-redux";
import PlayerModal from "./PlayerModal";
import React, { useState } from "react";

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
      <div className="overflow-y-scroll h-96 mt-4 w-72">
        {displayedPlayers.map((player, i) => {
          return (
            <div
              key={i}
              onClick={() =>
                setmodalState({ isDisplayModal: true, selectPlayer: player })
              }
              onClickCapture={() => setmodalState({ isDisplayModal: false })}
              className="flex flex-wrap min-w-fit	cursor-pointer text-[#ffff8d] bg-[#0d9fa7] h-28 w-64 rounded m-2"
            >
              <div className="p-2">
                <p className="">{`${player.name} `}</p>
                <p>{`${player.playerPosition} `}</p>
                <p>{`${player.playerCurrentTeam} `}</p>
                <p>{`${player.dateOfBirth} `}</p>
              </div>
              <div className="">
                <img
                  className="rounded-full h-24 mt-2 min-w-fit	 "
                  src={`${player.playerImg} `}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute top-40 left-80">
        {modalState.isDisplayModal && modalState.selectPlayer && (
          <PlayerModal player={modalState.selectPlayer} />
        )}
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayersCard);
