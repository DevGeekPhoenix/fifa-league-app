import "./InputStyle.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from "@amcharts/amcharts5/radar";
import React, { useEffect } from "react";

const PlayerModal = ({ player }) => {
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
      radius: 10,
    });

    let data = [
      {
        playerDetail: "SHO",
        numberOfDetail: player.playerKickingPower,
      },
      {
        playerDetail: "DRI",
        numberOfDetail: player.playerDribbling,
      },
      {
        playerDetail: "SPD",
        numberOfDetail: player.playerSpeed,
      },
      {
        playerDetail: "DEF",
        numberOfDetail: player.playerOffensiveAwareness,
      },
      {
        playerDetail: "STR",
        numberOfDetail: player.playerStamina,
      },
      {
        playerDetail: "PAS",
        numberOfDetail: (player.playerLowPass + player.playerLoftedPass) / 2,
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
        categoryField: "playerDetail",
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
        categoryXField: "playerDetail",
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

  const playerAvg =
    (player.playerAcceleration +
      player.playerBalance +
      player.playerBallControl +
      player.playerCurl +
      player.playerDribbling +
      player.playerFinishing +
      player.playerHeading +
      player.playerJump +
      player.playerKickingPower +
      player.playerLoftedPass +
      player.playerLowPass +
      player.playerOffensiveAwareness +
      player.playerPhysicalContact +
      player.playerSetPieceTaking +
      player.playerSpeed +
      player.playerStamina +
      player.playerTightPossession) /
    17;

  return (
    <>
      <div id="chartdiv" className="absolute top-44 -ml-7  w-1/2 h-72"></div>
      <div className="teammodal border text-sm	text-[#c9c9c9] bg-[#494949]  rounded  -mt-3 -ml-5">
        <div className="">
          <div>
            <img
              className="rounded-full h-44 ml-3 pt-2	 "
              src={`${player.playerImg} `}
            />
            <input
              id="playerAvgrange"
              className="playerAvgrange ml-5"
              type="range"
              readOnly="true"
              value={playerAvg}
            />
            <label className="ml-2" htmlFor="playerAvgrange">
              OVERALL : {playerAvg.toFixed(2)}
            </label>
          </div>
          <div className="absolute text-2xl font-extrabold mt-5	 text-[#c9c9c9] left-72 -top-6">
            <span>{player.name} Attributes</span>
          </div>
          <div className="absolute top-12 left-72 text-[#c9c9c9]">
            <div className="flex space-x-1">
              <label htmlFor="OffensiveAwarenessrange">
                Offensive Awareness
              </label>
              <input
                id="OffensiveAwarenessrange"
                className="playerdetailrange"
                type="range"
                readOnly="true"
                value={player.playerOffensiveAwareness}
              />
              <label htmlFor="OffensiveAwarenessrange">
                {player.playerOffensiveAwareness}
              </label>
            </div>
            <div className="flex space-x-1">
              <label htmlFor="BallControlrange">Ball Control</label>
              <div className=" pl-14 space-x-1">
                <input
                  id="BallControlrange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerBallControl}
                />
                <label htmlFor="BallControlrange">
                  {player.playerBallControl}
                </label>
              </div>
            </div>
            <div className="flex space-x-1">
              <label className="pr-1.5" htmlFor="Dribblingrange">
                Dribbling
              </label>
              <div className=" pl-16 space-x-1">
                <input
                  id="Dribblingrange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerDribbling}
                />
                <label htmlFor="Dribblingrange">{player.playerDribbling}</label>
              </div>
            </div>

            <div className="flex space-x-1">
              <label className="pr-1.5" htmlFor="TightPossessionrange">
                TightPossession
              </label>
              <div className=" pl-6 space-x-1">
                <input
                  id="TightPossessionrange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerTightPossession}
                />
                <label htmlFor="TightPossessionrange">
                  {player.playerTightPossession}
                </label>
              </div>
            </div>

            <div className="flex space-x-1">
              <label className="pr-3" htmlFor="LowPassrange">
                LowPass
              </label>
              <div className=" pl-16 space-x-1">
                <input
                  id="LowPassrange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerLowPass}
                />
                <label htmlFor="LowPassrange">{player.playerLowPass}</label>
              </div>
            </div>

            <div className="flex space-x-1">
              <label className="pr-1.5" htmlFor="LoftedPassrange">
                LoftedPass
              </label>
              <div className=" pl-14 space-x-1">
                <input
                  id="LoftedPassrange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerLoftedPass}
                />
                <label htmlFor="LoftedPassrange">
                  {player.playerLoftedPass}
                </label>
              </div>
            </div>

            <div className="flex space-x-1">
              <label className="pr-2.5" htmlFor="Finishingrange">
                Finishing
              </label>
              <div className=" pl-16 space-x-1">
                <input
                  id="Finishingrange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerFinishing}
                />
                <label htmlFor="Finishingrange">{player.playerFinishing}</label>
              </div>
            </div>

            <div className="flex space-x-1">
              <label className="pr-3" htmlFor="Headingrange">
                Heading
              </label>
              <div className=" pl-16 space-x-1">
                <input
                  id="Headingrange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerHeading}
                />
                <label htmlFor="Headingrange">{player.playerHeading}</label>
              </div>
            </div>

            <div className="flex space-x-1">
              <label className="pr-3" htmlFor="SetPieceTakingrange">
                SetPieceTaking
              </label>
              <div className=" pl-6 space-x-1">
                <input
                  id="SetPieceTakingrange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerSetPieceTaking}
                />
                <label htmlFor="SetPieceTakingrange">
                  {player.playerSetPieceTaking}
                </label>
              </div>
            </div>

            <div className="flex space-x-1">
              <label className="pr-6" htmlFor="Curlrange">
                Curl
              </label>
              <div className=" pl-20 space-x-1">
                <input
                  id="Curlrange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerCurl}
                />
                <label htmlFor="Curlrange">{player.playerCurl}</label>
              </div>
            </div>

            <div className="flex space-x-1">
              <label className="pr-2.5" htmlFor="Speedrange">
                Speed
              </label>
              <div className=" pl-20 space-x-1">
                <input
                  id="Speedrange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerSpeed}
                />
                <label htmlFor="Speedrange">{player.playerSpeed}</label>
              </div>
            </div>

            <div className="flex space-x-1">
              <label className="pr-3" htmlFor="Accelerationrange">
                Acceleration
              </label>
              <div className=" pl-10 space-x-1">
                <input
                  id="Accelerationrange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerAcceleration}
                />
                <label htmlFor="Accelerationrange">
                  {player.playerAcceleration}
                </label>
              </div>
            </div>

            <div className="flex space-x-1">
              <label className="pr-1.5" htmlFor="KickingPowerrange">
                KickingPower
              </label>
              <div className=" pl-10 space-x-1">
                <input
                  id="KickingPowerrange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerKickingPower}
                />
                <label htmlFor="KickingPowerrange">
                  {player.playerKickingPower}
                </label>
              </div>
            </div>

            <div className="flex space-x-1">
              <label className="pr-4" htmlFor="Jumprange">
                Jump
              </label>
              <div className=" pl-20 space-x-1">
                <input
                  id="Jumprange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerJump}
                />
                <label htmlFor="Jumprange">{player.playerJump}</label>
              </div>
            </div>

            <div className="flex space-x-1">
              <label className="pr-1" htmlFor="PhysicalContactrange">
                PhysicalContact
              </label>
              <div className=" pl-7 space-x-1">
                <input
                  id="PhysicalContactrange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerPhysicalContact}
                />
                <label htmlFor="PhysicalContactrange">
                  {player.playerPhysicalContact}
                </label>
              </div>
            </div>

            <div className="flex space-x-1">
              <label className="pr-4" htmlFor="Balancerange">
                Balance
              </label>
              <div className=" pl-16 space-x-1">
                <input
                  id="Balancerange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerBalance}
                />
                <label htmlFor="Balancerange">{player.playerBalance}</label>
              </div>
            </div>

            <div className="flex space-x-1">
              <label className="pr-3.5" htmlFor="Staminarange">
                Stamina
              </label>
              <div className=" pl-16 space-x-1">
                <input
                  id="Staminarange"
                  className="playerdetailrange"
                  type="range"
                  readOnly="true"
                  value={player.playerStamina}
                />
                <label htmlFor="Staminarange">{player.playerStamina}</label>
              </div>
            </div>
            {/* <p className="flex justify-end">OVERALL : {overallnum.toFixed(2)}</p> */}
          </div>
          <div
            id="chartdiv"
            className="absolute top-40 left-60 w-1/2 h-60"
          ></div>
        </div>
      </div>
    </>
  );
};
export default PlayerModal;
