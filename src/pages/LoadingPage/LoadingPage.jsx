import React, { useEffect, useState } from 'react';
import { motion as m } from 'framer-motion';
import './LoadingPage.scss';
import logo from '../../assets/logo.png'
// import PageTransition from '../../wrappers/PageTransition/PageTransition';

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


// LAZY LOADED ASSETS
// import bg from '../../assets/herobg.png';
// import coder from '../../assets/coder.png';
// import coder2 from '../../assets/coder2.png';
// import glasses from '../../assets/glasses.png';
// import glasses2 from '../../assets/glasses2.png';

const LoadingPage = ({ onComplete }) => {
    const [loading, setLoading] = useState(false); //set to true when needed
    const [minLoadingTimeExceeded, setMinLoadingTimeExceeded] = useState(false);

    // useEffect(() => {
    //     const preloadContent = () => {
    //         const imagesToPreload = [bg, coder, coder2, glasses, glasses2];

    //         const loadImages = imagesToPreload.map((src) => {
    //             return new Promise((resolve, reject) => {
    //                 const img = new Image();
    //                 img.src = src;
    //                 img.onload = resolve;
    //                 img.onerror = reject;
    //             });
    //         });

    //         const preloadThreeJSAssets = () => {
    //             return new Promise((resolve, reject) => {
    //                 const gltfLoader = new GLTFLoader();

    //                 gltfLoader.load('/public/assets/models/room_amorini_dorati_house__pompeii/scene.gltf', (gltf) => {
    //                     console.log('GLTF model loaded');
    //                     resolve();
    //                 }, undefined, (error) => {
    //                     console.error('Error loading GLTF model:', error);
    //                     reject(error);
    //                 });
    //             });
    //         };

    //         Promise.all([...loadImages, preloadThreeJSAssets()])
    //             .then(() => {
    //                 console.log('All assets loaded!');
    //                 setLoading(false);
    //             })
    //             .catch((error) => {
    //                 console.error('Error preloading assets', error);
    //                 setLoading(false);
    //             });

    //     };

    //     preloadContent();
    // }, [onComplete]);

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

        redirectIfLoaded(2000);

        return () => {
            for (const timer of timers) {
                console.log('cleared');
                clearTimeout(timer);
            }
        };
    }, [loading, onComplete]);

    return (
        // <PageTransition>
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
        // </PageTransition>
    );
};

export default LoadingPage;
