import { useDispatch, useSelector } from "react-redux";
import useFetching from "../hooks/useFetching";
import { selectIsAuth } from "../redux/slices/authSlice";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../api/axios";
import { setUser } from "../redux/slices/userSlice";

const whoAmIWrapper = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);

  const dispatch=useDispatch();

  const [getMe, isLoading, error] = useFetching(async () => {
    const res = await axios.get(`${BASE_URL}/user/me`, { headers: { "access-token": localStorage.getItem("accessToken") } });
    dispatch(setUser(res.data));
  });

  console.log(error);

  useEffect(()=>{
    getMe();
  },[])

  return isLoading ? isAuth ? <div></div> : children : children;
};

export default whoAmIWrapper;
