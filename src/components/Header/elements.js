import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from "gatsby";
import THEME from "../../styles/theme";

const HeaderWrapper = styled.header`
  z-index: 5;
  position: fixed;
  top: 25px;
  left: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${THEME.TabletMin} {
    top: 10px;
    left: 10px;
    right: 10px;
  }
`;

HeaderWrapper.BackLink = styled.a`
  text-decoration: none;
  color: ${THEME.colors.grey};
  text-transform: uppercase;
  font-family: ${THEME.primaryFontFamily};
  font-size: 20px;
  font-weight: ${THEME.mediumFontWeight};

  &:hover {
    cursor: pointer;
    color: ${({ isBlack }) => (isBlack ? "white" : "black")};
  }
`;

HeaderWrapper.Title = styled.h1`
  color: ${({ isBlack }) => (isBlack ? "white" : "black")};
  text-transform: uppercase;
  font-family: ${THEME.primaryFontFamily};
  font-size: 20px;
  font-weight: ${THEME.mediumFontWeight};
`;

HeaderWrapper.Logo = styled(AniLink)`
  text-decoration: none;
  width: 150px;

  h1 {
    margin: 0;
    color: ${({ isBlack }) => (isBlack ? "white" : "black")};
    text-transform: uppercase;
    font-family: ${THEME.primaryFontFamily};
    font-size: 20px;
    font-weight: ${THEME.mediumFontWeight};
  }
`;

HeaderWrapper.NavDesktop = styled.ul`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;

  @media ${THEME.TabletMin} {
    padding-right: 150px;
    justify-content: center;
  }

  li {
    margin-right: 8px;
    margin-left: 8px;
  }

  a {
    font-family: ${THEME.primaryFontFamily};
    font-size: 19px;
    text-transform: uppercase;
    text-decoration: none;
    color: ${THEME.colors.grey};

    &:hover {
      color: ${({ isBlack }) => (isBlack ? "white" : "black")};
    }

    &.active {
      color: ${({ isBlack }) => (isBlack ? "white" : "black")};
      font-style: italic;
    }
  }
`;

export default HeaderWrapper;
