import React, { useEffect } from 'react';
import { motion as m } from 'framer-motion';
import './DrawerContent.scss';
import { NavContainerVariants, NavWordVariants } from '../../lib/variants';
import { useLenis } from '@studio-freight/react-lenis';
import { Link, useLocation } from 'react-router-dom';


const DrawerContent = ({ drawerSide }) => {
    const location = useLocation();
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                lenis.scrollTo(element, { duration: 1.2 });
            }
        }
    }, [location]);
    return (
        <m.div
            className="drawer-content-container"
            initial="hidden"
            animate="visible"
            exit="hidden"
            custom={drawerSide}
            variants={NavContainerVariants}
        >
            <m.div
                key='about'
                className="drawer-row"
                variants={NavWordVariants}
            >
                <m.div className='word-text'>
                    <Link to="#about" className='nav-link'><span aria-hidden="true">About</span>
                        About
                        <span aria-hidden="true">About</span></Link>
                </m.div>
            </m.div>

            <m.div
                key='work'
                className="drawer-row"
                variants={NavWordVariants}
            >
                <m.div className='word-text'>
                    <Link to="#work" className='nav-link'><span aria-hidden="true">Work</span>
                        Work
                        <span aria-hidden="true">Work</span></Link>
                </m.div>
            </m.div>

            <m.div
                key='skills'
                className="drawer-row"
                variants={NavWordVariants}
            >
                <m.div className='word-text'>
                    <Link to="#skills" className='nav-link'><span aria-hidden="true">Skills</span>
                        Skills
                        <span aria-hidden="true">Skills</span></Link>
                </m.div>
            </m.div>

            <m.div
                key='contact'
                className="drawer-row"
                variants={NavWordVariants}
            >
                <m.div className='word-text'>
                    <Link to="#contact" className='nav-link'><span aria-hidden="true">Contact</span>
                        Contact
                        <span aria-hidden="true">Contact</span></Link>
                </m.div>
            </m.div>

        </m.div>
    );
};

export default DrawerContent;
