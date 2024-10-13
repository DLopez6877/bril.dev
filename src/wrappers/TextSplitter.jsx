class TextSplitter {
    constructor(selector, spaceLength = '0.5em', className = '') {
        this.elements = document.querySelectorAll(selector);
        this.spaceLength = spaceLength;
        this.className = className;
        this.splitText();
    }

    splitText() {
        this.elements.forEach(element => {
            const text = element.innerText;
            const splitTextArray = text.split("");

            element.innerHTML = '';

            splitTextArray.forEach((letter, index) => {
                if (letter === " ") {
                    const spaceSpan = document.createElement('span');
                    spaceSpan.style.width = this.spaceLength;
                    spaceSpan.style.display = 'inline-block';
                    spaceSpan.innerHTML = '&nbsp;';
                    element.appendChild(spaceSpan);
                } else {
                    const span = document.createElement('span');
                    span.style.display = 'inline-block';
                    span.innerText = letter;
                    if (this.className) { span.classList.add(this.className, index); }
                    element.appendChild(span);
                }
            });
        });
    }
}

export default TextSplitter;


// const letters = gsap.utils.toArray(scrollRef.current.querySelectorAll(".upward-letter"));
// if (!letters.length) return;
// const stickyTarget = stickyRef.current;

// const numberOfLetters = text.split("").filter((x) => x !== " ").length;
// setScrollerHeight(numberOfLetters * 100)


// const letterOrders = letters.map((_, i) => {
//     const half = Math.floor(letters.length / 2);
//     return i % 2 === 0 ? half - Math.floor(i / 2) : half + Math.floor(i / 2) + 1;
// }).filter(order => order >= 0 && order < letters.length);

// letters.forEach((letter, i) => {
//     gsap.set(letter, { y: `${(letterOrders[i] * 200) + window.innerHeight}px` });
// });

// ScrollTrigger.refresh();

// const scrollTrigger = ScrollTrigger.create({
//     trigger: scrollRef.current,
//     start: `top+=${index * 100} bottom`,
//     end: () => `${container.offsetHeight - window.innerHeight}px`,
//     pin: bgImg,
//     pinSpacing: true,
//     scrub: 1,
// });

// return () => {
//     scrollTrigger.kill();
// };

// letterOrders.forEach((order, index) => {
//     gsap.to(letters[order], {
//         scrollTrigger: {
//         },
//         y: 0,
//         delay: index * 0.2,
//         duration: 0.5,
//     });
// });
// }, []);