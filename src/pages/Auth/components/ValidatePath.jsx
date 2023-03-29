import { Navigate, Outlet } from "react-router-dom";

const ValidatePath = ({ condition, navigateTo }) => {
  return condition ? <Outlet /> : <Navigate to={navigateTo} />;
};

export default ValidatePath;
