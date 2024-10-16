import React from 'react';
import './WorkEntries.scss'
import wave from '../../assets/wave.svg';
import { Link } from 'react-router-dom';

const WorkEntries = () => {
    return (
        <div className="work-entries-container">
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
    );
};

export default WorkEntries;