import React, { useEffect } from 'react';
import './HomePage.scss'
import ParallaxHero from '../../components/ParallaxHero/ParallaxHero';
import Nav from '../../components/Nav/Nav';
import About from '../../components/About/About';
import { motion as m, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import SmoothScroll from '../../components/SmoothScroll';

const HomePage = () => {
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
    const translateY = useTransform(scrollYProgress, [0, 1], [0, 1200]);

    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.1,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <SmoothScroll>
            <div className="home-page-container" data-scroll-container>
                <Nav />
                <ParallaxHero opacity={opacity} scale={scale} translateY={translateY} />
                <About />
                <div className="temp">
                    <h1>SOME HEADER</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
                </div>
            </div>
        </SmoothScroll>
    );
};

export default HomePage;