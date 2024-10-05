import React, { ReactNode } from 'react';
import './PageTransition.scss'
import { motion as m } from 'framer-motion';

const PageTransition = ({ children }) => {
    const nbOfColumns = 8;
    const anim = (variants, custom) => {
        return {
            initial: 'initial',
            animate: 'enter',
            exit: 'exit',
            variants,
            custom
        }
    }

    const expand = {
        initial: {
            top: '0'
        },
        enter: (i) => ({
            top: '100vh',
            transition: {
                duration: 0.6,
                delay: 0.05 * i,
                ease: [0.87, 0, 0.13, 1],
            },
            transitionEnd: {
                height: '0',
                top: '0'
            }
        }),
        exit: (i) => ({
            height: '100vh',
            transition: {
                duration: 0.6,
                delay: 0.05 * i,
                ease: [0.87, 0, 0.13, 1]
            }
        })
    }

    return (
        <div className="page-transition-container">
            <div className='lines'>
                {
                    [...Array(nbOfColumns)].map((_, i) => {
                        return <m.div {...anim(expand, nbOfColumns - i)} key={i} className='line' />
                    })
                }
            </div>
            {children}
        </div>
    );
};

export default PageTransition;