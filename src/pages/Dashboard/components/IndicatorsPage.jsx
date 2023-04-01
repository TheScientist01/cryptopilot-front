import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetching from "../../../hooks/useFetching";
import { getAllIndicators, getRSI } from "../api";
import RSI from "./RSI";
import IndicatorBox from "./IndicatorBox";
import { indicators } from "../../../constants/indicators";

const IndicatorsPage = () => {
  const [data, setData] = useState({});

  const { name } = useParams();

  const [getIndicators, isLoading, error] = useFetching(async () => {
    const res = await getAllIndicators(name);
    setData(res);
  });

  useEffect(() => {
    getIndicators();
  }, []);

  return !isLoading ? (
    <div className="grid grid-flow-row">
      {Object.keys(data)?.map((i) => {
        return <IndicatorBox data={data[i]} name={indicators[i]} />;
      })}
      <div className="rounded-lg w-full h-[180px] my-3 p-0">
        <div className="grid grid-cols-4">
          <div className="rounded-t-md h-fit bg-[#7422DD] text-white py-1 pl-3">
            EMA
          </div>
        </div>
        <div className="h-[150px] bg-white shadow-card-100 rounded-b-lg rounded-r-lg grid grid-cols-4 p-5">
          <div className="text-center">
            <div className="text-gray-400">Total</div>
            <div className="text-5xl font-semibold">100</div>
            <div className="mt-4 text-gray-400">signals</div>
          </div>

          <div className="text-center">
            <div className="text-gray-400">Buy</div>
            <div className="text-5xl font-semibold text-red-800">
              {/* {data?.buy_points?.length} */}
              57
            </div>
            <div className="mt-4 text-gray-400">signals</div>
          </div>

          <div className="text-center">
            <div className="text-gray-400">Sell</div>
            <div className="text-5xl text-green-600 font-semibold">
              {/* {data?.sell_points?.length} */}
              43
            </div>
            <div className="mt-4 text-gray-400">signals</div>
          </div>

          <div className="text-center">
            <div className="text-gray-400">Win rate</div>
            <div className={`text-6xl text-yellow-400 font-semibold`}>40%</div>
          </div>
        </div>
      </div>
      <div className="rounded-lg w-full h-[180px] my-3 p-0">
        <div className="grid grid-cols-4">
          <div className="rounded-t-md h-fit bg-[#7422DD] text-white py-1 pl-3">
            MACD
          </div>
        </div>
        <div className="h-[150px] bg-white shadow-card-100 rounded-b-lg rounded-r-lg grid grid-cols-4 p-5">
          <div className="text-center">
            <div className="text-gray-400">Total</div>
            <div className="text-5xl font-semibold">207</div>
            <div className="mt-4 text-gray-400">signals</div>
          </div>

          <div className="text-center">
            <div className="text-gray-400">Buy</div>
            <div className="text-5xl font-semibold text-red-800">
              {/* {data?.buy_points?.length} */}
              95
            </div>
            <div className="mt-4 text-gray-400">signals</div>
          </div>

          <div className="text-center">
            <div className="text-gray-400">Sell</div>
            <div className="text-5xl text-green-600 font-semibold">
              {/* {data?.sell_points?.length} */}
              112
            </div>
            <div className="mt-4 text-gray-400">signals</div>
          </div>

          <div className="text-center">
            <div className="text-gray-400">Win rate</div>
            <div className={`text-6xl text-[#60de46] font-semibold`}>61.2%</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default IndicatorsPage;
