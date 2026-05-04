(function () {
    function getTarget(selector) {
        if (!selector) return null;

        try {
            return document.querySelector(selector);
        } catch (error) {
            return document.getElementById(selector);
        }
    }

    function stripCloneIds(clone) {
        clone.removeAttribute('id');
        clone.removeAttribute('aria-labelledby');

        clone.querySelectorAll('[id]').forEach(function (element) {
            element.removeAttribute('id');
        });

        clone.querySelectorAll('[aria-labelledby]').forEach(function (element) {
            element.removeAttribute('aria-labelledby');
        });
    }

    function cloneContent() {
        document.querySelectorAll('[data-clone]').forEach(function (host) {
            var source = getTarget(host.getAttribute('data-clone'));

            if (!source) return;

            var clone = source.cloneNode(true);
            clone.removeAttribute('hidden');
            stripCloneIds(clone);

            host.innerHTML = '';
            host.appendChild(clone);
        });
    }

    function setExpanded(dialog, expanded) {
        document.querySelectorAll('[data-dialog-open]').forEach(function (button) {
            if (button.getAttribute('aria-controls') === dialog.id) {
                button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            }
        });
    }

    function openDialog(dialog) {
        if (!dialog.open) {
            if (typeof dialog.show === 'function') {
                dialog.show();
            } else {
                dialog.setAttribute('open', '');
            }
        }

        setExpanded(dialog, true);

        var closeButton = dialog.querySelector('button[value="close"]');
        if (closeButton) closeButton.focus();
    }

    function closeDialog(dialog) {
        if (!dialog.open) return;

        if (typeof dialog.close === 'function') {
            dialog.close();
        } else {
            dialog.removeAttribute('open');
            setExpanded(dialog, false);
        }
    }

    function initDialogs() {
        document.querySelectorAll('[data-dialog-open]').forEach(function (button) {
            var dialog = getTarget(button.getAttribute('data-dialog-open'));

            if (!dialog) return;

            button.addEventListener('click', function () {
                if (dialog.open) {
                    closeDialog(dialog);
                } else {
                    openDialog(dialog);
                }
            });
        });

        document.querySelectorAll('dialog').forEach(function (dialog) {
            dialog.addEventListener('close', function () {
                setExpanded(dialog, false);
            });

            dialog.addEventListener('click', function (event) {
                if (!event.target || typeof event.target.closest !== 'function') return;

                var link = event.target.closest('a[href^="#"]');
                if (link) closeDialog(dialog);
            });
        });

        document.addEventListener('keydown', function (event) {
            if (event.key !== 'Escape') return;

            document.querySelectorAll('dialog[open]').forEach(closeDialog);
        });
    }

    function init() {
        cloneContent();
        initDialogs();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}());
