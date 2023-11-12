import React from "react"
import ReactPlayer from "react-player"

const VimeoPlayer = ({ url, fullscreen = false, controls }) => {
  return (
    <ReactPlayer
      className="vimeo"
      width="100%"
      height="100%"
      playing={true}
      controls={controls}
      url={url}
    />
  )
}

export default VimeoPlayer
