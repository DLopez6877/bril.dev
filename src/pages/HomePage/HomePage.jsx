import React, { useEffect } from "react";
import "./HomePage.scss";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import Nav from "../../components/Nav/Nav";
import SmoothScroll from "../../wrappers/SmoothScroll";
import About from "../../components/About/About";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Skills from "../../components/Skills/Skills";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Contact from "../../components/Contact/Contact";
import WorkEntries from "../../components/WorkEntries/WorkEntries";
import ReactGA from "react-ga4";

const HomePage = () => {
  if (process.env.NODE_ENV === "production") {
    ReactGA.send("pageview");
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
  }

  const trackComponentLoadTime = (loadTime) => {
    ReactGA.event({
      category: "Load Performance",
      action: "Page Load Time",
      value: loadTime,
      label: "Home Page",
    });
  };

  useEffect(() => {
    const start = Date.now();
    return () => {
      const loadTime = Date.now() - start;
      trackComponentLoadTime(loadTime);
    };
  }, []);

  return (
    <SmoothScroll>
      <div className="home-page-container" data-scroll-container>
        <LoadingScreen />
        <Nav />
        <ParallaxHero />
        <About />
        <WorkExperience />
        <WorkEntries />
        <Skills />
        <Contact />
      </div>
    </SmoothScroll>
  );
};

export default HomePage;
