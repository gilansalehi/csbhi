(function () {
    function initToggle(button) {
        var target = document.getElementById(button.getAttribute('aria-controls'));
        var className = button.dataset.toggleClass;

        if (!target || !className) return;

        button.addEventListener('click', function () {
            var active = target.classList.toggle(className);
            button.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
    }

    function init() {
        document.querySelectorAll('[data-toggle-class][aria-controls]').forEach(initToggle);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}());
