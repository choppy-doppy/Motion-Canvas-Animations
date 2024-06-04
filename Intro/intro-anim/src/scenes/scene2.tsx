import {
    Camera,
    Img,
    makeScene2D,
    Txt, Video,
} from "@motion-canvas/2d";

import {
    all,
    chain,
    createRef,
    easeInOutCubic,
    fadeTransition,
    waitUntil,
} from "@motion-canvas/core";

import pika from '../images/pika.png';
import spunch from '../images/spunch.png';
import tnj from '../images/spunch.png';

export default makeScene2D(function* (view) {
    const title = createRef<Txt>();
    const subtitle = createRef<Txt>();
    const camera = createRef<Camera>();
    const pikaRef = createRef<Img>();
    const spunchRef = createRef<Img>();
    const tnjRef = createRef<Img>();

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
                y={-200}
                fontWeight={700}
                fontSize={70}
                fontFamily={'Jetbrains Mono'}
                fill={'#e5e4e2'}
            />
            <Img
                ref={pikaRef}
                src={pika}
                scale={1}
                y={200}
                opacity={0}
            />
            <Img
                ref={spunchRef}
                src={spunch}
                scale={1}
                y={200}
                opacity={0}
            />
            <Img
                ref={tnjRef}
                src={tnj}
                scale={1}
                y={200}
                opacity={0}
            />
        </Camera>
    );

    yield* chain(
        title().text('Animation As A Tool', 1.5, easeInOutCubic),
    );

    yield* waitUntil('ent');

    yield* subtitle().text('Entertainment', 1.5, easeInOutCubic);

    yield* all(
        pikaRef().opacity(1, 1),
    );

    yield* waitUntil('vis');

    yield* subtitle().text('Visuals', 1.5, easeInOutCubic);

    yield* waitUntil('learn');

    yield* subtitle().text('Visuals For Learning', 1.5, easeInOutCubic);

    yield* waitUntil('end');

});