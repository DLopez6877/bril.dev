import React from 'react';
import { easeIn, motion as m } from 'framer-motion';
import './DrawerContent.scss';

const DrawerContent = ({ drawerSide, closeDrawer }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: -0.2,
            }
        }
    };

    const wordVariants = {
        hidden: {
            x: drawerSide === 'left' ? '-100%' : '100%',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.6,
                ease: 'easeInOut'
            }
        }
    };

    const buttonVariants = {
        hidden: {
            x: drawerSide === 'left' ? '25vw' : '-25vw',
            y: '-25vw'
        },
        visible: {
            x: drawerSide === 'left' ? '25vw' : '-25vw',
            y: 0,
            transition: {
                delay: '0.5',
                type: 'spring',
                stiffness: 130,
                damping: 12
            }
        },
        exit: {
            x: drawerSide === 'left' ? '125vw' : '-125vw',
            y: 0,
            transition: {
                type: 'tween',
                ease: 'easeIn',
                duration: 0.5
            }
        }
    }

    //     initial = {{ x: 0, y: '-15vw' }}
    //     animate = {{ x: 0, y: 0 }}
    //     exit = {{ x: drawerSide === 'left' ? '25vw' : '-25vw', y: 0 }}
    //     transition = {{ type: 'spring', stiffness: 120, damping: 20, }}

    return (
        <div className="drawer-content-container">
            <div className="drawer-row">
                <m.button
                    onClick={closeDrawer}
                    className="close-button"
                    aria-label="Close Drawer"
                    type="button"
                    style={{
                        textAlign: drawerSide === 'left' ? 'right' : 'left',
                        // transform: drawerSide === 'left' ? 'translateX(25vw)' : 'translateX(-25vw)'
                    }}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
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
                </m.button>
            </div>
            <m.div
                className="drawer-content"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
            >
                {['ABOUT', 'WORK', 'SKILLS', 'CONTACT'].map((word, index) => (
                    <m.div
                        key={index}
                        className="drawer-row"
                        variants={wordVariants}
                    >
                        <m.div className='word-text'>{word}</m.div>
                    </m.div>
                ))}

            </m.div>
        </div>
    );
};

export default DrawerContent;
