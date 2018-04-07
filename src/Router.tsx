import * as React from "react";
import { View } from "react-vr";

import MainMenu from "./main-menu/MainMenu";
import SimonSays from "./simon-says/SimonSays";
import TicTacToe from "./tic-tac-toe/TicTacToe";

interface RouterState {
  activeComponent: React.Component;
}

const routes = {
  MainMenu,
  SimonSays,
  TicTacToe
};

class Router extends React.Component<RouterState> {
  state = {
    activeComponent: routes.MainMenu
  };

  onRoute = (activeComponent: React.Component) => () =>
    this.setState({ activeComponent });

  render() {
    const { activeComponent: ActiveComponent } = this.state;

    return (
      <View>
        <ActiveComponent onRoute={this.onRoute} />
      </View>
    );
  }
}

export default Router;
