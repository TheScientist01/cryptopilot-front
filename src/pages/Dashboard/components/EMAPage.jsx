import { useParams } from "react-router-dom"

import useFetching from "../../../hooks/useFetching";
import { getEMA } from "../api";
import { useEffect, useState } from "react";
import EMA from "./EMA";
import Spinner from "../../../components/Spinner";

const EMAPage=()=>{
    const {name}=useParams();

    const [data, setData]=useState({});

    const [getRsiRequest, isLoading]=useFetching(async ()=>{
        const res=await getEMA(name)
        setData(res);
    });

    useEffect(()=>{
        getRsiRequest()
    },[]);

    return !isLoading?<EMA data={data} />:<div className="w-full p-[80px] bg-white text-center rounded-lg"><Spinner /></div>;

}

export default EMAPage;