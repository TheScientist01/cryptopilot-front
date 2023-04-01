import ApexCharts from "apexcharts";
import { useEffect, useState } from "react";
import triangleRed from "../../../assets/triangleRed.png";
import triangleGreen from "../../../assets/triangleGreen.png";

const RSI = ({ data }) => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    let tempPoints = [];
    data?.buy_dates?.map((d) => {
      tempPoints.push({
        date: new Date(d).getTime(),
        point: data.rsi[data.dates.indexOf(d)],
        type: "buy",
      });
    });

    data?.sell_dates?.map((d) => {
      tempPoints.push({
        date: new Date(d).getTime(),
        point: data.rsi[data.dates.indexOf(d)],
        type: "sell",
      });
    });

    setPoints(
      tempPoints.map((p) => ({
        x: p.date,
        y: p.point,
        marker: {
          size: 0,
        },
        image: {
          path: p.type === "buy" ? triangleGreen : triangleRed,
          width: 7,
          height: 7,
          offsetX: 0,
          offsetY: 0,
        },
      }))
    );
  }, []);

  useEffect(() => {
    var options = {
      chart: {
        height: 250,
        type: "line-datetime",
        stacked: false,
        type: "line",
      },

      dataLabels: {
        enabled: false,
      },
      colors: ["#FF1654", "#247BA0"],
      series: [
        {
          name: "RSI",
          data: !!data?.rsi
            ? data?.rsi.map((p, index) => [
                new Date(data.dates[index]).getTime(),
                p
              ])
            : [],
        },
      ],
      stroke: {
        width: 1,
      },
      plotOptions: {
        bar: {
          columnWidth: "20%",
        },
      },
      annotations: {
        points: points,
        yaxis: [
          {
            y: 30,
            y2: 70,
            borderColor: "#000",
            fillColor: "#7422DD",
            dashArray: 4,
          },
        ],
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },

      yaxis: [
        {
          min: 0,
          max: 100,
          tickAmount: 5,
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
            color: "#FF1654",
          },
          labels: {
            style: {
              fontSize: 10,
            },
          },
          decimalsInFloat: 0,
          title: {
            show: false,
          },
        },
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false,
        },
      },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);   
    chart.render();

    // chart.zoomX(
    //   new Date("01 Jan 2023").getTime(),
    //   new Date("01 Mar 2023").getTime()
    // )

    return () => chart.destroy();
  }, [points]);

  return <div className="bg-white rounded-lg p-4" id="chart"></div>;
};

export default RSI;