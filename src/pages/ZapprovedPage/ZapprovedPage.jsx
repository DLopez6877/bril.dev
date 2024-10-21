import React from 'react';
import './ZapprovedPage.scss';
import { Link } from 'react-router-dom';
import zapprovedLogo from '../../assets/logo.png';
import endorsement1 from '../../assets/tablet.jpg';
import endorsement2 from '../../assets/tablet.jpg';

const ZapprovedPage = () => {
    const skills = [
        'AngularJS',
        'Angular',
        'Full-Stack Development',
        'Component Libraries',
        'Platform Architecture',
        'Cloud Integration',
        'Design Patterns',
        'Leadership and Mentoring',
        'Digital Discovery Pro'
    ];

    const endorsements = [
        {
            name: 'John Doe',
            title: 'Senior Software Engineer',
            message: 'Working with you on the component library was a game changer for our team. Your dedication and leadership helped streamline our development process.',
            image: endorsement1
        },
        {
            name: 'Jane Smith',
            title: 'UI/UX Designer',
            message: 'Your effort to integrate design principles into the development process made a huge impact on the quality of our product.',
            image: endorsement2
        }
    ];

    return (
        <div className="zapproved-page-container">
            <header className="zapproved-header">
                <Link to="/" className="learn-more-link">Home</Link>
                <img src={zapprovedLogo} alt="Zapproved Logo" className="zapproved-logo" />
                <h1>My Journey at Zapproved</h1>
                <p>How I evolved from frontend development to full-stack engineering and leadership.</p>
            </header>

            <section className="experience-section">
                <h2>My Role and Responsibilities</h2>
                <p>
                    I began my journey at Zapproved as a frontend developer on a team of fewer than 20 engineers. My primary task was upgrading the existing AngularJS application to the latest version of Angular. As I gained more experience, I transitioned into backend and cloud-related tasks, leveraging design patterns and principles to improve the software architecture.
                </p>
                <p>
                    I took the lead in developing a component library used across the engineering and UX/UI teams to standardize design and functionality across our suite of applications. This effort allowed teams to move faster and ensure consistency throughout the Zapproved platform. Shortly afterward, I was recruited to join the platform team, where we built a greenfield project aimed at giving customers access to all their products in one place after logging in.
                </p>
            </section>

            <section className="skills-section">
                <h2>Skills Utilized</h2>
                <ul className="skills-list">
                    {skills.map((skill, index) => (
                        <li key={index} className="skill-item">{skill}</li>
                    ))}
                </ul>
            </section>

            <section className="endorsements-section">
                <h2>Endorsements</h2>
                <div className="endorsements">
                    {endorsements.map((endorsement, index) => (
                        <div key={index} className="endorsement">
                            <img src={endorsement.image} alt={endorsement.name} className="endorsement-image" />
                            <div className="endorsement-text">
                                <p><strong>{endorsement.name}</strong>, {endorsement.title}</p>
                                <blockquote>{endorsement.message}</blockquote>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="project-section">
                <h2>Digital Discovery Pro: A Deeper Dive</h2>
                <p>
                    One of the major projects I worked on at Zapproved was Digital Discovery Pro, a cloud-based e-discovery software. My role included integrating cutting-edge cloud solutions and collaborating with other engineers to ensure the platform was scalable and robust.
                </p>
                <p>
                    As a part of this project, I was responsible for both frontend and backend development, ensuring smooth integration between the components. I worked closely with the product team to build features that addressed real customer pain points, including managing vast amounts of litigation data and streamlining the data review process.
                </p>
            </section>

        </div>
    );
};

export default ZapprovedPage;
