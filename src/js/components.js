export function setupComponents(componentName, ctx = document) {
    const initializer = COMPONENTS[componentName];

    if (!initializer) throw 'missing initializer for ' + componentName;
    q(componentName, ctx).forEach(el => {
        const configString = el.getAttribute(componentName);
        // better way to ducktype json?
        const config = configString.at(0) === '{'
            ? JSON.parse(configString)
            : configString;

        initializer(el, config);
        // clean up so multiple inits don't stack triggers.
        el.removeAttribute(componentName);
    })

    return true;
}

export const COMPONENTS = {
    '[data-clone]': function (el, config) {
        const [target] = q(el.getAttribute('data-clone'));

        if (!target) return;

        var clone = target.cloneNode(true);
        clone.removeAttribute('hidden');
        clone.id += '-clone';

        el.innerHTML = '';
        el.appendChild(clone);
    }
};