import * as React from "react";
import { asset, Cylinder, VrButton, Sound, PointLight } from "react-vr";

import * as Vector from "./Vector";
import { noteToColor } from "./Note";

interface NotePillarProps {
  note: string;
  translate: Vector.t;
}

interface NotePillarState {
  playing: boolean;
}

class NotePillar extends React.Component<NotePillarProps, NotePillarState> {
  state = {
    playing: false
  };

  play = () => {
    this.setState({ playing: false });
    setTimeout(() => {
      this.setState({ playing: true });
    });
  };

  stop = () => this.setState({ playing: false });

  render() {
    const { playing } = this.state;
    const { note, translate } = this.props;

    return (
      <VrButton
        onClick={this.play}
        style={{
          transform: [{ translate }]
        }}
      >
        {playing && <PointLight />}
        <Cylinder
          radiusTop={-0.5}
          radiusBottom={-0.5}
          dimHeight={10}
          lit={true}
          style={{
            color: noteToColor(note)
          }}
        >
          <Sound
            source={{
              wav: asset(`sounds/${note}.wav`)
            }}
            autoPlay={true}
            onEnded={this.stop}
            playControl={playing ? "play" : "stop"}
          />
        </Cylinder>
      </VrButton>
    );
  }
}

export default NotePillar;
