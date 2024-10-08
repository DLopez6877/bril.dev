import React, { useRef, useLayoutEffect } from 'react';
import './WorkHistory.scss'
import workhistorybg from '../../assets/workhistorybg.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WorkHistory = () => {
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
        <div ref={containerRef} className="work-history-container">
            <img ref={bgImgRef} className="work-history-bg-img" src={workhistorybg} alt="Background image of ancient rome building interior with many plants. Watercolor painting." />

            <div className="container">
                <p>This is the start of work history temp!!!!!!!!!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ex? Iusto a cupiditate modi minus culpa, quis eos ullam! Vero doloribus non sapiente sit enim quas ipsa, velit id. Soluta?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ex? Iusto a cupiditate modi minus culpa, quis eos ullam! Vero doloribus non sapiente sit enim quas ipsa, velit id. Soluta?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ex? Iusto a cupiditate modi minus culpa, quis eos ullam! Vero doloribus non sapiente sit enim quas ipsa, velit id. Soluta?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ex? Iusto a cupiditate modi minus culpa, quis eos ullam! Vero doloribus non sapiente sit enim quas ipsa, velit id. Soluta?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ex? Iusto a cupiditate modi minus culpa, quis eos ullam! Vero doloribus non sapiente sit enim quas ipsa, velit id. Soluta?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, ex? Iusto a cupiditate modi minus culpa, quis eos ullam! Vero doloribus non sapiente sit enim quas ipsa, velit id. Soluta?</p>
            </div>
        </div>
    );
};

export default WorkHistory;