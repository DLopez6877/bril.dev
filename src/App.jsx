import React from "react";
import "./globals.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PurechatPage from "./pages/PurechatPage/PurechatPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactGA from "react-ga4";

ReactGA.initialize("G-X6RH8KNPG6");

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/purechat" element={<PurechatPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
