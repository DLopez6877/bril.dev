import React, { useLayoutEffect, useRef } from 'react';
import './About.scss'
import aboutbg from '../../assets/aboutbg.png';
import SplitText from '../SplitText/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RoundMouse from '../../wrappers/RoundMouse/RoundMouse';

const About = () => {
    const containerRef = useRef(null);
    const bgImgRef = useRef(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        const bgImg = bgImgRef.current;

        ScrollTrigger.refresh();

        const scrollTrigger = ScrollTrigger.create({
            trigger: container,
            start: 'top top',
            end: () => `${container.offsetHeight - window.innerHeight}px`,
            pin: bgImg,
            pinSpacing: true,
            scrub: 1,
        });

        return () => {
            scrollTrigger.kill();
        };

    }, []);

    return (
        <RoundMouse>
            <div ref={containerRef} className="about-container">
                <img ref={bgImgRef} className="about-bg-img" src={aboutbg} alt="Background of orange geometric trees with a blue sunrise." />
                <div className="about-headline">
                    <div className="glow headline-text"><span>ABOUT M<span className='e'>E</span></span></div>
                    <p className='seeking-opportunities small-text'>Currently seeking new opportunities.</p>
                </div>
                <div className="about-bio container">
                    <SplitText><p>I’ve spent over seven years as a full-stack software engineer, but my heart belongs to frontend development. After years of venturing deeper and deeper into the dark depths of backend work, it’s time to grab this Balrog, known as my career, by the horns and take control.</p></SplitText>
                    <SplitText><p>I want to help build Awwwards winning websites where I can let my creativity shine.</p></SplitText>
                </div>
            </div>
        </RoundMouse>
    );
};

export default About;