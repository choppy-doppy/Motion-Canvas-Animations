import {Camera, makeScene2D, Txt} from "@motion-canvas/2d";
import {
    chain,
    createRef,
    Direction,
    easeInOutCubic,
    fadeTransition, sequence,
    slideTransition,
    waitUntil
} from "@motion-canvas/core";


export default makeScene2D(function* (view) {
    const title = createRef<Txt>();
    const camera = createRef<Camera>();
    const subtitle = createRef<Txt>();

    view.fill('#272727');
    yield* fadeTransition(1);

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
                y={50}
                fontWeight={700}
                fontSize={200}
                fontFamily={'Jetbrains Mono'}
                fill={'#e5e4e2'}
            />
        </Camera>
    );

    yield* chain(
        title().text('Personal Impact', 1.5, easeInOutCubic),
    );

    yield* waitUntil('mamácito');

    yield* subtitle().text('Art', 1, easeInOutCubic);

    yield* waitUntil('comp');

    yield* subtitle().text('Comp Sci', 1, easeInOutCubic);

    yield* waitUntil('cmprt');

    yield* subtitle().text('Comp Sci + Art', 1, easeInOutCubic);

    yield* waitUntil('end');

});