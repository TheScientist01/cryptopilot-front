import { VscBell } from "react-icons/vsc";
import { HiOutlineArrowDown, HiOutlineArrowUp } from "react-icons/hi";
import { Tab } from "@headlessui/react";
import { useParams } from "react-router-dom";
import { cryptoList } from "../../../constants/cryptos";
import useFetching from "../../../hooks/useFetching";
import ApexCharts from "apexcharts";
import { useEffect, useState } from "react";
import { getCoin } from "../api";
import Spinner from "../../../components/Spinner";

function convertData(data) {
  const newData = [];

  for (let i = 0; i < data.index.length; i++) {
    newData.push({
      x: data.index[i],
      y: [data.open[i], data.high[i], data.low[i], data.close[i]],
    });
  }

  return newData;
}

let chart;

const durationList = [14, 30, 90, 180, 364, 366 - 1];

const ChartsPage = () => {
  const { name } = useParams();
  const [duration, setDuration] = useState(365);
  const [periodicDifference, setPeriodicDifference] = useState([0, 0, false]);

  const [data, setData] = useState([]);

  const [getCrypto, isLoading] = useFetching(async () => {
    const res = await getCoin(name);
    setData(convertData(res));
  });

  const [points, setPoints] = useState([]);

  useEffect(() => {
    if (!isLoading && data.length !== 0 && !!data) {
      const periodicData = data.slice(-90);
      periodicData, data;
      const difference = periodicData[89].y[2] - periodicData[0].y[0];
      const differencePercentage =
        periodicData[89].y[2] / periodicData[0].y[0] - 1;
      setPeriodicDifference([
        difference.toFixed(2),
        (differencePercentage * 100).toFixed(2),
        difference > 0,
      ]);

      let options = {
        series: [
          {
            data: data,
          },
        ],
        chart: {
          type: "candlestick",
          height: 400,
          offsetY: 20,
          toolbar: {
            tools: {
              selection: true,
              zoomIn: false,
              zoomput: false,
            },
            autoSelected: "pan",
          },
          zoom: {
            enabled: true,
            type: "xy",
            autoScaleYaxis: false,
            zoomedArea: {
              fill: {
                color: "#90CAF9",
                opacity: 0.4,
              },
              stroke: {
                color: "#0D47A1",
                opacity: 0.4,
                width: 1,
              },
            },
          },
        },
        annotations: {
          position: "front",
          points: points,
        },
        xaxis: {
          type: "datetime",
          crosshairs: {
            show: true,
            position: "back",
            stroke: {
              color: "#7422DD",
              width: 1,
              dashArray: 5,
            },
          },
          labels: {
            style: {
              colors: [
                "#C9C4D2",
                "#C9C4D2",
                "#C9C4D2",
                "#C9C4D2",
                "#C9C4D2",
                "#C9C4D2",
                "#C9C4D2",
                "#C9C4D2",
                "#C9C4D2",
                "#C9C4D2",
                "#C9C4D2",
                "#C9C4D2",
                "#C9C4D2",
                "#C9C4D2",
                "#C9C4D2",
                "#C9C4D2",
              ],
            },
          },
        },
        yaxis: {
          decimalsInFloat: 2,
          tickAmount: 8,
          tooltip: { enabled: true },
          crosshairs: {
            show: true,
            position: "back",
            stroke: {
              color: "#7422DD",
              width: 1,
              dashArray: 0,
            },
          },
          labels: {
            style: {
              colors: ["#C9C4D2"],
            },
          },
        },
        tooltip: {
          enabled: true,
          enabledOnSeries: undefined,
          shared: true,
          followCursor: true,
          intersect: false,
          inverseOrder: false,
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            let data =
              w.globals.initialSeries[seriesIndex].data[dataPointIndex];

            return `  
            <div class="w-[120px] p-3 bg-white text-xs">
            <div class="flex justify-between my-[4px]">
              <div class="text-gray-400">Open</div>
              <div><b>${data.y[0]?.toFixed(2)}</b></div>
            </div>
            <div class=" flex justify-between my-[4px]">
              <div class="text-gray-400">Close</div>
              <div><b>${data.y[1]?.toFixed(2)}</b></div>
            </div>
            <div class="flex justify-between my-[4px]">
              <div class="text-gray-400">Low</div>
              <div><b>${data.y[2]?.toFixed(2)}</b></div>
            </div>
            <div class=" flex justify-between my-[4px]">
              <div class="text-gray-400">High</div>
              <div><b>${data.y[3]?.toFixed(2)}</b></div>
            </div>
          </div>
            `;
          },
          fillSeriesColor: false,
          theme: true,
          style: {
            fontSize: "12px",
            fontFamily: undefined,
          },
          onDatasetHover: {
            highlightDataSeries: false,
          },
          x: {
            show: true,
            format: "dd MMM",
            formatter: undefined,
          },
          y: {
            formatter: undefined,
            title: {
              formatter: (seriesName) => seriesName,
            },
          },
          z: {
            formatter: undefined,
            title: "Size: ",
          },
          marker: {
            show: true,
          },
          items: {
            display: "flex",
          },
          fixed: {
            enabled: false,
            position: "topRight",
            offsetX: 0,
            offsetY: 0,
          },
        },
        plotOptions: {
          candlestick: {
            borderRadius: 30,
            colors: {
              upward: "#7422DD",
              downward: "#C9C4D2",
            },
          },
        },
      };

      let lineOptions = {
        chart: {
          height: 150,
          type: "area",
          stacked: false,
          toolbar: { show: false },
          zoom: { enabled: false },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.1,
            opacityTo: 0.7,
            stops: [0, 90, 100],
          },
        },
        colors: ["#7422DD"],
        series: [
          {
            name: "Series A",
            data: data.slice(-90),
          },
        ],
        stroke: {
          width: 2,
        },
        grid: { show: false },
        plotOptions: {
          bar: {
            columnWidth: "10%",
          },
        },
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
        },
        yaxis: [{ labels: { show: false } }],
        tooltip: {
          shared: false,
          intersect: true,
          x: {
            show: false,
          },
        },
      };
      let optionsChart = new ApexCharts(
        document.querySelector("#linechart"),
        lineOptions
      );

      optionsChart.render();

      chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();

      return () => {
        chart.destroy();
        optionsChart.destroy();
      };
    }
  }, [data]);

  useEffect(() => {
    !!chart &&
      data.length &&
      chart.zoomX(
        new Date(data[data.length - duration - 1].x).getTime(),
        new Date(data[data.length - 1].x).getTime()
      );
  }, [duration]);

  useEffect(() => {
    getCrypto();
  }, []);

  const currentPrice = (data) => {
    let price = 0;
    data[data.length - 1]?.y.map((p) => (price += p));
    return (price / 4).toFixed(2);
  };

  return !isLoading ? (
    <div className="grid grid-cols-10 gap-4">
      <div className="col-span-10 lg:col-span-4 grid grid-cols-7 justify-center p-6 h-[150px] rounded-xl bg-white shadow-card-100">
        <div className="col-span-3">
          <div className="text-gray-400 text-sm">{cryptoList[name].key}</div>
          <div className="text-4xl font-semibold my-2">
            <span className="text-gray-400">$</span>
            {currentPrice(data)}
          </div>
          <div
            className={` ${
              periodicDifference[2] ? "text-green-600" : "text-red-800"
            } flex gap-1`}
          >
            <div
              className={`rounded-full p-1 text-xs ${
                periodicDifference[2] ? "bg-green-600" : "bg-red-800"
              } bg-opacity-40 `}
            >
              {periodicDifference[2] ? (
                <HiOutlineArrowUp />
              ) : (
                <HiOutlineArrowDown />
              )}
            </div>
            <div className="text-xs my-auto">
              {periodicDifference[2]
                ? "+" + periodicDifference[0] + ` (+${periodicDifference[1]}%)`
                : periodicDifference[0] + ` (${periodicDifference[1]}%)`}
            </div>
          </div>
        </div>
        <div className="mt-[-20px] col-span-4">
          <div id="linechart"></div>
        </div>
      </div>
      <div className="col-span-10 lg:col-span-6 grid grid-cols-3 gap-5 h-[150px] px-8 pt-7 rounded-xl bg-white shadow-card-100">
        <div>
          <div className="text-gray-400 text-sm flex gap-0.5">
            <div>Pre-market</div>
            <VscBell className="my-auto" />
          </div>
          <div className="text-2xl font-semibold">
            <span className="text-gray-400">$</span>
            {currentPrice(data) * (1.005).toFixed(2)}
          </div>
          <div className="mt-4 text-red-800 flex gap-1">
            <div className="rounded-full p-1 text-xs bg-red-800 bg-opacity-40 ">
              <HiOutlineArrowDown />
            </div>
            <div className="text-xs my-auto">-0.98 (-0.75%)</div>
          </div>
        </div>
        <div>
          <div className="text-gray-400 text-sm flex gap-0.5">
            Previous close
          </div>
          <div className="text-2xl font-semibold">
            <span className="text-gray-400">$</span>
            {data[data.length - 1]?.y[3]?.toFixed(2)}
          </div>
          <div className="mt-4 text-gray-400 text-xs flex gap-2">
            Mar 31, 9:30pm
          </div>
        </div>
        <div>
          <div className="text-gray-400 text-sm flex gap-0.5">Open</div>
          <div className="text-2xl font-semibold">
            <span className="text-gray-400">$</span>
            {data[data.length - 1]?.y[0]?.toFixed(2)}
          </div>
          <div className="mt-4 text-gray-400 text-xs flex gap-2">
            Mar 30, 9:30pm
          </div>
        </div>
      </div>
      <div className="relative col-span-10 h-[500px] rounded-xl bg-white shadow-card-100">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 rounded-md p-1 bg-gray-200 w-fit mx-auto mt-4 text-sm">
          <Tab.Group
            onChange={(index) => {
              setDuration(durationList[index]);
            }}
          >
            <Tab.List>
              <Tab>
                <div
                  className={`text-gray-600 py-1 px-2 mx-1 rounded-md ${
                    durationList.indexOf(duration) === 0 && "bg-white"
                  } hover:bg-white duration-200 focus:bg-red-400`}
                >
                  14d
                </div>
              </Tab>
              <Tab>
                <div
                  className={`text-gray-600 py-1 mx-1 px-2 rounded-md ${
                    durationList.indexOf(duration) === 1 && "bg-white"
                  } hover:bg-white duration-200`}
                >
                  1m
                </div>
              </Tab>
              <Tab>
                <div
                  className={`text-gray-600 py-1 mx-1 px-2 rounded-md ${
                    durationList.indexOf(duration) === 2 && "bg-white"
                  } hover:bg-white duration-200`}
                >
                  3m
                </div>
              </Tab>
              <Tab>
                <div
                  className={`text-gray-600 py-1 mx-1 px-2 rounded-md ${
                    durationList.indexOf(duration) === 3 && "bg-white"
                  } hover:bg-white duration-200`}
                >
                  6m
                </div>
              </Tab>
              <Tab>
                <div
                  className={`text-gray-600 py-1 mx-1 px-2 rounded-md ${
                    durationList.indexOf(duration) === 4 && "bg-white"
                  } hover:bg-white duration-200`}
                >
                  1y
                </div>
              </Tab>
              <Tab>
                <div
                  className={`text-gray-600 py-1 mx-1 px-2 rounded-md ${
                    durationList.indexOf(duration) === 5 && "bg-white"
                  } hover:bg-white duration-200`}
                >
                  Lifetime
                </div>
              </Tab>
            </Tab.List>
          </Tab.Group>
        </div>
        <div className="mt-5" id="chart" />
        <div id="chartBar"></div>
      </div>
    </div>
  ) : (
    <div className="w-full p-[80px] bg-white text-center rounded-lg">
      <Spinner />
    </div>
  );
};

export default ChartsPage;
