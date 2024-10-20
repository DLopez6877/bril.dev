import React from 'react';
import './Contact.scss';
import GradientCanvas from '../GradientCanvas/GradientCanvas';

const Contact = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:dlopez6877@gmail.com?subject=Contact&body=Hello';
    };

    return (
        <div id="contact" className="contact-container">
            <div className="visible-content-container">

                <div className="content">
                    <GradientCanvas id='contact-gradient' />
                    <h2>LET'S</h2>
                    <h2>CONNECT</h2>
                    <div className="pills-container">
                        <p className='interests'>CURRENTLY INTERESTED IN:</p>
                        <div className="pills">
                            <div className="pill">FRONTEND</div>
                            <div className="pill">UX/UI DESIGN</div>
                            <div className="pill">FULL-TIME</div>
                            <div className="pill">PART-TIME</div>
                            <div className="pill">CONTRACT</div>
                            <div className="pill">STARTUPS</div>
                            <div className="pill">CONSULTING</div>
                            <div className="pill">FREELANCE</div>
                        </div>
                    </div>
                </div>

                <footer>
                    <button onClick={handleEmailClick} aria-label="Send an email to dlopez6877@gmail.com">EMAIL ME <i className="fas fa-arrow-right" /></button>

                    <a href="https://www.linkedin.com/in/dlopez6877" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <i className="fab fa-linkedin" aria-hidden="true" />
                    </a>
                    <a className='github' href="https://github.com/dlopez6877" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <i className="fab fa-github" aria-hidden="true" />
                    </a>
                </footer>

            </div>
        </div>
    );
};

export default Contact;
