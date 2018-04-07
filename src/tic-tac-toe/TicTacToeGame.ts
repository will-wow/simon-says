// import { ReadOnlyArray } from "ramda";

export type Player = "x" | "o";
export type Tile = Player | "";
export type Direction = "x" | "y" | "d";
export type Game = Tile[];
export type Winner = {
  player: Player | "cats";
  direction?: Direction;
  position?: number;
};
