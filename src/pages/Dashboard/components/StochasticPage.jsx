import { useParams } from "react-router-dom"

import useFetching from "../../../hooks/useFetching";
import { getStochastic } from "../api";
import { useEffect, useState } from "react";
import Stochastic from "./Stochastic";
import Spinner from "../../../components/Spinner";

const StochasticPage=()=>{
    const {name}=useParams();

    const [data, setData]=useState({});

    const [getRsiRequest, isLoading]=useFetching(async ()=>{
        const res=await getStochastic(name);
        setData(res);
    });

    useEffect(()=>{
        getRsiRequest()
    },[]);

    return !isLoading?<Stochastic data={data} />:<div className="w-full p-[80px] bg-white text-center rounded-lg"><Spinner /></div>;

}

export default StochasticPage;