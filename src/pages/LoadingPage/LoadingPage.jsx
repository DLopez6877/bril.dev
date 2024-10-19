import React, { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import './LoadingPage.scss';
import logo from '../../assets/logo-filled.png'
import PageTransition from '../../wrappers/PageTransition/PageTransition';


// LAZY LOADED ASSETS
import bg from '../../assets/herobg.png';
import coder from '../../assets/coder.png';
import coder2 from '../../assets/coder2.png';
import glasses from '../../assets/glasses.png';
import glasses2 from '../../assets/glasses2.png';

const LoadingPage = ({ onComplete }) => {
    const [loading, setLoading] = useState(true);
    const [minLoadingTimeExceeded, setMinLoadingTimeExceeded] = useState(false);

    useEffect(() => {
        const preloadContent = () => {
            const imagesToPreload = [bg, coder, coder2, glasses, glasses2];

            const loadImages = imagesToPreload.map((src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            Promise.all(loadImages)
                .then(() => {
                    console.log('Loaded!');
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error preloading assets', error);
                    setLoading(false);
                });
        };

        preloadContent();
    }, [onComplete]);

    useEffect(() => {
        const timers = [];

        const redirectIfLoaded = (duration) => {
            const timer = setTimeout(() => {
                if (loading) {
                    console.log('retrying');
                    setMinLoadingTimeExceeded(true);
                    redirectIfLoaded(1000);
                } else {
                    console.log('done')
                    setLoading(false);
                    onComplete();
                }
            }, duration);
            timers.push(timer);
        }

        redirectIfLoaded(500);

        return () => {
            for (const timer of timers) {
                console.log('cleared');
                clearTimeout(timer);
            }
        };
    }, [loading, onComplete]);

    return (
        <PageTransition>
            <div>
                <m.div
                    className="loading-content"
                    animate={{ scale: [0.8, 1.2, 1] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'mirror',
                        duration: 1.5,
                        ease: 'easeInOut',
                    }}
                >
                    <img src={logo} alt="Bril Logo" />
                </m.div>
            </div>
        </PageTransition>
    );
};

export default LoadingPage;
