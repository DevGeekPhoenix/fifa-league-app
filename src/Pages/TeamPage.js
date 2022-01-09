import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Outlet, Link, useParams, useNavigate } from "react-router-dom";
import "../Components/InputStyle.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from "@amcharts/amcharts5/radar";

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
        numberOfDetail: team.teamAttackNumber,
      },
      {
        teamDetail: "MIDFIELD",
        numberOfDetail: team.teamMIDFIELDNumber,
      },
      {
        teamDetail: "DEFENSE",
        numberOfDetail: team.teamDEFENSENumber,
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
  const overallnum =
    (team.teamAttackNumber + team.teamMIDFIELDNumber + team.teamDEFENSENumber) /
    3;

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
            <label htmlFor="ATTACKrange">{team.teamAttackNumber}</label>
          </div>
          <input
            id="ATTACKrange"
            className="ATTACKrange"
            type="range"
            readOnly="true"
            value={team.teamAttackNumber}
          />
          <div className="flex space-x-52">
            <label htmlFor="MIDFIELDrange">MIDFIELD</label>
            <label htmlFor="MIDFIELDrange">{team.teamMIDFIELDNumber}</label>
          </div>
          <input
            id="MIDFIELDrange"
            className="MIDFIELDrange"
            type="range"
            value={team.teamMIDFIELDNumber}
          />
          <div className="flex space-x-52">
            <label htmlFor="DEFENSErange">DEFENSE</label>
            <label htmlFor="DEFENSErange">{team.teamDEFENSENumber}</label>
          </div>
          <input
            id="DEFENSErange"
            className="DEFENSErange"
            type="range"
            value={team.teamDEFENSENumber}
          />
          <p className="flex justify-end">OVERALL : {overallnum.toFixed(2)}</p>
        </div>
        <div
          id="chartdiv"
          className="absolute top-56 rounded-full text-[#c9c9c9] bg-[#c9c9c97c] left-56 w-72 h-72"
        ></div>
      </div>
      <div className=" absolute top-0 right-0 w-7/12	h-full	text-[#c9c9c9] bg-[#4949499f]  rounded-3xl ">
        <p className="text-2xl mt-5 text-center font-bold">
          {team.name}'s Players
        </p>
        <div
          id="scrollbarstyle"
          className="scrollbar  overflow-y-scroll flex flex-wrap mt-1"
        >
          {teamplayers.map((player, i) => {
            return (
              <div
                key={i}
                className="flex flex-wrap min-w-fit text-sm rounded-full shadow-inner	 text-[#494949] bg-[#b8bec5] h-28 w-64  m-2"
              >
                <div className="">
                  <img
                    className="rounded-full shadow-xl border -z-10 h-28"
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
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage);
