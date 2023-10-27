import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeeklyForecastPage from "./pages/WeeklyForecastPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/week" element={<WeeklyForecastPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
