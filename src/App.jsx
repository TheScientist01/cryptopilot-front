import LoginPage from "./pages/Auth/pages/Login/LoginPage";
import RegisterPage from "./pages/Auth/pages/Register/RegisterPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AuthLayout from "./pages/Auth/components/AuthLayout";
import HomePage from "./pages/Home/HomePage";
import DashboardPage from "./pages/Dashboard/DashboardPage";

function App() {
  return (
    // <LoginPage />
    // <RegisterPage />
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Route>
        <Route path="home" element={<HomePage />}></Route>
        <Route path="dashboard" element={<DashboardPage />}></Route>
        <Route path="" element={<Navigate to="home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
