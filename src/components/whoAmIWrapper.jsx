import { useSelector } from "react-redux";
import { axiosPrivate } from "../api/axios";
import useFetching from "../hooks/useFetching";
import { selectIsAuth } from "../redux/slices/authSlice";

const whoAmIWrapper = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);

  const [getMe, isLoading, error] = useFetching(async () => {
    const res = await axiosPrivate.get("/user/me");
  });

    // getMe();

  return isLoading ? isAuth ? <div></div> : children : children;
};

export default whoAmIWrapper;
