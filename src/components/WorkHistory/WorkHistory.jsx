import React, { useRef, useEffect } from 'react';
import './WorkHistory.scss'
import TextSplitter from '../../wrappers/TextSplitter';
import { gsap } from 'gsap';

const WorkHistory = () => {
    useEffect(() => {
        const timeline = gsap.timeline();

        timeline.to('.section-header', {
            y: 40
        })
    }, []);

    return (
        <div className="work-history-container">
            <div className="container">
                <TextSplitter text='WORK HISTORY' spaceLength='1rem' className='section-header'></TextSplitter>
                <p>some text</p>
                <p>WH Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
                <p>WH Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
            </div>
            {/* <TextSplitter text='WO' stickyRef={textRef} className='section-header'></TextSplitter> */}
            <div className="temp">
                <h2>2 TEMP WORK HISTORY</h2>
                <p>WH Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
                <p>WH Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
                <p>WH Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
                <p>WH Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut sequi iste maxime quibusdam repudiandae, accusamus repellat itaque eveniet architecto nobis id praesentium! Repellendus ut impedit neque ipsum inventore sint?</p>
            </div>
        </div >
    );
};

export default WorkHistory;


// useLayoutEffect(() => {
//     const container = containerRef.current;

//     ScrollTrigger.refresh();

//     const scrollTrigger = ScrollTrigger.create({
//         trigger: container,
//         start: 'top top',
//         end: () => `bottom bottom`,
//         pin: textRef.current,
//         pinSpacing: true,
//         scrub: 1,
//     });

//     return () => {
//         scrollTrigger.kill();
//     };
// }, []);