import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="visible-content-container">

                <div className="content">
                    <h2>LET'S</h2>
                    <h2>CONNECT</h2>
                    <p>CURRENTLY INTERESTED IN:</p>
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

                <footer>
                    <button aria-label="Send an email">SEND AN EMAIL <i className="fas fa-arrow-right" /></button>

                    <div className="socials">
                        <a href="https://www.linkedin.com/in/dlopez6877" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                            <i className="fab fa-linkedin" aria-hidden="true" />
                        </a>
                        <a className='github' href="https://github.com/dlopez6877" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <i className="fab fa-github" aria-hidden="true" />
                        </a>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default Contact;
