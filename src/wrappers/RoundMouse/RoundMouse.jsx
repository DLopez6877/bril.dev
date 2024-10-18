import React, { useState, useEffect } from 'react';
import './RoundMouse.scss';

const RoundMouse = ({ children }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };
        const handleMouseEnter = () => {
            setVisible(true);
        };

        const handleMouseLeave = () => {
            setVisible(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);


        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="round-mouse-container">
            <div
                className={`round-mouse-cursor ${visible ? '' : 'hidden'}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
            {children}
        </div>
    );
}

export default RoundMouse;