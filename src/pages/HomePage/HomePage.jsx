import React, { useEffect } from 'react';
import './HomePage.scss'
import ParallaxHero from '../../components/ParallaxHero/ParallaxHero';
import Nav from '../../components/Nav/Nav';
import About from '../../components/About/About';
import { motion as m, useScroll, useTransform } from 'framer-motion';
import SmoothScroll from '../../wrappers/SmoothScroll';
import Skills from '../../components/Skills/Skills';
import Contact from '../../components/Contact/Contact';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import WorkEntries from '../../components/WorkEntries/WorkEntries';
import PageTransition from '../../wrappers/PageTransition/PageTransition';

const HomePage = () => {
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const translateY = useTransform(scrollYProgress, [0, 1], [0, 1200]);

    return (
        <PageTransition>
            <SmoothScroll>
                <div className="home-page-container" data-scroll-container>
                    <Nav />
                    <ParallaxHero opacity={opacity} scale={scale} translateY={translateY} />
                    <About />
                    <WorkExperience />
                    <WorkEntries />
                    <Skills />
                    <Contact />
                </div>
            </SmoothScroll>
        </PageTransition>
    );
};

export default HomePage;