import React, { useLayoutEffect, useRef } from 'react';
import './About.scss'
import aboutbg from '../../assets/aboutbg.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RoundMouse from '../../wrappers/RoundMouse/RoundMouse';
import Typewriter from '../Typewriter/Typewriter';

// gsap.registerPlugin(ScrollTrigger);

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

        // Pin background image
        const bgImgAnimation = gsap.to(bgImg, {
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 4,
                pin: bgImg,
                pinSpacing: true,
            },
        });

        // Pin headline
        const headlinePinAnimation = gsap.to(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 10%',
                endTrigger: container,
                end: 'bottom bottom',
                pin: header,
                pinSpacing: false,
            },
        });

        // Pin bio
        const bioPinAnimation = gsap.to(bio, {
            scrollTrigger: {
                trigger: bio,
                start: 'top 20%',
                endTrigger: container,
                end: 'bottom bottom',
                pin: bio,
                pinSpacing: true,
                onEnter: () => bio.classList.add('pinned'),
                onLeave: () => bio.classList.remove('pinned'),
            },
        });

        return () => {
            if (bgImgAnimation.scrollTrigger) bgImgAnimation.scrollTrigger.kill();
            if (headlinePinAnimation.scrollTrigger) headlinePinAnimation.scrollTrigger.kill();
            if (bioPinAnimation.scrollTrigger) bioPinAnimation.scrollTrigger.kill();
        };
    }, []);

    return (
        <RoundMouse>
            <div ref={containerRef} className="about-container">
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


// useLayoutEffect(() => {
//     const container = containerRef.current;
//     const bgImg = bgImgRef.current;
//     const header = headerRef.current;
//     const bio = bioRef.current;


//     ScrollTrigger.create({
//         id: "headerScrollPause",
//         trigger: header,
//         start: 'top top',
//         end: 'bottom bottom',
//     });

//     // Create a timeline for all animations
//     const timeline = gsap.timeline({
//         scrollTrigger: {
//             trigger: container,
//             start: 'top top',
//             end: 'bottom bottom',
//             scrub: 1,
//         },
//     });

//     // Pin background image
//     timeline.to(bgImg, {
//         ease: 'power1.out',
//     });

//     // Pin headline and pause scroll for 2 seconds after pinning
//     timeline.to(header, {
//         duration: 1,
//         pin: header,
//         ease: 'power1.out',
//         onEnter: () => {
//             ScrollTrigger.getById("headerScrollPause").pause(); // Pause scrolling
//             setTimeout(() => {
//                 ScrollTrigger.getById("headerScrollPause").resume(); // Resume after 2 seconds
//             }, 2000); // Pause duration (2 seconds)
//         }
//     }, '+=0.5'); // Start this after a delay of 0.5 seconds after the background image animation ends

//     // Pin bio
//     timeline.to(bio, {
//         duration: 1,
//         pin: bio,
//         ease: 'power1.out',
//         onEnter: () => bio.classList.add('pinned'),
//         onLeave: () => bio.classList.remove('pinned'),
//     }, '+=0.5'); // Starts after 0.5 seconds after the headline animation finishes

//     // Return cleanup function for killing scrollTriggers
//     return () => {
//         timeline.scrollTrigger.kill();
//     };
// }, []);