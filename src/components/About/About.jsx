import React, { useLayoutEffect, useRef } from 'react';
import './About.scss';
import aboutbg from '../../assets/aboutbg.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import RoundMouse from '../../wrappers/RoundMouse/RoundMouse';
import Typewriter from '../Typewriter/Typewriter';
import GradientCanvas from '../GradientCanvas/GradientCanvas';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const bgImgRef = useRef(null);
    const headerRef = useRef(null);
    const bioRef = useRef(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        const bgImg = bgImgRef.current;
        const header = headerRef.current;
        const bio = bioRef.current;
        const bioLines = bio.querySelectorAll('.bio-text');

        // Pin background image
        gsap.to(bgImg, {
            opacity: 0,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: '+=227.5%',
                scrub: 4,
                pin: bgImg,
                pinSpacing: false
            },
        });

        // Pin headline
        gsap.to(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 15%',
                endTrigger: bio,
                end: '+=185%',
                pin: header,
                pinSpacing: false,
            },
        });

        // Pin bio
        const bioTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: bio,
                start: 'top 20%',
                end: '+=160%',
                scrub: true,
                pin: bio,
                pinSpacing: true,
                onEnter: () => bio.classList.add('pinned'),
                onLeave: () => bio.classList.remove('pinned'),
                onLeaveBack: () => bio.classList.add('pinned'),
                onComplete: () => {
                    ScrollTrigger.getById('bioScrollTrigger').kill();
                },
                id: 'bioScrollTrigger',
            },
        });

        // Animate each line of text in the bio
        bioLines.forEach((line, index) => {
            bioTimeline.fromTo(
                line,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5 },
                `+=${index * 0.2}`
            );
        });

        return () => {
            ScrollTrigger.getById('bioScrollTrigger')?.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <RoundMouse>
            <div ref={containerRef} className="about-container">
                <GradientCanvas id='about-gradient' />
                <img ref={bgImgRef} className="about-bg-img" src={aboutbg} alt="Background of orange geometric trees with a blue sunrise." />
                <div className="about-content">
                    <h2 ref={headerRef} className="glow headline-text">ABOUT ME</h2>
                    <div ref={bioRef} className="about-bio container">
                        <Typewriter delay={0} />
                        <p className='bio-text text1'>I'm a PC gamer, former Magic the Gathering pro, current Hearthstone Battlegrounds enthusiast, board game aficionado, Lord of the Rings fanboy, and all-around nerd.</p>
                        <p className='bio-text text2'>For the past seven years, I've worked as a full-stack software engineer. I started off as a frontend engineer, but as time went on, I found myself increasingly focused on backend work.</p>
                        <p className='bio-text text3'>Its been great, but what drove me to this career was the creative outlet that frontend work provided me. I'm one of those crazies that love CSS. After years of navigating the dark depths of backend code and deployment pipelines, it's time to grab this Balrog of a career path by the horns and steer it in the direction I want.</p>
                        <p className='bio-text text4'>I'm seeking a role as a senior frontend developer or an entry-level designer working with a world-class team.</p>
                        <p className='bio-text text5'>Let's build Awwwards winning websites together.</p>
                    </div>
                </div>
            </div>
        </RoundMouse>
    );
};

export default About;
