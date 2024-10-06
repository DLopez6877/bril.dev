import React from 'react';
import './About.scss'
import aboutbg from '../../assets/aboutbg.png';
import SplitText from '../SplitText/SplitText';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-sticky-bg-container">
                <img className="about-bg-img" src={aboutbg} alt="Background of orange geometric trees with a blue sunrise." />
                <div className="about-grid">
                    <div className="about-headline"><span>ABOUT ME</span></div>
                    <p className='seeking-opportunities'>Currently seeking new opportunities.</p>
                    <div className="about-textbox container">
                        <SplitText><p>I’ve spent over seven years as a full-stack software engineer, but my heart belongs to frontend development. After years of venturing deeper and deeper into the dark depths of backend work, it’s time to grab this Balrog, known as my career, by the horns and take control.</p></SplitText>
                        <SplitText><p>I’m only seeking Frontend or UX/UI opportunities at this time.</p></SplitText>
                        <SplitText><p>I want to build Awwwards winning websites where I can let my creativity shine.</p></SplitText>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;