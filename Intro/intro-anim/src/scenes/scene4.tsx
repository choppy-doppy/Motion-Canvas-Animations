import {Camera, makeScene2D, Txt} from "@motion-canvas/2d";
import {
    chain,
    createRef,
    Direction,
    easeInOutCubic,
    fadeTransition,
    slideTransition,
    waitUntil
} from "@motion-canvas/core";


export default makeScene2D(function* (view) {
    const title = createRef<Txt>();
    const camera = createRef<Camera>();
    const bigtext = createRef<Txt>();

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
            ref={bigtext}
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
        title().text('Challenges And Accomplishments', 1.5, easeInOutCubic),
    );

    yield* waitUntil('tri');

    yield* bigtext().text('Triangle.', 3.5, easeInOutCubic);

    yield* waitUntil('!!!');

    yield* bigtext().text('Triangle!!!1!', 1, easeInOutCubic);

    yield* waitUntil('vid');

    yield* bigtext().text('Video :(', 1, easeInOutCubic);

    yield* waitUntil('capst');

    yield* bigtext().text('This Capstone!', 1, easeInOutCubic);

    yield* waitUntil('end');

});