import * as React from "react";
import { asset, View, Pano } from "react-vr";

import NotePillar from "./NotePillar";
import Room from "./Room";

const SimonSays = () => (
  <View>
    <Pano source={asset("space.png")} />

    <Room />

    <NotePillar note="28_C" translate={[-5, 0, -10]} />
    <NotePillar note="31_Eb" translate={[-3, 0, -10]} />
    <NotePillar note="33_F" translate={[-1, 0, -10]} />
    <NotePillar note="34_Fs" translate={[1, 0, -10]} />
    <NotePillar note="35_G" translate={[3, 0, -10]} />
    <NotePillar note="38_Bb" translate={[5, 0, -10]} />
  </View>
);

export default SimonSays;
