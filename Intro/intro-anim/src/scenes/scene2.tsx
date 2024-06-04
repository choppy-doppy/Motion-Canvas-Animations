import {
    Img,
    makeScene2D,
    Txt,
} from "@motion-canvas/2d";

import {
    chain,
    createRef,
    easeInOutCubic,
    fadeTransition,
    waitUntil,
} from "@motion-canvas/core";

import pika from '../images/pika.gif';
import spunch from '../images/pika.gif';
import tnj from '../images/pika.gif';

export default makeScene2D(function* (view) {
    const title = createRef<Txt>();
    const pikaRef = createRef<Img>();
    const spunchRef = createRef<Img>();
    const tnjRef = createRef<Img>();
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
        title().text('Animation As A Tool', 1.5, easeInOutCubic),
    );

    view.add(
        <Img
            ref={pikaRef}
            src={pika}
            scale={0.5}
            y={200}
            opacity={1}
        />
    );

    yield* waitUntil('end');

});