import { q, on, load, init } from './utils.js';

const app = async () => {
    const [container] = q('main');
    const callback = init;

    on('init:modules', '', function () {
        console.log('init:modules')
        init();
    });

    const response = await load('/layout.html', { container, callback });

    // App header event listeners:
    on('click', '[data-action="sidebar:open"]', function (event) {
        const [$sidebar] = q('dialog#page-sidebar');
        if ($sidebar) { $sidebar.show() }
    })

    on('click', '[data-action="sidebar:close"]', function (event) {
        const [$sidebar] = q('dialog#page-sidebar');
        if ($sidebar) { $sidebar.close() }
    })

    on('click', '[data-action="sidebar:toggle"]', function (event) {
        const [$sidebar] = q('dialog#page-sidebar');
        if ($sidebar) {
            $sidebar.open ? $sidebar.close() : $sidebar.show()
        } else {
            console.warn('couldnt find sidebar');
        }
    })

    const appLoaded = new CustomEvent('app:load');
    container.dispatchEvent(appLoaded);
    console.info('appLoaded', response);

    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    app();
});