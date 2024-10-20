import React, { useEffect } from 'react';
import './HomePage.scss'
import ParallaxHero from '../../components/ParallaxHero/ParallaxHero';
import Nav from '../../components/Nav/Nav';
import { motion as m, useScroll, useTransform } from 'framer-motion';
import SmoothScroll from '../../wrappers/SmoothScroll';
import PageTransition from '../../wrappers/PageTransition/PageTransition';
const LazyAbout = React.lazy(() => import('../../components/About/About'));
const LazyWorkExperience = React.lazy(() => import('../../components/WorkExperience/WorkExperience'));
const LazyWorkEntries = React.lazy(() => import('../../components/WorkEntries/WorkEntries'));
const LazySkills = React.lazy(() => import('../../components/Skills/Skills'));
const LazyContact = React.lazy(() => import('../../components/Contact/Contact'));

const HomePage = () => {
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const translateY = useTransform(scrollYProgress, [0, 1], [0, 1200]);

    return (
        // <PageTransition>
        <SmoothScroll>
            <div className="home-page-container" data-scroll-container>
                <Nav />
                <ParallaxHero />
                <LazyAbout />
                <LazyWorkExperience />
                <LazyWorkEntries />
                <LazySkills />
                <LazyContact />
            </div>
        </SmoothScroll>
        // </PageTransition>
    );
};

export default HomePage;