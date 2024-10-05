import React from 'react';
import './ContactPage.scss'
import Nav from '../../components/Nav/Nav';
import PageTransition from '../../components/PageTransition/PageTransition';

const ContactPage = () => {
    return (
        <PageTransition>
            <div className="contact-page-container">
                <Nav />
                <h1>Contact Page</h1>
            </div>
        </PageTransition>
    );
};

export default ContactPage;