import * as React from "react";
import { asset, View, Pano } from "react-vr";

import Title from "./Title";
import Button from "./Button";

import * as Route from "../router/Route";

interface MainMenuProps {
  onRoute: Route.onRoute;
}

const MainMenu = ({ onRoute }: MainMenuProps) => (
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
    <Button onClick={onRoute("TicTacToe")} text="Tic Tac Toe" />
    <Button onClick={onRoute("SimonSays")} text="Simon Says" />
  </View>
);

export default MainMenu;
