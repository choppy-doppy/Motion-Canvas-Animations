import {
    Camera, Img,
    makeScene2D,
    Txt,
} from '@motion-canvas/2d';

import {
    beginSlide,
    chain,
    createRef,
    easeInOutCubic,
    waitUntil,
} from '@motion-canvas/core';

import learning from '../images/learning.png';

export default makeScene2D(function* (view) {
    const camera = createRef<Camera>();
    const title = createRef<Txt>();
    const subtitle = createRef<Txt>();
    const imageRef = createRef<Img>();

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
        subtitle().text('Traditional To Modern', 1.5, easeInOutCubic),
    );

    yield* waitUntil('tool');

    yield* chain(
      subtitle().text('How Its Used As A Tool', 1.5, easeInOutCubic),
    );

    yield* waitUntil('learn.')

    view.add(
        <Img
            ref={imageRef}
            src={learning}
            scale={0.5}
            y={200}
            opacity={0}
        />
    );

    yield* imageRef().opacity(1, 1);

    yield* waitUntil('end');

});
