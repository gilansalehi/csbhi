(function () {
    var sidebarRoot;

    function getSidebarRoot(anchor) {
        if (sidebarRoot) return sidebarRoot;

        sidebarRoot = document.getElementById('sidebar-root');

        if (!sidebarRoot) {
            sidebarRoot = document.createElement('aside');
            sidebarRoot.id = 'sidebar-root';
            sidebarRoot.className = 'sidebar-root';
            sidebarRoot.setAttribute('aria-label', 'Sidebar');
            sidebarRoot.hidden = true;
        }

        if (!sidebarRoot.parentNode) {
            if (anchor && anchor.parentNode) {
                anchor.parentNode.insertBefore(sidebarRoot, anchor);
            } else {
                document.body.appendChild(sidebarRoot);
            }
        }

        return sidebarRoot;
    }

    function rememberPosition(target) {
        if (target._sidebarState) return target._sidebarState;

        var placeholder = document.createComment('sidebar placeholder: ' + target.id);
        target.parentNode.insertBefore(placeholder, target);

        target._sidebarState = {
            placeholder: placeholder,
            hiddenByDefault: target.hasAttribute('hidden')
        };

        return target._sidebarState;
    }

    function restorePosition(target, state) {
        state.placeholder.parentNode.insertBefore(target, state.placeholder.nextSibling);
        target.hidden = state.hiddenByDefault;
    }

    function syncRoot(root) {
        var firstPanel = root.firstElementChild;

        root.hidden = !firstPanel;

        if (firstPanel && firstPanel._sidebarState && firstPanel._sidebarState.placeholder.parentNode) {
            firstPanel._sidebarState.placeholder.parentNode.insertBefore(root, firstPanel._sidebarState.placeholder);
        }
    }

    function initToggle(button) {
        var target = document.getElementById(button.getAttribute('aria-controls'));
        var className = button.dataset.toggleClass;

        if (!target || !className) return;

        button.addEventListener('click', function () {
            var state = rememberPosition(target);
            var root = getSidebarRoot(state.placeholder);
            var active = !target.classList.contains(className);

            if (active) {
                target.hidden = false;
                target.classList.add(className);
                root.appendChild(target);
            } else {
                target.classList.remove(className);
                restorePosition(target, state);
            }

            syncRoot(root);
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
