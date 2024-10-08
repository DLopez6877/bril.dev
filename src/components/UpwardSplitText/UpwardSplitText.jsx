import React, { useRef, useEffect } from 'react';
import './UpwardSplitText.scss'
import { gsap } from 'gsap';

const UpwardSplitText = ({ children }) => {
    const wrapperRef = useRef(null);

    const upwardSplitText = (text) => {
        return text.split(' ').map((word, index) => (
            <span
                key={index}
                className='upward-split-word'
            >
                {word}&nbsp;
            </span>
        ));
    };

    useEffect(() => {
        const words = gsap.utils.toArray('.upward-split-word');

        gsap.fromTo(
            words,
            {
                translateY: 100,
                duration: 1.4,
                ease: (x) => { return x === 1 ? 1 : 1 - Math.pow(2, -10 * x); },
            },
            {
                translateY: 0,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: 'bottom 100%',
                    end: 'bottom 60%',
                    scrub: 1,
                    scroller: document.querySelector('.lenis'),
                },
                ease: (x) => { return x === 1 ? 1 : 1 - Math.pow(2, -10 * x); }
            }
        );
    }, []);

    return (
        <div ref={wrapperRef} className="upward-split-text-container">
            <p>{upwardSplitText(children.props.children)}</p>
        </div>
    );
};

export default UpwardSplitText;