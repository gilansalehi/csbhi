import { flush, on } from 'data-wrapper';
import { createAlicesDescent } from './slideshow.js';

export default ({ wrapper, slots, cleanup }) => {
    const content = slots[''] || [];
    const visible = new Set();
    let activeStop = 0;
    let hintHidden = false;
    let slideshow = null;
    let stops = [];
    let stopObserver = null;
    let fadeObserver = null;

    const classFor = key => visible.has(key) ? 'visible' : '';

    queueMicrotask(() => {
        const sections = [...wrapper.querySelectorAll('.slide-section')];
        const intro = wrapper.querySelector('#intro');
        const outro = wrapper.querySelector('#outro');
        stops = [intro, ...sections, outro].filter(Boolean);

        slideshow = createAlicesDescent({
            canvas: wrapper.querySelector('#bg-canvas'),
            responsive: true,
            crossfade: true,
        });

        stopObserver = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                activeStop = stops.indexOf(entry.target);
                const slide = entry.target.dataset.slide;
                if (slide !== undefined) slideshow?.goToSlide(Number(slide));
                flush();
            }
        }, { rootMargin: '-49% 0px -49% 0px', threshold: 0 });
        stops.forEach(stop => stopObserver.observe(stop));

        const fadeTargets = [
            [wrapper.querySelector('#intro > div'), 'intro'],
            ...sections.map((section, index) => [section.querySelector('.card'), `slide-${index}`]),
            [wrapper.querySelector('#outro > .card'), 'outro'],
        ].filter(([element]) => element);
        const fadeKeys = new Map(fadeTargets);

        fadeObserver = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                visible.add(fadeKeys.get(entry.target));
                fadeObserver.unobserve(entry.target);
                flush();
            }
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
        fadeTargets.forEach(([element]) => fadeObserver.observe(element));

        const offScroll = on('scroll', () => {
            hintHidden = true;
            flush();
            offScroll();
        }, window);
        cleanup(offScroll);

        const offKeydown = on('keydown', event => {
            const forward = event.key === 'ArrowDown' || event.key === 'ArrowRight';
            const backward = event.key === 'ArrowUp' || event.key === 'ArrowLeft';
            if (!forward && !backward) return;

            const next = Math.max(0, Math.min(
                stops.length - 1,
                activeStop + (forward ? 1 : -1),
            ));
            if (next === activeStop) return;

            event.preventDefault();
            stops[next].scrollIntoView({ behavior: 'smooth' });
        }, document);
        cleanup(offKeydown);

        window.MathJax?.Hub?.Queue(['Typeset', window.MathJax.Hub, wrapper]);
        flush();
    });

    cleanup(() => {
        stopObserver?.disconnect();
        fadeObserver?.disconnect();
        slideshow?.destroy();
    });

    return {
        content,
        get progress() {
            return Array.from({ length: 8 }, (_, index) => ({
                id: index,
                class: index === activeStop ? 'active' : '',
            }));
        },
        get scrollHintClass() { return hintHidden ? 'hidden' : ''; },
        get introClass() { return classFor('intro'); },
        get slide0Class() { return classFor('slide-0'); },
        get slide1Class() { return classFor('slide-1'); },
        get slide2Class() { return classFor('slide-2'); },
        get slide3Class() { return classFor('slide-3'); },
        get slide4Class() { return classFor('slide-4'); },
        get slide5Class() { return classFor('slide-5'); },
        get outroClass() { return classFor('outro'); },
    };
};
