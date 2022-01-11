import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Outlet, Link, useParams, useNavigate } from "react-router-dom";
import "../Components/InputStyle.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from "@amcharts/amcharts5/radar";
import FootballField from "../FieldImg.png";

const mapStateToProps = ({ database }) => ({
  database,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

const TeamPage = ({ database }) => {
  const { id } = useParams();
  const team = database.teams.find((team) => team.teamID === id);
  console.log(team);
  const teamplayers = database.players.filter((player) =>
    team.players.includes(player.playerID)
  );
  const playerNameList = teamplayers.map((player) => {
    return player.playerImg;
  });
  console.log(playerNameList);
  console.log(teamplayers);
  useEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
      })
    );
    let xRenderer = am5radar.AxisRendererCircular.new(root, {});
    xRenderer.labels.template.setAll({
      radius: 0,
    });

    let data = [
      {
        teamDetail: "ATTACK",
        numberOfDetail: teamAttackNumber,
      },
      {
        teamDetail: "MIDFIELD",
        numberOfDetail: teamMIDFIELDNumber,
      },
      {
        teamDetail: "DEFENSE",
        numberOfDetail: teamDEFENSENumber,
      },
    ];

    console.log(data);
    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5radar.AxisRendererRadial.new(root, {}),
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        categoryField: "teamDetail",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let series = chart.series.push(
      am5radar.RadarLineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "numberOfDetail",
        categoryXField: "teamDetail",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.strokes.template.setAll({
      strokeWidth: 2,
    });

    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: series.get("fill"),
        }),
      });
    });

    xAxis.set(
      "tooltip",
      am5.Tooltip.new(root, {
        themeTags: ["axis"],
      })
    );

    yAxis.set(
      "tooltip",

      am5.Tooltip.new(root, {
        themeTags: ["axis"],
      })
    );

    series.data.setAll(data);
    xAxis.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);
  const forwardPlayers = teamplayers.filter(
    (player) => player.playerPosition === "Forward"
  );
  const midFielderPlayers = teamplayers.filter(
    (player) => player.playerPosition === "MidFielder"
  );
  const defenderPlayers = teamplayers.filter(
    (player) => player.playerPosition === "Defender"
  );

  console.log(defenderPlayers);
  let teamAttackNumber = 0;
  forwardPlayers.forEach((forwardPlayers) => {
    teamAttackNumber +=
      forwardPlayers.playerOffensiveAwareness +
      forwardPlayers.playerBallControl +
      forwardPlayers.playerDribbling +
      forwardPlayers.playerTightPossession +
      forwardPlayers.playerLowPass +
      forwardPlayers.playerLoftedPass +
      forwardPlayers.playerFinishing +
      forwardPlayers.playerHeading +
      forwardPlayers.playerSetPieceTaking +
      forwardPlayers.playerCurl +
      forwardPlayers.playerSpeed +
      forwardPlayers.playerAcceleration +
      forwardPlayers.playerKickingPower +
      forwardPlayers.playerJump +
      forwardPlayers.playerPhysicalContact +
      forwardPlayers.playerBalance +
      forwardPlayers.playerStamina;
  });
  teamAttackNumber = teamAttackNumber / (forwardPlayers.length * 17);
  let teamMIDFIELDNumber = 0;
  midFielderPlayers.forEach((midFielderPlayers) => {
    teamMIDFIELDNumber +=
      midFielderPlayers.playerOffensiveAwareness +
      midFielderPlayers.playerBallControl +
      midFielderPlayers.playerDribbling +
      midFielderPlayers.playerTightPossession +
      midFielderPlayers.playerLowPass +
      midFielderPlayers.playerLoftedPass +
      midFielderPlayers.playerFinishing +
      midFielderPlayers.playerHeading +
      midFielderPlayers.playerSetPieceTaking +
      midFielderPlayers.playerCurl +
      midFielderPlayers.playerSpeed +
      midFielderPlayers.playerAcceleration +
      midFielderPlayers.playerKickingPower +
      midFielderPlayers.playerJump +
      midFielderPlayers.playerPhysicalContact +
      midFielderPlayers.playerBalance +
      midFielderPlayers.playerStamina;
  });

  teamMIDFIELDNumber = teamMIDFIELDNumber / (midFielderPlayers.length * 17);

  let teamDEFENSENumber = 0;
  defenderPlayers.forEach((defenderPlayers) => {
    teamDEFENSENumber +=
      defenderPlayers.playerOffensiveAwareness +
      defenderPlayers.playerBallControl +
      defenderPlayers.playerDribbling +
      defenderPlayers.playerTightPossession +
      defenderPlayers.playerLowPass +
      defenderPlayers.playerLoftedPass +
      defenderPlayers.playerFinishing +
      defenderPlayers.playerHeading +
      defenderPlayers.playerSetPieceTaking +
      defenderPlayers.playerCurl +
      defenderPlayers.playerSpeed +
      defenderPlayers.playerAcceleration +
      defenderPlayers.playerKickingPower +
      defenderPlayers.playerJump +
      defenderPlayers.playerPhysicalContact +
      defenderPlayers.playerBalance +
      defenderPlayers.playerStamina;
  });

  teamDEFENSENumber = teamDEFENSENumber / (defenderPlayers.length * 17);

  console.log(teamAttackNumber);
  const overallnum =
    (teamAttackNumber + teamMIDFIELDNumber + teamDEFENSENumber) / 3;
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className=" ">
      <Link to={"/teams"}>
        <button className=" text-[#494949] bg-[#9e9e9e] hover:bg-[#c9c9c9] rounded-br-xl shadow-xl text-center w-40 py-2">
          Back
        </button>
      </Link>
      <div className="team text-sm	text-[#c9c9c9] bg-[#4949499f]  rounded-3xl my-5">
        <div>
          <img
            className="rounded-full h-44 ml-3 pt-2	 "
            src={`${team.teamImg} `}
          />
        </div>
        <p className="p-4 font-bold text-2xl">{`${team.name} `}</p>
        <div className="mt-6 font-bold px-2 py-4">
          <p className="p-2">{`Country : ${team.teamCountry} `}</p>
          <p className="p-2">{`Home Stadium : ${team.teamStadium} `}</p>
          <p className="p-2">{`Date Of Foundation : ${team.dateOfFoundation} `}</p>
          <p className="p-2">{`Type : ${team.teamType.value} `}</p>
        </div>
        <div className="absolute font-bold top-16 left-52 text-[#c9c9c9]">
          <div className="flex space-x-56">
            <label htmlFor="ATTACKrange">ATTACK</label>
            <label htmlFor="ATTACKrange">{teamAttackNumber.toFixed(0)}</label>
          </div>
          <input
            id="ATTACKrange"
            className="ATTACKrange"
            type="range"
            readOnly="true"
            value={teamAttackNumber}
          />
          <div className="flex space-x-52">
            <label htmlFor="MIDFIELDrange">MIDFIELD</label>
            <label className="pl-1" htmlFor="MIDFIELDrange">
              {teamMIDFIELDNumber.toFixed(0)}
            </label>
          </div>
          <input
            id="MIDFIELDrange"
            className="MIDFIELDrange"
            type="range"
            value={teamMIDFIELDNumber}
          />
          <div className="flex space-x-52">
            <label htmlFor="DEFENSErange">DEFENSE</label>
            <label className="pl-2" htmlFor="DEFENSErange">
              {teamDEFENSENumber.toFixed(0)}
            </label>
          </div>
          <input
            id="DEFENSErange"
            className="DEFENSErange"
            type="range"
            value={teamDEFENSENumber}
          />
          <p className="flex justify-end">OVERALL : {overallnum.toFixed(2)}</p>
        </div>
        <div
          id="chartdiv"
          className="absolute top-56 rounded-full text-[#c9c9c9] bg-[#c9c9c97c] left-56 w-72 h-72"
        ></div>
      </div>
      <div
        style={{ height: "34rem" }}
        className=" absolute top-2 right-0 w-7/12 text-[#c9c9c9] bg-[#4949499f]  rounded-3xl "
      >
        <p className="text-2xl my-2 text-center font-bold">{team.name}</p>
        <>
          <div className="flex flex-wrap">
            <div className="w-full">
              <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
              >
                <li className="-mb-px  last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg  block leading-normal " +
                      (openTab === 1
                        ? "text-[#292929] bg-[#e7eff8]"
                        : "text-[#292929] bg-[#8e97a2]")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    <i className="fas fa-space-shuttle text-base mr-1"></i>{" "}
                    Players List
                  </a>
                </li>
                <li className="-mb-px  last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg  block leading-normal " +
                      (openTab === 2
                        ? "text-[#292929] bg-[#e7eff8]"
                        : "text-[#292929] bg-[#8e97a2]")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    <i className="fas fa-cog text-base mr-1"></i> Fields Squad
                  </a>
                </li>
              </ul>
              <div className="relative flex flex-col break-words  w-full shadow-lg rounded">
                <div className=" flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <div
                        id="scrollbarstyle"
                        className="playerscrollbar w-full overflow-y-scroll flex justify-center flex-wrap "
                      >
                        {teamplayers.map((player, i) => {
                          return (
                            <div
                              key={i}
                              className="flex flex-wrap min-w-fit text-sm rounded-full shadow-inner	 text-[#494949] bg-[#b8bec5] h-28 w-64  m-2"
                            >
                              <div className="">
                                <img
                                  className="rounded-full shadow-xl border -z-10 h-28 w-28"
                                  src={`${player.playerImg} `}
                                />
                              </div>
                              <div className="font-bold	 px-1 py-3.5">
                                <p className="">{`${player.name} `}</p>
                                <p>{`${player.playerPosition} `}</p>
                                <p>{`${player.playerCurrentTeam} `}</p>
                                <p>{`${player.dateOfBirth} `}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <div className="absolute top-1 right-6 ml-6">
                        <img className="rounded-3xl" src={FootballField} />
                        <div className="text-white text-lg font-bold w-full absolute top-20 -right-6">
                          <img
                            src={playerNameList[0]}
                            className="absolute animate-bounce rounded-full h-20 -left-4 top-16"
                          />
                          <img
                            src={playerNameList[1]}
                            className="absolute animate-bounce rounded-full h-20 left-20 -top-2"
                          />
                          <img
                            src={playerNameList[2]}
                            className="absolute animate-bounce rounded-full h-20 left-20 top-40"
                          />
                          <img
                            src={playerNameList[3]}
                            className="absolute animate-bounce rounded-full h-20 left-40 -top-16"
                          />
                          <img
                            src={playerNameList[4]}
                            className="absolute animate-bounce rounded-full h-20 left-40 top-52"
                          />
                          <img
                            src={playerNameList[5]}
                            className="absolute animate-bounce rounded-full h-20 left-72 "
                          />
                          <img
                            src={playerNameList[6]}
                            className="absolute animate-bounce rounded-full h-20 left-72 top-32"
                          />
                          <img
                            src={playerNameList[7]}
                            className="absolute animate-bounce rounded-full h-20 right-52 -top-8"
                          />
                          <img
                            src={playerNameList[8]}
                            className="absolute animate-bounce rounded-full h-20 right-52 top-48"
                          />
                          <img
                            src={playerNameList[9]}
                            className="absolute animate-bounce rounded-full h-20 right-32 top-10"
                          />
                          <img
                            src={playerNameList[10]}
                            className="absolute animate-bounce rounded-full h-20 right-20 top-32"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage);
