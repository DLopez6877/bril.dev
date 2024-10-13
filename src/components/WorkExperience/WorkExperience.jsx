import React, { useEffect, useRef } from 'react';
import './WorkExperience.scss'
import TextSplitter from '../../wrappers/TextSplitter'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const WorkExperience = () => {

    // useEffect(() => {
    //     new TextSplitter('.split-text', '0.5em', 'work-history-header');
    //     const letters = gsap.utils.toArray('.work-history-header');
    //     const animations = [];
    //     const triggers = [];

    //     if (letters) {
    //         console.log('letters', letters)


    //         const letterOrders = letters.map((_, i) => {
    //             const half = Math.floor(letters.length / 2);
    //             return i % 2 === 0 ? half - Math.floor(i / 2) : half + Math.floor(i / 2) + 1;
    //         }).filter(order => order >= 0 && order < letters.length);
    //     }

    //     const viewportHeight = window.innerHeight;
    //     const endValue = viewportHeight;

    //     letterOrders.forEach((order, index) => {
    //         gsap.to(letters[order], {
    //             scrollTrigger: {
    //             },
    //             y: 0,
    //             delay: index * 0.2,
    //             duration: 0.5,
    //         });
    //     });

    // const headerAnimation = gsap.from(letters, {
    //     translateY: '100vh',
    //     stagger: .05,
    //     duration: 1.3,
    //     scrollTrigger: {
    //         trigger: '.split-text',
    //         start: 'top 30%',
    //         end: `${endValue}px 50%`,
    //         pin: '.split-text',
    //         pinSpacing: true,
    //         scrub: 4,
    //         ease: "easeOut",
    //         markers: {
    //             startColor: 'blue',
    //             endColor: 'black'
    //         },
    //     },
    // });
    // triggers.push(headerAnimation.scrollTrigger);
    // animations.push(headerAnimation);

    //     const bgPinAnimation = gsap.to('.work-pinned-background', {
    //         scrollTrigger: {
    //             trigger: '.work-experience-container',
    //             start: 'top top',
    //             end: 'bottom bottom',
    //             pin: '.work-pinned-background',
    //             pinSpacing: false,
    //             scrub: true,
    //             // markers: {
    //             //     startColor: 'blue',
    //             //     endColor: 'white'
    //             // },
    //         },
    //     });
    //     triggers.push(bgPinAnimation.scrollTrigger);
    //     animations.push(bgPinAnimation);

    //     return () => {
    //         triggers.forEach(trigger => trigger.kill());
    //         animations.forEach(animation => animation.kill());
    //     };

    // }, []);

    return (
        <div className='work-container'>
            <div className="work-pinned-background">
                <h1>bg</h1>
            </div>
            <div className="work-experience-container">
                <h2 className="split-text">WORK HISTORY</h2>
                <div className="spacer vh100"></div>
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

// const [scrollerHeight, setScrollerHeight] = useState(0);
// useEffect(() => {
//     const letters = gsap.utils.toArray(scrollRef.current.querySelectorAll(".upward-letter"));
//     if (!letters.length) return;
//     const stickyTarget = stickyRef.current;
//     const numberOfLetters = text.split("").filter((x) => x !== " ").length;
//     // setScrollerHeight(numberOfLetters * 100)
//     const letterOrders = letters.map((_, i) => {
//         const half = Math.floor(letters.length / 2);
//         return i % 2 === 0 ? half - Math.floor(i / 2) : half + Math.floor(i / 2) + 1;
//     }).filter(order => order >= 0 && order < letters.length);
//     // letters.forEach((letter, i) => {
//     //     gsap.set(letter, { y: `${(letterOrders[i] * 200) + window.innerHeight}px` });
//     // });
//     // ScrollTrigger.refresh();
//     // const scrollTrigger = ScrollTrigger.create({
//     //     trigger: scrollRef.current,
//     //     start: `top+=${index * 100} bottom`,
//     //     end: () => `${container.offsetHeight - window.innerHeight}px`,
//     //     pin: bgImg,
//     //     pinSpacing: true,
//     //     scrub: 1,
//     // });
//     // return () => {
//     //     scrollTrigger.kill();
//     // };
//     // letterOrders.forEach((order, index) => {
//     //     gsap.to(letters[order], {
//     //         scrollTrigger: {
//     //             trigger: scrollRef.current,
//     //             start: `top center`,
//     //             // end: () => `${stickyTarget.offsetHeight - window.innerHeight}px`,
//     //             // end: `bottom bottom`,
//     //             end: 'top top',
//     //             // pin: stickyRef.current,
//     //             // pinSpacing: false,
//     //             // scrub: true,
//     //             // start: `top+=${index * 100} bottom`,
//     //             // endTrigger: stickyRef.current,
//     //             // end: 'top top',
//     //             // scrub: true,
//     //             // pin: stickyRef.current,
//     //             // onEnter: () => console.log(`${order === 1 ? 'zz Entering letter at index: ' + order : ''}`, 'letter: ', letters[order]),
//     //             // onLeave: () => console.log(`${order === 1 ? 'zz Leaving letter at index: ' + order : ''}`, 'letter: ', letters[order]),
//     //             // onUpdate: (self) => console.log(`${order === 1 ? 'zz Progress: ' + order : ''}`, 'letter: ', letters[order]),
//     //         },
//     //         y: 0,
//     //         delay: index * 0.2,
//     //         duration: 0.5,
//     //     });
//     // });
// }, []);