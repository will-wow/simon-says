import * as React from "react";
import { asset, View, Pano } from "react-vr";
import { withViewModel } from "@rxreact/core";

import * as Route from "../signal-graph/Route";

import Title from "./Title";
import Button from "./Button";

interface MainMenuProps {
  onRoute: (activeRoute: any) => void;
}

const MainMenu: React.SFC<MainMenuProps> = ({ onRoute }) => (
  <View
    style={{
      flex: 1,
      width: 5,
      flexDirection: "column",
      alignItems: "stretch",
      layoutOrigin: [0.5, 0.5],
      transform: [{ translate: [0, 0, -5] }]
    }}
  >
    <Pano source={asset("fort-night.jpg")} />
    <Title />
    <Button onClick={() => onRoute("TicTacToe")} text="Tic Tac Toe" />
    <Button onClick={() => onRoute("SimonSays")} text="Simon Says" />
  </View>
);

const vm = {
  inputs: {
    activeRoute: Route.selectRoute$
  },
  outputs: {
    onRoute: Route.selectRoute$
  }
};

export { MainMenu };

export default withViewModel(vm, MainMenu);
