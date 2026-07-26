import { flush } from 'data-wrapper';
import { createAlicesDescent } from './slideshow.js';

export default ({ wrapper, cleanup }) => {
    let slideshow = null;

    queueMicrotask(() => {
        slideshow = createAlicesDescent({
            canvas: wrapper.querySelector('#alice-canvas'),
        });

        if (!slideshow) return;

        document.querySelectorAll('#section3 figure img').forEach((image, index) => {
            if (index >= slideshow.slideCount) return;
            image.src = slideshow.captureSlide(index);
            image.style.width = '100%';
        });

        flush();
    });

    cleanup(() => slideshow?.destroy());

    return {
        get caption() { return slideshow?.caption || ''; },
        get counter() { return slideshow?.counter || ''; },
        get atStart() { return slideshow?.atStart ?? true; },
        get atEnd() { return slideshow?.atEnd ?? true; },
        get starsLabel() { return slideshow?.starsLabel || 'Hide Stars'; },
        get gridLabel() { return slideshow?.gridLabel || 'Grid Off'; },
        get roadLabel() { return slideshow?.roadLabel || 'Hide Road'; },
        get roadHidden() { return slideshow?.roadHidden ?? true; },
        previous() { slideshow?.previous(); },
        next() { slideshow?.next(); },
        toggleStars() { slideshow?.toggleStars(); },
        toggleGrid() { slideshow?.toggleGrid(); },
        toggleRoad() { slideshow?.toggleRoad(); },
        handleKey(event) {
            const key = event.detail.originalEvent.key;
            if (key !== 'ArrowLeft' && key !== 'ArrowRight') return;
            event.detail.originalEvent.preventDefault();
            if (key === 'ArrowLeft') slideshow?.previous();
            if (key === 'ArrowRight') slideshow?.next();
        },
    };
};
