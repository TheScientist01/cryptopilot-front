import { useParams } from "react-router-dom"
import RSI from "./RSI";
import useFetching from "../../../hooks/useFetching";
import { getRSI } from "../api";
import { useEffect, useState } from "react";
import Spinner from "../../../components/Spinner";

const RSIPage=()=>{
    const {name}=useParams();

    const [data, setData]=useState({});

    const [getRsiRequest, isLoading]=useFetching(async ()=>{
        const res=await getRSI(name);
        setData(res);
    });

    useEffect(()=>{
        getRsiRequest()
    },[]);

    return !isLoading?<RSI data={data} />:<div className="w-full p-[80px] bg-white text-center rounded-lg"><Spinner /></div>;

}

export default RSIPage;