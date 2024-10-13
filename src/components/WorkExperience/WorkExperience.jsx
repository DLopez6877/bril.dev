import React, { useEffect, useRef } from 'react';
import './WorkExperience.scss'
import TextSplitter from '../../wrappers/TextSplitter'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
    const headerRef = useRef(null);
    const containerRef = useRef(null);
    const backgroundRef = useRef(null);
    const tab1Ref = useRef(null);
    const tab2Ref = useRef(null);
    const tab3Ref = useRef(null);
    const tab4Ref = useRef(null);
    const tab5Ref = useRef(null);

    useEffect(() => {
        const header = headerRef?.current;
        const container = containerRef?.current;
        const background = backgroundRef?.current;
        const tab1 = tab1Ref?.current;
        const tab2 = tab2Ref?.current;
        const tab3 = tab3Ref?.current;
        const tab4 = tab2Ref?.current;
        const tab5 = tab3Ref?.current;

        if (!header || !container || !background || !tab1 || !tab2 || !tab3 || !tab4 || !tab5) return;

        const mySplitText = new TextSplitter('.split-text', '0.5em', 'work-history-header');
        const letters = gsap.utils.toArray(header.querySelectorAll(".work-history-header"));

        gsap.to(container, {
            scrollTrigger: {

            }

        });


        gsap.from(letters, {
            translateY: '100vh',
            stagger: .05,
            duration: 1.3,
            scrollTrigger: {
                trigger: '.split-text',
                start: 'top 50%',
                end: 'top 30%',
                pin: true,
                scrub: 4,
                // markers: true,
            },
        });

        gsap.to(background, {
            scrollTrigger: {
                trigger: container,
                start: 'top top', // When the section hits the top of the viewport
                end: 'bottom bottom', // When the bottom of the section hits the top of the viewport
                pin: true, // Pin the background
                pinSpacing: false, // Keeps the section's height without additional spacing
                markers: true, // Debug markers, remove in production
                scrub: true, // Smooth pinning effect
            },
        });

    }, []);

    return (
        <div ref={containerRef} className="work-experience-container container">
            <div ref={backgroundRef} className="pinned-background">
                Pinned background Placeholder
            </div>
            <h2 ref={headerRef} className="split-text">WORK HISTORY</h2>

            <div ref={tab1Ref} className="entry">
                <div className="tab">
                    <span className="tab-label"><span className="bold">yyyy - yyyy </span>Army National Guard</span>
                </div>
                <div className="contents">
                    some contents
                </div>
            </div>

            <div ref={tab2Ref} className="entry">
                <div className="tab">
                    <span className="tab-label"><span className="bold">yyyy - yyyy </span>Zapproved, Software Engineer</span>
                </div>
                <div className="contents">
                    some contents
                </div>
            </div>

            <div ref={tab3Ref} className="entry">
                <div className="tab">
                    <span className="tab-label"><span className="bold">yyyy - yyyy </span>Serverless Guru, Serverless Engineer</span>
                </div>
                <div className="contents">
                    some contents
                </div>
            </div>

            <div ref={tab4Ref} className="entry">
                <div className="tab">
                    <span className="tab-label"><span className="bold">yyyy - yyyy </span>Ruby, Senior Software Engineer</span>
                </div>
                <div className="contents">
                    some contents
                </div>
            </div>

            <div ref={tab5Ref} className="entry">
                <div className="tab">
                    <span className="tab-label"><span className="bold">yyyy - yyyy </span>Ruby/Pure Chat, Senior Software Engineer</span>
                </div>
                <div className="contents">
                    some contents
                </div>
            </div>

            <div ref={tab5Ref} className="entry">
                <div className="tab">
                    <span className="tab-label"><span className="bold">yyyy - yyyy </span>Ruby, Consultant</span>
                </div>
                <div className="contents">
                    some contents
                </div>
            </div>



        </div>
    );
};

export default WorkExperience;