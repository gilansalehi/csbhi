const _state = new Map();

export function set(key, next) {
    const value = typeof next === 'function' ? next(_state.get(key)) : next;
    _state.set(key, value);
    document.dispatchEvent(new CustomEvent(key, { detail: value }));
}

export function get(key) {
    return _state.get(key);
}

export const Reactive = (Base) => class extends Base {
    connectedCallback() {
        super.connectedCallback?.();
        const fromContent = !this.dataset.key;
        const key = this.dataset.key || this.textContent.trim();
        if (!key) return;
        if (fromContent) this.textContent = '';
        const handler = e => this.update(e.detail);
        document.addEventListener(key, handler);
        this._vCleanup = () => document.removeEventListener(key, handler);
        if (_state.has(key)) this.update(_state.get(key));
    }
    disconnectedCallback() {
        super.disconnectedCallback?.();
        this._vCleanup?.();
    }
    update(value) { this.textContent = value ?? ''; }
};

const tag = t => document.createElement(t).constructor;

for (const t of [
    'span', 'em', 'strong', 'small', 's', 'b', 'i', 'u',
    'mark', 'cite', 'abbr', 'code', 'kbd', 'samp', 'var', 'dfn', 'sub', 'sup', 'q',
    'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'blockquote', 'pre', 'li', 'dt', 'dd', 'figcaption', 'summary',
    'caption', 'td', 'th', 'label', 'button',
    'section', 'article', 'header', 'footer', 'aside',
]) customElements.define(`v-${t}`, class extends Reactive(tag(t)) {}, { extends: t });

// Semantic overrides
customElements.define('v-a', class extends Reactive(HTMLAnchorElement) {
    update(v) { this.href = v ?? ''; this.textContent = v?.replace(/^https?:\/\//, '') ?? ''; }
}, { extends: 'a' });

customElements.define('v-time', class extends Reactive(HTMLTimeElement) {
    update(v) {
        this.dateTime = v ?? '';
        const d = new Date(v);
        this.textContent = isNaN(d) ? v ?? ''
            : d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
}, { extends: 'time' });

// Interactive: state drives open/closed; native close syncs state back
customElements.define('v-dialog', class extends Reactive(HTMLDialogElement) {
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('close', () => set(this.dataset.key, false));
    }
    update(v) { v ? this.show() : this.close(); }
}, { extends: 'dialog' });

customElements.define('v-details', class extends Reactive(HTMLDetailsElement) {
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('toggle', () => set(this.dataset.key, this.open));
    }
    update(v) { this.open = Boolean(v); }
}, { extends: 'details' });

// Void elements — key via data-key
customElements.define('v-img',      class extends Reactive(HTMLImageElement)    { update(v) { this.src = v ?? ''; } },          { extends: 'img' });
customElements.define('v-input',    class extends Reactive(HTMLInputElement)    { update(v) { this.value = v ?? ''; } },         { extends: 'input' });
customElements.define('v-meter',    class extends Reactive(HTMLMeterElement)    { update(v) { this.value = Number(v) || 0; } },  { extends: 'meter' });
customElements.define('v-progress', class extends Reactive(HTMLProgressElement) { update(v) { this.value = Number(v) || 0; } },  { extends: 'progress' });
customElements.define('v-meta',     class extends Reactive(HTMLMetaElement)     { update(v) { this.content = v ?? ''; } },       { extends: 'meta' });

// Autonomous: scope boundary, fragment loader, module runner
if (!customElements.get('v-component')) {
    customElements.define('v-component', class extends HTMLElement {
        async connectedCallback() {
            const { src: htmlSrc } = this.dataset;
            if (htmlSrc) {
                if (htmlSrc.startsWith('#')) {
                    const ref = document.querySelector(htmlSrc);
                    if (ref) this.appendChild(ref.cloneNode(true));
                } else {
                    const res = await fetch(htmlSrc);
                    const html = await res.text();
                    const el = document.adoptNode(
                        new DOMParser().parseFromString(html, 'text/html').body.firstElementChild
                    );
                    if (el) this.appendChild(el);
                }
            }

            const jsSrc = this.getAttribute('src');
            if (jsSrc) {
                const mod = await import(new URL(jsSrc, document.baseURI).href);
                if (typeof mod.default === 'function') mod.default(this);
            }
        }
    });
}
