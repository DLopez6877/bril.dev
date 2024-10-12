import React, { useLayoutEffect, useRef } from 'react';
import './Skills.scss'
import gsap from 'gsap';

const Skills = () => {
    const stickyContainerRef = useRef(null);

    useLayoutEffect(() => {
        const stickyContainer = stickyContainerRef.current;
        const stickyContainerWidth = stickyContainer.scrollWidth;

        const sections = gsap.utils.toArray('.panel', stickyContainer);

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: stickyContainer,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                start: 'top, top',
                snap: 1 / (sections.length - 1),
                end: () => '+=' + stickyContainerWidth,
                markers: true
            }
        })
    }, []);

    return (
        <div className="skills-container">
            <div ref={stickyContainerRef} className="panels">
                <div className="panel intro">INTRO</div>
                <div className="panel scroll">SCROLL</div>
                <div className="panel cursor">CURSOR</div>
                <div className="panel three">THREE</div>
                <div className="panel tbd">TBD</div>
            </div>
        </div>
    );
};

export default Skills;