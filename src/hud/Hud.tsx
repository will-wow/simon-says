import * as React from "react";
import { View, VrButton, Text } from "react-vr";
import { withViewModel } from "@rxreact/core";
import * as Route from "../signal-graph/Route";
import * as Mute from "../signal-graph/Mute";

interface HudProps {
  activeRoute: string;
  mute: boolean;
  onRoute: (route: string) => void;
  onMute: (x?: void) => void;
}

const Hud = ({ mute, activeRoute, onRoute, onMute }: HudProps) => {
  return (
    <View
      style={{
        position: "absolute",
        flex: 1,
        width: 3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        layoutOrigin: [0.5, 0.5],
        transform: [{ translate: [0, -1, -2] }, { rotateX: -90 }]
      }}
    >
      {activeRoute !== "MainMenu" ? (
        <VrButton onClick={() => onRoute("MainMenu")}>
          <Text style={{ fontSize: 0.2, textAlign: "center" }}>Back</Text>
        </VrButton>
      ) : (
        // prettier-ignore
        <Text>{' '}</Text>
      )}
      <VrButton onClick={onMute}>
        <Text style={{ fontSize: 0.2, textAlign: "center" }}>
          {mute ? "Sound On" : "Sound Off"}
        </Text>
      </VrButton>
    </View>
  );
};

const vm = {
  inputs: {
    mute: Mute.mute$,
    activeRoute: Route.selectRoute$
  },
  outputs: {
    onMute: Mute.selectToggleMute$,
    onRoute: Route.selectRoute$
  }
};

export { Hud };

export default withViewModel(vm, Hud);
