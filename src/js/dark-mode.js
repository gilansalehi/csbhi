(function () {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    var btn  = document.getElementById('theme-toggle');
    var root = document.documentElement;

    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'theme-toggle';
        btn.type = "button";
        root.querySelector('main').appendChild(btn);
    }

    function applyTheme(dark) {
        root.setAttribute('data-theme', dark ? 'dark' : 'light');
        btn.textContent = dark ? '☀' : '☽';
        btn.title = dark ? 'light' : 'dark';
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }

    /* Initialise label to match whatever the pre-paint script set */
    applyTheme(root.getAttribute('data-theme') === 'dark');

    btn.addEventListener('click', function () {
        applyTheme(root.getAttribute('data-theme') !== 'dark');
    });
}());