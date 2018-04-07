import * as React from "react";
import { asset, View, Sound, Pano } from "react-vr";
import * as R from "ramda";

import { Player, Tile, Game, Winner } from "./TicTacToeGame";

import Field from "./Field";

import { nextPlayer, findWinner } from "./engine";
import { nextMove } from "./ai";
import EndGameMessage from "./EndGameMessage";

interface TicTacToeState {
  game: Game;
  currentPlayer: Player;
  winner: Winner | null;
}

const emptyTile: Tile = "";

const defaultState: TicTacToeState = {
  game: R.repeat(emptyTile, 9),
  currentPlayer: "x",
  winner: null
};

class TicTacToe extends React.Component<{}, TicTacToeState> {
  state = defaultState;

  onMove = index => {
    const { winner, game, currentPlayer } = this.state;
    if (winner) {
      return;
    }

    const updatedGame = R.update(index, currentPlayer, game);

    const result = findWinner(updatedGame);

    if (!result.player) {
      this.setState({
        game: updatedGame,
        currentPlayer: nextPlayer(currentPlayer)
      });

      setTimeout(this.aiMove);
    } else {
      this.setState({
        game: updatedGame,
        winner: result
      });
    }
  };

  onReset = () => this.setState(defaultState);

  aiMove = () => {
    const { game, currentPlayer } = this.state;

    if (currentPlayer === "x") {
      return;
    }

    R.pipe(nextMove(currentPlayer), this.onMove)(game);
  };

  render() {
    const { game, winner } = this.state;

    return (
      <View>
        <Pano source={asset("fort-night.jpg")} />
        <Sound
          loop={true}
          source={{
            mp3: asset("tetris.mp3")
          }}
        />
        {winner && (
          <EndGameMessage player={winner.player} onClick={this.onReset} />
        )}
        <Field game={game} onMove={this.onMove} />
      </View>
    );
  }
}

export default TicTacToe;
