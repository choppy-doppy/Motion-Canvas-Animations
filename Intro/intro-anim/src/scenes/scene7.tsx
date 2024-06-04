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

    view.fill('#272727');

    view.add(
        <Camera ref={camera}>
            <Txt
                ref={title}
                text={''}
                y={50}
                fontWeight={700}
                fontSize={300}
                fontFamily={'Jetbrains Mono'}
                fill={'#e5e4e2'}
            />
        </Camera>
    );

    yield* chain(
        title().text('Conclusion', 1.5, easeInOutCubic),
    );

    yield* waitUntil('end');

});