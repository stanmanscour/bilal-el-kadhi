import React from 'react'
import { navigate } from '@reach/router'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import HeaderWrapper from './elements'

const Header = ({
  canGoBack,
  isBlack,
  isAll,
  isShy,
  contentTitle,
  isHome,
  isContact
}) => {
  const goBack = e => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <HeaderWrapper>
      {canGoBack ? (
        <HeaderWrapper.BackLink href="#" isBlack={isBlack} onClick={goBack}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              filllrule="evenodd"
              clipRule="evenodd"
              d="M5.6526 4.92587L9.85292 0.691818L9.16662 0L4.9663 4.23405L0.833383 0.0679428L0.147077 0.759761L4.27999 4.92587L0 9.24024L0.686306 9.93206L4.9663 5.61769L9.31369 10L10 9.30818L5.6526 4.92587Z"
              fill="black"
            />
          </svg>
        </HeaderWrapper.BackLink>
      ) : (
        ''
      )}
      {!isShy && (
        <HeaderWrapper.NavDesktop isHome={isHome} isBlack={isBlack}>
          {(isHome || isAll) && (
            <li>
              <AniLink activeClassName="active" to="/contact">
                Contact
              </AniLink>
            </li>
          )}
          {isContact && (
            <li>
              <AniLink activeClassName="active" to="/">
                Images
              </AniLink>
            </li>
          )}
          {isHome && (
            <li>
              <AniLink activeClassName="active" to="/all">
                View all
              </AniLink>
            </li>
          )}
          {isAll && (
            <li>
              <AniLink activeClassName="active" to="/">
                Slideshow
              </AniLink>
            </li>
          )}
        </HeaderWrapper.NavDesktop>
      )}
      {contentTitle && (
        <HeaderWrapper.Title isBlack={isBlack}>
          {contentTitle}
        </HeaderWrapper.Title>
      )}
    </HeaderWrapper>
  )
}

export default Header
