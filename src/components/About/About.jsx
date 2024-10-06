import React from 'react';
import './About.scss'
import aboutbg from '../../assets/aboutbg.png';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-sticky-bg-container">
                <img className="about-bg-img" src={aboutbg} alt="Background of orange geometric trees with a blue sunrise." />
                <div className="about-grid">
                    <div className="about-headline"><span>ABOUT ME</span></div>
                    <div className="about-textbox">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis recusandae aspernatur, maiores itaque molestias ad officia voluptatem expedita, asperiores eum! Perspiciatis eius quidem nobis dolorum rem quibusdam, possimus voluptate.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit doloremque sit, omnis quidem maiores vero similique culpa dolore eius explicabo tenetur quam, at fugit mollitia est dolorum ipsam amet! Deserunt.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore facilis aspernatur numquam illo. Voluptas velit saepe consequatur dignissimos facilis dolores soluta rem esse fugit, molestias, eos dolorem. Cum, officiis ipsam.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;