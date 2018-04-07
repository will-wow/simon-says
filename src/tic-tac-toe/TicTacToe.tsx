import * as React from "react";
import { asset, View, Sound, Pano } from "react-vr";
import { withViewModel } from "@rxreact/core";
import * as R from "ramda";

import * as Mute from "../signal-graph/Mute";

import Field from "./Field";
import EndGameMessage from "./EndGameMessage";

import { Player, Tile, Game, Winner } from "./TicTacToeGame";
import { nextPlayer, findWinner } from "./engine";
import { nextMove } from "./ai";

interface TicTacToeProps {
  mute: boolean;
  onMute: any;
}

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

class TicTacToe extends React.Component<TicTacToeProps, TicTacToeState> {
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
    const { mute } = this.props;

    return (
      <View>
        <Pano source={asset("fort-night.jpg")} />
        <Sound
          loop={true}
          source={{
            mp3: asset("tetris.mp3")
          }}
          autoPlay={false}
          playControl={mute ? "pause" : "play"}
        />
        {winner && (
          <EndGameMessage player={winner.player} onClick={this.onReset} />
        )}
        <Field game={game} onMove={this.onMove} />
      </View>
    );
  }
}

const vm = {
  inputs: {
    mute: Mute.mute$
  },
  outputs: {
    onMute: Mute.selectToggleMute$
  }
};

export { TicTacToe };

export default withViewModel(vm, TicTacToe);
