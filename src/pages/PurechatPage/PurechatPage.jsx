import React from 'react';
import './PureChatPage.scss';
import { Link } from 'react-router-dom';

const PureChatPage = () => {
    return (
        <div className="purechat-page">
            <Link to="/" className="learn-more-link">Home</Link>
            <header className="purechat-header">
                <h1>My Time Managing PureChat at Ruby</h1>
                <p>Ruby acquired PureChat in <strong>[Insert Date]</strong>, integrating its chat services into our internal applications, marking a significant shift for my team.</p>
            </header>

            <section className="purechat-details">
                <h2>Taking Initiative</h2>
                <p>
                    When the acquisition happened, I took the initiative to work closely with the lead developer of PureChat to understand the codebase before his departure. This collaboration allowed me to become the go-to expert for PureChat, responsible for managing the product at all levels.
                </p>

                <h2>Collaboration and Cross-Departmental Work</h2>
                <p>
                    I worked with several departments, including finance, legal, product, marketing, and engineering management. This wide-ranging responsibility gave me a comprehensive understanding of the product and its impact on Ruby’s broader ecosystem. I wrote thorough documentation outlining all maintenance tasks, as well as onboarding materials, which I used to rapidly onboard three developers to the project.
                </p>

                <h2>24/7 Support and Maintenance</h2>
                <p>
                    I managed the production environment, including Google Analytics, monitoring production logs, and handling outages with 24-hour on-call support. Whether it was day or night, I ensured that PureChat was stable and functioning correctly.
                </p>

                <h2>Integrating with "New Ruby" Platform</h2>
                <p>
                    When Ruby decided to launch the "New Ruby" platform, I successfully integrated PureChat with the receptionist service, drawing from the lessons learned during the original acquisition process.
                </p>
            </section>

            <section className="purechat-skills">
                <h2>Skills Utilized</h2>
                <ul>
                    <li>JavaScript/TypeScript</li>
                    <li>Google Analytics</li>
                    <li>Monitoring and Production Support</li>
                    <li>Cross-Departmental Collaboration</li>
                    <li>Documentation and Onboarding</li>
                    <li>API Integration</li>
                    <li>24/7 On-Call Support</li>
                </ul>
            </section>

            <section className="purechat-endorsements">
                <h2>Endorsements from Former Coworkers</h2>
                <div className="endorsement">
                    <p>“[Your Name] took the reins of PureChat and managed it exceptionally well, bridging the gap between departments and ensuring its continued success at Ruby.” - Former Coworker</p>
                </div>
                <div className="endorsement">
                    <p>“During the transition and after the acquisition of PureChat, [Your Name] was an invaluable resource, quickly becoming the expert in all aspects of the product.” - Former Lead Developer of PureChat</p>
                </div>
            </section>

            <section className="purechat-gallery">
                <h2>Photos & Screenshots</h2>
                <div className="purechat-images">
                    {/* Add images relevant to your time at PureChat */}
                    <img src="/path/to/image1.jpg" alt="PureChat screenshot 1" />
                    <img src="/path/to/image2.jpg" alt="PureChat screenshot 2" />
                </div>
            </section>
        </div>
    );
};

export default PureChatPage;
