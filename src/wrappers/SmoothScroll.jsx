import React, { useEffect } from 'react';
import { Lenis, useLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

function SmoothScroll({ children }) {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;

        function update() {
            ScrollTrigger.update();
        }

        lenis.on('scroll', update);

        return () => {
            lenis.off('scroll', update);
        };
    }, [lenis]);

    return (
        <Lenis
            root
            options={{
                smoothTouch: true,
                lerp: 0.1,
                gestureDirection: "vertical",
                smooth: true,
                touchMultiplier: 1.5,
            }}>
            {children}
        </Lenis>
    );
}

export default SmoothScroll;
