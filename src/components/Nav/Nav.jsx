import React, { useEffect, useState, useRef } from 'react';
import './Nav.scss';
import logo from '../../assets/logo-filled.png';
import DrawerContent from '../DrawerContent/DrawerContent';
import { motion as m, AnimatePresence } from "framer-motion"
import { Link, useLocation } from 'react-router-dom';
import { useLenis } from '@studio-freight/react-lenis';

export const NavButtonVariants = {
    hidden: {
        y: -100
    },
    visible: {
        y: 30,
        transition: {
            type: 'spring',
            delay: 0.5,
            stiffness: 150,
            damping: 10
        }
    },
    exit: {
        y: [80, -200],
        transition: {
            type: 'spring',
            stiffness: 30,
            damping: 10,
            velocity: -100,
            times: [0, 1],
        }

    },
}

const Nav = () => {
    const [bottomConstraint, setBottomConstraint] = useState(0);
    const [leftConstraint, setLeftConstraint] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerSide, setDrawerSide] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuNavRef = useRef(null);
    const drawerRef = useRef(null);
    const location = useLocation();
    const lenis = useLenis();
    const logoTo = import.meta.env.MODE === 'production' ? '/home' : '/playground';

    useEffect(() => {
        if (!lenis) return;
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                lenis.scrollTo(element, { duration: 1.2 });
            }
        }
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        const calculateConstraint = () => {
            if (menuNavRef.current) {
                const viewportHeight = window.innerHeight;
                const menuNavHeight = menuNavRef.current.offsetHeight;
                const bottomPaddingPx = 20;
                setBottomConstraint(viewportHeight - menuNavHeight - bottomPaddingPx);
                const viewportWidth = window.innerWidth;
                const menuNavWidth = menuNavRef.current.offsetWidth;
                const leftPaddingPx = 20;
                setLeftConstraint(viewportWidth - menuNavWidth - leftPaddingPx);
            }
        };

        calculateConstraint();
        window.addEventListener('resize', calculateConstraint);

        return () => {
            window.removeEventListener('resize', calculateConstraint);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                closeDrawer();
            }
        };

        if (isDrawerOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDrawerOpen]);

    const handleMenuNavClick = () => {
        if (isDragging) return;

        if (menuNavRef.current) {
            const menuNavPosition = menuNavRef.current.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            if (menuNavPosition.left < viewportWidth / 2) {
                setDrawerSide('left');
            } else {
                setDrawerSide('right');
            }
            setIsDrawerOpen(true);
        }
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <div className="nav-container">
            <m.div
                className="full-nav"
                initial={{ y: 0 }}
                animate={{ y: isScrolled ? '-100%' : 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20, delay: isScrolled ? 0 : 0.8 }}
            >
                <Link to={logoTo} className='logo'><img height={30} src={logo} alt="Bril Logo." /></Link>
                <div className="links">
                    <Link to="#about" className='nav-link'><span aria-hidden="true">About</span>
                        About
                        <span aria-hidden="true">About</span></Link>
                    <Link to="#work" className='nav-link'><span aria-hidden="true">Work</span>
                        Work
                        <span aria-hidden="true">Work</span></Link>
                    <Link to="#skills" className='nav-link'><span aria-hidden="true">Skills</span>
                        Skills
                        <span aria-hidden="true">Skills</span></Link>
                    <Link to="#contact" className='nav-link'><span aria-hidden="true">Contact</span>
                        Contact
                        <span aria-hidden="true">Contact</span></Link>
                </div>
            </m.div>
            <m.button
                ref={menuNavRef}
                className="menu-nav glass"
                onClick={handleMenuNavClick}
                aria-label="Open Navigation Drawer"
                type="button"
                drag
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setTimeout(() => setIsDragging(false), 100)}

                initial={{ scale: 0 }}
                animate={{ scale: isScrolled ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 5, delay: isScrolled ? 0.6 : 0 }}

                dragConstraints={{
                    top: 0,
                    left: leftConstraint * -1,
                    right: 0,
                    bottom: bottomConstraint
                }}
            >
                <div className="line top"></div>
                <div className="line middle"></div>
                <div className="line bottom"></div>
            </m.button>
            <AnimatePresence>
                {isDrawerOpen && (
                    <>
                        <m.div
                            ref={drawerRef}
                            className={`drawer dark-glass ${drawerSide}`}
                            style={{
                                [drawerSide]: 0,
                            }}
                            initial={{ x: drawerSide === 'left' ? '-100%' : '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: drawerSide === 'left' ? '-100%' : '100%' }}
                            transition={{ type: 'spring', stiffness: 120, damping: 20, }}
                        >
                            <div className="drawer-content">
                                <DrawerContent drawerSide={drawerSide} closeDrawer={closeDrawer} />
                            </div>
                        </m.div>
                        <m.div
                            className='overlay'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 120, damping: 20, }}
                        />
                        <m.button
                            onClick={closeDrawer}
                            className={`close-button ${drawerSide === 'left' ? 'drawer-left' : ''}`}
                            aria-label="Close Drawer"
                            type="button"
                            custom={drawerSide}
                            variants={NavButtonVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="x">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </div>
                            <div className='x-glass-hack glass' />
                        </m.button>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Nav;

