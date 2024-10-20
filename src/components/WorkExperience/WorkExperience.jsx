import React, { useEffect, useRef } from 'react';
import './WorkExperience.scss';
import CharacterSplitter from '../../wrappers/CharacterSplitter';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import collab from '../../assets/collab.jpg';
import tablet from '../../assets/tablet.jpg';
import portland from '../../assets/portland.jpg';
import working from '../../assets/working.jpg';


const WorkExperience = () => {
    const containerRef = useRef(null);
    const imagesRef = useRef(null);

    useEffect(() => {
        new CharacterSplitter('.work-history', '0.5em', 'work-history-letter');

        const letters = gsap.utils.toArray('.work-history-letter');
        const workingImage = imagesRef.current.querySelector('.working');
        const tabletImage = imagesRef.current.querySelector('.tablet');
        const collabImage = imagesRef.current.querySelector('.collab');
        const portlandImage = imagesRef.current.querySelector('.portland');
        const shoutout = imagesRef.current.querySelector('.shoutout');


        const totalDuration = 4;
        const halfDuration = totalDuration / 2;


        const letterTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: `+=${halfDuration * 50}%`,
                scrub: true,
            },
        });

        letterTimeline.fromTo(
            letters,
            { y: '100svh' },
            { y: 0, duration: 0.5, stagger: 0.1 }
        );

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: `+=${halfDuration * 50}%`,
            pin: true,
            pinSpacing: true,
        });

        gsap.fromTo(
            [workingImage, tabletImage],
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 20%',
                    end: `+=${halfDuration * 50}%`,
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            [collabImage, portlandImage],
            {
                clipPath: 'inset(50% 50% 50% 50% round 20px 50px)'
            },
            {
                clipPath: 'inset(0px 0px 0px 0px round 0px 0px)',
                duration: 2,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 50%',
                    end: `+=${halfDuration * 50}%`,
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            shoutout,
            { x: '100svw' },
            {
                x: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 30%',
                    end: `+=${halfDuration * 50}%`,
                    scrub: true,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className="work-experience-container">
            <h2 className="headline work-history">WORK HISTORY</h2>
            <div ref={imagesRef} className="pic-section">
                <img src={collab} alt="Ai generated image of coworkers collaborating on a project." className="collab" />
                <img src={tablet} alt="Ai generated image of a lion drawn on a tablet." className="tablet" />
                <img src={working} alt="Ai generated image of a software engineer sitting at a desk with four monitors." className="working" />
                <img src={portland} alt="Ai generate image of Portland, Oregon." className="portland" />
                <p className="shoutout">Portland based fullstack software engineer with over 7 years of experience.</p>
            </div>
        </div>
    );
};

export default WorkExperience;
