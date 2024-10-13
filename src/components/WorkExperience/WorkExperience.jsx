import React, { useEffect, useRef } from 'react';
import './WorkExperience.scss'
import TextSplitter from '../../wrappers/TextSplitter'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {

    useEffect(() => {
        new TextSplitter('.split-text', '0.5em', 'work-history-header');
        const letters = gsap.utils.toArray('.work-history-header');

        const entry1Animation = gsap.from(letters, {
            translateY: '100vh',
            stagger: .05,
            duration: 1.3,
            scrollTrigger: {
                trigger: '.split-text',
                start: 'top 70%',
                end: 'top 50%',
                pin: true,
                pinSpacing: true,
                scrub: 4,
            },
        });

        const bgPinAnimation = gsap.to('.work-pinned-background', {
            scrollTrigger: {
                trigger: '.work-experience-container',
                start: 'top top',
                end: 'bottom bottom',
                pin: '.work-pinned-background',
                pinSpacing: false,
                scrub: true,
                markers: {
                    startColor: 'blue',
                    endColor: 'white'
                },
            },
        });

        return () => {
            if (bgPinAnimation.scrollTrigger) bgPinAnimation.scrollTrigger.kill();
            if (entry1Animation.scrollTrigger) entry1Animation.scrollTrigger.kill();
        };

    }, []);

    return (
        <div className='work-container'>
            <div className="work-pinned-background">
                <h1>pin ME</h1>
            </div>
            <div className="work-experience-container">
                <h2 className="split-text">WORK HISTORY</h2>

                <div className="entry entry1">
                    <div className="tab">
                        <span className="tab-label"><span className="bold">yyyy - yyyy </span>Army National Guard</span>
                    </div>
                    <div className="contents">
                        some contents
                    </div>
                </div>

                <div className="entry entry2">
                    <div className="tab">
                        <span className="tab-label"><span className="bold">yyyy - yyyy </span>Zapproved, Software Engineer</span>
                    </div>
                    <div className="contents">
                        some contents
                    </div>
                </div>

                <div className="entry entry3">
                    <div className="tab">
                        <span className="tab-label"><span className="bold">yyyy - yyyy </span>Serverless Guru, Serverless Engineer</span>
                    </div>
                    <div className="contents">
                        some contents
                    </div>
                </div>

                <div className="entry entry4">
                    <div className="tab">
                        <span className="tab-label"><span className="bold">yyyy - yyyy </span>Ruby, Senior Software Engineer</span>
                    </div>
                    <div className="contents">
                        some contents
                    </div>
                </div>

                <div className="entry entry5">
                    <div className="tab">
                        <span className="tab-label"><span className="bold">yyyy - yyyy </span>Ruby/Pure Chat, Senior Software Engineer</span>
                    </div>
                    <div className="contents">
                        some contents
                    </div>
                </div>

                <div className="entry entry6">
                    <div className="tab">
                        <span className="tab-label"><span className="bold">yyyy - yyyy </span>Ruby, Consultant</span>
                    </div>
                    <div className="contents">
                        some contents
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;