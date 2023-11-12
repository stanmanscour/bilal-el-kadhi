import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import { Link } from "gatsby"
import THEME from "../../styles/theme"

const HeaderWrapper = styled.header`
  z-index: 5;
  position: fixed;
  top: 25px;
  left: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  @media ${THEME.TabletMin} {
    top: 10px;
    left: 10px;
    right: 10px;
  }
`

HeaderWrapper.BackLink = styled.a`
  text-decoration: none;
  color: ${THEME.colors.grey};
  text-transform: uppercase;
  font-family: ${THEME.primaryFontFamily};
  font-size: 17px;
  font-weight: ${THEME.boldFontWeight};

  &:hover {
    cursor: pointer;
    color: ${({ isBlack }) => (isBlack ? "white" : "black")};
  }

  @media ${THEME.TabletMin} {
    font-size: 20px;
  }
  svg {
    width: 13px;
    height: 13px;
    path {
      fill: ${({ isBlack }) => (isBlack ? "white" : "black")};
    }
  }
`

HeaderWrapper.Title = styled.h1`
  color: ${({ isBlack }) => (isBlack ? "white" : "black")};
  text-transform: uppercase;
  font-family: ${THEME.primaryFontFamily};
  font-size: 17px;
  font-weight: ${THEME.boldFontWeight};

  @media ${THEME.TabletMin} {
    font-size: 20px;
  }
`

HeaderWrapper.Logo = styled(AniLink)`
  text-decoration: none;
  width: 200px;

  h1 {
    margin: 0;
    color: ${({ isBlack }) => (isBlack ? "white" : "black")};
    text-transform: uppercase;
    font-family: ${THEME.primaryFontFamily};
    font-size: 17px;
    font-weight: ${THEME.boldFontWeight};

    @media ${THEME.TabletMin} {
      font-size: 20px;
    }
  }
`

HeaderWrapper.NavDesktop = styled.ul`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;

  @media ${THEME.TabletMin} {
    justify-content: space-between;
  }

  li {
    margin-right: 8px;
    margin-left: 8px;
  }

  a {
    font-family: ${THEME.primaryFontFamily};
    font-weight: ${THEME.boldFontWeight};
    font-size: 17px;
    text-transform: uppercase;
    text-decoration: none;
    ${({ isHome }) =>
      isHome ? `color: black;` : `color: black;`}


    &.active {
      color: ${({ isBlack }) => (isBlack ? "white" : "black")};
    }

    @media ${THEME.TabletMin} {
      font-size: 20px;
    }
  }
`

export default HeaderWrapper
