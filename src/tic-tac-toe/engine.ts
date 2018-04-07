import * as R from "ramda";

import { mapIndexed, intersects, maxOf } from "../shared/Util";

import { Player, Tile, Direction, Game } from "./TicTacToeGame";

type TilePredicate = (tile: Tile) => boolean;
type IndexTilePair = [number, Tile];

export const nextPlayer = player => {
  switch (player) {
    case "x": {
      return "o";
    }
    case "o": {
      return "x";
    }
    default: {
      throw new Error(`player can only be x or o, not ${player}`);
    }
  }
};

export const indexToCoordinates = index => {
  const x = indexToX(index);
  const y = indexToY(index);

  return [x, y];
};

export const findWinner = indexes => {
  const xResult = didXWin(indexes);
  const oResult = didOWin(indexes);

  if (xResult.line) {
    const { direction, position } = xResult;
    return { direction, position, player: "x" };
  }

  if (oResult.line) {
    const { direction, position } = oResult;
    return { direction, position, player: "o" };
  }

  if (filterEmpties(indexes).length === 9) {
    return { player: "cats" };
  }

  return { player: undefined };
};

export const indexesMatching = (
  predicate: TilePredicate
): ((game: Game) => number[]) =>
  R.pipe(
    mapIndexed((tile, index) => [index, tile]),
    filterMathchingTiles(predicate),
    R.map(indexFromPair)
  );

const indexFromPair: (pair: IndexTilePair) => number = R.head;

const filterMathchingTiles = (
  predicate: TilePredicate
): ((pairs: IndexTilePair[]) => [number, Tile][]) =>
  R.filter(([, tile]: IndexTilePair) => predicate(tile));

const hasLine = (indexes: number[]) => {
  if (indexes.length === 0) {
    return { line: false };
  }
  const [x, maxX] = maxCountByCoordinateX(indexes);
  const [y, maxY] = maxCountByCoordinateY(indexes);

  if (maxX === 3) {
    return { line: true, direction: "x", position: x };
  }

  if (maxY === 3) {
    return { line: true, direction: "y", position: y };
  }

  if (intersects([0, 4, 8], indexes)) {
    return { line: true, direction: "d", position: 0 };
  }

  if (intersects([2, 4, 6], indexes)) {
    return { line: true, direction: "d", position: 2 };
  }

  return { line: false };
};

const hasWinner = (type: Player) =>
  R.pipe(game => indexesOfType(game, type), hasLine);
const didXWin = hasWinner("x");
const didOWin = hasWinner("o");

const filterEmpties = R.reject(R.isEmpty);

const indexToX = (index: number): number => index % 3;
const indexToY = (index: number): number => Math.floor(index / 3);

const indexToCoordinate = (type: Direction) => (index: number): number =>
  type === "x" ? indexToX(index) : indexToY(index);

const parseCountCoordinatePair = ([count, position]: [string, number]): [
  number,
  number
] => [parseInt(count, 10), position];

const maxCountByCoordinate = (
  type: Direction
): ((indexes: number[]) => [number, number]) =>
  R.pipe(
    R.map(indexToCoordinate(type)),
    R.countBy(R.identity),
    R.toPairs,
    maxByPosition,
    parseCountCoordinatePair
  );

const positionFromPair: (pair: [string, number]) => number = R.last;
const maxByPosition: (pair: [string, number][]) => [string, number] = maxOf(
  positionFromPair
);

const maxCountByCoordinateX = maxCountByCoordinate("x");
const maxCountByCoordinateY = maxCountByCoordinate("y");

const indexesOfType = (game, type) =>
  indexesMatching(tile => tile === type)(game);
