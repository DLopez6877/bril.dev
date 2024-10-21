class WordSplitter {
    constructor(selector, spaceLength = '0.5em', className = '') {
        this.elements = document.querySelectorAll(selector);
        this.spaceLength = spaceLength;
        this.className = className;
        this.splitText();
    }

    splitText() {
        this.elements.forEach(element => {
            const childNodes = Array.from(element.childNodes);
            element.innerHTML = '';
            childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    this.splitTextNode(node, element);
                }
                else if (node.nodeType === Node.ELEMENT_NODE) {
                    const wrapperSpan = document.createElement('span');
                    wrapperSpan.style.display = 'inline-block';
                    wrapperSpan.appendChild(node.cloneNode(true));
                    if (this.className) wrapperSpan.classList.add(this.className);
                    element.appendChild(wrapperSpan);
                }
            });
        });
    }

    splitTextNode(textNode, parentElement) {
        const words = textNode.nodeValue.split(' ');
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.style.display = 'inline-block';
            span.innerText = word;

            if (this.className) span.classList.add(this.className);

            parentElement.appendChild(span);

            if (index < words.length - 1) {
                const space = document.createTextNode(' ');
                parentElement.appendChild(space);
            }

            if (word === 'Awwwards') {
                span.classList.add('gradient');
            }
        });
    }
}

export default WordSplitter;
