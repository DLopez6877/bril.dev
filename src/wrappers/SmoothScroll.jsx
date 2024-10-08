import React, { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SmoothScroll({ children }) {
    const lenisRef = useRef();

    useEffect(() => {
        function update(time) {
            lenisRef.current?.lenis?.raf(time * 1000)
        }

        gsap.ticker.add(update)

        return () => {
            gsap.ticker.remove(update)
        }
    }, []);

    return (
        <ReactLenis ref={lenisRef} autoRaf={false} root options={{
            smoothTouch: true,
            lerp: 0.07,
            gestureDirection: "vertical",
            smooth: true,
            touchMultiplier: 2,
        }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScroll;
