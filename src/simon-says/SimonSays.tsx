import * as React from "react";
import {
  asset,
  View,
  Pano,
  AmbientLight,
  Plane,
  PointLight,
  Sphere,
  Box
} from "react-vr";

import NotePillar from "./NotePillar";

class SimonSays extends React.Component<{}, {}> {
  render() {
    return (
      <View>
        <Pano source={asset("space.png")} />
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

        <Sphere
          style={{ color: "yellow", transform: [{ translate: [-8, 5, 5] }] }}
        >
          <PointLight intensity={0.75} style={{ color: "white" }} />
        </Sphere>

        <Sphere
          style={{ color: "yellow", transform: [{ translate: [-8, 5, -8] }] }}
        >
          <PointLight intensity={0.75} style={{ color: "white" }} />
        </Sphere>

        <NotePillar note="28_C" translate={[-5, 0, -10]} />
        <NotePillar note="31_Eb" translate={[-3, 0, -10]} />
        <NotePillar note="33_F" translate={[-1, 0, -10]} />
        <NotePillar note="34_Fs" translate={[1, 0, -10]} />
        <NotePillar note="35_G" translate={[3, 0, -10]} />
        <NotePillar note="38_Bb" translate={[5, 0, -10]} />
      </View>
    );
  }
}

export default SimonSays;
