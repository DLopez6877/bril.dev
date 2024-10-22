import React, { useEffect } from 'react';
import './GradientCanvas.scss'
import { Gradient } from '../../lib/Gradient.js';

const GradientCanvas = ({ id }) => {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient(`#${id}`);
        return () => {
            gradient.disconnect(); // Assuming the `disconnect` method stops animations and releases WebGL context
        };
    }, [])

    return (
        <div className="gradient-canvas-container">
            <canvas id={id} className='gradient-canvas' data-transition-in />
        </div>
    );
};

export default GradientCanvas;