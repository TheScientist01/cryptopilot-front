import { cryptoList } from "../../../constants/cryptos";
import axios from "axios";
import { BASE_URL } from "../../../api/axios";

export const getCoin = async (name) => {
  const url = BASE_URL + "/data/cryptos";
  const res = await axios.post(
    url,
    {
      ticker: `${cryptoList[name].key}-USD`,
      interval: "1d",
      start_date: "2022-01-01",
      end_date: "2023-03-01",
    },
    { headers: { "access-token": localStorage.getItem("accessToken") } }
  );

  return res.data;
};

export const getRSI = async (name) => {
  const res = await axios.post(
    BASE_URL + "/data/rsi",
    {
      ticker: `${cryptoList[name].key}-USD`,
      interval: "1h",
      start_date: "2023-02-01",
      end_date: "2023-03-01"
    },
    { headers: { "access-token": localStorage.getItem("accessToken") } }
  );

  return res.data;
};

export const getMA = async (name) => {
  const res = await axios.post(
    BASE_URL + "/data/ma",
    {
      ticker: `${cryptoList[name].key}-USD`,
      interval: "1d",
      day1: 5,
      day2: 10,
    },
    { headers: { "access-token": localStorage.getItem("accessToken") } }
  );

  return res.data;
};

export const getBollinger = async (name) => {
  const res = await axios.post(
    BASE_URL + "/data/bollinger_bands",
    {
      crypto: `${cryptoList[name].key}-USD`,
      interval: "1d",
      window: 20,
    },
    { headers: { "access-token": localStorage.getItem("accessToken") } }
  );

  return res.data;
};

export const getEMA=async (name)=>{
  const res = await axios.post(
    BASE_URL + "/data/ema",
    {
      ticker: `${cryptoList[name].key}-USD`,
      interval: "1d",
      slow: 50,
      fast: 20
    },
    { headers: { "access-token": localStorage.getItem("accessToken") } }
  );

  return res.data;
}

export const getStochastic = async (name) => {
  const res = await axios.post(
    BASE_URL + "/data/stochastic",
    {
      ticker: `${cryptoList[name].key}-USD`,
      interval: "1d",
      start_date: "2022-03-01",
      end_date: "2023-03-01"
    },
    { headers: { "access-token": localStorage.getItem("accessToken") } }
  );

  return res.data;
};

export const getAllIndicators = async (name) => {
  let results = {};

  const rsi = await getRSI(name);
  const bb = await getBollinger(name);
  const stochastic = await getStochastic(name);
  const ema=await getEMA(name);

  results = { rsi: rsi, bb: bb, stochastic: stochastic, ema:ema };

  return results;
};
