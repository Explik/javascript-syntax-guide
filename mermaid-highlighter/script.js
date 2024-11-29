mermaid.initialize({ startOnLoad: true });
setTimeout(() => highlightLabels(), 100); 

function highlightLabels() {
    const mermaidElements = document.querySelectorAll('.mermaid');
    const INIT_LABEL = 'INIT_LABEL';

    mermaidElements.forEach(element => {
        const labelElement = findLabeledElement(element, INIT_LABEL);
        if (labelElement) {
            // Do something with labelElement
            console.log('Label found:', labelElement);

            replaceLabelWithElement(element, INIT_LABEL, 'Init');
        }
    });
}

// Finds the deepest element with the given label (text)
function findLabeledElement(element, label) {
    let deepestElement = null;

    function search(element, depth) {
        if (element.innerText?.includes(label)) {
            if (!deepestElement || depth > deepestElement.depth) {
                deepestElement = { element, depth };
            }
        }
        for (let child of element.children) {
            search(child, depth + 1);
        }
    }

    search(element, 0);
    return deepestElement ? deepestElement.element : null;
}

function replaceLabelWithElement(element, label, humanReadableLabel) {
    const labelElement = findLabeledElement(element, label);
    if (labelElement) {
        const newLabelElement = document.createElement('span');
        newLabelElement.innerText = humanReadableLabel;
        newLabelElement.style.backgroundColor = '#ffcc00';
        newLabelElement.style.borderRadius = '5px';
        newLabelElement.style.padding = '0px 5px';
        newLabelElement.style.color = '#000';
        newLabelElement.style.fontWeight = 'bold';
        newLabelElement.style.display = 'inline-block';

        const labelRegex = new RegExp(label, 'g');
        labelElement.innerHTML = labelElement.innerHTML.replace(labelRegex, newLabelElement.outerHTML);
    }
}