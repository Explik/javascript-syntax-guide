const labels = {
    INIT_LABEL: {
        text: 'Init',
        backgroundColor: '#ff6666'
    },
    CONDITION_LABEL: {
        text: 'Condition',
        backgroundColor: '#ff6666'
    },
    STATEMENT_LABEL_1: {
        text: 'Statement 1',
        backgroundColor: '#66ff66'
    },
    STATEMENT_LABEL_2: {
        text: 'Statement 2',
        backgroundColor: '#66ff66'
    },
    STATEMENT_LABEL_N: {
        text: '...',
        backgroundColor: '#00000000',
        fontWeight: undefined
    },
    INCREMENT_LABEL: {
        text: 'Increment',
        backgroundColor: '#ff6666'
    }
};

async function initializeAsync() {
    const preElement = document.querySelector('pre.markdown');
    await populateElement('content.md', preElement);

    const markdownElement = convertToMarkdownElement(preElement);
    setTimeout(() => highlightLabels(markdownElement), 100); // Wait for mermaid.js to render diagrams
}

async function populateElement(url, element) {
    const response = await fetch(url);
    const content = await response.text();

    element.innerHTML = content;
}

function convertToMarkdownElement(preElement) {
    // Render the markdown content to HTML
    //const md = window.markdownit({ highlight: highlightCode });
    const md = markdownit({
        html: true,
        highlight: function (str, lang) {
            switch (lang?.toLowerCase()) {
                case 'js': 
                case 'javascript':
                    return renderCode(str, 'javascript');
                case 'mermaid':
                    return renderDiagram(str);
                default: 
                    console.log("Unsupported langauge " + lang)
            }
            return ''; // use external default escaping
        }
    });
    const markdownText = preElement.textContent;
    const htmlContent = md.render(markdownText);

    // Replace the pre element with the rendered HTML content
    const renderedOutput = document.createElement('div');
    renderedOutput.innerHTML = htmlContent;
    preElement.replaceWith(renderedOutput);

    return renderedOutput;
}

function renderCode(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
        try {
            return hljs.highlight(str, { language: lang }).value;
        } catch (__) { }
    }
    return ''; // use external default escaping
}

function renderDiagram (code) {
    try {
      mermaid.parse(code);
      return `<div class="mermaid">${code}</div>`;
    } catch ({ str, hash }) {
      return `<pre>${str}</pre>`;
    }
}

function highlightLabels(element) {
    for(let label in labels) {
        const labelData = labels[label];
        const labeledElements = findLabeledElements(element, label);

        labeledElements.forEach(labeledElement => {
            replaceLabelWithElement(labeledElement, label, labelData);
        });
    }
}

// Finds the deepest elements with the given label (text)
function findLabeledElements(element, label) {
    let deepestElements = [];

    function search(element) {
        let foundInChildren = false;
        for (let child of element.children) {
            if (search(child)) {
                foundInChildren = true;
            }
        }
        if (!foundInChildren && element.innerText?.includes(label)) {
            deepestElements.push(element);
            return true;
        }
        return false;
    }

    search(element);
    return deepestElements;
}

// Replaces the label with a new element
function replaceLabelWithElement(labelElement, label, config) {
    if (!labelElement)
        throw new Error('labelElement is required');

    const defaultConfig = { text: label, textColor: '#000', backgroundColor: '#fff', fontWeight: 'bold' };

    const effectiveConfig = { ...defaultConfig, ...config, };
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