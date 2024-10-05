import React, { useRef, useEffect } from 'react';
import './InfiniteScrollText.scss';
import { motion as m, useAnimation } from 'framer-motion';

const InfiniteScrollText = ({ children, className, direction, scrollSpeed = 1, fontSize = '2rem', reverseOnScroll = 'true' }) => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    const controls = useAnimation();
    const scrollDirectionRef = useRef(direction === 'right' ? 1 : -1);
    const scrollSpeedRef = useRef(scrollSpeed);
    let xPercent = 0;

    useEffect(() => {
        scrollSpeedRef.current = scrollSpeed;
        scrollDirectionRef.current = direction === 'right' ? 1 : -1;

        const handleScroll = () => {
            if (reverseOnScroll !== 'true') return;
            const scrollPos = window.scrollY;
            const directionFactor = scrollPos > 0 ? 1 : -1;
            scrollDirectionRef.current = directionFactor;
        };

        window.addEventListener('scroll', handleScroll);

        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollSpeed, direction]);

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }

        controls.set({
            x: `${xPercent}%`,
        });

        requestAnimationFrame(animate);
        xPercent += 0.1 * scrollDirectionRef.current * scrollSpeedRef.current;
    };

    return (
        <div className="infinite-scroll-text-container">
            <m.div className='slider-container'>
                <m.div ref={slider} className='slider' animate={controls}>
                    <m.p className={className} ref={firstText} style={{ fontSize }}>{children}</m.p>
                    <m.p className={className} ref={secondText} style={{ fontSize }}>{children}</m.p>
                </m.div>
            </m.div>
        </div>
    );
};

export default InfiniteScrollText;
