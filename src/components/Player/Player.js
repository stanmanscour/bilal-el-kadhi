import React from "react";
import ReactPlayer from "react-player";
import { Link } from "gatsby";
import { PlayerWrapper, LittlePlayerWrapper } from "./elements";

const Player = ({ url, video, fullscreen = false, controls }) => {
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
          <Link to={`/films/${url}`}>
            <ReactPlayer
              width="900px"
              url={video}
              playing={true}
              muted={true}
            />
          </Link>
        </LittlePlayerWrapper>
      )}
    </>
  );
};

export default Player;
