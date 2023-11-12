import React from "react"
import Vimeo from '@u-wave/react-vimeo'

const VimeoPlayer = ({ url, fullscreen = false, controls }) => {
  return (
    <Vimeo
      className="vimeo"
      video={url}
      autoplay
    />
  )
}

export default VimeoPlayer
