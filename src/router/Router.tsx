import * as React from "react";
import { View } from "react-vr";

React.Component;

import MainMenu from "../main-menu/MainMenu";
import SimonSays from "../simon-says/SimonSays";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import Hud from "../hud/Hud";

import * as Route from "./Route";

interface RouterState {
  activeComponent: Route.RoutableComponent;
}

const routes = {
  MainMenu,
  SimonSays,
  TicTacToe
};

class Router extends React.Component<{}, RouterState> {
  state: RouterState = {
    activeComponent: "MainMenu"
  };

  onRoute: Route.onRoute = activeComponent => () =>
    this.setState({ activeComponent });

  onMute = (): void => {};

  render() {
    const { activeComponent } = this.state;
    const ActiveComponent = routes[activeComponent];

    return (
      <View>
        <ActiveComponent onRoute={this.onRoute} />
        <Hud
          onRoute={this.onRoute}
          onMute={this.onMute}
          currentRoute={activeComponent}
        />
      </View>
    );
  }
}

export default Router;
