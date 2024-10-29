class CharacterSplitter {
  constructor(selector, spaceLength = "0.5em", className = "") {
    this.elements = document.querySelectorAll(selector);
    this.spaceLength = spaceLength;
    this.className = className;
    this.splitText();
  }

  splitText() {
    this.elements.forEach((element) => {
      const childNodes = Array.from(element.childNodes);
      element.innerHTML = "";

      childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          this.splitTextNode(node, element);
        } else {
          element.appendChild(node);
        }
      });
    });
  }

  splitTextNode(textNode, parentElement) {
    const text = textNode.nodeValue;
    const splitTextArray = text.split("");

    splitTextArray.forEach((letter, index) => {
      if (letter === " ") {
        const spaceSpan = document.createElement("span");
        spaceSpan.style.width = this.spaceLength;
        spaceSpan.style.display = "inline-block";
        spaceSpan.innerHTML = "&nbsp;";
        parentElement.appendChild(spaceSpan);
      } else {
        const span = document.createElement("span");
        span.style.display = "inline-block";
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
