import "./InputStyle.css";
import { Outlet, Link } from "react-router-dom";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from "@amcharts/amcharts5/radar";
import React, { useEffect } from "react";
import { connect } from "react-redux";
const mapStateToProps = ({ database }) => ({
  database,
});
const Modal = ({ team, database }) => {
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
  const teamplayers = database.players.filter((player) =>
    team.players.includes(player.playerID)
  );
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
  return (
    <div className=" ">
      <div className="teammodal border text-sm	text-[#c9c9c9] bg-[#494949]  rounded  -mt-3 -ml-5">
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
        <div className="absolute font-bold -top-1 left-60 text-[#c9c9c9]">
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
          className="absolute top-36 rounded-full text-[#c9c9c9] bg-[#c9c9c97c] left-60  h-80 w-80"
        ></div>
        <Link to={`${team.teamID}`}>
          <button className="animate-bounce font-bold text-[#494949] bg-[#67b7dc] hover:bg-[#34a2d4] rounded-r-xl shadow-xl text-center w-40 py-2">
            Go To Team Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Modal);
