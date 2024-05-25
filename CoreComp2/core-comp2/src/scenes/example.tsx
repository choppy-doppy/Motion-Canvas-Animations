import {
    makeScene2D,
    Polygon,
    Txt,
    Camera,
} from '@motion-canvas/2d';

import {
    all,
    createRef,
    easeInOutCubic,
    sequence,
    waitFor, waitUntil,
} from '@motion-canvas/core';

export default  makeScene2D(function* (view) {
    const Poly = createRef<Polygon>();
    const Poly2 = createRef<Polygon>();
    const Poly3 = createRef<Polygon>();
    const CompTitle = createRef<Txt>();
    const CompC = createRef<Txt>();
    const CompT = createRef<Txt>();
    const CompPs = createRef<Txt>();
    const Communication = createRef<Txt>();
    const Thinking = createRef<Txt>();
    const PerSoc = createRef<Txt>();
    const camera = createRef<Camera>();


    view.fill('#272727');

    view.add(
      <Camera ref={camera}>
        <Polygon
            ref={Poly}
            sides={3}
            size={300}
            fill={"Orange"}
            x={1300}
            y={-200}
            rotation={-100}
        />
        <Polygon
            ref={Poly2}
            sides={3}
            size={300}
            fill={"Blue"}
            x={1350}
            y={100}
            rotation={-100}
        />
        <Polygon
            ref={Poly3}
            sides={3}
            size={300}
            fill={"Green"}
            x={1400}
            y={400}
            rotation={-100}
        />
        <Txt
            ref={CompTitle}
            text={'The Core Competencies'}
            y={-450}
            fontWeight={700}
            fontSize={84}
            fontFamily={'Jetbrains Mono'}
            fill={"#272727"}
            />
        <Txt
            ref={CompC}
            text={'C'}
            x={1530}
            y={-200}
            rotation={-100}
            fontWeight={700}
            fontSize={84}
            fontFamily={'Jetbrains Mono'}
            fill={"#e5e4e2"}
            />
        <Txt
            ref={CompT}
            text={'T'}
            x={1550}
            y={100}
            rotation={-100}
            fontWeight={700}
            fontSize={84}
            fontFamily={'Jetbrains Mono'}
            fill={"#e5e4e2"}
            />
        <Txt
            ref={CompPs}
            text={'Ps'}
            x={1630}
            y={400}
            rotation={-100}
            fontWeight={700}
            fontSize={84}
            fontFamily={'Jetbrains Mono'}
            fill={"#e5e4e2"}
            />
          <Txt
              ref={Communication}
              text={''}
              x={-200}
              y={-210}
              fontWeight={700}
              fontSize={80}
              fontFamily={'Jetbrains Mono'}
              fill={"#e5e4e2"}
          />
          <Txt
              ref={Thinking}
              text={''}
              x={-310}
              y={100}
              fontWeight={700}
              fontSize={80}
              fontFamily={'Jetbrains Mono'}
              fill={"#e5e4e2"}
          />
          <Txt
              ref={PerSoc}
              text={''}
              x={-100}
              y={400}
              fontWeight={700}
              fontSize={80}
              fontFamily={'Jetbrains Mono'}
              fill={"#e5e4e2"}
          />
      </Camera>
    );

    yield*
      sequence(
          0.2,
          CompTitle().fill("#272727", 0).to("808080", 1.5),
          all(
              Poly().position.x(-700, 2.55),
              Poly().rotation(0, 2.55),
              CompC().position.x(-700, 2.55),
              CompC().rotation(0, 2.55),
          ),
          all(
              Poly2().position.x(-700, 2.55),
              Poly2().rotation(0, 2.55),
              CompT().position.x(-700, 2.55),
              CompT().rotation(0, 2.55),
          ),
          all(
              Poly3().position.x(-700, 2.55),
              Poly3().rotation(0, 2.55),
              CompPs().position.x(-700, 2.55),
              CompPs().rotation(0, 2.55),
          ),
      );

    yield* sequence(
        0.6,
        Communication().text('Communication', 1.05, easeInOutCubic),
        Thinking().text('Thinking', 1.05, easeInOutCubic),
        PerSoc().text('Personal & Social', 1.05, easeInOutCubic),
    );

    yield* waitFor(1);

    yield* all(
            Poly().position.x(-380, 1.5),
            Poly().position.y(50, 1.5),
            CompC().position.x(-380, 1.5),
            CompC().position.y(50, 1.5),

            Communication().position.x(120, 1.5),
            Communication().position.y(50, 1.5),

            Poly2().position.y(800, 1.5),
            Poly2().position.x(-380, 1.5),
            CompT().position.y(800, 1.5),
            CompT().position.x(-380, 1.5),

            Thinking().position.y(800, 1.5),
            Thinking().position.x(10, 1.5),

            Poly3().position.y(1100, 1.5),
            Poly3().position.x(-380, 1.5),
            CompPs().position.y(1100, 1.5),
            CompPs().position.x(-380, 1.5),

            PerSoc().position.y(1100, 1.5),
            PerSoc().position.x(200, 1.5),
    );

    yield* camera().zoom(1.5, 1.5);

    yield* waitUntil('doneC')

    yield* all(
        Poly().position.y(-500, 1.5),
        CompC().position.y(-500, 1.5),

        Communication().position.y(-500, 1.5),

        Poly2().position.y(50, 1.5),
        CompT().position.y(50, 1.5),

        Thinking().position.y(50, 1.5),
    );

    yield* waitUntil('doneT');

    yield* all(
        Poly2().position.y(-500, 1.5),
        CompT().position.y(-500, 1.5),

        Thinking().position.y(-500, 1.5),

        Poly3().position.y(50, 1.5),
        CompPs().position.y(50, 1.5),

        PerSoc().position.y(50, 1.5),
    );

    yield* waitUntil('donePS');

    yield* camera().x(2000, 1.5);

    yield* waitUntil('end');
});

