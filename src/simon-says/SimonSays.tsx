import * as React from "react";
import { asset, View, Pano, VrButton, Text } from "react-vr";
import { withViewModel } from "@rxreact/core";

import * as Note from "./Note";
import * as SimonSignals from "../signal-graph/SimonSignals";

import NotePillar from "./NotePillar";
import Room from "./Room";

interface SimonSaysProps {
  tune: Note.t[];
  onStart: () => void;
  onTurn: (player: any) => void;
}

export const SimonSays: React.StatelessComponent<SimonSaysProps> = ({
  tune,
  onStart,
  onTurn
}) => (
  <View>
    <Pano source={asset("space.png")} />

    <View style={{ transform: [{ translate: [-1, 0, -4] }] }}>
      <VrButton onClick={onStart}>
        <Text style={{ fontSize: 0.2, textAlign: "center" }}>Start</Text>
      </VrButton>

      <VrButton onClick={() => onTurn('ai')}>
        <Text style={{ fontSize: 0.2, textAlign: "center" }}>Turn</Text>
      </VrButton>

      <Text style={{ fontSize: 0.2, textAlign: "center" }}>
        {tune && tune.join(", ")}
      </Text>
    </View>

    <Room />

    <NotePillar note="28_C" translate={[-5, 0, -10]} />
    <NotePillar note="31_Eb" translate={[-3, 0, -10]} />
    <NotePillar note="33_F" translate={[-1, 0, -10]} />
    <NotePillar note="34_Fs" translate={[1, 0, -10]} />
    <NotePillar note="35_G" translate={[3, 0, -10]} />
    <NotePillar note="38_Bb" translate={[5, 0, -10]} />
  </View>
);

const vm = {
  inputs: {
    tune: SimonSignals.tune$
  },
  outputs: {
    onStart: SimonSignals.selectStartGame$,
    onTurn: SimonSignals.selectTurn$
  }
};

export default withViewModel(vm, SimonSays);
