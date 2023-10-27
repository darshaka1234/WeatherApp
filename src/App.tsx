import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route path="/weather" element={<HomePage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}
