import LoginPage from "./pages/Auth/pages/Login/LoginPage";
import RegisterPage from "./pages/Auth/pages/Register/RegisterPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AuthLayout from "./pages/Auth/components/AuthLayout";
import HomePage from "./pages/Home/HomePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import WhoAmIWrapper from "./components/whoAmIWrapper";
import ValidatePath from "./pages/Auth/components/ValidatePath";
import { useSelector } from "react-redux";
import { selectIsAuth } from "./redux/slices/authSlice";

function App() {
  const isAuth = useSelector(selectIsAuth);

  return (
    // <LoginPage />
    // <RegisterPage />
    <BrowserRouter>
      <WhoAmIWrapper>
        <Routes>
          <Route
            element={
              <ValidatePath condition={isAuth} navigateTo={"/auth/login"} />
            }
          />
          <Route
            element={
              <ValidatePath condition={!isAuth} navigateTo={"/dashboard/bitcoin"} />
            }
          >
            <Route path="auth" element={<AuthLayout />}>
              <Route path="register" element={<RegisterPage />}></Route>
              <Route path="login" element={<LoginPage />}></Route>
            </Route>
          </Route>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="dashboard/:name" element={<DashboardPage />}></Route>
          <Route path="" element={isAuth?<Navigate to="dashboard/bitcoin" /> : <Navigate to="home" />} />
        </Routes>
      </WhoAmIWrapper>
    </BrowserRouter>
  );
}

export default App;
