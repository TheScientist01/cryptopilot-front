import LoginPage from "./pages/Auth/pages/Login/LoginPage";
import RegisterPage from "./pages/Auth/pages/Register/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./pages/Auth/components/AuthLayout";
import HomePage from "./pages/Home/HomePage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
