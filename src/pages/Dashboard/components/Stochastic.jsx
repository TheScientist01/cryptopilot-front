import ApexCharts from "apexcharts";
import { useEffect, useState } from "react";
import triangleRed from "../../../assets/triangleRed.png";
import triangleGreen from "../../../assets/triangleGreen.png";

const Stochastic = ({ data }) => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    let tempPoints = [];
    data?.buy_dates?.map((d) => {
      tempPoints.push({
        date: new Date(d).getTime(),
        point: data.k_percent[data.dates.indexOf(d)],
        type: "buy",
      });
    });

    data?.sell_dates?.map((d) => {
      tempPoints.push({
        date: new Date(d).getTime(),
        point: data.k_percent[data.dates.indexOf(d)],
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

      title: {
        text: "Stochastic",
        align: 'center',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '15px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#263238'
        },
    },

      dataLabels: {
        enabled: false,
      },
      colors: ["#FF1654", "#247BA0"],
      series: [
        {
          name: "K",
          data: !!data?.k_percent
            ? data?.k_percent.map((p, index) => [
                new Date(data.dates[index]).getTime(),
                p,
              ])
            : [],
        },
        {
          name: "D",
          data: !!data?.d_percent
            ? data?.d_percent.map((p, index) => [
                new Date(data.dates[index]).getTime(),
                p,
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
            y: 20,
            y2: 80,
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

    return () => chart.destroy();
  }, [points]);

  return <div className="bg-white rounded-lg p-4" id="chart"></div>;
};

export default Stochastic;
