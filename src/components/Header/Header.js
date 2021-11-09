import React from "react"
import { navigate } from "@reach/router"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

import HeaderWrapper from "./elements"
// import { useEffect } from "react"

const Header = ({ canGoBack, isBlack, isShy, contentTitle, isHome }) => {
  const goBack = e => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <HeaderWrapper>
      {canGoBack ? (
        <HeaderWrapper.BackLink href="#" isBlack={isBlack} onClick={goBack}>
          BACK
        </HeaderWrapper.BackLink>
      ) : ''}
      {/* {!isShy && (
        <HeaderWrapper.NavDesktop isHome={isHome} isBlack={isBlack}>
          <li>
            <AniLink activeClassName="active" to="/prints">
              Prints
            </AniLink>
          </li>
          <li>
            <AniLink activeClassName="active" to="/films">
              Films
            </AniLink>
          </li>
        </HeaderWrapper.NavDesktop>
      )} */}
      {contentTitle && (
        <HeaderWrapper.Title isBlack={isBlack}>
          {contentTitle}
        </HeaderWrapper.Title>
      )}
    </HeaderWrapper>
  )
}

export default Header
