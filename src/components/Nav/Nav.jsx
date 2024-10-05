import React from 'react';
import './Nav.scss'

import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav-container">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/playground" className='nav-link'>Playground</Link>

            <div className="hamburger-menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </div>
        </div>
    );
};

export default Nav;