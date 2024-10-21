import React from 'react';
import './RubyPage.scss';
import { Link } from 'react-router-dom';

const RubyPage = () => {
    const skills = [
        "Frontend Architecture",
        "State Management",
        "TypeScript",
        "React",
        ".NET",
        "Backend Development",
        "Cloud Migration",
        "Serverless Architecture",
        "CI/CD",
        "Cloud Security"
    ];

    const endorsements = [
        {
            name: 'Emily Johnson',
            title: 'Senior Engineer at Ruby',
            text: 'He was crucial in helping us migrate our services to the cloud during the outage. His dedication and expertise saved us in a time of crisis.',
            image: 'https://via.placeholder.com/150'
        },
        {
            name: 'Mark Thompson',
            title: 'Team Lead at Ruby',
            text: 'His restructuring of the frontend monolithic app significantly improved our development speed, making it more manageable and maintainable.',
            image: 'https://via.placeholder.com/150'
        }
    ];

    return (
        <div className="ruby-page-container">
            <header className="ruby-header">
                <img className="ruby-logo" src="https://via.placeholder.com/150" alt="Ruby Logo" />
                <h1>Ruby</h1>
                <p>Internal Applications Developer at Ruby, improving the software for customer interaction and migrating systems to the cloud.</p>
            </header>
            <Link to="/" className="learn-more-link">Home</Link>

            <section className="experience-section">
                <h2>My Experience at Ruby</h2>
                <p>
                    At Ruby, I initially worked on the internal applications team, where my first task was to redesign and restructure a
                    large part of the monolithic frontend application that was causing production delays. The existing codebase suffered
                    from poor state management and implicit types, which hindered feature development. My work modernized the application,
                    significantly improving developer productivity.
                </p>
                <p>
                    Later, I transitioned into a full-stack role, working extensively with the .NET backend. One of the most challenging
                    projects was during a major outage caused by a server farm issue. I worked around the clock to assist with migrating
                    all of our services to the cloud and helped bring production back online in less than 48 hours.
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
                <h2>Notable Project: Cloud Migration During Outage</h2>
                <p>
                    One of the most critical projects I worked on at Ruby was the cloud migration during an unexpected outage caused
                    by a server farm issue. We worked tirelessly for days, ensuring all services were successfully migrated to the cloud
                    and bringing production back online within 48 hours, minimizing downtime for our customers.
                </p>
                <a href="https://ruby.com" className="learn-more-link">Learn more about Ruby</a>
            </section>
        </div>
    );
};

export default RubyPage;
