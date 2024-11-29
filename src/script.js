
function highlightLabels(containerElement) {
    const INIT_LABEL = 'INIT_LABEL';
    const CONDITION_LABEL = 'CONDITION_LABEL';
    const STATEMENT_LABEL_1 = 'STATEMENT_LABEL_1';
    const STATEMENT_LABEL_2 = 'STATEMENT_LABEL_2';
    const STATEMENT_LABEL_N = 'STATEMENT_LABEL_N';
    const INCREMENT_LABEL = 'INCREMENT_LABEL';

    containerElement.forEach(element => {
        const initLabelElement = findLabeledElement(element, INIT_LABEL);
        if (initLabelElement)
            replaceLabelWithElement(element, INIT_LABEL, { text: 'Init', backgroundColor: '#ff6666' });
        
        const conditionLabelElement = findLabeledElement(element, CONDITION_LABEL);
        if (conditionLabelElement)
            replaceLabelWithElement(element, CONDITION_LABEL, { text: 'Condition', backgroundColor: '#ff6666' });

        const statementLabelElement1 = findLabeledElement(element, STATEMENT_LABEL_1);
        if (statementLabelElement1)
            replaceLabelWithElement(element, STATEMENT_LABEL_1, { text: 'Statement 1', backgroundColor: '#66ff66' });

        const statementLabelElement2 = findLabeledElement(element, STATEMENT_LABEL_2);
        if (statementLabelElement2)
            replaceLabelWithElement(element, STATEMENT_LABEL_2, { text: 'Statement 2', backgroundColor: '#66ff66' });

        const statementLabelElementN = findLabeledElement(element, STATEMENT_LABEL_N);
        if (statementLabelElementN)
            replaceLabelWithElement(element, STATEMENT_LABEL_N, { text: '...', backgroundColor: '#00000000', fontWeight: undefined });

        const incrementLabelElement = findLabeledElement(element, INCREMENT_LABEL);
        if (incrementLabelElement)
            replaceLabelWithElement(element, INCREMENT_LABEL, { text: 'Increment', backgroundColor: '#ff6666' });
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

function replaceLabelWithElement(element, label, config) {
    const defaultConfig = { text: label, textColor: '#000', backgroundColor: '#fff', fontWeight: 'bold' };
    const effectiveConfig = { ...defaultConfig, ...config, }

    const labelElement = findLabeledElement(element, label);
    if (labelElement) {
        const newLabelElement = document.createElement('span');
        newLabelElement.innerText = effectiveConfig.text;
        newLabelElement.style.backgroundColor = effectiveConfig.backgroundColor;
        newLabelElement.style.borderRadius = '5px';
        newLabelElement.style.padding = '0px 5px';
        newLabelElement.style.color = effectiveConfig.textColor;
        if (effectiveConfig.fontWeight) 
            newLabelElement.style.fontWeight = effectiveConfig.fontWeight;
        newLabelElement.style.display = 'inline-block';

        const labelRegex = new RegExp(label, 'g');
        labelElement.innerHTML = labelElement.innerHTML.replace(labelRegex, newLabelElement.outerHTML);
    }
}