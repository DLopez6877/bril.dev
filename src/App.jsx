import "./globals.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import ReactGA from "react-ga";

ReactGA.initialize("G-X6RH8KNPG6");

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <>
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
