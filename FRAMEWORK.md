# V-Component Framework

Reactive HTML via customized built-in elements. One import, no build step.

`set(key, value)` dispatches a native `CustomEvent`. Any HTML element registered as a customized built-in automatically receives updates for its state key.

> **Browser support**: Chrome and Firefox natively. Safari requires a customized built-in polyfill (e.g. `@ungap/custom-elements`).

---

## Import

```js
import { set, get, Reactive } from './src/js/vcomponent.js';
```

Importing registers every `v-*` element. Nothing else needed.

---

## State

```js
set('post:title', 'Hello World');    // write — dispatches CustomEvent('post:title')
set('app:count', n => n + 1);        // write with updater fn
get('app:count');                    // read current value synchronously
```

`e.detail` on any listener is the new value directly:

```js
document.addEventListener('post:title', e => console.log(e.detail));
```

---

## Reactive elements

Every standard HTML element has a `v-*` counterpart registered as a customized built-in. The element keeps all its native semantics and gains reactive state binding.

**Declare the state key in the element's text content:**

```html
<h1 is="v-h1">page:title</h1>
<p is="v-p">post:summary</p>
<span is="v-span">app:username</span>
<em is="v-em">post:category</em>
<code is="v-code">app:version</code>
```

On connect, the text content is read as the state key, cleared, and replaced with the live value.

**For void elements, use `data-key`:**

```html
<img is="v-img" alt="Hero" data-key="hero:src">
<input is="v-input" type="range" data-key="player:volume">
<meter is="v-meter" min="0" max="100" data-key="upload:progress">
<meta is="v-meta" name="description" data-key="page:description">
```

---

## Registered elements

| Group | Elements |
|---|---|
| Inline | `v-span` `v-em` `v-strong` `v-small` `v-s` `v-b` `v-i` `v-u` `v-mark` `v-cite` `v-abbr` `v-code` `v-kbd` `v-samp` `v-var` `v-dfn` `v-sub` `v-sup` `v-q` |
| Block | `v-div` `v-p` `v-h1`–`v-h6` `v-blockquote` `v-pre` `v-li` `v-dt` `v-dd` `v-figcaption` `v-summary` `v-caption` `v-td` `v-th` `v-label` `v-button` `v-section` `v-article` `v-header` `v-footer` `v-aside` |
| Semantic | `v-a` (updates `href` + text) · `v-time` (updates `datetime` + locale string) |
| Void | `v-img` `v-input` `v-meter` `v-progress` `v-meta` |

---

## Extending with `Reactive`

`Reactive(Base)` is the exported mixin. Extend any built-in and override `update(value)` to map state onto native element properties:

```js
import { Reactive } from './src/js/vcomponent.js';

customElements.define('v-output', class extends Reactive(HTMLOutputElement) {
    update(v) { this.value = v ?? ''; }
}, { extends: 'output' });

customElements.define('v-select', class extends Reactive(HTMLSelectElement) {
    update(v) { this.value = v ?? ''; }
}, { extends: 'select' });
```

The mixin handles: key resolution, listener setup, initial render, and cleanup on disconnect.

---

## `<v-component>` — fragment loader

An autonomous custom element that signals intent to load external HTML:

```html
<v-component data-src="nav.html"></v-component>
```

Dispatches a `v:src` event on connect. Handle it in app code:

```js
import { load } from './src/js/utils.js';

document.addEventListener('v:src', async e => {
    const el = await load(e.detail.src);
    e.target.replaceChildren(el);
});
```

---

## DOM utilities (`utils.js`)

```js
import { q, on, emit, load } from './src/js/utils.js';

q('.item')                           // querySelectorAll → array
q('.item', parentEl)                 // scoped

on('click', '.btn', function(e) {})  // delegated; this === matched element
on('click', e => {})                 // direct on document
on('resize', handler, window)        // any EventTarget; all forms return unsub fn

emit('nav:open', event)              // CustomEvent from event's source element
emit('nav:open', { foo: 'bar' })     // CustomEvent from document

const el = await load('/nav.html')   // fetch HTML → body.firstElementChild
```
