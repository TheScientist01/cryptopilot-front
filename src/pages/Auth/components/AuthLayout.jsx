import { Outlet } from "react-router-dom";
import bg from "../../../assets/bg.jpg";

const AuthLayout = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`relative w-full h-[100vh] grid grid-cols-6`}
    >
        <Outlet />
    </div>
  );
};

export default AuthLayout;
