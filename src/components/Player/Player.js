import React from "react";
import ReactPlayer from "react-player";
import gsap from "gsap";
import { Link } from "gatsby";
import { PlayerWrapper, LittlePlayerWrapper } from "./elements";

const Player = ({ url, video, fullscreen = false, controls }) => {
  const handleHoverVideo = e => {
    gsap.to(e.currentTarget, {
      opacity: 1,
      scale: 1.05,
      duration: 0.5,
      ease: "Power3.inOut"
    });
  };

  const handleHoverVideoLeave = e => {
    gsap.to(e.currentTarget, {
      opacity: 0.8,
      scale: 1,
      duration: 0.5,
      ease: "Power3.inOut"
    });
  };

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
          <Link
            onMouseEnter={e => handleHoverVideo(e)}
            onMouseLeave={e => handleHoverVideoLeave(e)}
            to={`/films/${url}`}
          >
            <ReactPlayer
              loop={true}
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
