import { VscBell } from "react-icons/vsc";
import { HiOutlineArrowDown, HiOutlineArrowUp } from "react-icons/hi";
import ApexCharts from "apexcharts";
import { useEffect, useState } from "react";
import triangleRed from "../../assets/triangleRed.png";
import triangleGreen from "../../assets/triangleGreen.png";
import { Tab } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useFetching from "../../hooks/useFetching";
import { cryptoList } from "../../constants/cryptos";

function convertData(res) {
  let convertedData = [];
  const data = res.index;
  for (let i = 0; i < data.length; i++) {
    let date = new Date(data[i]).getTime();
    let open = res.open[data[i]];
    let high = res.high[data[i]];
    let low = res.low[data[i]];
    let close = res.close[data[i]];
    convertedData.push({ x: date, y: [open, high, low, close] });
  }
  return convertedData;
}

let chart;

const durationList = [14, 30, 90, 180, 364, 365 - 1];

const DashboardPage = () => {
  const [duration, setDuration] = useState(30);

  const [data, setData] = useState([]);

  const { name } = useParams();
  const navigate = useNavigate();

  const [getCrypto, isLoading] = useFetching(async () => {
    const res = await axios.post(
      "https://nest-v1.onrender.com/data/cryptos",
      {
        ticker: `${cryptoList[name].key}-USD`,
        interval: "1d",
        start_date: "2022-01-01",
        end_date: "2023-03-01",
      },
      { headers: { "access-token": localStorage.getItem("accessToken") } }
    );

    setData(convertData(res.data));
  });

  useEffect(() => {
    if (!isLoading && data.length) {
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
          points: [
            {
              x: new Date("01 Dec 2022").getTime(),
              y: 1209,
              yAxisIndex: 0,
              seriesIndex: 0,
              mouseEnter: undefined,
              mouseLeave: undefined,
              click: undefined,
              marker: {
                size: 0,
                fillColor: "#000",
                strokeColor: "#333",
                strokeWidth: 3,
                shape: "circle",
                radius: 5,
                OffsetX: 0,
                OffsetY: 0,
                cssClass: "",
              },
              label: {
                borderColor: "#c2c2c2",
                borderWidth: 1,
                borderRadius: 2,
                text: undefined,
                textAnchor: "middle",
                offsetX: 0,
                offsetY: -15,
                mouseEnter: undefined,
                mouseLeave: undefined,
                click: undefined,
                style: {
                  background: "#fff",
                  color: "#777",
                  fontSize: "12px",
                  fontWeight: 400,
                  fontFamily: undefined,
                  cssClass: "apexcharts-point-annotation-label",
                  padding: {
                    left: 5,
                    right: 5,
                    top: 0,
                    bottom: 2,
                  },
                },
              },
              image: {
                path: triangleRed,
                width: 5,
                height: 5,
                offsetX: 0,
                offsetY: 0,
              },
            },
            {
              x: new Date("30 Dec 2022").getTime(),
              y: 1170,
              yAxisIndex: 0,
              seriesIndex: 0,
              mouseEnter: undefined,
              mouseLeave: undefined,
              click: undefined,
              marker: {
                size: 0,
                fillColor: "#000",
                strokeColor: "#333",
                strokeWidth: 3,
                shape: "circle",
                radius: 5,
                OffsetX: 0,
                OffsetY: 0,
                cssClass: "",
              },
              label: {
                borderColor: "#c2c2c2",
                borderWidth: 1,
                borderRadius: 2,
                text: undefined,
                textAnchor: "middle",
                offsetX: 0,
                offsetY: -15,
                mouseEnter: undefined,
                mouseLeave: undefined,
                click: undefined,
                style: {
                  background: "#fff",
                  color: "#777",
                  fontSize: "12px",
                  fontWeight: 400,
                  fontFamily: undefined,
                  cssClass: "apexcharts-point-annotation-label",
                  padding: {
                    left: 5,
                    right: 5,
                    top: 0,
                    bottom: 2,
                  },
                },
              },
              image: {
                path: triangleGreen,
                width: 5,
                height: 5,
                offsetX: 0,
                offsetY: 0,
              },
            },
          ],
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

      chart.zoomX(
        new Date(data[data.length - duration - 1].x).getTime(),
        new Date(data[data.length - 1].x).getTime()
      );

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

  return (
    <div style={{ fontFamily: "Helvetica" }} className="flex">
      <div className="w-[350px] py-9 pl-9">
        <div className="text-[35px] font-semibold mb-5">Logo</div>
        <hr></hr>
        {Object.values(cryptoList).map((crypto) => (
          <div
            onClick={() => {
              navigate(`/dashboard/${crypto.name.toLocaleLowerCase()}`);
              window.location.reload(false);
            }}
            className={`flex gap-2 mt-2 rounded-lg p-1 ${
              crypto.name.toLocaleLowerCase() === name &&
              "bg-[#7422DD] text-[#7422DD] bg-opacity-10"
            } hover:bg-[#7422DD] hover:bg-opacity-10 hover:text-[#7422DD] duration-200 cursor-pointer`}
          >
            <div className="rounded-md w-[30px] h-[30px] p-1.5 my-auto bg-white shadow-card-100">
              <img src={crypto.url} />
            </div>
            <div className="my-auto font-semibold">{crypto.name}</div>
          </div>
        ))}
      </div>
      <div className="relative flex bg-gray-100 pt-[135px] pb-3 w-[99%] m-4 rounded-[25px] shadow-black">
        <div className="absolute top-0 h-[40vh] w-full rounded-t-[25px] bg-black">
          <div className="flex justify-between text-[15px] text-white w-[85%] mx-auto my-9">
            <div className="flex gap-10">
              <div>Interactive Chart</div>
              <div className="text-[#969696]">Indicators</div>
            </div>
            <button className="rounded-md bg-[#2E2E2E] font-semibold text-sm py-2 px-5">
              Save data
            </button>
          </div>
        </div>
        <div className="w-[85%] mx-auto z-10 relative">
          <div className="flex gap-5 font-semibold mb-4">
            <div className="rounded-md w-[45px] h-[45px] p-1.5 my-auto bg-gray-300 shadow-card-100 shadow-white">
              <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" />
            </div>
            <div className="text-[35px] text-white">{cryptoList[name].name}</div>
          </div>
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-10 lg:col-span-4 grid grid-cols-7 justify-center p-6 h-[150px] rounded-xl bg-white shadow-card-100">
              <div className="col-span-3">
                <div className="text-gray-400 text-sm">{cryptoList[name].key}</div>
                <div className="text-4xl font-semibold my-2">
                  <span className="text-gray-400">$</span>130.35
                </div>
                <div className="text-green-600 flex gap-1">
                  <div className="rounded-full p-1 text-xs bg-green-600 bg-opacity-40 ">
                    <HiOutlineArrowUp />
                  </div>
                  <div className="text-xs my-auto">-0.98 (-0.75%)</div>
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
                  <span className="text-gray-400">$</span>130.35
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
                  <span className="text-gray-400">$</span>127.35
                </div>
                <div className="mt-4 text-gray-400 text-xs flex gap-2">
                  June 17, 9:30pm
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-sm flex gap-0.5">Open</div>
                <div className="text-2xl font-semibold">
                  <span className="text-gray-400">$</span>130.35
                </div>
                <div className="mt-4 text-gray-400 text-xs flex gap-2">
                  June 17, 9:30pm
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
            {/* <div className="col-span-3 grid grid-rows-10 gap-4">
              <div className="row-span-3 rounded-xl bg-white shadow-card-100"></div>
              <div className="row-span-7 rounded-xl bg-white shadow-card-100"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
