import * as React from "react";
import { View } from "react-vr";

import SimonSays from "./simon-says/SimonSays";

interface RouterState {
  activeComponent: React.Component;
}

const routes = {
  simonSays: SimonSays
};

class Router extends React.Component<RouterState> {
  state = {
    activeComponent: routes.simonSays
  };

  render() {
    const { activeComponent: ActiveComponent } = this.state;

    return (
      <View>
        <ActiveComponent />
      </View>
    );
  }
}

export default Router;
