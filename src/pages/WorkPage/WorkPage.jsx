import React from 'react';
import './WorkPage.scss'
import Nav from '../../components/Nav/Nav';
import PageTransition from '../../components/PageTransition/PageTransition';

const WorkPage = () => {
    return (
        <PageTransition>
            <div className="work-page-container">
                <Nav />
                <h1>WorkPage</h1>
            </div>
        </PageTransition>
    );
};

export default WorkPage;