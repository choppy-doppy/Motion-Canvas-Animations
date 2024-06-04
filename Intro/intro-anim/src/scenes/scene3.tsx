import {Camera, Img, makeScene2D, Txt} from "@motion-canvas/2d";
import {
    all,
    chain,
    createRef,
    Direction,
    easeInOutCubic,
    fadeTransition,
    slideTransition,
    waitUntil
} from "@motion-canvas/core";

import compsci from '../images/compsci.png';
import tru from '../images/tru.jpg'

export default makeScene2D(function* (view) {
    const title = createRef<Txt>();
    const compRef = createRef<Img>();
    const truRef = createRef<Img>();
    const camera = createRef<Camera>();

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
            <Img
                ref={compRef}
                src={compsci}
                opacity={0}
                scale={2}
                y={100}
            />
            <Img
                ref={truRef}
                src={tru}
                opacity={0}
                scale={0.65}
                y={100}
            />
        </Camera>
    );

    yield* chain(
        title().text('Why I Chose This Topic', 1.5, easeInOutCubic),
    );

    yield* waitUntil('comp')

    yield* compRef().opacity(1, 1);

    yield* waitUntil('uni');

    yield* all(
        compRef().opacity(0, 1),
        truRef().opacity(1, 1),
    );

    yield* waitUntil('end');

});