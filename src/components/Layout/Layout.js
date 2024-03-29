// import React, { useRef, useState } from "react"
// import ReactPlayer from "react-player"
import React from "react"
import "../../styles/index.scss"
import Header from "../Header"
import Footer from "../Footer"

import LayoutWrapper from "./elements"

const Layout = ({
  isBlack,
  isShy,
  canGoBack,
  footerChildren,
  isContact,
  isHome,
  children,
}) => {

  // const [isPlaying, setIsPlaying]  = useState(false)
  // const poster = useRef(null)
  // const video = useRef(null)
  // const playVideo = () => {
  //   poster.current.style.opacity = 0
  //   setTimeout(() => {
  //     poster.current.style.zIndex = -1
  //   }, 300)
  //   setIsPlaying(true)
  // }

  return (
    <LayoutWrapper isBlack={isBlack}>
      {/* <div className='player-wrapper'>
        <button ref={poster} tabIndex={0} className="player-button" onClick={playVideo}>
          <picture className="image" >
            <img
              alt={'Bilal El Kadhi'}
              src={'/poster.jpg'}
            />
            <img
            className="play"
              alt={'Play'}
              src={'/play_black.png'}
            />
          </picture>
        </button>
        <ReactPlayer
          ref={video}
          className="react-player"
          url={'/le_livre_blanc.webm'}
          width='100%'
          height='100%'
          playing={isPlaying}
          loop={true}
          controls={true}
          muted={false}
        />
      </div> */}
      <Header
        isShy={isShy}
        canGoBack={canGoBack}
        isBlack={isBlack}
        isContact={isContact}
        isHome={isHome}
      />
      {children}
      {<Footer isBlack={true} canGoBack={canGoBack} children={footerChildren} />}
    </LayoutWrapper>
  )
}

Layout.defaultProps = {
  isBlack: false,
  isShy: false,
  headerChildren: null,
  footerChildren: null,
  children: null,
  isHome: false
}

export default Layout
