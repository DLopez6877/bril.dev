import React, { useEffect } from 'react';
import './GradientCanvas.scss'
import { Gradient } from '../../lib/Gradient.js';

const GradientCanvas = ({ id }) => {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient(`#${id}`);
        return () => { };
    }, [])

    return (
        <div className="gradient-canvas-container">
            <canvas id={id} className='gradient-canvas' data-transition-in />
        </div>
    );
};

export default GradientCanvas;