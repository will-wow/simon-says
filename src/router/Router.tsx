import * as React from "react";
import { View } from "react-vr";
import { withViewModel } from "@rxreact/core";

import * as Route from "../signal-graph/Route";
import Hud from "../hud/Hud";

import MainMenu from "../main-menu/MainMenu";
import SimonSays from "../simon-says/SimonSays";
import TicTacToe from "../tic-tac-toe/TicTacToe";

interface RouterProps {
  activeRoute: string;
}

export const routes = {
  MainMenu,
  SimonSays,
  TicTacToe
};

const Router: React.SFC<RouterProps> = ({ activeRoute }) => {
  const ActiveComponent = routes[activeRoute];

  return (
    <View style={{ position: "relative" }}>
      <ActiveComponent />
      <Hud />
    </View>
  );
};

const vm = {
  inputs: {
    activeRoute: Route.selectRoute$
  },
  outputs: {}
};

export { Router };

export default withViewModel(vm, Router);
