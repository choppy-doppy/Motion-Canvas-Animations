import {
    makeScene2D,
    Polygon,
    Txt
} from '@motion-canvas/2d';
import {
    all,
    chain,
    createRef, easeInCubic,
    easeInOutCubic, easeInQuad, easeOutExpo,
    tween,
    Vector2,
    sequence,
} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const Poly = createRef<Polygon>();
  const Poly2 = createRef<Polygon>();
  const Poly3 = createRef<Polygon>();
  const CompTitle = createRef<Txt>();
  const CompC = createRef<Txt>();
  const CompT = createRef<Txt>();
  const CompPs = createRef<Txt>();
  view.fill('#272727');

    view.add(
        <>
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
                x={50}
                y={-450}
                fontWeight={700}
                fontSize={84}
                fontFamily={'Jetbrains Mono'}
                fill={"#272727"}
            >The Core Competencies
            </Txt>
            <Txt
                ref={CompC}
                x={1530}
                y={-200}
                rotation={-100}
                fontWeight={700}
                fontSize={84}
                fontFamily={'Jetbrains Mono'}
                fill={"#e5e4e2"}
            >C
            </Txt>
            <Txt
                ref={CompT}
                x={1550}
                y={100}
                rotation={-100}
                fontWeight={700}
                fontSize={84}
                fontFamily={'Jetbrains Mono'}
                fill={"#e5e4e2"}
            >T
            </Txt>
            <Txt
                ref={CompPs}
                x={1630}
                y={400}
                rotation={-100}
                fontWeight={700}
                fontSize={84}
                fontFamily={'Jetbrains Mono'}
                fill={"#e5e4e2"}
            >Ps
            </Txt>
        </>
    );

    yield*
        sequence(
            0.2,
            CompTitle().fill("#272727", 0).to("808080", 1),
            all(
                Poly().position.x(1500, 0).to(-700, 1.5),
                Poly().rotation(-100, 0).to(0, 1.5),
                CompC().position.x(1530, 0).to(-700, 1.5),
                CompC().rotation(-100, 0).to(0, 1.5),
            ),
            all(
                Poly2().position.x(1550, 0).to(-700, 1.5),
                Poly2().rotation(-100, 0).to(0, 1.5),
                CompT().position.x(1550, 0).to(-700, 1.5),
                CompT().rotation(-100, 0).to(0, 1.5),
            ),
            all(
                Poly3().position.x(1600, 0).to(-700, 1.5),
                Poly3().rotation(-100, 0).to(0, 1.5),
                CompPs().position.x(1630, 0).to(-700, 1.5),
                CompPs().rotation(-100, 0).to(0, 1.5),
            ),
        );
});

