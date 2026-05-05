(function () {
    var CLOSE_DELAY = 180;

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

    function prefersReducedMotion() {
        return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function openDialog(dialog) {
        window.clearTimeout(dialog._closeTimer);
        dialog.removeAttribute('data-closing');
        dialog.setAttribute('data-entering', '');
        dialog._returnFocus = document.activeElement;

        if (!dialog.open) {
            if (typeof dialog.show === 'function') {
                dialog.show();
            } else {
                dialog.setAttribute('open', '');
            }
        }

        window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () {
                dialog.removeAttribute('data-entering');
            });
        });

        setExpanded(dialog, true);

        var closeButton = dialog.querySelector('button[value="close"]');
        if (closeButton) closeButton.focus();
    }

    function finishClose(dialog) {
        dialog.removeAttribute('data-closing');

        if (typeof dialog.close === 'function') {
            dialog.close();
        } else {
            dialog.removeAttribute('open');
            setExpanded(dialog, false);
        }

        if (dialog._returnFocus && typeof dialog._returnFocus.focus === 'function') {
            dialog._returnFocus.focus();
        }
    }

    function closeDialog(dialog) {
        if (!dialog.open || dialog.hasAttribute('data-closing')) return;

        setExpanded(dialog, false);

        if (prefersReducedMotion()) {
            finishClose(dialog);
            return;
        }

        dialog.setAttribute('data-closing', '');
        window.clearTimeout(dialog._closeTimer);
        dialog._closeTimer = window.setTimeout(function () {
            finishClose(dialog);
        }, CLOSE_DELAY);
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
            dialog.addEventListener('cancel', function (event) {
                event.preventDefault();
                closeDialog(dialog);
            });

            dialog.addEventListener('close', function () {
                window.clearTimeout(dialog._closeTimer);
                dialog.removeAttribute('data-entering');
                dialog.removeAttribute('data-closing');
                setExpanded(dialog, false);
            });

            dialog.querySelectorAll('form[method="dialog"]').forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    event.preventDefault();
                    closeDialog(dialog);
                });
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
