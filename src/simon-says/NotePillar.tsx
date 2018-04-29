import * as React from "react";
import { asset, Box, Cylinder, VrButton, Sound, PointLight } from "react-vr";

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

    const radius = playing ? 0.6 : 0.5;

    return (
      <VrButton
        onClick={this.play}
        style={{
          transform: [{ translate }]
        }}
      >
        {playing && <PointLight intensity={0.25} />}
        <Cylinder
          radiusTop={radius}
          radiusBottom={radius}
          dimHeight={10}
          lit={true}
          style={
            {
              color: noteToColor(note),
            }
          }
          texture={asset("marble.jpg")}
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
