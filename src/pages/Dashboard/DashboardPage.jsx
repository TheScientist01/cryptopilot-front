import { VscBell } from "react-icons/vsc";
import { HiOutlineArrowDown } from "react-icons/hi";
import ApexCharts from "apexcharts";
import { useEffect, useState } from "react";
import csv from "../../assets/csvjson.json";
import triangleRed from "../../assets/triangleRed.png";
import triangleGreen from "../../assets/triangleGreen.png";
import { Tab } from "@headlessui/react";

function convertData(data) {
  let convertedData = [];
  for (let i = 0; i < data.length; i++) {
    let date = new Date(data[i].Date).getTime();
    let open = data[i].Open;
    let high = data[i].High;
    let low = data[i].Low;
    let close = data[i].Close;
    convertedData.push({ x: date, y: [open, high, low, close] });
  }
  return convertedData;
}

const data = convertData(csv);

const durationList = [14, 30, 90, 180, 364, data.length - 1];

const cryptoList = [
  { name: "Bitcoin", url: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
  {
    name: "Ethereum",
    url: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  { name: "Cordano", url: "https://cryptologos.cc/logos/cardano-ada-logo.png" },
  {
    name: "Polkadot",
    url: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
  },
  {
    name: "Solana",
    url: "https://cryptologos.cc/logos/solana-sol-logo.png?v=024",
  },
  {
    name: "Chainlink",
    url: "https://cryptologos.cc/logos/chainlink-link-logo.png?v=024",
  },
  { name: "TRON", url: "https://cryptologos.cc/logos/tron-trx-logo.png?v=024" },
  {
    name: "Litecoin",
    url: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=024",
  },
  {
    name: "Uniswap",
    url: "https://cryptologos.cc/logos/uniswap-uni-logo.png?v=024",
  },
  {
    name: "Avalanche",
    url: "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=024",
  },
  {
    name: "Polygon",
    url: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=024",
  },
  { name: "OKB", url: "https://cryptologos.cc/logos/okb-okb-logo.png?v=024" },
];

const DashboardPage = () => {
  const [duration, setDuration] = useState(30);

  var options = {
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
      // range:{ new Date('2023-03-01').getTime(), to: new Date('2023-03-31').getTime(),
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
      // tooltip: {
      //   enabled: true,
      //   formatter: function(val, opts) {
      //     return `<div class="bg-white rounded-lg ">${val}</div>`
      //   }
      // },
    },
    yaxis: {
      decimalsInFloat: 2,
      tickAmount: 8,

      tooltip: { enabled: true },

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
        let data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

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

  useEffect(() => {
    let chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    chart.zoomX(
      new Date(data[data.length - duration - 1].x).getTime(),
      new Date(data[data.length - 1].x).getTime()
    );

    return () => chart.destroy();
  }, [duration]);

  return (
    <div style={{ fontFamily: "Helvetica" }} className="flex">
      <div className="w-[350px] py-9 pl-9">
        <div className="text-[35px] font-semibold mb-5">Logo</div>
        <hr></hr>
        {cryptoList.map((crypto) => (
          <div className="flex gap-2 mt-2 rounded-lg p-1 hover:bg-[#7422DD] hover:bg-opacity-10 hover:text-[#7422DD] duration-200 cursor-pointer">
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
            <div className="flex gap-10 ml-auto">
              <div className="border-b border-[#969696] my-auto text-[#969696]">
                Add to waitlist
              </div>
              <button className="rounded-md bg-[#2E2E2E] font-semibold text-sm py-2 px-5">
                Save data
              </button>
            </div>
          </div>
        </div>
        <div className="w-[85%] mx-auto z-10 relative">
          <div className="flex gap-5 font-semibold mb-4">
            <div className="rounded-md w-[45px] h-[45px] p-1.5 my-auto bg-gray-300 shadow-card-100 shadow-white">
              <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" />
            </div>
            <div className="text-[35px] text-white">Ethereum</div>
          </div>
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-4 h-[150px] rounded-xl bg-white shadow-card-100"></div>
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
