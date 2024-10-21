import React from 'react';
import './ServerlessGuruPage.scss';
import { Link } from 'react-router-dom';


const ServerlessGuruPage = () => {
    const skills = [
        "AWS",
        "Serverless Architecture",
        "CloudFormation",
        "Lambda",
        "SonarQube",
        "CI/CD",
        "Cloud Security",
        "Code Reviews",
        "DevOps",
        "Infrastructure as Code"
    ];

    const endorsements = [
        {
            name: 'John Smith',
            title: 'Lead Cloud Architect at Air Canada',
            text: 'He was instrumental in architecting our cloud services and implementing best practices for security and deployment.',
            image: 'https://via.placeholder.com/150'
        },
        {
            name: 'Jane Doe',
            title: 'Cloud Engineer at Serverless Guru',
            text: 'His guidance in eliminating code smells and security risks improved our code quality tremendously.',
            image: 'https://via.placeholder.com/150'
        }
    ];

    return (
        <div className="serverless-guru-page-container">
            <header className="serverless-guru-header">
                <img className="serverless-guru-logo" src="https://via.placeholder.com/150" alt="Serverless Guru Logo" />
                <h1>Serverless Guru</h1>
                <p>Consultant at Serverless Guru, focusing on cloud transformation and security for Air Canada</p>
            </header>

            <section className="experience-section">
                <Link to="/" className="learn-more-link">Home</Link>
                <h2>My Experience at Serverless Guru</h2>
                <p>
                    During my time at Serverless Guru, I worked as a consultant for Air Canada, where I was responsible
                    for architecting cloud services and writing deployment scripts to assist with their transition to the cloud.
                    I contributed to development efforts, provided architecture guidance, and conducted hands-on training sessions.
                </p>
                <p>
                    Additionally, I oversaw the use of SonarQube, leading an effort to eliminate code smells and mitigate security risks
                    across their services. My work had a direct impact on improving code quality, security, and best practices.
                </p>
            </section>

            <section className="skills-section">
                <h2>Skills Used in This Role</h2>
                <div className="skills-list">
                    {skills.map(skill => (
                        <div key={skill} className="skill-item">{skill}</div>
                    ))}
                </div>
            </section>

            <section className="endorsements-section">
                <h2>Endorsements from Former Colleagues</h2>
                <div className="endorsements">
                    {endorsements.map((endorsement, index) => (
                        <div key={index} className="endorsement">
                            <img className="endorsement-image" src={endorsement.image} alt={`${endorsement.name}'s endorsement`} />
                            <div className="endorsement-text">
                                <p>{endorsement.name}, {endorsement.title}</p>
                                <blockquote>{endorsement.text}</blockquote>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="project-section">
                <h2>Notable Project: Cloud Transformation for Air Canada</h2>
                <p>
                    One of the highlights of my work at Serverless Guru was the architectural work I led for Air Canada.
                    This involved setting up their cloud infrastructure using best practices, including CI/CD pipelines
                    with CloudFormation, Serverless Framework, and enhancing their security posture using AWS native tools.
                </p>
                <a href="https://serverlessguru.com" className="learn-more-link">Learn more about Serverless Guru</a>
            </section>
        </div>
    );
};

export default ServerlessGuruPage;
