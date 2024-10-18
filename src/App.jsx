
import { useState, useEffect } from 'react';
import './globals.scss'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import HomePage from './pages/HomePage/HomePage';
import PlaygroundPage from './pages/PlaygroundPage/PlaygroundPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="*" element={<Navigate to="/loading" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    console.log(`
  HH   HH  III       III '  MM    MM
  HH   HH   I         I  '  MMM  MMM
  HHHHHHH   I         I     MM MM MM
  HH   HH   I         I     MM    MM
  HH   HH  III       III    MM    MM

  `);
    console.log(`
  BBBB   RRRR   III  L       !!!!
  B   B  R   R   I   L      !!!!!!
  BBBB   RRRR    I   L       !!!!
  B   B  R  R    I   L    
  BBBB   R   R  III  LLLLL    !!
  `);
    // setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingPage onComplete={handleLoadingComplete} />
      ) : (
        <Router>
          <AnimatedRoutes />
        </Router>
      )}
    </>
  );
}

export default App;