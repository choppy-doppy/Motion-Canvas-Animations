import {
    Circle,
    makeScene2D,
    Txt,
    Polygon,
    Camera,
} from '@motion-canvas/2d';

import {
    createRef,
    all,
    sequence,
    easeInOutCubic,
    waitFor,
} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const camera = createRef<Camera>();
    const title = createRef<Txt>();

    view.fill('#272727');

    view.add(
        <Camera ref={camera}>
            <Txt
                ref={title}
                text={''}
                x={0}
                y={-450}
                fontWeight={700}
                fontSize={84}
                fontFamily={'Jetbrains Mono'}
                fill={'WHITE'}
            />
        </Camera>
    );

    yield* sequence(
        0.5,
        title().text('Animation', 1.05, easeInOutCubic),
    );

    yield* waitFor(0.5);
});
