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