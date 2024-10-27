import React, {useEffect} from "react";
import "./HomePage.scss";
import ParallaxHero from "../../components/ParallaxHero/ParallaxHero";
import Nav from "../../components/Nav/Nav";
import {motion as m, useScroll, useTransform} from "framer-motion";
import SmoothScroll from "../../wrappers/SmoothScroll";
import PageTransition from "../../wrappers/PageTransition/PageTransition";
import About from "../../components/About/About";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import WorkEntries from "../../components/WorkEntries/WorkEntries";
import Skills from "../../components/Skills/Skills";
import Contact from "../../components/Contact/Contact";

const HomePage = () => {
  const {scrollYProgress} = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 2]);

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
        <Nav />
        <ParallaxHero opacity={opacity} scale={scale} />
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
