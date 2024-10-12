import React from 'react';
import { motion as m } from 'framer-motion';
import './DrawerContent.scss';
import { NavContainerVariants, NavWordVariants } from '../../lib/variants';


const DrawerContent = ({ drawerSide }) => {
    return (
        <m.div
            className="drawer-content-container"
            initial="hidden"
            animate="visible"
            exit="hidden"
            custom={drawerSide}
            variants={NavContainerVariants}
        >
            {['ABOUT', 'WORK', 'SKILLS', 'CONTACT'].map((word, index) => (
                <m.div
                    key={index}
                    className="drawer-row"
                    variants={NavWordVariants}
                >
                    <m.div className='word-text'>{word}</m.div>
                </m.div>
            ))}

        </m.div>
    );
};

export default DrawerContent;
