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
    md.use(markdownitContainer, 'columns', {
        render(tokens, idx) {
            if (tokens[idx].nesting === 1) {
                return '<div class="columns">\n';
            } else {
                return '</div>\n';
            }
        },
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

function renderDiagram(code) {
    try {
        mermaid.parse(code);
        return `<div class="mermaid">${code}</div>`;
    } catch ({ str, hash }) {
        return `<pre>${str}</pre>`;
    }
}

function highlightLabels(element) {
    const labels = generateLabels();
    const sortedLabelKeys = Object.keys(labels).sort((a, b) => b.length - a.length);

    for (let label of sortedLabelKeys) {
        const labelData = labels[label];
        const labeledElements = findLabeledElements(element, label);

        labeledElements.forEach(labeledElement => {
            replaceLabelWithElement(labeledElement, label, labelData);
        });
    }
}

function generateLabels() {
    const valueLabels = {
        VALUE_LABEL: {
            text: 'Value',
        },
        VALUE_LABEL_1: {
            text: 'Value 1',
        },
        VALUE_LABEL_2: {
            text: 'Value 2',
        },
        VALUE_LABEL_3: {
            text: 'Value 3',
        },
        VALUE_LABEL_N: {
            text: '...',
            backgroundColor: '#00000000',
        },
        INITIAL_VALUE_LABEL: {
            text: 'Initial Value',
        },
        NEW_VALUE_LABEL: {
            text: 'New Value',
        },
        INDEX_VALUE_LABEL: {
            text: 'Index',
        },
        RETURN_VALUE_LABEL: {
            text: 'Return Value',
        },
        ARGUMENT_LABEL: {
            text: 'Argument',
        },
        ARGUMENT_LABEL_1: {
            text: 'Argument 1',
        },
        ARGUMENT_LABEL_2: {
            text: 'Argument 2',
        },
        ARGUMENT_LABEL_N: {
            text: '...',
            backgroundColor: '#00000000',
        },
        ARGUMENT_LABEL_A1: {
            text: 'Argument A1',
        },
        ARGUMENT_LABEL_A2: {
            text: 'Argument A2',
        },
        ARGUMENT_LABEL_AN: {
            text: '...',
            backgroundColor: '#00000000',
        },
        ARGUMENT_LABEL_B1: {
            text: 'Argument B1',
        },
        ARGUMENT_LABEL_B2: {
            text: 'Argument B2',
        },
        ARGUMENT_LABEL_BN: {
            text: '...',
            backgroundColor: '#00000000',
        },
    };
    for (let l in valueLabels) {
        valueLabels[l].backgroundColor ||= '#ff6666';
    }

    const statementLabels = {
        STATEMENT_LABEL: {
            text: 'Statement',
        },
        STATEMENT_LABEL_1: {
            text: 'Statement 1',
        },
        STATEMENT_LABEL_2: {
            text: 'Statement 2',
        },
        STATEMENT_LABEL_N: {
            text: '...',
            backgroundColor: '#00000000',
            fontWeight: undefined
        },
        STATEMENT_LABEL_A: {
            text: 'Statement A',
        },
        STATEMENT_LABEL_A1: {
            text: 'Statement A1',
        },
        STATEMENT_LABEL_A2: {
            text: 'Statement A2',
        },
        STATEMENT_LABEL_AN: {
            text: '...',
            backgroundColor: '#00000000',
            fontWeight: undefined
        },
        STATEMENT_LABEL_B: {
            text: 'Statement B',
        },
        STATEMENT_LABEL_B1: {
            text: 'Statement B1',
        },
        STATEMENT_LABEL_B2: {
            text: 'Statement B2',
        },
        STATEMENT_LABEL_BN: {
            text: '...',
            backgroundColor: '#00000000',
            fontWeight: undefined
        },
        STATEMENT_LABEL_C: {
            text: 'Statement C',
        },
        STATEMENT_LABEL_C1: {
            text: 'Statement C1',
        },
        STATEMENT_LABEL_C2: {
            text: 'Statement C2',
        },
        STATEMENT_LABEL_CN: {
            text: '...',
            backgroundColor: '#00000000',
            fontWeight: undefined
        },
        STATEMENT_LABEL_D: {
            text: 'Statement D',
        },
        STATEMENT_LABEL_D1: {
            text: 'Statement D1',
        },
        STATEMENT_LABEL_D2: {
            text: 'Statement D2',
        },
        STATEMENT_LABEL_DN: {
            text: '...',
            backgroundColor: '#00000000',
            fontWeight: undefined
        },
        STATEMENT_LABEL_E: {
            text: 'Statement E',
        },
        STATEMENT_LABEL_E1: {
            text: 'Statement E1',
        },
        STATEMENT_LABEL_E2: {
            text: 'Statement E2',
        },
        STATEMENT_LABEL_EN: {
            text: '...',
            backgroundColor: '#00000000',
            fontWeight: undefined
        },
    };
    for (let l in statementLabels) {
        statementLabels[l].backgroundColor ||= '#66ff66';
    }

    const controlStructureLabels = {
        CONDITION_LABEL: { text: 'Condition' },
        CONDITION_LABEL_A: { text: 'Condition A' },
        CONDITION_LABEL_B: { text: 'Condition B' },
        CONDITION_LABEL_C: { text: 'Condition C' },
        CONDITION_LABEL_D: { text: 'Condition D' },
        CASE_LABEL_A: { text: 'Case A' },
        CASE_LABEL_B: { text: 'Case B' },
        INIT_LABEL: { text: 'Init' },
        INCREMENT_LABEL: { text: 'Increment' },
    };
    for (let l in controlStructureLabels) {
        controlStructureLabels[l].backgroundColor ||= '#aaaaff';
    }

    const functionLabels = {
        PARAMETER_LABEL: { text: 'Parameter' },
        PARAMETER_LABEL_1: { text: 'Parameter 1' },
        PARAMETER_LABEL_2: { text: 'Parameter 2' },
        PARAMETER_LABEL_N: { text: '...', backgroundColor: '#00000000', fontWeight: undefined },
    };
    for (let l in functionLabels) {
        functionLabels[l].backgroundColor ||= '#ffcc00';
    }

    const specialLabels = {
        ELIPSIS_LABEL: {
            text: '...',
            backgroundColor: '#00000000',
            fontWeight: undefined
        }
    }

    return { ...valueLabels, ...statementLabels, ...controlStructureLabels, ...functionLabels, ...specialLabels }
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