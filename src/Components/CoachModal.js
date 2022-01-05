import "./InputStyle.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from "@amcharts/amcharts5/radar";
import React, { useEffect } from "react";

const CoachModal = ({ coach }) => {
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
        coachDetail: "LeadershipSkills",
        numberOfDetail: coach.coachLeadershipSkills,
      },
      {
        coachDetail: "Experience",
        numberOfDetail: coach.coachExperience,
      },
      {
        coachDetail: "CoachingHistory",
        numberOfDetail: coach.coachCoachingHistory,
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
        categoryField: "coachDetail",
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
        categoryXField: "coachDetail",
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
  return (
    <div className="">
      <div className="">
        <div className="teammodal border text-sm	text-[#c9c9c9] bg-[#494949]  rounded  -mt-3 -ml-5">
          <div>
            <img
              className="rounded-full h-44 ml-3 pt-2		 "
              src={`${coach.coachImg} `}
            />
          </div>
          <p className="p-4 font-bold text-2xl">{` ${coach.name} `}</p>
          <div className="mt-14 font-bold px-2 py-4">
            <p className="p-2">{`Nationality : ${coach.coachNationality} `}</p>
            <p className="p-2">{`Current Team : ${coach.coachCurrentTeam} `}</p>
            <p className="p-2">{`Date Of Birth : ${coach.dateOfBirth} `}</p>
          </div>
          <div className="absolute font-bold -top-1 left-60 text-[#c9c9c9]">
            <div className="flex space-x-52">
              <label htmlFor="Experiencerange">Experience</label>
              <label htmlFor="Experiencerange">{coach.coachExperience}</label>
            </div>
            <input
              id="ATTACKrange"
              className="ATTACKrange"
              type="range"
              readOnly="true"
              value={coach.coachExperience}
            />
            <div className="flex space-x-44">
              <label htmlFor="LeadershipSkillsrange">LeadershipSkills</label>
              <label htmlFor="LeadershipSkillsrange">
                {coach.coachLeadershipSkills}
              </label>
            </div>
            <input
              id="MIDFIELDrange"
              className="MIDFIELDrange"
              type="range"
              value={coach.coachLeadershipSkills}
            />
            <div className="flex space-x-44">
              <label htmlFor="CoachingHistoryrange">CoachingHistory</label>
              <label htmlFor="CoachingHistoryrange">
                {coach.coachCoachingHistory}
              </label>
            </div>
            <input
              id="DEFENSErange"
              className="DEFENSErange"
              type="range"
              value={coach.coachCoachingHistory}
            />
            <p className="flex justify-end"></p>
          </div>
          <div
            id="chartdiv"
            className="absolute top-32 rounded-full text-[#c9c9c9] left-72 w-1/2 h-80"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CoachModal;
