import { emit, load, on } from './utils.js';

on('v:src', async event => {
    const { source, src } = event.detail || {};
    if (!source || !src) return;

    const content = src.startsWith('#') ? clone(src) : await load(src);
    if (!content) return;

    source.replaceChildren(content);
    emit('app:load', { source, src, content });
});

function clone(selector) {
    const source = document.querySelector(selector);
    if (!source) return null;

    const clone = source.cloneNode(true);

    stripIds(clone);
    clone.hidden = false;

    return clone;
}

function stripIds(node) {
    node.removeAttribute('id');
    node.removeAttribute('aria-labelledby');
    node.querySelectorAll('[id], [aria-labelledby]').forEach(child => {
        child.removeAttribute('id');
        child.removeAttribute('aria-labelledby');
    });
}
