import * as React from "react";
import { View, VrButton, Text } from "react-vr";
import * as Route from "../router/Route";

interface HudProps {
  currentRoute?: Route.RoutableComponent;
  onRoute: Route.onRoute;
  onMute: () => void;
}

const Hud = ({ currentRoute, onRoute, onMute }: HudProps) => {
  return (
    <View>
      <VrButton onClick={onRoute(currentRoute)}>
        <Text style={{ fontSize: 0.2, textAlign: "center" }}>Back</Text>
      </VrButton>
      <VrButton onClick={onMute}>
        <Text style={{ fontSize: 0.2, textAlign: "center" }}>Mute</Text>
      </VrButton>
    </View>
  );
};

export default Hud;
