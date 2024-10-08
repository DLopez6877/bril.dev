import React, { useEffect } from 'react';
import './HomePage.scss'
import ParallaxHero from '../../components/ParallaxHero/ParallaxHero';
import Nav from '../../components/Nav/Nav';
import About from '../../components/About/About';
import { motion as m, useScroll, useTransform } from 'framer-motion';
import SmoothScroll from '../../wrappers/SmoothScroll';
import ErrorBoundary from '../../wrappers/ErrorBoundary';
import WorkHistory from '../../components/WorkHistory/WorkHistory';

const HomePage = () => {
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, -1]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const translateY = useTransform(scrollYProgress, [0, 1], [0, 1200]);

    return (
        <ErrorBoundary>
            <SmoothScroll>
                <div className="home-page-container" data-scroll-container>
                    <Nav />
                    <ParallaxHero opacity={opacity} scale={scale} translateY={translateY} />
                    <About />
                    <WorkHistory />
                    <div className="tempabout" style={{ padding: 30 }}>
                        <h1>TEMP</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
                    </div>
                </div>
            </SmoothScroll>
        </ErrorBoundary>
    );
};

export default HomePage;