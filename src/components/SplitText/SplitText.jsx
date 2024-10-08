import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './SplitText.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const SplitText = ({ children }) => {
    const wrapperRef = useRef(null);

    const splitText = (text) => {
        return text.split(' ').map((word, index) => (
            <span
                key={index}
                className={`split-word ${word === 'Awwwards' ? 'gradient-text' : ''}`}
            >
                {word}&nbsp;
            </span>
        ));
    };

    useEffect(() => {
        const words = gsap.utils.toArray('.split-word');

        gsap.fromTo(
            words,
            {
                opacity: 0.2,
                scale: 0.8,
                rotation: 15,
                translateY: 10,
                duration: 1.4,
                ease: (x) => { return x === 1 ? 1 : 1 - Math.pow(2, -10 * x); },
            },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                translateY: 0,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: 'bottom 100%',
                    end: 'bottom 60%',
                    scrub: 1,
                    scroller: document.querySelector('.lenis'),
                },
                ease: (x) => { return x === 0 ? 0 : Math.pow(2, 10 * x - 10); }
            }
        );

        words.forEach((word) => {
            word.addEventListener('mouseenter', () => {
                gsap.to(word, {
                    scale: 1.1,
                    rotation: 5,
                    duration: 0.2,
                    opacity: 1,
                    ease: (x) => { return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2; },
                });
            });

            word.addEventListener('mouseleave', () => {
                gsap.to(word, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.2,
                    translateY: 0,
                    ease: (x) => { return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2; },
                });
            });
        });
    }, []);

    return (
        <div ref={wrapperRef} className="split-text-container">
            <p>{splitText(children.props.children)}</p>
        </div>
    );
};

export default SplitText;
