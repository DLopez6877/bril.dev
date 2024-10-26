import "./globals.scss";
import {BrowserRouter as Router, Routes, Route, useLocation, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import {AnimatePresence} from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    // <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    // </AnimatePresence>
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
