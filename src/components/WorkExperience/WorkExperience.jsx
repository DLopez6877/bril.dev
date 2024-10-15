import React, { useEffect, useRef } from 'react';
import './WorkExperience.scss'
import TextSplitter from '../../wrappers/TextSplitter'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import collab from '../../assets/collab.jpg';
import tablet from '../../assets/tablet.jpg';
import portland from '../../assets/portland.jpg';
import working from '../../assets/working.jpg';
import wave from '../../assets/wave.svg';
import { Link } from 'react-router-dom';

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
        <div className="work-experience-container">
            <h2 className="headline">WORK HISTORY</h2>
            <div className="pic-section">
                <img src={collab} alt="Ai generated image of coworkers collaborating on a project." className="collab" />
                <img src={tablet} alt="Ai generated image of a lion drawn on a tablet." className="tablet" />
                <img src={working} alt="Ai generated image of a software engineer sitting at a desk with four monitors." className="working" />
                <img src={portland} alt="Ai generate image of Portland, Oregon." className="portland" />
                <p className="shoutout">Portland based fullstack software engineer with over 7 years of experience.</p>
            </div>

            <div className="text-3d">

            </div>
            <div className="entries">
                <div className="entry entry1">
                    <div className="tab">
                        <p className="date">2006 - 2014</p>
                        <p className="tab-label">Army National Guard</p>
                    </div>
                    <div className="contents">
                        <p className="job-title">25U - Signal Support Systems Specialist</p>
                        <p>As a Signal Support Systems Specialist in the Washington Army National Guard, I maintained and troubleshooted communication systems, including radios, satellites, and networks. I ensured secure, reliable connections and trained others to use the equipment, keeping operations running smoothly.</p>
                        <Link to="/playground" className='work-link'>Learn more</Link>
                        <div className="doodad">
                            <img src={wave} alt="Scwiggly line representing wave frequency." className="wave" />
                        </div>
                    </div>
                </div>

                <div className="entry entry2">
                    <div className="tab">
                        <p className="date">2017 - 2020</p>
                        <p className="tab-label">Zapproved</p>
                    </div>
                    <div className="contents">
                        <p className="job-title">Software Engineer</p>
                        <p>Zapproved is a Portland-based SaaS company that specializes in cloud-based e-discovery software. I helped develop their flagship product, ZDiscovery, which is primarily used by corporate legal teams to help manage the entire litigation process, from data preservation to review.</p>
                        <Link to="/playground" className='work-link'>Learn more</Link>
                        <div className="doodad">
                            <img src={wave} alt="Scwiggly line representing wave frequency." className="wave" />
                        </div>
                    </div>
                </div>

                <div className="entry entry3">
                    <div className="tab">
                        <p className="date">2020 - 2021</p>
                        <p className="tab-label">Serverless Guru</p>
                    </div>
                    <div className="contents">
                        <p className="job-title">Senior Serverless Engineer</p>
                        <p>Serverless Guru is a cloud consulting company specializing in AWS serverless architecture. My role involved working closely with enterprise clients, including Air Canada, to architect, build, and deploy scalable serverless applications, as well as providing consulting services to enhance cloud adoption strategies.</p>
                        <Link to="/playground" className='work-link'>Learn more</Link>
                        <div className="doodad">
                            <img src={wave} alt="Scwiggly line representing wave frequency." className="wave" />
                        </div>
                    </div>
                </div>

                <div className="entry entry4">
                    <div className="tab">
                        <p className="date">2021 - 2023</p>
                        <p className="tab-label">Ruby</p>
                    </div>
                    <div className="contents">
                        <p className="job-title">Senior Serverless Engineer</p>
                        <p>Ruby is a leading provider of virtual receptionist and live chat services, helping small businesses deliver exceptional customer experiences by managing phone calls, scheduling, and client interactions. I contributed to the development of internal applications used by receptionists for efficiently handling calls, scheduling appointments, and performing essential customer service task.</p>
                        <Link to="/playground" className='work-link'>Learn more</Link>
                        <div className="doodad">
                            <img src={wave} alt="Scwiggly line representing wave frequency." className="wave" />
                        </div>
                    </div>
                </div>

                <div className="entry entry5">
                    <div className="tab">
                        <p className="date">2022 - 2023</p>
                        <p className="tab-label">Pure Chat</p>
                    </div>
                    <div className="contents">
                        <p className="job-title">Senior Serverless Engineer</p>
                        <p>After Ruby acquired Pure Chat, I took the lead on maintaining the product, ensuring its seamless integration into Ruby’s internal applications. I managed both the integration and continued support for Pure Chat’s existing customers, overseeing its functionality while maintaining its core features for real-time customer engagement and live chat service.</p>
                        <Link to="/playground" className='work-link'>Learn more</Link>
                        <div className="doodad">
                            <img src={wave} alt="Scwiggly line representing wave frequency." className="wave" />
                        </div>
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