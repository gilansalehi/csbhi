(function () {
    var root = document.documentElement;

    function savedTheme() {
        try {
            return localStorage.getItem('theme');
        } catch (_) {
            return null;
        }
    }

    function prefersDark() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function setStoredTheme(theme) {
        try {
            localStorage.setItem('theme', theme);
        } catch (_) {}
    }

    function setTheme(dark) {
        root.setAttribute('data-theme', dark ? 'dark' : 'light');
    }

    function setBanner(dark) {
        var img = document.querySelector('#hero img');
        if (img) {
            img.src = 'images/banner' + (dark ? '-dark' : '') + '.png';
        }
    }

    function setButton(btn, dark) {
        btn.textContent = dark ? '☀' : '☽';
        btn.title = dark ? 'light' : 'dark';
        btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    function applyTheme(btn, dark, persist) {
        setTheme(dark);
        setButton(btn, dark);
        setBanner(dark);

        if (persist) {
            setStoredTheme(dark ? 'dark' : 'light');
        }
    }

    function initToggle() {
        var btn = document.getElementById('theme-toggle');
        var main = document.querySelector('main');
        var appFrame = document.querySelector('v-component') || document.querySelector('script[src$="main.js"]');

        if (!btn && main && !appFrame) {
            btn = document.createElement('button');
            btn.id = 'theme-toggle';
            btn.type = 'button';
            btn.classList.add('btn', 'btn-icon');
            main.appendChild(btn);
        }

        if (!btn) return;
        if (btn.dataset.themeReady) return;

        btn.type = 'button';
        btn.dataset.themeReady = 'true';

        var dark = root.getAttribute('data-theme') === 'dark';
        applyTheme(btn, dark, false);

        btn.addEventListener('click', function () {
            applyTheme(btn, root.getAttribute('data-theme') !== 'dark', true);
        });
    }

    var theme = savedTheme();
    setTheme(theme === 'dark' || (!theme && prefersDark()));

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initToggle);
    } else {
        initToggle();
    }

    document.addEventListener('app:load', initToggle);
}());
