import React from 'react';
import { ReactLenis } from "lenis/react";

function SmoothScroll({ children }) {

    return (
        <ReactLenis root options={{
            smoothTouch: true, lerp: 0.07, gestureDirection: "vertical",
            smooth: true,
            touchMultiplier: 2,
        }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScroll;
