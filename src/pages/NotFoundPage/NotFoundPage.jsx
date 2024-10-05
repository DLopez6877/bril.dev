import React from 'react';
import './NotFoundPage.scss'
import PageTransition from '../../components/PageTransition/PageTransition';

const NotFoundPage = () => {
    return (
        <PageTransition>
            <div className="not-found-page-container">
                <Nav />
                <h1>NotFoundPage</h1>
            </div>
        </PageTransition>
    );
};

export default NotFoundPage;