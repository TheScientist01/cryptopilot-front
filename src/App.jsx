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
              <ValidatePath
                condition={!isAuth}
                navigateTo={"/dashboard/bitcoin/chart"}
              />
            }
          >
            <Route path="auth" element={<AuthLayout />}>
              <Route path="register" element={<RegisterPage />}></Route>
              <Route path="login" element={<LoginPage />}></Route>
            </Route>
          </Route>
          <Route path="home" element={<HomePage />}></Route>
          <Route
            element={
              <ValidatePath condition={isAuth} navigateTo={"/auth/login"} />
            }
          >
            <Route
              path="dashboard/:name/chart"
              element={<DashboardPage page="chart" />}
            ></Route>
            <Route
              path="dashboard/:name/indicators"
              element={<DashboardPage page="indicators" />}
            ></Route>
            <Route
              path="dashboard/:name/rsi"
              element={<DashboardPage page="rsi" />}
            ></Route>
          </Route>
          <Route
            path=""
            element={
              isAuth ? (
                <Navigate to="dashboard/bitcoin/chart" />
              ) : (
                <Navigate to="home" />
              )
            }
          />
        </Routes>
      </WhoAmIWrapper>
    </BrowserRouter>
  );
}

export default App;
