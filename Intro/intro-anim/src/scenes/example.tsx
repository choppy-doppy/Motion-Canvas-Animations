import {
    Circle,
    makeScene2D,
    Txt,
    Polygon,
    Camera,
} from '@motion-canvas/2d';

import {
    createRef,
    easeInOutCubic,
    waitUntil,
    chain,
} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const camera = createRef<Camera>();
    const title = createRef<Txt>();
    const subtitle = createRef<Txt>();

    view.fill('#272727');

    view.add(
        <Camera ref={camera}>
            <Txt
                ref={title}
                text={''}
                y={-350}
                fontWeight={700}
                fontSize={84}
                fontFamily={'Jetbrains Mono'}
                fill={'#e5e4e2'}
            />
            <Txt
                ref={subtitle}
                text={''}
                y={-200}
                fontWeight={700}
                fontSize={70}
                fontFamily={'Jetbrains Mono'}
                fill={'#e5e4e2'}
            />
        </Camera>
    );

    yield* chain(
        title().text('Animation', 1.5, easeInOutCubic),
        subtitle().text('Traditional, to modern', 1.5, easeInOutCubic),
    );

    yield* waitUntil('end');
});
