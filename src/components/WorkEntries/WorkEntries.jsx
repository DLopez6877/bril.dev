import React, { useEffect, useRef } from 'react';
import './WorkEntries.scss'
import { Link } from 'react-router-dom';
import ScenePompeii from '../ScenePompeii/ScenePompeii';
import gsap from 'gsap';

const WorkEntries = () => {

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const entries = gsap.utils.toArray('.entry');

        entries.forEach((entry, index) => {
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
                },
            });
        });
    }, []);



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
                    <Link to="/playground" className='work-link'>Learn more</Link>
                    <div className="scene-container">
                        <ScenePompeii />
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
                    <Link to="/playground" className='work-link'>Learn more</Link>
                    <div className="scene-container">
                        <ScenePompeii />
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
                    <Link to="/playground" className='work-link'>Learn more</Link>
                    <div className="scene-container">
                        <ScenePompeii />
                    </div>
                </div>
            </div>

            <div className="entry">
                <div className="tab">
                    <p className="date">2021 - 2023</p>
                    <p className="tab-label">Ruby</p>
                </div>
                <div className="contents">
                    <p className="job-title">Senior Serverless Engineer</p>
                    <p>Ruby is a leading provider of virtual receptionist and live chat services, helping small businesses deliver exceptional customer experiences by managing phone calls, scheduling, and client interactions. I contributed to the development of internal applications used by receptionists for efficiently handling calls, scheduling appointments, and performing essential customer service task.</p>
                    <Link to="/playground" className='work-link'>Learn more</Link>
                    <div className="scene-container">
                        <ScenePompeii />
                    </div>
                </div>
            </div>

            <div className="entry">
                <div className="tab">
                    <p className="date">2022 - 2023</p>
                    <p className="tab-label">Pure Chat</p>
                </div>
                <div className="contents">
                    <p className="job-title">Senior Serverless Engineer</p>
                    <p>After Ruby acquired Pure Chat, I took the lead on maintaining the product, ensuring its seamless integration into Ruby’s internal applications. I managed both the integration and continued support for Pure Chat’s existing customers, overseeing its functionality while maintaining its core features for real-time customer engagement and live chat service.</p>
                    <Link to="/playground" className='work-link'>Learn more</Link>
                    <div className="scene-container">
                        <ScenePompeii />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WorkEntries;