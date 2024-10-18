import React, { useRef, useLayoutEffect } from 'react';
import './InfiniteScrollText.scss';
import gsap from 'gsap';


const InfiniteScrollText = ({ children, className, direction = 'left', scrollSpeed = 1 }) => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let scrollDirection = direction === 'right' ? 1 : -1;

    useLayoutEffect(() => {
        gsap.to(slider.current, {
            x: "-500px",
        })
        requestAnimationFrame(animate);
    }, [scrollSpeed, direction, className])

    const animate = () => {
        if (!firstText.current || !secondText.current) return;
        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        xPercent += 0.1 * scrollDirection * scrollSpeed;
        gsap.set(firstText.current, { xPercent: xPercent })
        gsap.set(secondText.current, { xPercent: xPercent })
        requestAnimationFrame(animate);
    }

    return (
        <div className="infinite-scroll-text-container">
            <div className='slider-container'>
                <div ref={slider} className='slider'>
                    <p className={className} ref={firstText} >{children}</p>
                    <p className={className} ref={secondText} >{children}</p>
                </div>
            </div>
        </div>
    );
};

export default InfiniteScrollText;
