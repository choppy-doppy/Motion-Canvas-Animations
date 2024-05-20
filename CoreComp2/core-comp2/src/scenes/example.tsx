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
    createSignal, waitFor,

} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
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
            x={50}
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
          CompTitle().fill("#272727", 0).to("808080", 1),
          all(
              Poly().position.x(1500, 0).to(-700, 1.7),
              Poly().rotation(-100, 0).to(0, 1.7),
              CompC().position.x(1530, 0).to(-700, 1.7),
              CompC().rotation(-100, 0).to(0, 1.7),
          ),
          all(
              Poly2().position.x(1550, 0).to(-700, 1.7),
              Poly2().rotation(-100, 0).to(0, 1.7),
              CompT().position.x(1550, 0).to(-700, 1.7),
              CompT().rotation(-100, 0).to(0, 1.7),
          ),
          all(
              Poly3().position.x(1600, 0).to(-700, 1.7),
              Poly3().rotation(-100, 0).to(0, 1.7),
              CompPs().position.x(1630, 0).to(-700, 1.7),
              CompPs().rotation(-100, 0).to(0, 1.7),
          ),
      );

    yield* sequence(
        0.6,
        Communication().text('Communication', 0.7, easeInOutCubic),
        Thinking().text('Thinking', 0.7, easeInOutCubic),
        PerSoc().text('Personal & Social', 0.7, easeInOutCubic),
    );

    yield* waitFor(1);

    yield* all(
            Poly().position.x(-700, 0).to(-380, 1),
            Poly().position.y(-200, 0).to(50, 1),
            CompC().position.x(-700, 0).to(-380, 1),
            CompC().position.y(-200, 0).to(50, 1),

            Communication().position.x(-200, 0).to(120, 1),
            Communication().position.y(-210, 0).to(50, 1),

            Poly2().position.y(100, 0).to(5000, 1),
            CompT().position.y(100, 0).to(5000, 1),

            Thinking().position.y(100, 0).to(5000, 1),

            Poly3().position.y(400, 0).to(5000, 1),
            CompPs().position.y(400, 0).to(5000, 1),

            PerSoc().position.y(400, 0).to(5000, 1),
    );

    yield* camera().zoom(1.5, 1);
    yield* waitFor(1);
});

