export const q = (s, ctx = document) => [...ctx.querySelectorAll(s)];

export function on(eventType, selector, handler, ctx = document) {
    if (typeof selector === 'function') {
        ctx.addEventListener(eventType, selector);
        return () => ctx.removeEventListener(eventType, selector);
    }

    const listener = event => {
        const target = event.target.closest?.(selector);
        if (!target || !ctx.contains(target)) return;
        event.delegateTarget = target;
        handler.call(target, event);
    };

    ctx.addEventListener(eventType, listener);
    return () => ctx.removeEventListener(eventType, listener);
}

export function emit(type, event, extra = {}) {
    const src = event instanceof Event
        ? (event.delegateTarget ?? event.currentTarget ?? event.target ?? document)
        : document;
    const detail = event instanceof Event
        ? { source: src, ...src?.dataset, ...extra }
        : event;
    return src.dispatchEvent(new CustomEvent(type, { bubbles: true, detail }));
}

export async function load(url) {
    const res = await fetch(`${url}?v=${Date.now()}`);
    const html = await res.text();
    return document.adoptNode(
        new DOMParser().parseFromString(html, 'text/html').body.firstElementChild
    );
}
