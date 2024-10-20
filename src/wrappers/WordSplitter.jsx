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
                } else {
                    element.appendChild(node);
                }
            });
        });
    }

    splitTextNode(textNode, parentElement) {
        const text = textNode.nodeValue.trim();
        const splitTextArray = text.split(" ");

        splitTextArray.forEach((word, index) => {
            const span = document.createElement('span');
            span.style.display = 'inline-block';
            span.innerText = word;

            if (index < splitTextArray.length - 1) {
                span.style.marginRight = this.spaceLength;
            }

            if (this.className) {
                span.classList.add(this.className, index);
            }

            if (word === 'Awwwards') {
                span.classList.add('gradient');
            }

            parentElement.appendChild(span);
        });
    }
}

export default WordSplitter;
