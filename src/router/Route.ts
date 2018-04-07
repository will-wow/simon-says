import MainMenu from "../main-menu/MainMenu";
import SimonSays from "../simon-says/SimonSays";
import TicTacToe from "../tic-tac-toe/TicTacToe";

export const routes = {
  MainMenu,
  SimonSays,
  TicTacToe
}

export type RoutableComponent = keyof typeof routes;

export type onRoute = (route: RoutableComponent) => () => void;
