import {makeScene2D, Txt} from "@motion-canvas/2d";
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

    view.fill('#272727');
    yield* fadeTransition(1);

    view.add(
        <Txt
            ref={title}
            text={''}
            y={-350}
            fontWeight={700}
            fontSize={84}
            fontFamily={'Jetbrains Mono'}
            fill={'#e5e4e2'}
        />
    );

    yield* chain(
        title().text('Personal Impact', 1.5, easeInOutCubic),
    );

    yield* waitUntil('end');

});