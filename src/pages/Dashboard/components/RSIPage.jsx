import { useParams } from "react-router-dom"
import RSI from "./RSI";
import useFetching from "../../../hooks/useFetching";
import { getRSI } from "../api";
import { useEffect, useState } from "react";

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

    return !isLoading?<RSI data={data} />:null;

}

export default RSIPage;