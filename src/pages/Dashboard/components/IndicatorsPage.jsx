import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetching from "../../../hooks/useFetching";
import { getAllIndicators, getRSI } from "../api";
import RSI from "./RSI";
import IndicatorBox from "./IndicatorBox";
import { indicators } from "../../../constants/indicators";
import Spinner from "../../../components/Spinner";

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
    <div className="grid grid-flow-row pb-4">
      {Object.keys(data)?.map((i) => {
        return <IndicatorBox data={data[i]} name={indicators[i]} />;
      })}
    </div>
  ) : <div className="w-full p-[80px] bg-white text-center rounded-lg"><Spinner /></div>;
};

export default IndicatorsPage;
