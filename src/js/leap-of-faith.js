const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const interpolate = (from, to, progress) => from + (to - from) * progress;
const FIGURE_STATES = Object.freeze({
    1: { radius: 4, highway: false },
    2: { radius: 2.5, highway: false },
    3: { radius: 1, highway: false },
    4: { radius: 0.5, highway: false },
    5: { radius: 0, highway: false },
    6: { radius: 0, highway: true },
});

function createPerspectiveDashes(highway) {
    const fragment = document.createDocumentFragment();
    const dashes = [];
    const projectionScale = 0.94;
    const dashDepth = 0.8;
    const gapDepth = 1.1;

    /* Equal dash/gap intervals in road depth project through y = f / z.
       Their apparent lengths and separation therefore vanish together. */
    for (let farDepth = 30; farDepth > 1; farDepth -= dashDepth + gapDepth) {
        const nearDepth = Math.max(1, farDepth - dashDepth);
        const projectedTop = projectionScale / farDepth;
        const projectedBottom = projectionScale / nearDepth;
        const projectedLength = projectedBottom - projectedTop;
        const progress = (projectedTop + projectedBottom) / 2;

        for (const lane of [-0.5, 0.5]) {
            const dash = document.createElement('span');
            dash.className = 'descent-highway__dash';
            dash.dataset.roadLane = String(lane);
            dash.dataset.roadProgress = String(progress);
            dash.dataset.roadLength = String(projectedLength);
            fragment.append(dash);
            dashes.push(dash);
        }
    }

    highway.append(fragment);
    return dashes;
}

function initializeDescent() {
    const figureState = FIGURE_STATES[document.documentElement.dataset.figureMode] || null;
    const plane = document.querySelector('[data-descent-plane]');
    const experience = document.querySelector('.descent-experience');
    const horizon = document.querySelector('[data-horizon]');
    const singularityLabel = document.querySelector('[data-singularity-label]');
    const horizonLabel = document.querySelector('[data-horizon-label]');
    const alice = document.querySelector('[data-alice]');
    const bob = document.querySelector('[data-bob]');
    const xAxis = document.querySelector('[data-x-axis]');
    const yAxis = document.querySelector('[data-y-axis]');
    const discontinuity = document.querySelector('[data-break]');
    const highway = document.querySelector('[data-highway]');
    const roadLines = [...document.querySelectorAll('[data-road-bottom]')];
    const roadDashes = highway ? createPerspectiveDashes(highway) : [];
    const ticks = [...document.querySelectorAll('[data-x]')];
    const steps = [...document.querySelectorAll('[data-story-step][data-radius]')];

    if (!plane || !experience || !horizon || !singularityLabel || !horizonLabel
        || !alice || !bob || !xAxis || !yAxis
        || !discontinuity || !highway || !ticks.length || !steps.length) {
        console.warn('Alice descent: required HTML elements were not found.');
        return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame = null;
    let anchors = [];
    let currentRadius = figureState?.radius ?? Number(steps[0].dataset.radius);
    let unit = 1;
    let originX = 0;
    let originY = 0;

    const xForCoordinate = coordinate => originX + coordinate * unit;

    const setRadius = radius => {
        currentRadius = clamp(radius, 0, 4);
        const x = xForCoordinate(currentRadius);
        alice.style.transform = `translate3d(${x}px, ${originY}px, 0) translate(-50%, -50%)`;
    };

    const measurePlane = () => {
        const width = plane.clientWidth;
        const height = plane.clientHeight;
        unit = width / 7.5;
        originX = unit * 2.25;
        originY = height / 2;

        plane.style.backgroundSize = `${unit}px ${unit}px`;
        plane.style.backgroundPosition = `${originX}px ${originY}px`;
        horizon.style.width = `${unit * 2}px`;
        horizon.style.height = `${unit * 2}px`;
        horizon.style.transform = `translate3d(${originX - unit}px, ${originY - unit}px, 0)`;
        singularityLabel.style.transform = `translate3d(${originX - 10}px, ${originY - 10}px, 0) translate(-100%, -100%)`;
        horizonLabel.style.transform = `translate3d(${xForCoordinate(-1)}px, ${originY - unit}px, 0) translate(-50%, var(--horizon-label-offset-y, 0.6rem))`;
        xAxis.style.transform = `translate3d(0, ${originY}px, 0)`;
        yAxis.style.transform = `translate3d(${originX}px, 0, 0)`;
        discontinuity.style.transform = `translate3d(${xForCoordinate(3.5)}px, ${originY}px, 0) translate(-50%, -50%)`;
        bob.style.transform = `translate3d(${xForCoordinate(4)}px, ${originY}px, 0) translate(-50%, -50%)`;
        for (const tick of ticks) {
            tick.style.transform = `translate3d(${xForCoordinate(Number(tick.dataset.x))}px, ${originY}px, 0) translate(-50%, 0)`;
        }

        const roadHeight = height - originY;
        highway.style.width = `${roadHeight * 2}px`;
        highway.style.height = `${roadHeight}px`;
        highway.style.transform = `translate3d(${originX}px, ${originY}px, 0) translateX(-50%)`;

        const planeBounds = plane.getBoundingClientRect();
        const cardAnchorX = planeBounds.left + xForCoordinate(1.5);
        const cardAnchorY = planeBounds.top + originY - unit * 0.5;
        experience.style.setProperty('--story-card-left', `${cardAnchorX}px`);
        experience.style.setProperty('--story-card-bottom', `${window.innerHeight - cardAnchorY}px`);

        for (const line of roadLines) {
            const horizontalRun = Number(line.dataset.roadBottom) * roadHeight;
            const length = Math.hypot(horizontalRun, roadHeight);
            const angle = -Math.atan2(horizontalRun, roadHeight);
            line.style.height = `${length}px`;
            line.style.transform = `translate3d(${roadHeight}px, 0, 0) translateX(-50%) rotate(${angle}rad)`;
        }

        for (const dash of roadDashes) {
            const lane = Number(dash.dataset.roadLane);
            const progress = Number(dash.dataset.roadProgress);
            const x = roadHeight + lane * roadHeight * progress;
            const y = roadHeight * progress;
            const length = roadHeight * Number(dash.dataset.roadLength);
            const width = clamp(length * 0.12, 0.15, 3.8);
            const angle = -Math.atan2(lane * roadHeight, roadHeight);
            dash.style.height = `${length}px`;
            dash.style.width = `${width}px`;
            dash.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${angle}rad)`;
        }
        plane.style.setProperty('--origin-x', `${originX}px`);
        plane.style.setProperty('--origin-y', `${originY}px`);
        setRadius(currentRadius);
    };

    const measureStory = () => {
        anchors = steps.map(element => {
            const bounds = element.getBoundingClientRect();
            return {
                element,
                radius: Number(element.dataset.radius),
                position: window.scrollY + bounds.top + bounds.height / 2,
            };
        });
    };

    const radiusAt = position => {
        if (position <= anchors[0].position) return anchors[0].radius;
        const last = anchors.at(-1);
        if (position >= last.position) return last.radius;

        const nextIndex = anchors.findIndex(anchor => anchor.position >= position);
        const previous = anchors[nextIndex - 1];
        const next = anchors[nextIndex];
        const progress = clamp(
            (position - previous.position) / (next.position - previous.position),
        );
        return interpolate(previous.radius, next.radius, progress);
    };

    const render = () => {
        animationFrame = null;
        const position = window.scrollY + window.innerHeight / 2;
        const reached = anchors.reduce((current, anchor) => (
            position >= anchor.position ? anchor : current
        ), anchors[0]);
        const radius = reducedMotion.matches ? reached.radius : radiusAt(position);
        const highwayStart = anchors.at(-2).position;
        const highwayEnd = anchors.at(-1).position;
        const highwayProgress = clamp(
            (position - highwayStart) / (highwayEnd - highwayStart),
        );

        setRadius(radius);
        for (const anchor of anchors) {
            anchor.element.classList.toggle('is-active', anchor === reached);
        }
        highway.style.opacity = reducedMotion.matches
            ? String(Number(reached === anchors.at(-1)))
            : String(highwayProgress);
    };

    const requestRender = () => {
        if (animationFrame !== null) return;
        animationFrame = requestAnimationFrame(render);
    };

    const remeasure = () => {
        measurePlane();
        if (figureState) {
            setRadius(figureState.radius);
            highway.style.opacity = String(Number(figureState.highway));
            return;
        }
        measureStory();
        requestRender();
    };

    remeasure();
    window.addEventListener('resize', remeasure);

    if (figureState) {
        const markFigureReady = () => {
            remeasure();
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    document.documentElement.dataset.figureReady = 'true';
                });
            });
        };
        document.fonts?.ready.then(markFigureReady) || markFigureReady();
        return;
    }

    window.addEventListener('scroll', requestRender, { passive: true });
    reducedMotion.addEventListener('change', requestRender);
    const typesetMath = async () => {
        if (!window.MathJax?.startup?.promise || !window.MathJax?.typesetPromise) return;
        await window.MathJax.startup.promise;
        await window.MathJax.typesetPromise([document.querySelector('.descent-story')]);
        remeasure();
    };

    typesetMath().catch(error => console.error('Alice descent: MathJax typesetting failed.', error));
    document.fonts?.ready.then(remeasure);
}

initializeDescent();
