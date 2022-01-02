import "./InputStyle.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from "@amcharts/amcharts5/radar";
import React, { useEffect, useLayoutEffect } from "react";

const Modal = ({ team }) => {
  useLayoutEffect(() => {
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
    <div className="">
      <div className=" max-w-xl text-sm	h-96 text-[#ffff8d] bg-[#0d9fa7] w-screen rounded mt-0.5 -ml-4">
        <div>
          <img
            className="rounded-full h-44 ml-3 pt-2	 "
            src={`${team.teamImg} `}
          />
        </div>
        <div className="px-2 py-4">
          <p className="p-2">{`Name : ${team.name} `}</p>
          <p className="p-2">{`Country : ${team.teamCountry} `}</p>
          <p className="p-2">{`Home Stadium : ${team.teamStadium} `}</p>
          <p className="p-2">{`Date Of Foundation : ${team.dateOfFoundation} `}</p>
          <p className="p-2">{`Type : ${team.teamType.value} `}</p>
        </div>
        <div className="absolute top-7 left-60 text-[#000]">
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
        <div id="chartdiv" className="absolute top-40 left-60 w-1/2 h-60"></div>
      </div>
    </div>
  );
};

export default Modal;
