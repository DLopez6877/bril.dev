import React, { useRef, useEffect } from 'react';
import './WorkHistory.scss'
import workhistorybg from '../../assets/workhistorybg.png';
import { gsap } from 'gsap';

const WorkHistory = () => {
    const containerRef = useRef();

    return (
        <div ref={containerRef} className="work-history-container">
            <img className="work-history-bg sticky-bg-img" src={workhistorybg} alt="Background of orange geometric trees with a blue sunrise." />

            <div className="temp">
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