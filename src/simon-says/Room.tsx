import * as React from "react";

import {
  asset,
  View,
  AmbientLight,
  Plane,
  PointLight,
  Sphere
} from "react-vr";

const Room = () => (
  <View>
    <AmbientLight intensity={0.25} />

    <Plane
      dimWidth={100}
      dimHeight={100}
      texture={{
        ...asset("pattern-tile.jpg"),
        repeat: [10, 10]
      }}
      style={{ transform: [{ translate: [0, -6, 0] }, { rotateX: -90 }] }}
      lit={true}
    />
    <Plane
      dimWidth={100}
      dimHeight={100}
      texture={{
        ...asset("marble.jpg"),
        repeat: [10, 10]
      }}
      style={{
        transform: [{ translate: [0, 6, 0] }, { rotateX: 90 }]
      }}
      lit={true}
    />
    <Plane
      dimWidth={100}
      dimHeight={100}
      texture={{
        ...asset("brick.jpg"),
        repeat: [10, 10]
      }}
      style={{ transform: [{ translate: [-20, 0, 0] }, { rotateY: 90 }] }}
      lit={true}
    />
    <Plane
      dimWidth={100}
      dimHeight={100}
      texture={{
        ...asset("wood.jpg"),
        repeat: [10, 10]
      }}
      style={{
        transform: [
          { translate: [20, 0, 0] },
          { rotateY: -90 },
          { rotateZ: 90 }
        ]
      }}
      lit={true}
    />

    <Sphere style={{ color: "yellow", transform: [{ translate: [-8, 5, 5] }] }}>
      <PointLight intensity={0.75} style={{ color: "white" }} />
    </Sphere>

    <Sphere
      style={{ color: "yellow", transform: [{ translate: [-8, 5, -8] }] }}
    >
      <PointLight intensity={0.75} style={{ color: "white" }} />
    </Sphere>
  </View>
);

export default Room;
