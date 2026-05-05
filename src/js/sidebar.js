import { on } from './utils.js';
import { set } from './vcomponent.js';

export default function(_el) {
    on('sidebar:toggle', () => set('sidebar:open', v => !v));
    on('sidebar:show',   () => set('sidebar:open', true));
}
