import React from "react";
import ReactPlayer from "react-player";
import { PlayerWrapper, LittlePlayerWrapper } from "./elements";

const Player = ({ video, fullscreen = false, controls }) => {
  return (
    <>
      {fullscreen ? (
        <PlayerWrapper>
          <ReactPlayer
            width="100%"
            height="100%"
            playing={true}
            controls={controls}
            url={video}
          />
          {/* <PlayerWrapper.Controls>
            <button></button>
          </PlayerWrapper.Controls> */}
        </PlayerWrapper>
      ) : (
        <LittlePlayerWrapper>
          <ReactPlayer width="900px" url={video} playing={true} muted={true} />
        </LittlePlayerWrapper>
      )}
    </>
  );
};

export default Player;
