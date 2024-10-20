class CharacterSplitter {
    constructor(selector, spaceLength = '0.5em', className = '') {
        this.elements = document.querySelectorAll(selector);
        this.spaceLength = spaceLength;
        this.className = className;
        this.splitText();
    }

    splitText() {
        this.elements.forEach(element => {
            const childNodes = Array.from(element.childNodes);
            element.innerHTML = ''; // Clear the element to append split content later

            childNodes.forEach(node => {
                // If the node is a text node, split the text
                if (node.nodeType === Node.TEXT_NODE) {
                    this.splitTextNode(node, element);
                }
                // If the node is an HTML element, like a <span> or any other, append it as-is
                else {
                    element.appendChild(node);
                }
            });
        });
    }

    splitTextNode(textNode, parentElement) {
        const text = textNode.nodeValue; // Get the text content from the text node
        const splitTextArray = text.split(""); // Split the text into individual characters

        splitTextArray.forEach((letter, index) => {
            if (letter === " ") {
                const spaceSpan = document.createElement('span');
                spaceSpan.style.width = this.spaceLength;
                spaceSpan.style.display = 'inline-block';
                spaceSpan.innerHTML = '&nbsp;';
                parentElement.appendChild(spaceSpan);
            } else {
                const span = document.createElement('span');
                span.style.display = 'inline-block';
                span.innerText = letter;
                if (this.className) {
                    span.classList.add(this.className, index);
                }
                parentElement.appendChild(span);
            }
        });
    }
}

export default CharacterSplitter;
