export const q = (s, ctx = document) => [...ctx.querySelectorAll(s)];

export const on = function (eventType, delegateSelector, callback, $container = document) {
    $container.addEventListener(eventType, event => {
        const delegateTarget = [
            ...$container.querySelectorAll(delegateSelector)
        ].filter(el => el.contains(event.target))[0];

        if (delegateTarget) {
            event.delegateTarget = delegateTarget;
            callback.bind(delegateTarget)(event);
        }
    });
}

export const emit = function (eventType = '', ctx = document) {
    return ctx.dispatchEvent(new CustomEvent(eventType));
};

export const init = () => {
    // TODO: add more modules, abstract/generalize with setupComponents?
    q('[data-clone]').forEach(function (el) {
        const [target] = q(el.getAttribute('data-clone'));

        if (!target) return;

        var clone = target.cloneNode(true);
        clone.removeAttribute('hidden');
        clone.id += '-clone';

        el.innerHTML = '';
        el.appendChild(clone);
        el.removeAttribute('data-clone');
    });
}

export const setupComponents = (componentName, ctx = document) => {
    q(componentName, ctx).forEach(el => {
        const configString = el.getAttribute(componentName);
        // better way to ducktype json?
        const config = configString.at(0) === '{'
            ? JSON.parse(configString)
            : configString;

        // clean up so multiple inits don't stack triggers.
        el.removeAttribute(componentName);
    })
}
// function _on(eventName, ...options) {
//   var delegate = options.find(x => typeof x === 'string'); // delegateTarget
//   var callback = options.find(x => typeof x === 'function'); // middleware
//   var container = options.find(x => x instanceof Node) || document; // document
//   on(eventName, delegate, callback, container);
// };

export const g = function (selector, nodeProps = {}, children = [], ctx = document) {
    let node = ctx.querySelector(selector);
    if (!node) {
        let { nodeType, nodeId, nodeClass } = _parseSelectorString(selector);
        node = document.createElement(nodeType);
        if (nodeId) { node.id = nodeId; }
        node.classList.add(...nodeClass);

        Object.entries(nodeProps).forEach(([prop, value]) => {
            node[_propMap(prop)] = value;
        });

        for (let child of children) {
            node.appendChild(child);
        }
    } else {
        Object.entries(nodeProps).forEach(([prop, value]) => {
            node[_propMap(prop)] = value;
        });

        for (let child of children) {
            console.log('what now? ', child);
        }
    }

    return node;
}

export async function load(url, { container = document, callback = false }) {
    return fetch(url + '?q=' + Math.random()).then(function (response) {
        return response.text();
    }).then(function (htmlString) {
        var parser = new DOMParser();
        var html = parser.parseFromString(htmlString, 'text/html');
        let contents = document.adoptNode(html.body.firstChild);
        if (container) { container.appendChild(contents); }
        if (callback) { callback() }
        return contents;
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
    });
}

// export function log(data, targets) {
//     console.info(data);
// }

export const setupModules = modList => modList.forEach(setup => setup());

function _parseSelectorString(str) {
    let [str2, ...nodeClass] = str.split('.');
    let [nodeType, nodeId] = str2.split('#');

    return {
        nodeType,
        nodeId,
        nodeClass
    }
}

function _propMap(prop) {
    const propMap = {
        text: 'textContent',
        class: 'classList',
    };
    return propMap[prop] || prop;
}
