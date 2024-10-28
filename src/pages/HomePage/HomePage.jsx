import React from "react";
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

const HomePage = () => {
  if (process.env.NODE_ENV === "production") {
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

  return (
    // <PageTransition>
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
    // </PageTransition>
  );
};

export default HomePage;
