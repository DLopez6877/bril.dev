import React from "react";

const TextSplitter = ({ text, className, spaceLength = '0.5em' }) => {
    return (
        <div className="text-splitter-wrapper">
            <p className="animated-text">
                {text.split("").map((letter, index) => (
                    letter === " " ? (
                        <span key={index} style={{ display: "inline-block", width: spaceLength }}>
                            &nbsp;
                        </span>
                    ) : (
                        <span key={index} className={className}>
                            {letter}
                        </span>
                    )
                ))}
            </p>
        </div>
    );
};

export default TextSplitter;


// const [scrollerHeight, setScrollerHeight] = useState(0);


// useEffect(() => {

//     const letters = gsap.utils.toArray(scrollRef.current.querySelectorAll(".upward-letter"));
//     if (!letters.length) return;
//     const stickyTarget = stickyRef.current;

//     const numberOfLetters = text.split("").filter((x) => x !== " ").length;
//     // setScrollerHeight(numberOfLetters * 100)


//     const letterOrders = letters.map((_, i) => {
//         const half = Math.floor(letters.length / 2);
//         return i % 2 === 0 ? half - Math.floor(i / 2) : half + Math.floor(i / 2) + 1;
//     }).filter(order => order >= 0 && order < letters.length);

//     // letters.forEach((letter, i) => {
//     //     gsap.set(letter, { y: `${(letterOrders[i] * 200) + window.innerHeight}px` });
//     // });

//     // ScrollTrigger.refresh();

//     // const scrollTrigger = ScrollTrigger.create({
//     //     trigger: scrollRef.current,
//     //     start: `top+=${index * 100} bottom`,
//     //     end: () => `${container.offsetHeight - window.innerHeight}px`,
//     //     pin: bgImg,
//     //     pinSpacing: true,
//     //     scrub: 1,
//     // });

//     // return () => {
//     //     scrollTrigger.kill();
//     // };

//     // letterOrders.forEach((order, index) => {
//     //     gsap.to(letters[order], {
//     //         scrollTrigger: {
//     //             trigger: scrollRef.current,
//     //             start: `top center`,
//     //             // end: () => `${stickyTarget.offsetHeight - window.innerHeight}px`,
//     //             // end: `bottom bottom`,
//     //             end: 'top top',
//     //             // pin: stickyRef.current,
//     //             // pinSpacing: false,
//     //             // scrub: true,

//     //             // start: `top+=${index * 100} bottom`,
//     //             // endTrigger: stickyRef.current,
//     //             // end: 'top top',
//     //             // scrub: true,
//     //             // pin: stickyRef.current,

//     //             // onEnter: () => console.log(`${order === 1 ? 'zz Entering letter at index: ' + order : ''}`, 'letter: ', letters[order]),
//     //             // onLeave: () => console.log(`${order === 1 ? 'zz Leaving letter at index: ' + order : ''}`, 'letter: ', letters[order]),
//     //             // onUpdate: (self) => console.log(`${order === 1 ? 'zz Progress: ' + order : ''}`, 'letter: ', letters[order]),
//     //         },
//     //         y: 0,
//     //         delay: index * 0.2,
//     //         duration: 0.5,
//     //     });
//     // });
// }, []);