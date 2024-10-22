import React, { useEffect, useRef } from 'react';
import './WorkEntries.scss'
import { Link } from 'react-router-dom';
import ScenePompeii from '../Scenes/ScenePompeii';
import SceneSimple from '../Scenes/SceneSimple';
import SceneComb from '../Scenes/SceneComb';
import gsap from 'gsap';
import { useLenis } from '@studio-freight/react-lenis';

const WorkEntries = () => {

    const containerRef = useRef(null);
    const lenis = useLenis();
    const entryScrollPositionsRef = useRef({});

    useEffect(() => {
        const container = containerRef.current;
        const entries = gsap.utils.toArray('.entry');

        entries.forEach((entry, index) => {
            const entryId = `entry-${index}`;
            const offset = index * 70;

            gsap.to(entry, {
                scrollTrigger: {
                    trigger: entry,
                    start: `top top+=${offset}`,
                    endTrigger: container,
                    end: `bottom 50%`,
                    pin: true,
                    pinSpacing: index === entries.length - 1 ? true : false,
                    scrub: true,
                    onEnter: () => {
                        const scrollY = window.scrollY;
                        entryScrollPositionsRef.current[entryId] = scrollY;
                    },
                    onLeaveBack: () => {
                        entryScrollPositionsRef.current[entryId] = null;
                    },
                },
            });
        });
    }, []);

    useEffect(() => {
        const container = containerRef.current;

        const handleTabClick = (e) => {
            if (!container || !lenis) return;

            const clickX = e.clientX;
            const clickY = e.clientY;
            let foundTab = null;
            const tabs = document.querySelectorAll('.tab');
            const entries = gsap.utils.toArray('.entry');

            tabs.forEach(tab => {
                const rect = tab.getBoundingClientRect();

                if (
                    clickX >= rect.left &&
                    clickX <= rect.right &&
                    clickY >= rect.top &&
                    clickY <= rect.bottom
                ) {
                    foundTab = tab;
                }
            });

            if (foundTab) {
                const entry = foundTab.closest('.entry');
                if (entry) {
                    const entryIndex = entries.indexOf(entry);
                    const entryId = `entry-${entryIndex}`;

                    const savedScrollY = entryScrollPositionsRef.current[entryId];

                    if (savedScrollY !== null && savedScrollY !== undefined) {
                        lenis.scrollTo(savedScrollY, { duration: 0.3 });
                    }
                }
            }
        };
        container.addEventListener('click', handleTabClick);
        return () => {
            container.removeEventListener('click', handleTabClick);
        };
    }, [lenis]);


    return (
        <div id="work" ref={containerRef} className="work-entries-container">

            <div className="entry">
                <div className="tab">
                    <p className="date">2006 - 2014</p>
                    <p className="tab-label">Army National Guard</p>
                </div>
                <div className="contents">
                    <p className="job-title">25U - Signal Support Systems Specialist</p>
                    <p>As a Signal Support Systems Specialist in the Washington Army National Guard, I maintained and troubleshooted communication systems, including radios, satellites, and networks. I ensured secure, reliable connections and trained others to use the equipment, keeping operations running smoothly.</p>
                    <div className="scene-container roller-coaster-scene">
                        <SceneComb />
                    </div>
                </div>
            </div>

            <div className="entry">
                <div className="tab">
                    <p className="date">2017 - 2020</p>
                    <p className="tab-label">Zapproved</p>
                </div>
                <div className="contents">
                    <p className="job-title">Software Engineer</p>
                    <p>Zapproved is a Portland-based SaaS company that specializes in cloud-based e-discovery software. I helped develop their flagship product, ZDiscovery, which is primarily used by corporate legal teams to help manage the entire litigation process, from data preservation to review.</p>
                    <Link to="/zapproved" className='work-link'>Learn more</Link>
                    <div className="scene-container">
                        <SceneSimple />
                    </div>
                </div>
            </div>

            <div className="entry">
                <div className="tab">
                    <p className="date">2020 - 2021</p>
                    <p className="tab-label">Serverless Guru</p>
                </div>
                <div className="contents">
                    <p className="job-title">Senior Serverless Engineer</p>
                    <p>Serverless Guru is a cloud consulting company specializing in AWS serverless architecture. My role involved working closely with enterprise clients, including Air Canada, to architect, build, and deploy scalable serverless applications, as well as providing consulting services to enhance cloud adoption strategies.</p>
                    <Link to="/serverlessguru" className='work-link'>Learn more</Link>
                    <div className="scene-container">
                        <SceneSimple />
                    </div>
                </div>
            </div>

            <div className="entry">
                <div className="tab">
                    <p className="date">2021 - 2023</p>
                    <p className="tab-label">Ruby</p>
                </div>
                <div className="contents">
                    <p className="job-title">Senior Fullstack Engineer</p>
                    <p>Ruby is a leading provider of virtual receptionist and live chat services, helping small businesses deliver exceptional customer experiences by managing phone calls, scheduling, and client interactions. I contributed to the development of internal applications used by receptionists for efficiently handling calls, scheduling appointments, and performing essential customer service task.</p>
                    <Link to="/ruby" className='work-link'>Learn more</Link>
                    <div className="scene-container">
                        <SceneSimple />
                    </div>
                </div>
            </div>

            <div className="entry">
                <div className="tab">
                    <p className="date">2022 - 2023</p>
                    <p className="tab-label">Pure Chat</p>
                </div>
                <div className="contents">
                    <p className="job-title">Senior Fullstack Engineer</p>
                    <p>After Ruby acquired Pure Chat, I took the lead on maintaining the product, ensuring its seamless integration into Ruby’s internal applications. I managed both the integration and continued support for Pure Chat’s existing customers, overseeing its functionality while maintaining its core features for real-time customer engagement and live chat service.</p>
                    <Link to="/purechat" className='work-link'>Learn more</Link>
                    <div className="scene-container">
                        <ScenePompeii />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WorkEntries;