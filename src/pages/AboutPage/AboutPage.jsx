import React from 'react';
import './AboutPage.scss';
import Nav from '../../components/Nav/Nav';
import PageTransition from '../../components/PageTransition/PageTransition';

const AboutPage = () => {
    return (
        <PageTransition>
            <div className="about-page-container">
                <Nav />
                <h1>AboutPage</h1>
            </div>
        </PageTransition>
    );
};

export default AboutPage;
